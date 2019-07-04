# Closures: Javascript-Anwendungen mit dem Module-Pattern gestalten

Module sind eine der Möglichkeiten, individuelle Komponenten einer Javascript-Anwendung zu definieren. Anders als etwa Klassen im Kontext der Programmiersprache Java wird das Modulkonzept in Javascript nicht durch den Sprachstandard vorgegeben. Stattdessen existieren verschiedene Muster (*pattern*) und APIs mit deren Hilfe Module aus den vorhandenen Sprachfeatures implementiert werden können. In dieser Lektion lernen Sie mit dem *revealing module pattern* und den *ES6 Modules* zwei dieser Möglichkeiten kennen. Die von allen modernen Browsern unterstützten *ES6 Modules* werden dabei in Zukunft der zentraler Baustein für die im Kurs verwendeten Anwendungen sein.[^1]

## Einleitung

Komplexere Software besteht in der Regel aus verschiedenen Komponenten, die unabhängig voneinander oder gemeinsam arbeiten um die Funktionen des Gesamtsystems bereitzustellen. Eine gute Software-Architektur versucht diesen Ansatz (Vgl. [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)) auf allen möglichen Ebenen umzusetzen. In Javascript sind die Bausteine für die Gestaltung des Codes die Funktionen, Prototypen und Module. Während die ersten beiden Features feste Bestandteile des Sprachstandards sind, werden Module vom Programmierenden durch die Anwendung dieser grundlegenden Sprachfeatures realisiert. Dadurch lassen sich auch in Javascript bekannte Konzepte wie das [*information hiding*](https://en.wikipedia.org/wiki/Information_hiding) realisieren. Wichtigste Voraussetzung für die Implementierung von Modulen sind dabei *Closures* (Funktionseinschluss).

!!! note "Hinweise zur Lektüre"
	Versuchen Sie die Erläuterungen und Beispiele aus dieser Lektion direkt praktisch umzusetzen. Erstellen Sie dazu ein leeres [Projektverzeichnis](./project-directory) und implementieren Sie die vorgestellten Beispiele selbstständig.

## Der Modulbegriff in Javascript

Im Wesentlichen wird durch die Verwendung von Modulen eine bessere Gestaltung der Systemarchitektur erreicht. Module erlauben uns, separierte Bereiche der Software zu definieren, die eine klar definierte Aufgabe zu erfüllen haben. Statt den gesamten Code unserer Anwendung im globalen Kontext der Laufzeitumgebung zu definieren und auszuführen, schaffen wir in sich geschlossene Teilbereiche, die aus dem sie umschließenden *Scope* nicht manipuliert werden können. Diese *Module* sind in der Regel für die Durchführung oder das Bereitstellen von klar definierten Funktionen unserer Software zuständig, z.B. die Anbindung an eine Datenbank oder die Verwaltung der Benutzeroberfläche (*Views*). Eine systematische Trennung von Zuständigkeitsbereichen in Form von Modulen und die klare Definition der Kommunikationsschicht zwischen diesen sorgt für eine verständlichere, robustere, besser wartbare und damit qualitativ hochwertigere Gesamtarchitektur des Systems. 

Im Umfeld von Javascript existieren unterschiedliche Definitionen oder Verwendungen des Modulbegriffs. Wir bezeichnen im Folgenden die unter Verwendung des *Closure*-Prinzip konstruierten Teilkomponenten einer Anwendung als Module. Im Rahmen des [CommonJS-Projektes](https://en.wikipedia.org/wiki/CommonJS), das die Laufzeitumgebung für Javascript-Anwendungen außerhalb des Browsers standardisieren will, existiert eine eigene Definition für die Konstruktion und Verwendung von Modulen, die zum Teil auf APIs und Sprachelementen beruht, die nicht flächendeckend in allen Browsern zur Verfügung stehen. In modernen Browsern können diese *CommonJS*-Module, die auch die Grundlage für die modularisierte Entwicklung von Anwendungen mit der [Node.js](https://nodejs.org/en/)-Umgebung sind, durch den Einsatz von Bibliotheken wie z.B. [browserify](http://browserify.org/) eingesetzt werden. Zusätzlich existiert seit der sechsten Version des *ECMAScript*-Standards eine [Modul-Referenz](https://www.ecma-international.org/ecma-262/6.0/#sec-modules), die 
aktuell von den wichtigsten Browsern implementiert und unterstützt wird ([hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility) am Beispiel des `import`-Befehls).

## Closures

Grundbaustein für die Konstruktion von Modulen sind die Funktionseinschlüsse. Funktionen und deren umschließender lexikalischer *Scope* bilden in Javascript sogenannte [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). Die Besonderheit dieser Konstrukte lässt sich an den folgenden Punkten festhalten:

- Eine Funktion hat immer Zugriff auf alle anderen Funktionen und Variablen, die im umschließenden *Scope* erstellt wurden

- Eine Funktion kann lokale Variablen und innere Funktionen enthalten

- Beim Aufruf einer Funktion werden alle lokalen Variablen und innere Funktionen neu erstellt

- Der innere *Scope* einer Funktion bleibt auch nach der Ausführung bestehen

- Eine Funktion kann Referenzen auf diesen inneren, die Ausführung überdauernden *Scope* nach außen geben

Diese Punkte lassen sich leicht am folgenden Beispiel verdeutlichen:

``` javascript
function createCounter() {
	var count = 0;

	function increase() {
		count++;
		return count;
	}

	return increase;
}

var counter = createCounter();
/*
 * Erhöht den inneren Zähler des Closures um den Wert 1 
 * und gibt die aktuelle Belegung zurück
 */
counter();
``` 


Im Beispiel wird ein Zähler `count` als lokale Variable in einer Funktion eingeschlossen. Die Variable überdauert den Zeitpunkt der Ausführung (den Aufruf der Funktion) und ist aus dem umschließenden Kontext der Anwendung nicht zugänglich und damit nicht manipulierbar. Der Zugriff erfolgt nur über die innere Funktion `increase`. Diese wird als Funktionsreferenz aus der Methode zurückgegeben und kann an andere Stelle gespeichert und aufgerufen werden. Dadurch wird eine Schnittstelle zwischen dem inneren Bereich und dem Rest der Anwendung erstellt und somit ein indirekter, abgesicherter Zugriff auf den Zähler ermöglicht. Mit der Hilfe von *Closures* lässt sich dadurch das aus Java bekannte Konzepte der privaten und öffentlichen *Sichtbarkeit* (`private` und  `public`) zur Umsetzung von *information hiding* auch in Javascript verwenden. Zu beachten ist dabei, dass es sich nur um eine konzeptuelle Ähnlichkeit handelt und nicht um ein identisches Sprachfeature.

### Privileged Functions
Douglas Crockford bezeichnet Methoden die zwischen dem inneren Bereich eines *Closures* und dem Rest der Anwendung vermitteln als *privileged functions*[^2]. Diese zeichnen sich dadurch aus, dass sie a) innere Methoden des *Closures* verwenden und b) als Referenz aus dem *Closure* zurückgegeben werden. Das oben aufgeführte Beispiel lässt sich erweitern, um dieses Prinzip zu verdeutlichen. Die in Form eines [Literals](https://en.wikipedia.org/wiki/Literal_(computer_programming)) zurückgegebene Funktion ist privilegiert, weil sie die nicht nach außen hin sichtbaren Bereiche des *Closures* verwendet. In wie weit diese Bezeichnung oder Unterscheidung notwendig ist, kann diskutiert werden.

``` javascript
function createCounter() {
	var count = 0;

	function increase() {
		count++;
	}

	return function() {
		increase();
		return count;
	};
}
```  

### Einfache Module mit anonymen Funktionen

Auf der Basis des *Closure*-Prinzip lassen sich nun erste Module konstruieren. Im einfachsten Fall sind dies anonyme, direkt ausgeführte Funktionen:
``` javascript
(function() {

	// Innerer, abgesicherter Bereich des Closures

}());
```

Die anonyme Methode wird direkt ausgeführt. Im Inneren kann auf den umschließenden Kontext, also z.B. auch auf globale Objekte wie die vom Browser bereitgestellten API-Referenzen (Vgl. `document`-Objekt) zugegriffen werden. Der innere Bereich ist aus der übrigen Anwendung nicht einsehbar, bzw. kann von dort nicht manipuliert werden.

In der Regel werden Module nicht vollständig losgelöst vom Rest der Anwendung verwendet. Für die Verknüpfung von Modulen mit dem Rest der Anwendung ergeben sich verschiedene Möglichkeiten. Die einfachste Art und Weise ist dabei die Verwendung gemeinsamer, globaler Objekte. Da alle Teilbereiche einer Anwendung auf diese zugreifen können, existiert ein gemeinsamer Bereich in dem unterschiedliche Module oder andere Komponenten der Anwendung Objekte erstellen, verwenden und kommunizieren können. Um auch hier die Prinzipien des *information hidings* sowie des *seperation of concerns* umzusetzen, empfiehlt sich ein Ansatz, bei dem einem Modul keine unnötigen Informationen über den zu verwendenden Kontext mitgeteilt werden. Dies kann z.B. durch die parametrisierte Übergabe eines Kontext-Objekts erfolgen. Über dieses Objekt werden dem Modul Informationen übergeben, die es zum Ausführen seiner Aufgaben benötigt. Zusätzlich können in dem Objekt Referenzen auf die Methoden gespeichert werden, die von außen zugänglich sein sollen:

``` javascript
var myContext = {};

(function(context) {

	function innerFunction() {

	}

	context.entryPoint = innerFunction;
	
}(myContext));

// Aufruf der inneren Modulfunktionen innerFunction
myContext.entryPoint();
```

Beim Erstellen wird dem Modul das außerhalb erstellte Objekt `myContext` als Parameter `context` übergeben. Im Modul selbst wird eine Funktion `innerFunction` erstellt. Diese ist per se nicht von außen erreichbar. Durch die Erweiterung des übergebenen Kontextobjekts (`context`) um eine Referenz `entryPoint` auf diese Methode kann sie indirekt nun auch von außerhalb des Moduls verwendet werden. Der restliche Teil des *Closures* bleibt verborgen.

## Öffentliche Schnittstellen definieren: Das Revealing Module Pattern

Auf der Basis des oben eingeführten, einfachen Musters lässt sich eine komplexere Variante, das sogenannte *revealing module* konstruieren. Diese unterscheidet sich vom vorherigen Ansatz durch die bewusste Konstruktion und Bereitstellung (*revealing*) eines öffentlichen Teilbereichs innerhalb des Moduls. Die Funktion, die zur Erstellung des Moduls eingesetzt wird, liefert nun einen Rückgabewert zurück, der in einer Variable gespeichert wird. Innerhalb der Modulfunktion wird dieser Rückgabewert als Objekt gestaltet, das Referenzen auf diejenigen Bereiche des Moduls beinhaltet, die bewusst dem Rest der Anwendung bzw. des umschließenden Kontext zugänglich gemacht werden sollen. Dadurch lässt sich nun eine stark, dem aus Java als *Sichtbarkeitsbereiche* bekannten Ansatz ähnelnde Aufteilung der Komponenten bzw. des Moduls in einen öffentlichen (`public`) und nicht-öffentlichen (`private`) Bereich realisieren. Hier sehen Sie ein einfaches Beispiel für die Realisierung dieses Konzeptes:

``` javascript
var myModule = (function() {

	function moduleFunction() {

	}

	function publicFunction() {
		return moduleFunction();
	}

	return {
		revealedFunction: publicFunction, 
	};

}());
myModule.revealedFunction();
```

Das Modul wird durch Ausführen der anonymen Funktion erstellt. Im Inneren werden dadurch zwei Funktionen erstellt (`moduleFunction` und `publicFunction`). Schließlich gibt die Funktion ein Objekt zurück, das in der Variable `myModule` gespeichert wird. Das Objekt (hier als Literal definiert) enthält eine Referenz (`revealedFunction`) auf die *Closure*-Methode `publicFunction`. Auf diese Methode kann jetzt von außen über die in `myModule` gespeicherte Referenz zugegriffen werden.

Häufig wird das Objekt, das die Referenz (*Referenzobjekt*) auf den zu veröffentlichenden Teilbereich des Moduls enthält, nicht erst bei der Rückgabe erstellt sondern in einer lokalen Variable des  *Closures* gespeichert und anschließend um die öffentlichen Referenzen ergänzt. Dieses Objekt wird häufig in Anlehnung an das Schlüsselwort `this` mit dem Bezeichner `that` versehen:

``` javascript
var myModule = (function() {

	var that = {};

	function moduleFunction() {

	}

	function publicFunction() {
		return moduleFunction();
	}

	function chainMethod() {
		// do something
		return that;
	}

	that.revealedFunction = publicFunction;
	return that;

}());

myModule.revealedFunction();
```

Durch den Einsatz eines expliziten Referenzobjekts ergeben sich zwei Vorteile. Zum einen wird die Zusammenstellung des Objekts bei komplexeren Modulen übersichtlicher. Zum anderen kann innerhalb des Moduls auf das Referenzobjekt Bezug genommen werden. Das ist z.B. von Vorteil, wenn im Rahmen der veröffentlichten Methoden *chaining* ermöglicht werden soll. [*chaining*](https://en.wikipedia.org/wiki/Method_chaining) bezeichnet in der objektorientierten Programmierung die Verkettung mehrerer Methodenaufrufe auf der Basis derer Rückgabewerte. D.h. eine Methode liefert als Rückgabewert ein Objekt zurück, auf dem die nächste Methode der Verarbeitungskette aufgerufen werden kann. Häufig finden Sie diesen Ansatz bei Komponenten, die eine schrittweise Verarbeitung von Daten oder internen Vorgängen ermöglichen, an dessen Ende die Rückgabe einer aufbereiteten Datenmenge steht. Im *revealing module pattern* kann dies durch die Rückgabe des `that`-Objektes realisiert werden, auf dem dann die nächste, öffentliche Methode aufgerufen werden kann:

``` javascript
var dataProcessor = (function() {

	var that = {},
	currentData,

	function set(data) {
		currentData = data;
		return that;
	}

	function filter() {
		// filter currentData
		return that;
	}

	function sort() {
		// sort currentData
		return that;
	}

	function get() {
		return currentData;
	}

	that.set = set;
	that.filter = filter;
	that.sort = sort;
	that.get = get;
	return that;

}());

var dataSet = [],
filteredAndSortedData = dataProcessor.set(dataSet).filter().sort().get();
```

Inwieweit *chaining* von Methoden ein sinnvolles Muster darstellt, sollte stets im Kontext der Aufgabenstellung abgewogen werden. Eine saubere Implementierung des *patterns* kann zu besser lesbarem und verständlicherem Code bzw. zugänglicheren Schnittstellen führen. Eine fehlerhafte oder nicht-intuitive Implementierung kann jedoch auch Problemen erzeugen. Auf [stackoverflow](https://stackoverflow.com/questions/1103985/method-chaining-why-is-it-a-good-practice-or-not) finden Sie dazu eine interessante Diskussion. Den dort verlinkten Artikel von Martin Fowler können Sie [hier](https://web.archive.org/web/20090604204506/https://martinfowler.com/dslwip/MethodChaining.html) in archivierter Form nachlesen.

### Module wiederverwenden

Module müssen nicht automatisch erstellt werden. Sie können die Funktionen, die zum Erstellen der Module verwendet werden auch in Form von *named functions* erstellen und das Modul zur Laufzeit durch den Aufruf der Funktion erstellen. Nachstehend sehen Sie ein einfaches Beispiel für ein Modul, das zur Verwaltung einer Spardose (engl. *piggy bank*) verwendet wird. Das tatsächliche Modul bzw. der *Closure* wird erst durch den Aufruf der Methode (`var myPiggyBank = PiggyBank();`) erstellt. Auch wenn es sich hier nicht wirklich um eine *constructor function* handelt, hat es sich als *best practice* etabliert, eine solche *Modulfunktione* ebenfalls durch Großschreibung zu kennzeichnen. Beim Erstellen des Moduls ist die Verwendung des `new`-Schlüsselworts weder erforderlich noch vorgesehen. Durch die Verwendung einer *named function* für die Konstruktion des Moduls lassen sich zur Laufzeit mehrere Module auf der Basis der gleichen Funktion erstellen. Im hier gezeigten Beispiel können mehrere Spardosen *repräsentiert* werden.

``` javascript
function PiggyBank() {
  var that = {},
    content = 0;
  
  function add(money) {
    content += money;
  }
  
  function empty() {
    var tmp = content;
    content = 0;
    return tmp;
  }
  
  that.addMoney = add;
  that.emptyBank= empty;
  return that;
}

var myPiggyBank = PiggyBank();
myPiggyBank.addMoney(10);
myPiggyBank.addMoney(20);
myPiggyBank.addMoney(10);

var yourPiggyBank = PiggyBank();
yourPiggyBank.addMoney(10);
```

Eine solche, mehrfache Verwendung der selben Modulfunktion für die Erstellung unabhängiger Module sollte jedoch gut überlegt sein, da sich im direkten Vergleich mit Prototypen Nachteile ergeben. Bei der Erstellung von Modulen wird stets ein *Closure* erzeugt. Alle inneren Methoden oder Variablen werden neu erstellt. Für Objekte, die auf Prototypen basieren, wird nur der spezialisierte Teilbereich, also die Menge an Eigenschaften, die nicht durch die Prototypen-Kette vererbt wird, neu erstellt. Prototypen-Eigenschaften existieren nur einmalig und werden von allen abgeleiteten Objekten geteilt. Module eignen sich daher vor allem für Komponenten der Anwendung, die nur einmalig erstellt und verwendet werden. Sie sollten dort wo nötig und sinnvoll durch prototypisch erstellte Objekte ergänzt werden.

Der oben dargestellt Ansatz lässt sich leicht mit den [*namespace objects*](./javascript-browser) kombinieren um eine zu starke Verwendung des globalen Namensraums zu vermeiden:

``` javascript
var myNamespace = myNamespace || {};

myNamespace.myModule = (function() {
	var that = {};

	// ...

	return that;
});
```

### Vererbung im Revealing Module Pattern

Im Rahmen des *revealing module pattern* ist auch die rudimentäre Vererbung von Funktionen oder Eigenschaften möglich. Dazu wird das Referenzobjekt (`that`) nicht als leeres Objekt erzeugt, sondern auf der Basis eines bestehenden Prototypen konstruiert. Dies ist vor allem dann sinnvoll, wenn die geerbten Funktionalitäten ebenfalls veröffentlicht werden sollen. Häufig ist dies der Fall, wenn das Modul dem Rest der Anwendung als *Observable* zur Verfügung gestellt werden soll. Die Laufzeitumgebung stellt einen globalen Prototypen, das [`EventTarget`](https://developer.mozilla.org/de/docs/Web/API/EventTarget) bereit, das alle notwendigen Funktionen zur Bereitstellung eines *Observable* enthält. Im folgenden Beispiel wird das `that`-Objekt des Moduls auf der Basis diesen Prototypen erstellt. Dadurch werden die bekannten Funktionen, wie z.B. `addEventListener` bereitgestellt und können über das zurückgegebene Referenzobjekt von außerhalb des Moduls verwendet werden. Zusätzlich können die so *geerbten* Methoden auch im Inneren des Moduls (siehe `doStuff`-Methode im Beispiel) verwendet werden. Beachten Sie, dass hier keine Vererbung im klassischen Sinne erfolgt, da nicht das gesamte Modul eine spezialisierte Variante des Ursprungsobjekts (hier `EventTarget`) darstellt, sondern nur das Referenzobjekt (`that`) in einer entsprechenden Beziehung zum Prototypen steht.                    

``` javascript
function Observable() {
  	
  	var that = new EventTarget();

  	function doStuff() {
  		that.dispatchEvent(new Event("stuffDone"));
  	}

  	that.doStuff = doStuff;
  	return that;
}

var myObservable = Observable();
myObservable.addEventListener("stuffDone", function(){});
myObservable.doStuff();
```

## Module in modernen Browsern: ES6-Module

Die aktuellste Möglichkeit, modularisierte Anwendungen für den Browser zu realisieren, stellen die ES6-Module dar. Hierbei handelt es sich um eine direkte in moderne Browser integrierte API zur Definition und Verwendung modulare Javascript-Komponenten. Wesentliche Teile der Modul-Implementierung und -Bereitstellung, die im Rahmen des *revealing module pattern* noch selbst durchgeführt werden mussten, werden hier von eingebauten Funktionen des Browsers übernommen. Grundlagen für diese API ist der entsprechende Teil der [ECMAScript-Spezifikation](https://www.ecma-international.org/ecma-262/9.0/#sec-modules). Gegenüber dem manuellen Ansatz des *revealing module patterns* ergeben sich durch die Verwendung der ES6-Module bestimmte Vor- und Nachteile:

**Nachteile**

- Da ES6-Module bestimmten Sprachelementen und APIs voraussetzten, die nicht in allen Javascript-Umgebungen (z.B. älteren Browsern) verfügbar sind, kann es an solchen Stellen zu Kompatibilitätsproblemen kommen. Die Bausteine des *revealing module patterns* basieren dagegen auf elementaren Möglichkeiten der Javascript-Sprache, die auch in älteren oder speziellen Umgebungen (z.B. *Web Views* älterer Frameworks oder *Embedded*-Geräten) verfügbar sind.
- Der korrekte Umgang mit ES6-Modulen setzt zusätzliches Wissen über die neuen Sprachelemente und den damit verbundenen Syntax von Javascript voraus.

**Vorteile**

- ES6-Module sind weitestgehend mit dem *CommonJS*-Syntax kompatible, der z.B. in der *Node.js*-Umgebung zur Gestaltung von Modulen verwendet wird. Module können zwischen solchen Umgebungen, sofern intern nicht Plattform-spezifische APIs verwendet werden, weitestgehend austauschbar genutzt werden.
- ES6-Module werden über den `import`-Befehl bei Bedarf geladen. Die Javascript-Bestandteile einer Webanwendungen müssen nicht mehr vollständig beim Start der Anwendung - durch entsprechende `<script>`-Tags im HTML-Dokument - eingebunden werden, sondern können zur Laufzeit dort wo nötig geladen und verwendet werden. Die Verwendung von gleichen Modulen an verschiedenen Stellen des Codes wird dabei vom Browser gesteuert und verwaltet.

Für aktuelle, Client-seitige Webanwendungen sollte die Verwendung von ES6-Modulen das Mittel der Wahl sein. Ausnahmen bestehen dann, wenn z.B. *Frameworks* eingesetzt werden, die einen eigenen Modulmechanismus verwenden. Abwärtskompatibilität kann durch die Verwendung des `nomodule`-Attributs des [`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)-Tags sichergestellt werden.

### Grundkonzept

ES6-Module werden in separaten Dateien erstellt. Wird ein Modul innerhalb der Anwendung benötigt, wird der Code der Datei als *Closure* ausgeführt. D.h., von keiner anderen Stelle des Codes kann auf den Inhalt des Moduls direkt zugegriffen werden. Innerhalb der Modul-Datei können mit Hilfe des `export`-Befehls gezielt einzelne Bestandteile des Moduls (z.B. Funktionen) nach Außen gegeben werden (Vgl. *revealing module pattern*). Diese Inhalte werden über den `import`-Befehl an anderer Stelle geladen und können dann verwendet werden. Der Code einer Modul-Datei wird explizit durch die Verlinkung der Datei im HTML-Dokument oder implizit beim erstmaligen importieren des Modules ausgeführt. Bei der Einbindung der Module über das HTML-Dokument muss als `type`-Attribut der Wert `module` verwendet werden. Innerhalb eines Moduls können Sie alle APIs des Browser (z.B. das `document`-Objekt verwenden).

### Beispiel: Mathematische Funktionen

Wir erstellen ein Modul, in dem verschiedene Funktionen für mathematische Operationen bereitgestellt werden. Diese sollen an anderen Stellen unserer Anwendung verwendet werden:

`utils.js`:

``` javascript
function sum(numbers) {
	let sum = 0;
	for(let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

function average(numbers) {
	let tmp = sum(numbers);
	return tmp/numbers.length;
}

export {average};
```

Mit Hilfe des [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)-Befehls wird die Funktionen zur Berechnung des *Durchschnittswerts* (`average`) aus dem Modul herausgegeben und kann an anderer Stelle importiert werden. Die Funktion `sum` wird nicht exportiert und ist nur innerhalb des Moduls zugänglich.

`app.js`:

``` javascript 
import {average} from "./utils.js";

let result = average([1,2,3,4,5]);
console.log(result);
```

Die Datei `app.js` wird über einen `<script>`-Tag geladen (`<script type="module" src="app.js" ></script>`). Die  `average`-Funktion wird über den [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)-Befehl importiert und kann anschließend verwendet werden. Die Datei `utils.js` muss dafür nicht beim Start der Anwendung über das HTML-Dokument geladen werden. Der Inhalt wird zur Laufzeit, beim Ausführen des `import`-Befehls, vom Server angefordert und ausgeführt. Benutzen Sie diesen Mechanismus mit Bedacht: Während Sie auf der einen Seite den initial übertragen Code gering halten und zusätzliche Funktionalitäten nur bei Bedarf nachladen können, kann es beim dynamischen Nachladen größerer Module zu merkbaren Verzögerungen im Programmablauf kommen. Ein einmal geladenes Modul wird beim erneuten Importieren an anderer Stelle nicht erneut ausgeführt bzw. initialisiert. Das gilt auch für dynamisch vom Server nachgeladene Dateien.

### Default-Export

Aus einem Modul können mehrere Bestandteile exportiert werden. Dazu wird der oben gezeigte Klammer-Syntax (`export {NAME}`) verwendet. Es handelt sich um einen *named*-Export. Beim Import dieser Bestandteile muss der hier festgelegte Name zur Spezifizierung des benötigten Bestandteils verwendet werden. Zusätzlich besteht die Möglichkeit, pro Modul einen sogenannten *default*-Export zu definieren. Dieser wird über das entsprechende Schlüsselwort `default` gekennzeichnet:

``` javascript
class Task {

  constructor(description) {
    this.description = description;
    this.id = Date.now().toString();
    this.completed = false;
  }
  
  setDescription(description) {
    this.description = description;
  }

  toggleStatus() {
    this.completed = !this.completed;
    return this.completed;
  }

}

export default Task;
```

Beim Importieren des *default*-Exports kann jetzt eine Kurzschreibweise und ein beliebiger Bezeichner verwendet werden, letzteres ist mit Hilfe des [`as`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Syntax)-Schlüsselwortes auch bei *named*-Exports möglich:

``` javascript
import TaskItem from "./Task.js";

let myTask = new TaskItem("Javascript lernen");
```

## Übungsaufgaben

1. Erstellen Sie ein Modul (*revealing module pattern*), das bei Konstruktion innerhalb eines übergebenen DOM-Elements ein leeres Kindelement (`div`) erzeugt und bei jedem Mausklick auf diesen Element die Hintergrundfarbe zufällig verändert.

2. Erstellen Sie ein Modul (ES6), das eine Liste an Personen (auf der Basis eines einfachen Prototypen mit Namen und einer eindeutigen ID) verwaltet. Das Modul bietet öffentliche Methoden zur Suche nach bestimmten Personen anhand z.B. des Namens an. Befüllen Sie das Modul mit Informationen, die Sie über Eingabefelder vom Benutzer eingeben lassen.

3. Vervollständigen Sie die Implementierung der [*ToDo-Liste*](../../Demos/todo-list) und verwende Sie bei der Umsetzung der unterschiedlichen Bestandteile der Anwendung das ES6-Modulschema.

[^1]: Weitere Informationen zum Modul-Begriff in Javascript finden Sie bei [Haverbeke (Eloquent Javascript)](http://eloquentjavascript.net/10_modules.html9)
[^2]: Douglas Crockford, [Private Members in JavaScript](http://www.crockford.com/javascript/private.html)