# Javascript im Browser

*Javascript* ist eine **interpretierte** Programmiersprache. Zum Ausführen des Code werden zwei Komponenten benötigt. Dies ist zum einen ein Interpreter (die *Javascript Engine*) und zum anderen eine Laufzeitumgebung. Die *Javascript Engine* ist das Programm, das den *Javascript*-Quellcode interpretiert und ausführt. Die Laufzeitumgebung stellt den Rahmen bereit, in dem die *Engine* arbeiten kann. Zu diesem Rahmen gehören die verschiedenen *Javascript*-APIs, die im Browser z.B. den Zugriff auf den [DOM](../../MME/dom-introduction) oder die Netzwerkkommunikation erlauben.

## Engines und Runtimes
Eine *Javascript Engine* stellt die Implementierung des [ECMAScript](https://www.ecma-international.org/ecma-262/8.0/)-Standards dar. Es existieren verschiedene Implementierung unterschiedlicher Hersteller. Zu den bekanntesten gehört [Google V8](https://v8.dev/), die sowohl im *Chrome*-Browser als auch in *Node.js* verwendet wird oder [Mozilla SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey). Die verschiedenen Laufzeitumgebungen bzw. die dort konkrete Implementierung der bereitgestellten APIs unterscheiden sich von Hersteller zu Hersteller. Diese Unterschiede sind in der Regel jedoch für den praktischen Gebrauch nicht relevant, da einheitliche Standards, z.B. der [DOM](https://dom.spec.whatwg.org/)-Standard der WHATW-Gruppe, als Grundlage dienen.

## Heap, Stack und Event-Loop
Zum Ausführen des Quellcode arbeitet eine *Javascript Engine* mit zwei Speicherbereichen, dem *Heap* und dem *Stack*. Auf dem *Heap* werden Objekte (auch Funktionen sind in Javascript Objekt) abgelegt. Der *Heap* wird durch die *Engine* verwaltet und gepflegt (*Garbage collection*)[^1]. Beim Aufruf einer Funktion wird auf dem *Stack* ein separater *Frame* erzeugt, der Parameter und lokale Variablen beinhaltet. Der *Frame* wird nach dem Beenden der Methode vom *Stack* entfernt. Tritt ein Ereignis ein, werden die auszuführenden *Callback*-Methoden von der Laufzeitumgebung in einer Liste, der *Queue* gespeichert. Mittels der *Event*-Schleife (*Event Loop*)[^2] prüft die Laufzeitumgebung regelmäßig die *Queue* auf unverarbeitete *Callback*-Methoden und gibt diese, beginnend mit der ältesten, an die *Engine* weiter, die die Methode dann in einem eigenen *Stack frame* verarbeitet. Jede Methode wird dabei vollständig ausgeführt, bevor die nächste verarbeitet werden kann. Dieses Verhalten hat den Vorteil, dass *race conditions* weitgehendst ausgeschlossen werden können. Der Arbeitskontext einer aktuell ausgeführten Methode kann nicht durch andere, simultan arbeitende Komponenten der Anwendung manipuliert werden. Gleichzeitig bedeutet dies aber auch, dass die Laufzeitumgebung während der Prozessierung einer Methode auf keine anderen Ereignisse, z.B. Benutzereingaben, reagieren kann. Die Abwicklung von *Events* sollte daher kurz gehalten werden um Probleme wie nicht reagierende Benutzerschnittstellen zu vermeiden. Eine Lösung für komplexere Aufgaben sind [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), die parallel zum eigentlichen Ausführungskontext der Laufzeitumgebung arbeiten und (Zwischen-)Ergebnisse über den *Event Loop* zurück geben können.

## Execution Context

Innerhalb der Laufzeitumgebung wird der *Javascript*-Code in einem abgeschlossenen Kontext ausgeführt. Dieser wird für jedes Browserfenster bzw. *Tab* neu erstellt und dabei von der Laufzeitumgebung mit einer Reihe globaler Variablen befüllt. Über diese Referenzen kann z.B. auf das Fenster (`window`) oder das DOM des dargestellten HTML-Dokuments (`document`) zugegriffen werden. In dem Kontext werden alle *Javascript*-Dateien ausgeführt, die über das HTML-Dokument eingebunden werden. Daher arbeiten dort nicht nur die eigene *Javascript*-Anwendung sondern auch alle importierten Bibliotheken. Auf den Kontext eines Fensters kann grundsätzlich nicht von einem anderen Fenster aus zugegriffen werden. Für Seiten, die über die gleiche *Domain* angeboten werden existieren Möglichkeiten zur [kontextübergreifenden Kommunikation](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).

### Namespacing

Die Verwendung eigener Variablen innerhalb des globalen *Execution Context* des Fensters sollte möglichst gering gehalten werden. Argumente dafür sind z.B. die übersichtliche Gestaltung der eigenen Anwendung auf Code-Ebene, die Vermeidung von versehentlichen Wechselwirkungen zwischen den im Kontext ausgeführten *Javascript*-Komponenten oder das unbeabsichtigte Überschreiben bereits existierender Variablen (Vom Browser bereitgestellte Objekte, wie etwa das `document`-Objekt können in der Regel nicht gelöscht werden). 

Der *Javascript*-Standard definiert keine [Namensräume](https://en.wikipedia.org/wiki/Namespace). Diese Funktion kann aber durch die Verwendung eines *namespace object*  eingeführt werden. Ein einfache Umsetzung dieses Ansatzes besteht aus dem Initialisieren eines globalen Objekts, in dem alle Objekte der eigenen Anwendung als Eigenschaften gespeichert werden. Die Verwendung des globalen Kontext wird dadurch auf ein einzelnes Objekt reduziert:

``` javascript 
// Initialisieren des Namensraums
var myApp = {};

// Anlegen einer Constructor-Funktion im Namensraum
myApp.MyObject = function(id) {
	this.id = id;
}

myApp.MyObject.prototype.getID = function() {
	return this.id;
};
```

Um zu vermeiden, dass das Namensraum-Objekt bei der Verwendung mehrere *Javascript*-Dateien mehrfach angelegt und dadurch überschrieben wird, empfiehlt sich der Einbau einer entsprechenden Prüfung:

``` javascript
var myApp = myApp || {};
```

Dadurch wird die Initialisierung mit dem Objekt-Literal nur dann ausgeführt, wenn in `myApp` noch kein Wert gespeichert ist bzw. die Variable noch nicht definiert ist. In beiden Fällen liefert die Ausführung des Ausdrucks vor `||` den Wert `undefined` zurück.

Durch das Anlegen und direkte Ausführen einer anonymen Funktionen lässt sich auch der komplette Code der eigenen Anwendung in einem separaten [*Scope*](https://en.wikipedia.org/wiki/Scope_(computer_science)) ausführen. Der Rumpf der inneren Methode hat dabei Zugriff auf alle Variablen, die im umschließenden Kontext existieren, also auch auf die als globale Variablen bereitgestellten APIs des Browsers.

``` javascript
(function() {
	// Hier wird der Code der eigenen Anwendung ausgeführt
}());
```

[^1]: Vgl. [Mozilla Developer Network: Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
[^2]: Vgl. [Mozilla Developer Network: Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
