# Multimediale Inhalte im Browser: Audio und Video

Multimediale Inhalte wie Audio- und Videodateien können wichtige Bestandteile interaktiver Webanwendungen sein. Der Einsatz der entsprechenden HTML-Elemente erlaubt die einfache und native Integration solcher Inhalte. Für die Realisierung einfacher 2D/3D-Inhalte steht im Browser mit der [*Canvas*-API](./canvas-element) eine rudimentäre Komponente zur Verfügung, die die Realisierung von graphischen Inhalten auch außerhalb der festen DOM-Strukturen erlaubt. 

## Einleitung

Während die fünfte Fassung des HTML-Standards[^1] grundsätzlich nur Veränderungen und Neuerung im Sprachstandard umfasst, werden unter dem Begriff *HTML5* in der Regel auch die in diesem Kontext eingeführten neuen Web-APIs sowie Aktualisierungen des CSS-Standards (Vgl. [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)) zusammengefasst. Eine der zentralen Erweiterungen der Browser-Fähigkeiten im Kontext von [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) ist die erweiterte Unterstützung von Medieninhalten (Audio und Video) sowie die Einführung rudimentärer 2D/3D-Operationen im Browser. Durch die Einführung der `<audio>` und `<video>`-Elemente können entsprechende Inhalte direkt und ohne zusätzliche *Plugins* oder Erweiterungen im Browser abgespielt werden. Video- und Audiodateien werden gleichberechtigte *"first-class citizens"* (Mozilla Developer Network, HTML5) des Browsers, deren Wiedergabe durch die entsprechenden APIs programmatisch aus dem Javascript-Code heraus gesteuert werden kann. Zusätzlich erhalten Entwickler und Entwicklerinnen mit dem *Canvas* die Möglichkeit, Teilbereiche des *User Interfaces* auch außerhalb der DOM-Struktur zu gestalten. Das `<canvas>`-Element stellt dazu einen Knoten im DOM-Baum dar, dessen Inhalt nicht durch Text oder weitere Kindelemente definiert wird, sondern durch eine rudimentäre Grafikschnittstelle programmatisch erzeugt und aktualisiert werden kann. In dieser Lektion lernen Sie die grundsätzliche Verwendung von Audio-, Video- und Canvas-Elemente kennen und erfahren, wie die Kompatibilität zwischen Canvas- und Video-Inhalten sinnvoll für die Implementierung interessanter Anwendungskonzepte verwendet werden kann.

## Audio & Video

Grundlage für die Audio- und Video-Wiedergabe sind die entsprechenden DOM-Elemente. Deren Aufbau und Verwendung unterscheidet sich dabei kaum. Das Erscheinungsbild und das Verhalten wird durch eine Reihe von Element-Attributen bestimmt. Der abzuspielende Inhalt wird durch Referenzen auf die entsprechenden Mediendateien definiert. Dabei kann entweder das `src`-Attribut verwendet werden oder, in Form einer Liste von Kindelementen, mit einem oder mehreren `<source>`-Elementen gearbeitet werden. Durch den Einsatz von mehreren `<source>`-Elementen ist es möglich, *fallback*-Lösungen zu definieren. Der Browser gibt dabei die erste interpretierbare Datei der Liste wieder - ein Verhalten, das vor allem dann wichtig ist, wenn im Browser *Decoder* für bestimmte Formate fehlen. Bis auf wenige Ausnahmen unterscheiden sich die Audio- und Video-Elemente hinsichtlich ihrer Verwendung nicht. Beispiele werden hier daher nur für das Video-Element aufgeführt. Etwaige Unterschiede zum Audio-Element sowie Besonderheiten können Sie [hier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) nachlesen. 

Ein einfaches Beispiel für die Integration eines Videos in ein HTML-Dokument kann so aussehen:


``` html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Ihr Browser unterstützt die HTML5-Video-Funktion leider nicht. Sie können sich das Video <a href="video.mp4">hier</a>herunterladen.</p>
</video>
```

Über das Attribut `controls` wird dem Browser mitgeteilt, dass die nativen Steuerelement des Browser eingeblendet werden sollen. Diese werden vom jeweiligen Browser-Hersteller implementiert, sollten aber immer Schaltflächen zum Starten und Pausieren, eine Zeitleiste, Lautstärke- und Vollbildregler sowie ggf. Auswahlmöglichkeiten für Untertitel und *Tracks* beinhalten. Eine Übersicht über die weiteren Attribute des Elements finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video). Im Beispiel wird die abzuspielende Datei durch Kindelemente vom Typ `<source>` definiert. Der Browser prüft, beginnend beim ersten `<source>`-Element, ob die verlinkte Datei abspielbar ist, d.h. de-codiert und wiedergegeben werden kann. Ist dies nicht der Fall, werden die angegebenen Alternativen geprüft. Kann keine der aufgeführten Dateien verwendet werden, wird der übrige Inhalt des Elements (hier der Inhalt des `<p>`-Abschnitts) angezeigt. 

