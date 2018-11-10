# Der Event-Loop in Javascript und die Events der Web-APIs

Einer der wichtigsten Bestandteile der *Javascript*-Laufzeitumgebung ist der *Event Loop* (Vgl. [Javascript im Browser](../../Tutorials/javascript-browser)), der den grundlegenden Ablauf einer Web-Anwendung bestimmt. Während der Implementierung Ihrer Anwendungen werden Sie auf die unterschiedlichen *Events* reagieren müssen, die der Browser bzw. die *Web APIs* im Kontext des *Lifecycles* der Webseite, den DOM-Elementen oder den Benutzereingaben erzeugt. In dieser Lektion werden grundlegende Prinzipien der Event-Verarbeitung im Browser erklärt. Der Schwerpunkt liegt dabei auf den sogenannten *DOM Events*.

## Einleitung

Der Programmfluss einer Webanwendung wird nicht (nur) durch die Reihenfolge der Befehle im Programmcode definiert, sondern durch ein ereignisbasiertes Paradigma, das sogenannte [*event-driven programming*](https://en.wikipedia.org/wiki/Event-driven_programming), bestimmt. Ereignisse, wie z.B. abgeschlossene Teilschritte beim Laden und Initialisieren der Webseite, erfolgte Benutzereingaben, Statusveränderungen bei Netzwerkoperationen oder aufgetretene Fehler werden als *Events* an Ihre Anwendung kommuniziert (Vgl. *Event Loop*). Durch das Registrieren von *Listeners* für diese *Events* gestalten Sie den Ablauf und die Funktionalität Ihrer Anwendung. Spätestens nach dem initialen *Parsen* und Ausführen der im HTML-Dokument verlinkten *Javascript*-Dateien basieren alle Abläufe in Ihrer Anwendung auf den vorbereiteten Reaktionen auf diese Ereignisse. Das Prinzip des *event-driven programming* ist dabei nicht nur im Bereich der Webentwicklung bekannt sondern wird z.B. auch zur Realisierung der meisten anderen Anwendungen mit graphischer Benutzeroberfläche und entsprechender Nutzerinteraktion verwendet. Für die erfolgreiche Arbeit mit den *Web APIs* ist es notwendig, dass Sie das grundlegende Prinzip hinter diesem Ansatz verinnerlichen und die n Besonderheiten im Bezug auf die Ereignisverarbeitung im Browser kennen. In diesem Kurs werden dabei hauptsächlich die *Events* im Vordergrund stehen, die im Kontext der DOM-ELemente und der Interaktion des Nutzers mit diesen auftreten. 

!!! note "Hinweis"
	Versuchen Sie die Erläuterungen und Beispiele aus dieser Lektion direkt praktisch umzusetzen. Erstellen Sie dazu ein leeres [Projektverzeichnis](../../Tutorials/project-directory) und implementieren Sie die vorgestellten Beispiele selbstständig.

## Events im Browser

Die Laufzeitumgebung des Browsers kann Ihre Webanwendung über eine Vielzahl von Ereignissen informieren. Dazu gehören neben Aktionen des Benutzers mit Tastatur, Maus oder anderen Eingabegeräte z.B. auch Informationen über Medienwiedergabe, Hardware-Zustände oder das Dateisystem. Generell kommunizieren die meisten der verfügbaren *APIs* über *Events* mit den sie verwendenden *clients*. Die Art und Weise, wie Sie als Entwickelnder mit diesen Ereignissen umgehen, bzw. wie Sie Ihren Code über *Listener* mit diesen verbinden, kann sich dabei stark unterscheiden. Während die Verarbeitung von Benutzereingaben generell im Kontext der betroffenen DOM-Elemente erfolgt, werden andere Ereignisse über spezielle Mechanismen kommuniziert, die von den jeweiligen *APIs* bereitgestellt werden. Eine [Übersicht](https://developer.mozilla.org/en-US/docs/Web/Events) über viele der verfügbaren *Events* finden Sie im *Mozilla Developer Network*. Beachten Sie dabei, dass sich unter den aufgeführten Ereignissen und *APIs* sowohl standardisierte, browserübergreifend verwendbare Funktionen befinden als auch solche, die nur in bestimmten Umgebungen zur Verfügung stehen.

Für die Implementierung der *Events* werden in der Regel die beiden *Interfaces* [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) und [`EventTarget`](https://developer.mozilla.org/de/docs/Web/API/EventTarget) verwendet. Während [`EventTarget`] als Grundlage für die Objekte dient, die *Events* empfangen und an registrierte *Listener* weitergeben können, wird die `Event`-Schnittstelle zur Repräsentation eines einzelnen Ereignisses verwendet.

Der grundlegende Ansatz dieser Ereignisverarbeitung findet sich auch in anderen *Javascript*-Umgebungen, wie z.B. *Node.js*. Die dort eingesetzte [*Event*-Implementierung](https://nodejs.org/docs/latest-v5.x/api/events.html) folgt den gleichen Prinzipien, unterscheidet sich jedoch in Details, wie etwa den konkreten Namen, Methoden oder Parametern der verwendeten Objekte.

## Capture und Bubbling

Der genaue Ablauf der *Event*-Verarbeitung wird im [DOM-Standard](https://www.w3.org/TR/uievents/#event-flow) definiert. Dabei ist vor allem der Weg durch die Baumstruktur des DOMs interessant, den jedes Ereignis im Zuge des Ablaufs nimmt. Jedes *Event* wird an ein bestimmtes DOM-Element, dem `event target` ausgeliefert. Zu Beginn der Verarbeitung bestimmt der Browser den Pfad, bzw. die Kette an weiteren Elementen, die das Ereignis auf dem Weg zum `target` passieren muss. Dieser *propagation path* beschreibt dabei die hierarchische Struktur des DOMs, in die jedes Element eingebettet ist. Alle Elemente des Pfads, die dem eigentlichen Zielelement vorgelagert sind, werden als Vorgänger (*ancestors*) bezeichnet. Der direkte Vorgänger ist das *parent element* des Ziels. Die Ereignisverarbeitung entlang diesen Pfades verläuft in drei Phasen:

### Capture Phase
Das *Event* wird entlang des definierten Pfades, beginnend beim `window`-Element des DOM, zum eigentlichen Ziel weitergereicht. Wurde auf einem der durchlaufenen Element ein *Listener* für das Ereignis registriert wird dieser nur dann bereits jetzt ausgelöst, falls beim Registrieren explizit die Verarbeitung in der *capture phase* ausgewählt wurde (Vgl. [EventTarget.addEventListener()](https://developer.mozilla.org/de/docs/Web/API/EventTarget/addEventListener)).

### Target Phase
Das *Event* erreicht das eigentliche Ziel und wird verarbeitet. Wurde im *Event*-Objekt spezifiziert, dass das Ereignis nicht in die *bubbling phase* übergehen soll, wird die Verarbeitung an dieser Stelle beendet. Eine Übersicht über die Ereignisse, deren Verarbeitung in der *target phase* abgeschlossen wird, finden Sie [hier](https://en.wikipedia.org/wiki/DOM_events#Events).

### Bubbling Phase
Anschließend wird das *Event* entlang des definierten *propagation path* zurück zum initialen DOM-Element nach oben gereicht. Sind auf den *ancestor*-Elementen passende *Listener* registriert, werden diese - sofern nicht bereits in der *capture phase* geschehen, nun aufgerufen.

Während sich das *Event* entlang des *propagation path* bewegt, kann die weitere Ereignisverarbeitung in jedem aufgerufenen *Listener* abgebrochen werden. Dazu wird die Methode `stopPropagation` aufgerufen. Betrachten Sie dazu das folgende Beispiel.

Im HTML-Dokument finden sich drei, ineinander-verschachtelte Block-Elemente:

``` html
<div id="parent"">
    <div id="ancestor>
    	<div id="target"></div>
    </div>
</div>
```

Im *Javascript*-Code werden auf jedem der drei Elemente *Listener* für das *Click*-Event registriert. Dabei wird für jedes Element die selbe *Callback*-Methode verwendet. Über den optionalen Parameter der `addEventListener`-Methode wird für die Elemente `#parent` und `#ancestor` die Ereignisverarbeitung in der *capture phase* aktiviert. In der *Callback*-Methode wird zuerst das `id`-Attribut des aktuellen *targets* ausgegeben und anschließend die Ereignisverarbeitung abgebrochen (`event.stopEventPropagation`).

``` javascript
var parent = document.querySelector("#parent"),
  ancestor = document.querySelector("#ancestor"),
  target = document.querySelector("#target");

parent.addEventListener("click", onClick, true);
ancestor.addEventListener("click", onClick, true);
target.addEventListener("click", onClick);

function onClick(event) {
  console.log("Current target has id #" + event.currentTarget.id);
  event.stopPropagation();
}
```

Ein Klick auf das innere `#target`-Element erzeugt in der Konsole des *Browsers* die folgende Ausgabe: `Current target has id #parent`. Der *Event* wird bereits vom `#parent`-Element in der *capture phase* konsumiert und abgebrochen. Die anderen *targets* werden nicht mehr angesteuert und die verknüpften *callbacks* nicht aufgerufen.

!!! note "Hinweis"
	Neben der vertikalen Bewegung im DOM gibt es auch eine horizontale Verarbeitung der *Events*, da Sie auf einem DOM-ELement beliebig viele unterschiedliche Callback-Methoden für den selben *Event*-Typen registrieren können. Die Reihenfolge, in der diese *Listener* aufgerufen werden, wird nicht vom DOM-Standard spezifiziert. In der Regel werden die *Callbacks* aber gemäß der Reihenfolge aufgerufen, in der sie ursprünglich registriert wurden.

Einige *Events* sind mit Standardreaktion (*default actions*) des Browsers verknüpft. Dazu gehören z.B. bestimmte Tasten bzw. Tastenkombinationen oder *Drag & Drop*-Aktionen. In der Regel werden diese Standardreaktionen nach der Ereignisverarbeitung ausgeführt. Innerhalb der *capture*- oder *bubbling*-Phase können Sie dieses Verhalten für einige *Event*-Typen verhindern, in dem Sie die `preventDefault()`-Methode des entsprechenden `event`-Objektes aufrufen. Bei einigen Ereignisse erfolgt die Ausführung der verknüpften Standardreaktion bereits vor der Verarbeitung entlang des DOM-Baums. Wird auf solch einem *Event* die `preventDefault()`-Methode aufgerufen, werden die durchgeführten *default actions* rückgängig gemacht:

<blockquote>When an event is canceled, then the conditional default actions associated with the event is skipped (or as mentioned above, if the default actions are carried out before the dispatch, their effect is undone). <a href="https://www.w3.org/TR/uievents/#event-flow-default-cance">W3C, Default actions and cancelable events</a></blockquote>

## Delegation

Häufig wird das *User Interface* einer Webanwendung dynamisch angepasst. D.h., dass zur Laufzeit neue DOM-Elemente hinzugefügt oder bestehende ELemente entfernt werden. Im Zusammenhang mit *Events* und den zugehörigen *Listener* ergeben sich dadurch Probleme. Betrachten Sie dazu das folgende Beispiel:

<blockquote>Für die Darstellung einer Aufgaben-Liste wird eine unsortierte Liste <code>ul</code> verwendet. Die einzelnen Einträge werden als Kindelemente vom Typen <code>li</code> angezeigt. Für die Ausgestaltung der Anwendung ist es nötig, dass Klicks auf die <code>li</code>-Elemente abgefangen und verarbeitet werden. Zur Laufzeit werden neue Aufgaben hinzugefügt und abgeschlossene *Tasks* entfernt.</blockquote>

Für die Realisierung der Anwendung ist es notwendig, Klicks auf die einzelnen Kindelemente der Liste zu erkennen und eindeutig dem jeweils angeklickten Element zuzuordnen. Eine naheliegende Lösung wäre die Registrierung individueller *Listener* auf allen Elementen. Diese Registrierung muss beim Hinzufügen der einzelnen Elemente in das *User Interface* erfolgen. Eine einfachere Alternative ist die *Delegation*. Bei diesem Ansatz wird nur ein einziger *Listener* auf dem umschließenden Elternelement registriert und in dessen *Callback*-Methode unterschieden, welches der Kinderelemente angeglickt wurde. Dieser Ansatz basiert auf dem oben geschilderter Vorgehen des Browsers während der *event propagation*. Ein Klick auf eines der Kinderelemente sorgt dafür, dass das ausgelöst *Event* zuerst entlang des *propagation paths* zum eigentlichen Ziel, dem angeklickten Element, wandert und in der anschließenden *bubbling phase* vom, auf dem Elternelement registrierten *Listener*, abgefangen wird. In dessen *Callback*-Methode kann dann anhand der `target`-Eigenschaft des *event*-Parameters das ursprünglich Ziel und damit das eigentlich angeklickte Kindelement identifiziert werden. 

Das Prinzip der Delegation kann an folgendem Beispiel verdeutlicht werden:

``` html
<div id="parent">
</div>
```

``` javascript
var parentEl = document.querySelector("#parent");
parentEl.addEventListener("click", onClick);

for(let i = 0; i < 10; i++) {
	let el = document.createElement("div");
	el.id = i;
	parentEl.append(el);
}

function onClick(event) {
	let target = event.target;
	console.log("clicked on element with id #" + target.id);
}
```

Auf dem existierenden Elternelement `#parent` wird ein einzelner *Listener* für das Klick-*Event* registriert. Anschließend werden 10 Kindelemente hinzugefügt. Im *Callback* des registrierten *Listeners* wird das eigentlich angeklickt Element identifiziert und dessen `id`-Attribut auf der Konsole ausgegeben. Damit können über einen einzigen *Listener* alle Klicks auf die Kindelemente unterscheidbar verarbeitet werden.

## Übungsaufgaben

1. Erstellen Sie eine einfache HTML-Struktur mit zwei ineinander verschachtelten Block-Elementen. Sorgen Sie mit Hilfe von unterschiedlichen Größen und Farben dafür, dass die Elemente im Browser unterschieden werden können. Registrieren Sie auf beiden Elementen einen *Click*-Listener und geben Sie in den Callback-Methoden jeweils das `target` und `currentTarget` aus. Sorgen Sie durch Veränderung des optionalen Parameter der `addEventListener`-Methode dafür, dass das Ereignis im übergeordneten Element zuerst in der *Bubbling* und anschließend bereits in der *Capture*-Phase abgefangen wird. Versuchen Sie die unterschiedlichen Verhaltensweisen nachzuvollziehen.

2. Erstellen Sie eine einfache HTML-Struktur mit mehreren quadratischen HTML-Elementen, die in einem gemeinsamen Elternelement angeordnet sind. Beim Klick auf eines der Element wird dessen Hintergrundfarbe zufällig verändert. Verwenden Sie nur einen *Listener* für die *Event*-Verarbeitung (*Delegation*).

3. Ergänzen Sie Ihre Lösung zur Übungsaufgabe [Writer](../../Demos/writer) um ein zusätzliches Modul, in dem die [hier](https://javascript.info/onload-ondomcontentloaded) erwähnten *Lifecycle*-Schritte beim Laden und Anzeigen des HTML-Dokuments abgefangen werden.