# Javascript außerhalb des Browsers: Einführung in die Verwendung von Node.js

Zur Interpretation und zum Ausführen von *Javascript*-Anwendungen werden im Browser die *Javascript Engine* und -*Runtime* verwendet. Auch außerhalb des Browser-Kontexts können Anwendungen auf der Basis von *Javascript* entwickelt werden. Eine Möglichkeit dazu stellt die *Node.js*-Entwicklungsumgebung dar. Diese basiert auf Googles *V8*-Engine, der *Javascript Runtime* aus dem *Chrome*-Browser. Die Nutzung von *Node.js* ermöglicht es, z.B. Server-seitige Komponenten einer Web-Anwendung unter Verwendung der selben Technologien zu implementieren, die auch für die Gestaltung der Browser-seitigen Client-Anwendungen genutzt werden. In der Regel wird Node.js verwendet, um [Konsolenanwendungen](https://en.wikipedia.org/wiki/Console_application) zu implementieren, also Programme zu entwickeln, die statt mit einer graphische Benutzeroberfläche über textbasierte Ein- und Ausgabe gesteuert werden. Dies umfasst häufig die bereits genannten Server-Anwendungen, die auf Rechnern ohne graphische Ausgabemöglichkeiten (Monitore) betrieben werden. In Kombination mit bekannten Web- bzw. Browser-Technologien kann *Node.js* aber auch als Plattform für lokale, graphische Desktop-Anwendungen verwendet werden. Ein Beispiel für ein entsprechendes *Framework* ist [Electron](https://electronjs.org/), mit dem u.a. die Entwicklungsumgebungen [Visual Studio Code](https://code.visualstudio.com/) oder [Atom](https://atom.io/) entwickelt werden. In diesem Kapitel wird nicht auf die Entwicklung solcher GUI-Anwendungen eingegangen. Generell sollte bei der Verwendung von Webtechnologien als Anwendungsplattform stets abgewogen werden, ob eine Desktop-Anwendung tatsächlich [notwendig ist](https://youmightnotneedelectron.com/) bzw. ob diese nicht effektiver und effizienter mit anderen Programmiersprachen und *Frameworks* entwickelt werden könnte.

## Die Node.js-Umgebung

Die Node.js-Umgebung kann von [dieser](https://nodejs.org/en/) Webseite heruntergeladen werden. Es existieren Pakete für alle gängigen Betriebssysteme. Installiert werden verschiedene Komponenten: Die *Javascript Engine*, die Laufzeitumgebung mit vorgegebenen Objekten und Modulen, ein Paketmanager zur Installation weiterer Module sowie eine Reihe von Programmen ("Konsolenanwendungen"), mit denen die installierten Bestandteile gesteuert werden können. 

### Die Javascript-Engine

Die *Javascript Engine* kann nach der Installation von *Node.js* über das Kommandozeilenprogramm `node` gestartet werden. Grundsätzlich gibt es dabei zwei Verwendungsmöglichkeiten. Sie können die *Engine* ohne weitere Parameter starten, um diese als REPL-Umgebung, äquivalent zur der bekannten Browser-Konsole, zu verwenden. In diesem Modus können Sie Javascript-Anweisungen eingeben und direkt von der *Engine* interpretieren lassen. Eine zweite Möglichkeit besteht darin, dem `node`-Programm beim Aufruf eine Datei als Parameter zu übergeben (z.B. `node index.js`). Die *Engine* wird daraufhin die übergebene Datei (diese sollte aus Javascript-Anweisungen bestehen) zeilenweise interpretieren. Das Verhalten entspricht dabei dem aus dem Browser bekannten Ablauf. Anders als im Browser können `node` jedoch nicht mehrere Dateien übergeben werden. Inhalte aus separaten Dateien oder Modulen müssen in der ursprünglich an die *Engine* übergebenen Datei referenziert werden (Vgl.: Modularisierung). 

### Die Laufzeitumgebung

Ähnlich wie die Javascript-Umgebung im Browser liefert auch *Node.js* eine Reihen von APIs mit, die zur Entwicklung eigener Anwendungen verwendet werden können. Eine Übersicht über die bereitgestellten APIs finden Sie [hier](https://nodejs.org/api/). Mit Ausnahme einiger weniger Überschneidungen, wie z.b. dem `Console`-Objekt, dienen die APIs der *Node.js*-Laufzeitumgebung jedoch grundsätzlich anderen Zielen als die aus dem Browser-Kontext bekannten Web-APIs. Während Sie im Browser hauptsächlich mit dem DOM, den multimedialen HTML-Komponenten wie *Canvas*- oder Video-Elementen oder den bereitgestellten AJAX-Funktionalitäten gearbeitet haben, erlauben Ihnen die Node.js-APIs z.B. den Zugriff auf das lokale Dateisystem ([`File System`](https://nodejs.org/api/fs.html)) oder die Implementierung grundsätzlicher HTTP-Funktionalitäten ([`http`](https://nodejs.org/api/fs.html)). Zusätzlich zu den APIs der Laufzeitumgebung existiert ein großes Angebot an weiteren Bibliotheken oder *Frameworks*, die zusammen mit *Node.js* eingesetzt werden können. Der Zugriff auf bzw. die lokale Installation dieser Bibliotheken erfolgt in der Regel über den Paketmanager `npm`.

### Der Paketmanager NPM

Zahlreiche Bibliotheken und *Frameworks* für den Einsatz mit *Node.js* (und zum Teil auch für andere Javascript-Kontexte) werden über den Paketmanager `npm` angeboten. Mit der Installation von *Node.js* wird dieses Werkzeug auf Ihrem Rechner bereitgestellt und kann, unter Windows z.B. im *Node.js command prompt*, genutzt werden. `npm` greift auf ein öffentliches *Repository* an Bibliotheken und *Frameworks* zurück, die von Dritten bereitgestellt werden. Dieses Repository kann auf der [Webseite](https://www.npmjs.com/) des Paketmanagers durchsucht werden. Der Einsatz des *Tools* erspart Ihnen als Entwicklerin oder Entwickler die manuelle Installation einzelner Bibliotheken. Stattdessen erfolgt die Integration durch `npm` und den Namen bzw. *Identifier* der Bibliothek: `npm install NAME_DER_BIBLOTHEK`. `npm` lädt automatisch die Dateien herunter, die zur angegebenen Bibliothek gehören und speichert diese im aktuellen Verzeichnis im Unterordner `node_modules`. Anschließend können Sie die installierten Funktionalitäten in Ihrer Anwendung verwenden (Vgl.: Modularisierung). Der Vorteil gegenüber einer manuellen Installation besteht darin, dass auch Abhängigkeiten zwischen den Bibliotheken aufgelöst werden. D.h., dass `npm` automatisch alle Dateien/Bibliotheken herunterlädt, die zur Verwendung der eigentlich angegebenen Bibliothek notwendig sind. Dies ist in sofern wichtig, da zwischen den per `npm` bereitgestellten Bibliotheken häufig solche Abhängigkeiten bestehen (Vgl. ["Top 1000 most depended-upon packages"](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491#file-01-most-dependent-upon-md)). 

## Eigene Anwendungen mit Node.js entwickeln

Die Entwicklung von *Node.js*-Anwendungen unterscheidet sich im Kern nicht wesentlich von der bereits bekannten Entwicklung von Browser-basierten Javascript-Anwendungen: Der Quellcode des Programms wird in einer oder mehrerer Dateien (mit der Endung `*.js`) erstellt. Statt den Code durch die Verlinkung innerhalb eines HTML-Dokuments und dessen anschließendem Laden durch einen Browser zu starten, wird die erstellte Quellcode-Datei als Parameter an `node` übergeben:

Ein einfaches *Node.js*-Programm kann aus einer Datei `time.js` mit diesem Inhalt bestehen:

```javascript
function printTime() {
	let time = new Date().toISOString();
	console.log(time);
}

printTime();
```

Beim Aufruf der Datei per `node time.js` in der Kommandozeile wird das aktuelle Datum ausgegebenen, z.B. so:

```
2019-01-11T10:48:42.762Z
```

Unter Node.js erfolgt die Ausgabe des `console.log`-Befehls auf der [Standardausgabe](https://en.wikipedia.org/wiki/Standard_streams) Ihres Betriebssystems (`stdout`). In der Regel ist dies die Kommandozeile.

### Ein- und Ausgabe

In der Regel besitzen *Node.js*-Anwendungen keine graphischen Benutzeroberflächen. Die Ein- und Ausgabe von Daten erfolgt über die Kommandozeile oder das Dateisysteme. Dazu steht Ihnen neben dem `console`-Objekt. Für die Eingabe steht u.A. die [`readline`](https://nodejs.org/api/readline.html)-API zur Verfügung. Anders als im Browser können Sie mit Node.js auch auf das lokale Dateisystem zugreifen und z.B. Inhalte aus Dateien auslesen oder in diese schreiben (Vgl. [`fs`](https://nodejs.org/api/fs.html)). 

Über das [`process`](https://nodejs.org/api/process.html)-Objekt, das Ihnen Zugriff auf den Betriebssystemprozess bietet, in dem Ihr *Node.js*-Programm ausgeführt wird, können Sie auf die zusätzlichen Kommandozeilenparameter zugreifen, die beim Aufruf des Programms übergeben wurden. Der Zugriff erfolgt über die Eigenschaft `argv`, einem Array mit allen Parametern. Die ersten beiden Parameter verweisen dabei immer auf die *Node.js Runtime* selbst und die aufgerufene Datei. ZUsäzliche Parameter finden sich ab Index `2`. Wird ein *Node.js*-Programm mit diesem Aufruf gestartet:

`node index.js hello world`

beinhaltet das Array `process.argv` zur Laufzeit die Werte:

`['$PFAD_ZUM_NODE_PROGRAMM', '$PFAD_ZUR_INDEX_JS_DATEI', 'hello', 'world']`.

Parameter werden in der Regel durch Leerzeichen getrennt. Wenn Sie Leerzeichen-getrennte Strings (z.B. *Hello World*) als einen zusammenhängenden Parameter übergeben wollen, können Sie diese durch Anführungszeichen *escapen*. 

### Import von APIs

Sowohl die internen APIs der *Node.js*-Umgebung als auch die externen, per `npm` installierten Bibliothek müssen vor der Verwendung in Ihrem *Node.js*-Programm importiert werden. Dies geschieht durch die globale `require`-Methode, hier am Beispiel der *File System*-API:

```javascript 
// Import der File System-API (fs)
const fs = require("fs"); 

// Verwenden der API zum synchronen Einlesen des Inhalt der Datei 
// "helloworld.txt" im Wurzelverzeichnis des Node.js-Programms
let fileContent = fs.readFileSync("helloworld.txt")
```

### Modularisierung

Wie auch bei den Browser-basierten Anwendungen sollten Sie *Node.js*-Anwendungen möglichst modularisiert gestalten. D.h., dass Sie z.B. unterschiedliche Funktionalität in unabhängigen Komponenten der Anwendung implementieren und diese - soweit möglich - auch auf separate Dateien aufteilen. *Node.js*  unterstützt dabei ein Modul-Konzept, das sich vom bisher verwendeten *Revealing Module Pattern* unterscheidet. Zentraler Baustein für die modularisierte Implementierung von *Node.js*-Anwendungen ist die `require`-Funktion, mit deren Hilfe Inhalte aus anderen Dateien importiert werden können.

**require** 

Beim Aufruf der `require`-Funktion wird ein Parameter übergeben. Dieser verweist entweder auf eine der API-Module (Vgl. `fs`), eine per `npm` installierte Bibliothek oder eine selbst erstellte *Javascript*-Datei, die über einen relativen Pfad (z.B. `./my-module.js`) referenziert wird. Beim Aufruf der Methode läuft der folgende Prozess ab:

- Node.js erstellt eine leere Funktion, die in etwa so aussieht:

``` javascript
(function(exports, require, module, __filename, __dirname) {
});
```

- Der Inhalt der referenzierten Datei wird als Rumpf der erstellten Methode eingesetzt
- Der so zusammengesetzte *function wrapper* wird ausgeführt
- Die `require`-Methode gibt die Eigenschaft `exports` des `module`-Parameters zurück

Innerhalb Ihrer ausgelagerten Datei können Sie auf den *module*-Parameter zugreifen, um die öffentliche Schnittstelle Ihres Moduls zu definieren (Vgl.: `that`-Objekt im  *Revaling Mo^dule Pattern*). Betrachten Sie dazu das folgenden Beispiel:

In einer separaten Datei `log.js` implementieren wir ein Modul für die Ausgabe von Inhalten auf der Konsole:

```javascript
function getTimestamp() {
	let timestamp = new Date().toISOString();
	return timestamp;
}

function log(msg) {
	let currentTime = getTimestamp(),
	logString = currentTime + ":" +"\t" + msg;
	console.log(logString)
}
```

Das Modul besteht aus der `log`-Methode zur Ausgabe eines Strings mit vorangestellten *Timestamp*. Der *Timestamp* wird in einer separate Methode `getTimestamp` erstellt. In unserem Hauptprogramm benötigen wir die Log-Funktionalität und wollen die Datei `log.js` daher über die `require`-Methode importieren. Vorher erweitern wir das Modul um eine entsprechende Export-Anweisung:

```javascript 
function getTimestamp() {
	let timestamp = new Date().toISOString();
	return timestamp;
}

function log(msg) {
	let currentTime = getTimestamp(),
	logString = currentTime + ":" +"\t" + msg;
	console.log(logString)
}

module.exports = log;
```

Wir überschreiben hier die Eigenschaft `module.exports` mit einer Referenz auf die `log`-Funktion. Diese wird beim Aufruf der `require`-Funktion nun zurückgegeben. Aufgrund des bekannten *Closure*-Prinzips kann die Modul-interne Funktion `getTimestamp` weiterhin von `log` aufgerufen werden. Nach außen (als öffentliche Schnittstelle des Moduls) wird jedoch nur die Referenz auf die `log`-Funktion kommuniziert.

In einer anderen Datei unseres Programms können wir das erstellte Modul nun importieren und verwenden:

```javascript
const log = require("./log.js"); // Wichtig: Relativer Pfad zur Datei

// In der Konstante wird nun die log-Funktion referenziert, die wir als öffentliche Schnittstelle aus unserem Modul herausgegeben haben:

log("Hello World"); // Gibt aus: 2019-01-11T10:59:40.617Z:       Hello World
```

Natürlich können Sie auch mehr als ein Funktion aus einem Modul veröffentlichen, in dem Sie statt einer direkten Referenz auf eine einzelne Methode ein Objekt mit mehreren Methoden oder einen *function constructor* herausgegeben.

## Übungsaufgaben

### Hello World

[Laden](https://nodejs.org/en/download/) Sie die passende Version von *Node.js* für Ihr Betriebssystem herunter und installieren Sie die Umgebung auf Ihrem Rechner. Erstellen Sie eine neue *Javascript*-Datei, die den String "Hello World" auf der Konsole ausgibt. Starten Sie die *Node.js Engine* und übergeben Sie die erstellte Datei als Parameter.

### Parameter

Schreiben Sie ein *Node.js*-Programm, das beim Aufruf zwei Zahlen (`Number`) als Parameter (Vgl.: [`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv)) übergeben bekommt und die Summe, das Produkt sowie das Maximum der beiden Werte zurückgibt.

### Textverarbeitung

Schreiben Sie ein *Node.js*-Programm, das den Inhalt einer als Parameter übergebenen Textdatei einliest und ausgibt, wie viele Zeichen bzw. Wörter vorhanden sind sowie die 10 häufigsten Wörter der Datei geordnet auflistet.

### Modularisierung

Extrahieren Sie die Funktionalität aus der vorherigen Aufgabe ("Textverarbeitung") in ein separates Modul. Importieren Sie dieses anschließend über die `require`-Funktion in das ursprüngliche Programm.