Korrespondierend zu den `<video>` und `<audio>`-Elementen	existieren *Javascript*-Objekte, die die programmatische Steuerung der Elemente erlauben. Deren Verwendung folgt dabei dem bekannten Prinzip, das bereits für andere HTML-Elemente verwendet wurde: Innerhalb Ihrer *Javascript*-Anwendung referenzieren Sie die entsprechenden DOM-Elemente über die Selektor-Funktionen und arbeiten anschließend mit den zurückgegebenen Objekten. Grundlage für beide Objekte ist das [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement). Spezifische Methoden und Eigenschafte werden im [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) bzw. [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) definiert. Die programmatische Steuerung der selektierten Elemente erfolgt durch die Verwendung der Eigenschaften, Methoden und *Events* der entsprechenden Objekte.

Die nun folgenden Beispiele beziehen sich auf ein HTML-Dokument mit diesem (Teil-)Inhalt: 

``` html 
 <div id="player">
        <video>
            <source src="example.mp4" type="video/mp4">
        </video>
        <ul id="controls">
            <li class="play"><i class="fas fa-play"></i></li>
            <li class="pause"><i class="fas fa-pause"></i></li>
            <li class="stop"><i class="fas fa-stop"></i></li>
        </ul>
        <input type="range" id="seekbar" value="0">
</div> 
```

Die Schaltflächen werden durch *Icons* aus dem [Font Awesome](https://fontawesome.com/)-Projekt realisiert. Mit entsprechenden CSS-Regeln verknüpft wird das Element mit der ID `player` im Browser dann in dieser Form dargestellt:

![Screenshot des Video-Player](img/video-player.png)

Die Wiedergabe und das Pausieren des aktuellen Videos erfolgt durch den Aufruf der entsprechenden [Methoden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#Methods):

``` javascript
let videoPlayer = document.querySelector("video");
videoPlayer.start(); // starts playback
videoPlayer.pause(); // pauses playback
```

Die aktuelle Abspielposition kann mit Hilfe der Eigenschaft `currentTime` ausgelesen und gesetzt werden. Die Angabe erfolgt dabei immer in Sekunden und einer Browser-abhängigen Präzision (z.B. 2ms im Firefox ab Version 60). Wenn Sie eigene Kontrollflächen, wie z.B. eine Zeitleiste für die Auswahl einer bestimmten Abspielposition erstellen wollen, müssen Sie aus der relativen Position des verwendeten Eingabeinstruments (z.B. einem [`range`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)-Element) eine absolute (zeitliche) Position innerhalb der Mediendatei berechnen. Dazu können Sie über die Eigenschaft `duration` des Video-Elements auf die (zeitliche) Länge des aktuell geladenen Videos zurückgreifen:

``` javascript
let seekbar = document.querySelector("#seekbar");

seekbar.addEventListener("change", function () {
	let selectedPosition =  videoPlayer.duration * (seekbar.value / 100));
	videoPlayer.currentTime = selectedPosition; 
});
```

In der Regel dient das Zeitleisten-Element des *User Interface* eines *Media Players* nicht nur der Auswahl eines bestimmten Abschnitts der wiederzugebenden Datei, sondern zeigt während der Wiedergabe auch deren aktuelle Abspielposition an. Um diese Funktion zu realisieren, müssen Sie das Event `timeupdate` abfangen (Vgl. [*Media Events*](https://dev.w3.org/html5/spec-author-view/video.html#mediaevents), das während der Wiedergabe regelmäßig vom Video- bzw. Audio-Element ausgelöst wird. Das Intervall, in dem dieses Event ausgelöst wird, nimmt - bei korrekter Implementierung durch den Browser-Hersteller - Rücksicht auf die allgemeine Systemlast und sollte sich zwischen 4Hz und 66Hz bewegen. Auf Basis der aktuellen Abspielpostion kann dann der korrespondierende Wert für die Suchleiste berechnet werden. In diesem und dem vorherigen Beispiel wird davon ausgegangen, dass die Standardwerte (siehe [hier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Specifying_the_minimum_and_maximum) und [hier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Setting_the_value's_granularity)) des *range inputs* nicht verändert wurden:

``` javascript
video.addEventListener("timeupdate", function() {
  var value = (100 / videoPlayer.duration) * videoPlayer.currentTime;
  seekbar.value = value;
});
```

[^1]: W3C, [HTML 5.2](https://www.w3.org/TR/html5/)