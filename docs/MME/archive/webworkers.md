# Nebenläufigkeit im Browser: Webworker verstehen und einsetzen

Auch im Rahmen von Webanwendungen kann es notwendig sein, zeitaufwendige Operationen durchzuführen. Dabei kann es sich z.B. um Bildanalysen oder -Modifikationen, Syntax-Highlighting oder Rechtschreibkorrekturen handeln.  Nicht immer ist es dabei möglich, die Aufgaben auf die server-seitige Anwendungskomponenten zu verlagern. Werden die Aktionen lokal durchgeführt, kann es zu einer Blockierung des *UI threads* und damit zu einer Verhinderung der Weiternutzung durch den Anwender kommen. In diesem Kapitel lernen Sie mit der *Webworker API* eine Möglichkeit kennen, nebenläufige Programmierung zur Lösung dieser Probleme zu verwenden.

## Der UI-Thread

Als *UI Thread* oder [*Main Thread*](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread) wird der Prozess bezeichnet, in dem eine Webanwendung im Browser abläuft. Der gesamte Javascript-Kontext einer Webseite wird dabei in einem einzelnen *Thread* ausgeführt. Hier werden die Ereignisse des [*Event loop*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop) verarbeitet, Aktualisierung des Layouts bzw. DOMs vorgenommen und Operationen des *Garbage collectors* ausgeführt. In der Regel wird der von Ihnen verfasste Programmcode - beim Start der Anwendung oder im Rahmen späterer Ereignisverarbeitung - über den *Event loop* verarbeitet. Dabei verwendet Javascript das sogenannte *Run-to-completion*-Prinzip: Ein *Event* wird vollständig bearbeitet, bevor der nächste *Callback* in der *Queue* aufgerufen wird.[^1] Wird im Rahmen der Ereignisverarbeitung eine zeitaufwendige Operation durchgeführt, kommt es daher zwangsläufig zu einer Blockierung des *UI threads*. Der Browser kann währenddessen nicht mehr auf Eingaben des Nutzenden reagieren und Ihre Anwendung selbst kann in diesem Zeitraum  nicht mehr durch den Nutzenden verwendet werden. Die Blockierung des *Threads* wird dem *User* dabei durch eingebaute Funktionen des Browser angezeigt, die u.a. auch das Beenden des ausgeführten Skripts erlauben (Vgl.: [*Warning Unresponsive script* (Mozilla Support)](https://support.mozilla.org/en-US/kb/warning-unresponsive-script)). Versuchen Sie unbedingt, eine Blockierung des *UI Threds* zu vermeiden und sorgen Sie dafür, dass Ihre Anwendung sich stets responsive gegenüber den Eingaben des Nutzenden verhält. Schaffen Sie es nicht, eine entsprechende *User Experience* zu kreieren, kann dies Schlimmstenfalls zu einem Abbruch der Verwendung Ihrer Anwendung führen. Zur Lösung einiger der Problemfälle in diesem Kontext, erlauben *Web workers* Ihnen, komplexe Operationen außerhalb des *UI Threads* durchzuführen. Trotz einiger Einschränkungen, wie z.B. der fehlenden Möglichkeit, über den *Worker* auf das DOM zuzugreifen, sollte die *Webworker API* stets das Mittel der Wahl zur responsiven Gestaltung Ihrer Programmlogik sein.

## Die Webworker-API

Grundlage der *Webworker API* ist das [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker)-Objekt, das einen Hintergrund-*Thread* repräsentiert. Die Funktionalität, die parallel zum Rest der Anwendung ausgeführt werden soll, wird in einer zusätzlichen Javascript-Datei implementiert und beim Erstellen des `Worker`-Objekts an dieses übergeben. Innerhalb eines *Workers* können die bekannte *APIs* der Javascript-Programmiersprache und des *Browsers* verwendet werden. Auf bestimmte Schnittstellen der *WEB APIs* kann jedoch nicht zugegriffen werden. Im wesentlichen betrifft dies das *DOM* sowie andere *APIs*, die direkt mit dem *User Interface* interagieren (z.B. die *Canvas API*). Eine Liste der verfügbaren *APIs* finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#APIs_available_in_workers). Für viele Anwendungsfälle im Umfeld von *UI*-Operationen sind kombinierten Ansätze denkbar um das Potenzial der *Webworker* zu nutzen, z.B. das Aufteilen von Bildverarbeitungsoperationen in eine logische Komponente im *Worker* in der die übergebene Pixel-Matrix eines Bildes analysiert und modifiziert wird und eine *UI*-Komponenten im *UI Thread*, in der die bearbeitete Pixel-Matrix anschließend als Grundlage von *Canvas*-Operationen verwendet wird.

### Kommunikation

Die Kommunikation zwischen *UI Thread* und *Worker* erfolgt über den Austausch von Nachrichten. Dadurch  können z.B. Parametern bereitgestellt oder die berechneten Ergebnissen veröffentlicht werden. Im *UI Thread* wird dazu die Methode `postMessage` des `Worker`-Objekts verwendet. Innerhalb des *Workers* steht die Methode direkt im globalen Kontext (der sich vom globalen Kontext der übrigen Anwendung unterscheidet) zur Verfügung. Die versendeten Nachrichten werden über *Callbacks* des `message`-Events abgefangen, die im *UI Thread* über die Eigenschaft `onmessage` des `Worker`-Objekts zugewiesen werden können. Im *Worker* selbst wird der entsprechende *Callback* über die direkt verfügbare Eigenschaft `onmessage` gesetzt. Mit der `postMessage`-Methode kann ein Parameter-Objekt übergeben werden. Im entsprechenden *Callback* ist dieses dann über die `data`-Eigenschaft des *Event*-Parameters verfügbar. Die übergebene Nachricht wird kopiert und nicht geteilt. Der *Worker* kann daher auch nicht über übergebene Referenzen auf Teile des *UI Thread* zugreifen. 

!!! warning "UI-Blockade trotz *Worker*"
	Im Kontext der Kommunikation zwischen *UI Thread* und *Worker* ist der Ort und Zeitpunkt der jeweiligen Ereignisverarbeitung zu berücksichtigen. Die `onmessage`-*Callbacks* im inneren des *Workers* werden parallel zum *UI Thread* verarbeitet und blockieren das *User Interface* daher nicht. Die Verarbeitung von Nachrichten aus dem *Worker* heraus (`onmessage`-Callbacks, die im *UI Thread* auf dem `Worker`-Objekt registriert wurden), findet im *UI Thread* statt und kann ggf. zu einer Blockierung des *Threads* führen.

Über die Eigenschaft `onerror` des `Worker`-Objekts kann eine *Callback*-Methode für die Behandlung von Fehlern registriert werden. Diese wird aufgerufen, wenn innerhalb des *Workers* ein Laufzeitfehler auftritt.

Aus dem *UI Thread* heraus kann ein *Worker* über die Methode `terminate` vorzeitig beendet werden. 

#### Strategien

Eine einfache, generische Kommunikationsstrategie für den Einsatz der *Webworker API* könnte entlang der folgenden Phase implementiert werden:

1. Der *Worker* wird im *UI Thread* erstellt.

2. Der *UI Thread* sendet eine Nachricht an den *Worker*, der daraufhin mit der Durchführung der zu parallelisierenden Operation beginnt.

3. Der *Worker* kommuniziert regelmäßig Zwischenstände oder Fortschrittsinformationen über Nachrichten an den *UI Thread*. Dort können diese Informationen zur Information des Nutzenden (z.B. Fortschrittsbalken) verwendet werden.[^2]

4. Der *Worker* kommuniziert das Ende und die Ergebnisse der Operation per Nachricht an den *UI Thread*.

5. Im *UI Thread* werden die Ergebnisse der parallelisierten Operation verarbeitet.

### Strukturierung und Auslagern von Worker-Code

Versuchen Sie, den Quellcode ihrer *Worker*-Skripte möglichst übersichtlich zu gestalten und nutzen Sie dazu die bekannten Strategien, die Sie zur Strukturierung von Javascript-Komponenten kennen. Das Auslagern von Codebestandteilen auf andere Dateien ist dabei nur bedingt möglich. vor allem deshalb, dar *Worker* aktuell nicht als Module ausgeführt werden können, und die Verwendung der `import`-Funktionalität nicht möglich ist.[^3]

Statt dessen können externe Skripte über die Methode [`importScripts`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Importing_scripts_and_libraries) importiert werden. Die Pfade zu den zu importierenden Skripte werden als Parameter übergeben. Der Begriff *Import* wird in diesem Zusammenhang anders als im Kontext der *ES6 Module* verwendet: Die angegebene Skripte werden direkt ausgeführt, globale Objekte, die dabei erzeugt werden, stehen auch im *Worker* zu Verfügung. Die Methode selbst gibt keinen Rückgabewert zurück. Die erstellen globalen Objekte dienen als Bindeglied zwischen *Worker* und importiertem Skript. Das Ausführen der Skripte erfolgt dabei synchron zum *Worker*, d.h. dessen *Thread*, nicht aber der *UI Thread* sind während des Imports blockiert.

## Ein einfaches Beispiel

Die Funktionsweise der *Worker API* wird nun an einem kurzen Beispiel erläutert. Stellvertretend für eine beliebige, zeitaufwendige Operation, die aus dem *UI Thread* ausgelagert werden soll, steht die folgende Methode:

```
function doSomething(target) {
    let result = 0;
    for (let i = 0; i < target; i++) {
        result = result + i / target;
    }
    return result;
}
```

Innerhalb der Methode wird der Zähler der `for`-Schleife bis zu einer vorgegebenen, sehr hohen Grenze hochgezählt. Mit jeder Iteration wird eine mathematische Operation ausgeführt. Die Methode erfüllt keinen besonderen Zweck und dient als Platzhalter für tatsächliche Aufgaben, wie z.B. die Bild- oder Textanalyse. Über den `target`-Parameter kann die *laufzeit* der Methode indirekt angepasst werden.

Die Funktionalität des *Workers* wird in der Datei `worker.js` implementiert. Anschließend kann der *Worker* an einer beliebigen Stelle der Anwendung initialisiert werden. Dazu wird der Pfad (relativ vom Wurzelverzeichnis) zur Skriptdatei angegeben:

```
let worker = new Worker("worker.js");
```

Durch Registrieren einer entsprechenden *Callback*-Methode wird die Verarbeitung von Nachrichten aus dem *Worker thread* vorbereitet:

```
let worker = new Worker("worker.js");
worker.onmessage = function(event) {
	// Auslesen des Nachrichten-Objekts, das der Worker übermittelt hat
    let msg = event.data;
    // Hier werden die Nachrichten des Workers verarbeitet
};
```

Alternativ können die *Callbacks* auch über die bekannte `addEventListener`-Methode registriert werden, die vom `Worker`-Objekt implementiert wird.

Über eine Nachricht wird dem *Worker* das Kommando zum Start der parallelisierten Operation gegeben. Dabei können, wie hier am Beispiel der `target`-Eigenschaft gezeigt, auch notwendige Parameter übergeben werden:

```
let worker = new Worker("worker.js");
worker.onmessage = function(event) {
	// Auslesen des Nachrichten-Objekts, das der Worker übermittelt hat
    let msg = event.data;
    // Hier werden die Nachrichten des Workers verarbeitet
    // ...
};
worker.postMessage({ command: "START", target: TARGET });
```

Der Inhalt des *Worker scripts* schaut in diesem Beispiel so aus:

```
// Callback für Nachrichten aus dem UI Thread
onmessage = function(event) {
	// Auslesen des Nachrichten-Objekts, das der UI Thread übermittelt hat
	let msg = event.data;
	// Falls das "Start"-Kommando übertragen wurde
    if (msg.command === "START") {
        console.log("Starting test in WebWorker ...");
        // ... wird mit dem Ausführen der zu parallelisierenden Funktion begonnen
        let result = doSomething(msg.target);
        // Nach dem Abschluss der Operation wird das Ergebnis an den UI Thread übertragen
        postMessage({
        	type: "RESULT",
            result: result,
        });
    }
}

// Beispielfunktion für zeitaufwendige Operation
function doSomething(target) {
    let result = 0;
    for (let i = 0; i < target; i++) {
        result = result + i / target;

    }
    return result;
}
```

Die ausgelagerte Operation selber wird in diesem Fall durch die oben beschriebene Funktion `doSomething` repräsentiert. Im  `onmessage`-*Callback* werden die Nachrichten des *UI Thread* verarbeitet. Das Ausführen der `doSomething`-Funktion blockiert den *Worker*, nicht aber den *UI Thread*. Im Anschluss an die Durchführung wird das Ergebnis (hier in der lokalen Variable `result`) über die `postMessage`-Methode an den `UI Thread` übertragen und dort in der vorbereiteten *Callback*-Methode verarbeitet.


## Shared Workers

Grundsätzlich können *Worker* nur aus dem Skript heraus verwendet werden, in dem sie erstellt wurden. Mit Hilfe des [`SharedWorker`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Shared_workers)-Konstruktors können geteilte *Webworker* erstellt werden, die von mehreren Komponenten der Anwendung gemeinsam verwendet werden können. Die verwendete *API* unterscheidet sich nur geringfügig von den bereits vorgestellten Konzepten.


## Übungsaufgaben

Erstellen Sie eine einfache Anwendung zu optimierten Darstellung von Javascript-Quellcode mittels Syntax-Highlighting:

- Ermöglichen Sie es dem Nutzenden, beliebig lange Code-Fragmente in ein Textfeld zu kopieren.

- Entwerfen Sie einen *Worker*-Skript, der den Quellcode in einen modifizierten HTML-String transformiert. In diesem String werden [Schlüsselwörter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) und besondere Zeichen der Javascript-Programmiersprache  hervorgehoben.  Aus der Zeile 

``` plain
function run() {
``` 

wird z.B. 

``` plain
<span class="keyword">function</span> run<span class="operator">(</span><span class="operator">)</span> <span class="operator">{</span>
```

- Implementieren Sie im *UI Thread* Ihrer Anwendung einen [Fortschrittsbalken](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), der den Nutzenden über den aktuellen Stand der Transformation informiert.

- Blenden Sie das Textfeld aus und verwenden Sie den im *Worker* erstellten HTML-String zum Erstellen und Anzeigen eines entsprechenden DOM-Elements.

[^1]: Eine kurze Beschreibung der Arbeitsweise der *Javascript Runtime* können Sie [hier](./javascript-browser) nachlesen. Detailtiere Informationen finden Sie im [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).

[^2]: Denken Sie daran, dass die Verarbeitung der Statusaktualisierungen im *UI Thread* erfolgt. Zu häufige Aktualisierungen oder zu aufwendige Darstellung des Fortschritts können den *UI Thread* blockieren und damit die Vorteile des *Workers* zunichte machen.

[^3]: Die *Module*-API wird in Zukunft möglicherweise auch innerhalb der *Webworkers* bereit stehen. Im *Living Standard* der *Web Hypertext Application Technology Working Group* ist bereits eine entsprechende [Unterstützung](https://html.spec.whatwg.org/#creating-a-dedicated-worker) vorgesehen, die aktuell aber noch von keinem großen Browserhersteller umgesetzt wird (Vgl. der entsprechenden Einträge in den *Bugtrackern*: [Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1247687), [Chroium](https://bugs.chromium.org/p/chromium/issues/detail?id=680046), [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/19746498/), [WebKit](https://bugs.webkit.org/show_bug.cgi?id=164860)).