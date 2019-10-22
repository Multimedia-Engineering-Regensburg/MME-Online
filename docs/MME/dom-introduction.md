# Das Document Object Model: HTML-Dokumente programmatisch verarbeiten und manipulieren

Die graphische Benutzeroberfläche einer Webanwendung wird in der Regel durch HTML-Strukturen vorgegeben und mittels CSS gestaltet. Die interaktive Veränderung des GUI erfolgt durch den Einsatz einer Programmiersprache. Das *Document Object Model* verbindet dabei die verschiedenen Technologien.

## Einleitung

Im Rahmen des *Parsings* eines HTML-Dokuments erstellt der Browser eine virtuelle Repräsentation der Strukturen und Inhalte, die durch die HTML-Elemente und deren Inhalte und Attribute vorgegeben werden. Diese Repräsentation basiert auf dem [Document Object Model (DOM)](https://en.wikipedia.org/wiki/Document_Object_Model), einem standardisierten Model[^1], das von allen modernen Browser implementiert wird. Das DOM dient als Verbindung zwischen der Webseite oder Webanwendung und Skript- bzw. Programmiersprachen, die dadurch die Möglichkeit erhalten, die dargestellten Inhalte zu manipulieren. In der Regel meint dies Javascript. Javascript selbst, bzw. der ECMAScript-Standard[^2] definieren dabei keine Schnittstellen zum DOM bzw. zur Manipulation von HTML-Dokumenten. Diese Möglichkeit wird durch die Implementierung des DOM-Standards in Form einer [Javascript-API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) umgesetzt, die im Javascript-Kontext des Browsers bereitgestellt wird. Der oberste Knoten des Dokuments wird dabei durch das globale `document`-Objekt repräsentiert.

!!! note "Hinweise zur Lektüre"
	In dieser Lektion werden die Grundlagen der DOM-Manipulation mit Javascript beschrieben. Es empfiehlt sich, die beschriebene Methoden und Vorgänge direkt auszuprobieren. Erstellen Sie dazu eine einfache HTML-Datei und binden Sie eine leere Javascript-Datei (siehe Beispiel aus der Vorlesung) ein. 

## Javascript-Objekte als Repräsentation der DOM-Inhalte

Die Bearbeitung des DOMs mit Hilfe der Javascript-API folgt einem einfachen Prinzip. Existierende und neue Element des DOMs werden durch entsprechende Javascript-Objekte repräsentiert. Inhalte, Attribute und deren Werte sowie die Position der Elemente werden durch entsprechende Eigenschaften des Objekts repräsentiert. Eine Veränderung der Objekt-Eigenschaft, z.B. des Element-Inhalts (repräsentiert durch `innerHTML`) sorgt automatisch für die entsprechende Veränderung des DOMs. Bevor Sie existierende DOM-Objekte über diese Weg manipulieren können, müssen Sie die entsprechenden Repräsentationen durch *Selektion* der Elemente aus dem DOM auswählen. Dazu stellt Ihnen die API verschiedene Möglichkeiten bereit, die u.a. durch Methoden des globalen `document`-Objekts genutzt werden können. 

### Beispiel: Eine Überschrift verändern

Hier sehen Sie einfaches Beispiel für den HTML-Code einer Webseite:

``` html
<html>
  <body>
    <h1>Hello World</h1>
  </body
</html>
```

Um den Inhalt des `h1`-Tags zu ändern wird zuerst die Javascript-Repräsentation des Knotens benötigt. Der Zugriff erfolgt über die Methode `querySelector` des globalen `document`-Objekts[^3]. 
``` javascript 
let titleElement = document.querySelector("h1");
```

Die `querySelector`-Methode gibt das erste Kindelement des DOMs bzw. des Elternelements auf dem sie aufgerufen wurde zurück, das durch den als Parameter übergebenen Selektor-String beschrieben wird. Verwendet wird dabei die selbe Syntax, den Sie auch aus der Arbeit mit [CSS-Regeln](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) kennen.

Das selektierte Element kann dann innerhalb des Javascript-Codes manipuliert werden. Alle Änderungen werden auch in das DOM übertragen und beim nächsten *Rendern* der Seite berücksichtigt. In der Regel können Sie solche Änderungen, die das Erscheinungsbild oder den Inhalt eines Elements betreffen, sofort im Browser sehen.

``` javascript
titleElement.innerHTML = "Hello MME"; 
```

Die von der Selektor-Funktion zurückgegebenen Objekte erben von [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) bzw. einer Spezialisierung dieser Klasse[^4]. Dadurch verfügen Sie über bestimmte Methoden und Eigenschaften. Unter anderem auch über die Eigenschaft `innerHTML`, die den Tag-Inhalt, also den Text oder die Kindelemente zwischen dem öffnenden und schließenden HTML-Tag (in Textform) repräsentiert.

### Bewegungen innerhalb des DOMs

Jedes Element, sofern es bereits im DOM verankert ist, hat eine feste Position innerhalb der Baumstruktur des DOMs. Die Position definiert sich durch das jeweilige Elternelement, also den übergeordneten Knoten, und innerhalb dessen durch die direkten Vorgänger und Nachfolger. Haben Sie ein HTML-Element selektiert, können Sie diese Parameter über die entsprechenden Eigenschaften auslesen:

- Elternelement: [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)

- Direkter Vorgänger: [`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)

- Direkter Nachfolger: [`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)

Mit Hilfe dieser Eigenschaften können Sie den kompletten DOM-Baum traversieren. Die Positionsangaben sind zusätzlich wichtig, wenn Sie ein existierendes oder neues Element an einer bestimmten Position des DOMs einfügen möchten.

### Elementpositionen innerhalb des DOMs verändern

Für das Einfügen oder Verschieben von Elementen innerhalb des DOMs gibt es grundsätzlich zwei verschiedene Möglichkeiten: 

1. Die [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)-Methode wird auf dem Elternelement aufgerufen und bekommt das einzufügende Element als Parameter übergebenen. Dieses wird als letztes Kindelemente des Elternelements eingefügt.

2. Die [`insertBefore`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)-Methode wird ebenfalls auf dem Elternelement aufgerufen und erhält als zusätzlichen Parameter ein existierendes Kindelement als Positionsreferenz.

Wenn Sie ein existierendes Element mittels `appendChild` oder `insertBefore` an eine neue Position verschieben, wird das Element von seiner ursprünglichen Position entfernt und an der neuen Stelle im DOM eingehängt. Ein Element kopieren können Sie mit der [`cloneNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)-Methode.

### Neue Elemente erzeugen

In der Regel kann das vollständige *User Interface* nicht direkt beim Programmstart bereitgestellt werden. Viele der angezeigten Inhalte, z.b. neue Einträge einer *ToDo*-Liste ergeben sich erst durch die Interaktion des Benutzers mit der Anwendung. Das dynamische Ergänzen oder Entfernen von neuen HTML-Elementen in das DOM gehört daher zu einer der Hauptaufgaben, die wir mittels Javascript realisieren. Für die programmatische Erstellung neuer HTML-Knoten bietet Ihnen die DOM-API bzw. deren Javascript-Implementierung mindestens zwei Möglichkeiten an.

**Vollständige, sequenzielle Erstellung eines neuen Elements** 
``` javascript
// Erstellt ein neues, leeres <span>-Element
let newElement = document.createElement("span");

// Verändert den Inhalt des Elements
newElement.innerHTML = "Hello World";

// Manipuliert ein Attribut des Elements
newElement.setAttribute("data-id", "42");
```

Komplexe und/oder verschachtelte Elemente lassen sich so nur schwer erstellen bzw. sorgen für komplexen, schwierig wartbaren Code. Alternativ können Sie Elemente auch auf der Basis eines  *HTML-Strings* erstellen:

``` javascript
// Erstellt ein provisorisches Elternelement
let containerElement = document.createElement("div");

// Definiert das eigentliche Element als Inhalt des Containers
containerElement.innerHTML = "<span data-id='42'>Hello World</span>";

// Referenziert das eigentliche Element
let newElement = containerElement.firstChild;
```

Bei diesem Vorgehen sind einige Dinge zu beachten:

- Der verwendete HTML-String darf nur einen direkten Knoten enthalten, da sich das neue Element sonst nicht mittels `firstChild`-Eigenschaft auslesen lässt.

- Die Methode kann für einige HTML-Elemente, die laut Spezifikation keine Kinderelemente von `div` sein dürfen nicht verwendet werden.

- Der Vorgang ist, vor allem bei komplexen Objekten nicht ressourcenschonend.

Generell sollte bei der dynamischen Erstellung komplexerer HTML-Objekte auf einen [`Templating`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)-Mechanismus zurückgegriffen werden, um die angestrebte Trennung zwischen Struktur bzw. Inhalt (HTML) und Logik (Javascript) beizubehalten.

### DOM-Events

Neben der Manipulation der dargestellten HTML-Knoten definiert der DOM-Standard auch ein Verfahren zur Kommunikation von Ereignissen (*Events*) an die einzelnen Elemente[^5]. Für die Entwicklung von Webanwendungen sind dabei vor allem die Ereignisse relevant, die durch Interaktion des Nutzers mit den HTML-Knoten ausgelöst werden. Dazu gehören z.B. Maus- oder Tastaturereignisse. Darüber hinaus gibt es aber auch andere Arten von Ereignissen, die innerhalb des DOMs kommuniziert werden, z.B. Informationen über entfernte oder hinzugefügte Elemente oder verschiedene Phasen während des *Renderings* des Dokuments. Auch dieser Teil des DOM-Standards wird durch eine *Javascript*-API abgebildet. Eine tiefere Beschäftigung mit dem *Event*-System des Browsers und der internen Verarbeitung dieser Ereignisse erfolgt in einer [separaten Lektion](../event-loop). In dieser Einführung wird das grundsätzliche Vorgehen zum Abfangen von (Interaktions-)*Events* am Beispiel einfacher Maus-*Events* beschrieben.

Die DOM-API verwendet ein vereinfachtes [Observer-Pattern](https://en.wikipedia.org/wiki/Observer_pattern)[^6] um die Reaktion auf Ereignisse zu erlauben. Dabei wird auf einem selektieren HTML-Element bzw. auf dessen Javascript-Repräsentation ein *Event Listener* in Form einer *Callback*-Methode registriert. Bei der Registrierung wird der *Event*-Typ definiert, dessen Auftreten in der *Callback*-Methode verarbeitet werden soll. Eine Liste aller *DOM Events* und der entsprechenden Bezeichner findet sich [hier](https://developer.mozilla.org/en-US/docs/Web/Events). Tritt nach der Registrierung ein entsprechendes *Event* im Kontext des jeweiligen Elements auf, werden alle vorher als *Listener* gespeicherten *Callback*-Methoden, in der Regel in der Reihenfolge ihrer Registrierung, aufgerufen. 

Im folgenden Beispiel wird ein *Listener* registriert, um Mausklicks auf einem bestimmten HTML-Element abzufangen. Ausgangslage ist dabei das folgenden HTML-Dokument:

``` html
<html>
 <body> 
   <div id="target">Target</div>
 </body>
</html>
```

Im Javascript-Code wird zuerst das Element mit der ID `target` selektiert. Anschließend wird der *Listener* für das Mausklick-*Event* (Bezeichner: `click`) registriert. Als *Callback*-Methode dient eine zuvor angelegte *Named Function*, die als Parameter an `addEventListener` übergeben wird. Zur Erinnerung: Funktionen bzw. Methoden werden in Javascript als [*first-class citizen*](https://en.wikipedia.org/wiki/
First-class_citizen) behandelt.

``` javascript
function onTargetClicked(event) {
	console.log("clicked on: ", event.target);
}

let targetEl = document.querySelector("#target");
targetEl.addEventListener("click", onTargetClicked);
```

Beim Aufruf der registrierten *Callback*-Methoden wird in der Regel ein Parameter-Objekt übergeben, das Informationen zu dem aufgetretenen Event beinhaltet. Grundlage für dieses Objekt ist der [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)-Prototyp. Je nachdem, um was für ein konkretes Ereignis es sich handelt, werden spezialisierte Varianten dieses Objekts kommuniziert. Im Falle von Benutzereingaben mittels Maus wird ein [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) weitergegeben. Das Parameter-Objekt wird in der Regel als erster Parameter an die *Callback*-Methode übergeben. Um die Lesbarkeit des Codes zu erhöhen, hat sich die *Best Practice* entwickelt, diesen Parameter `event` oder kurz `e` zu nennen. Aus dem Objekt lassen sich wichtige Informationen über das Ereignis auslesen, wie z.B. das angeklickte Element, die Position des Mauszeigers oder den Zeitpunkt der Ereignisauslösung[^7]. 

## Demos und Übungsaufgaben
Als erste Fingerübung im Rahmen der DOM-Manipulation mit Javascript können Sie die hier verlinkte [Übungsaufgabe](https://classroom.github.com/assignment-invitations/d84cc63e1f72964722cec4f9c46a6684) bearbeiten. Die Aufgabe wird mittels [Github Classroom](https://classroom.github.com/) bereitgestellt. Für die Bearbeitung benötigen Sie einen (kostenlosen) Account auf der Webseite [github.com](https://github.com/).

Im Rahmen der Präsenzveranstaltung werden die Grundlagen der Softwareentwicklung mit *Javascript* und der DOM-Manipulation am Beispiel eines einfachen [Kanban-Boards](../../Demos/kanban-board) praktisch umgesetzt.

### Weitere Aufgaben
- Rufen Sie die [Webseite der Medieninformatik](https://www.uni-regensburg.de/sprache-literatur-kultur/medieninformatik/) auf und öffnen Sie die Javascript-Konsole Ihres Browsers. Nutzen Sie die bekannten Javascript-Befehle um die Überschrift "Aktuelle Meldungen der Medieninformatik" zu selektieren und durch den *String* "Hello World" zu ersetzen.

- Versuchen Sie weitere Bestandteile der Website zu manipulieren: Tauschen Sie z.B. die Quellpfade von angezeigten Bildern aus oder ergänzen Sie weitere Texte bzw. Abschnitte.

- Erstellen Sie ein einfaches HTML-Dokument mit einer Überschrift und einer unsortierten Liste. Versuchen Sie, beim Öffnen des Dokuments - über eine integrierte Javascript-Datei - neue Listenelemente mit beliebigem Inhalt hinzuzufügen. 

- Versuchen Sie, Mausklicks auf den hinzugefügten Listenelementen zu registrieren und verändern Sie in der entsprechenden *Callback*-Methode das Erscheinungsbild des angeklickten Elements. Definieren Sie dazu eine CSS-Klasse (in einem ausgelagerten Dokument) und nutzen Sie die entsprechenden API-Methoden um diese Klasse zum angeklickten Element  hinzuzufügen.

 [^1]: [WHATWG, DOM - Living Standard](https://dom.spec.whatwg.org/#interface-document)
 [^2]: [ECMAScript 2017 Language Specification](https://www.ecma-international.org/ecma-262/8.0/)
 [^3]: Neben den beiden Methoden `querySelector()` und `querySelectorAll()` bietet das `document`-Objekt weitere Methoden als Zugriffs- bzw. Selektionsmöglichkeiten für das DOM an. Dazu gehört bspw. die Auswahl eines Elements anhand dessen `id`-Attributs mittels `getElementById()`. Eine vollständige Liste können Sie der [Dokumentation](https://developer.mozilla.org/en-US/docs/Web/API/Document) entnehmen.
 [^4]: Klasse ist hier ein Begriff aus dem DOM-Standard. Für die verwendeten Javascript-Objekte erfolgt die Vererbung durch entsprechende Prototypen.
 [^5]: Die Spezifikation und das dem `Event`-Objekt zugrundeliegende *Interface* wird im [DOM-Standard](https://dom.spec.whatwg.org/#events) beschrieben.
 [^6]: Die klassische Definition des *Observer Patterns* bei Gamma et al. beschreibt eine wechselseitige Beziehung zwischen den beteiligten Komponenten, dem *Observer* und dem *Observable*, die dabei beide durch Objekte repräsentiert werden. Im Rahmen der Ereignisverarbeitung innerhalb der DOM-API lässt sich dieses Verhältnis mitunter nicht genauso eindeutig definieren, da der *Observer* durch eine *Callback*-Methode eines beliebigen Objektes oder Kontextes ersetzt wird. Man kann hier daher auch einfach von einem *Listener*-Pattern sprechen. Eine interessante Diskussion zu diesem Thema findet sich auf [stackoverflow.com](https://stackoverflow.com/questions/3358622/observer-design-pattern-vs-listeners).
 [^7]: Die Bedeutung der `timeStamp`-Eigenschaft des `Event`-Objekts unterscheidet sich von Browser zu Browser, da die Hersteller hier unterschiedliche Implementierung verwenden. 