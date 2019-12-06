# Zweite Übungsaufgabe: GifGenerator

In dieser Aufgabe implementieren Sie eine Editor, der aus benutzerdefinierten Einzelbildern eines Videos *Animated GIFs* erzeugen kann. Der Nutzer kann Videos per *Drag & Drop* in den Browser ziehen, das im dafür vorgesehenen `video`-Element abgespielt wird. Über einen entsprechenden *Button* können Einzelbilder aus dem Video extrahiert werden. Diese *Frames* werden in einer Liste dargestellt und können individuell gelöscht und per *Drag & Drop* neu angeordnet werden. Anschließend hat der Nutzer die Möglichkeit, aus der aktuellen Reihenfolge der extrahierten Einzelbilder ein animiertes *GIF* zu erstellen, das nach Fertigstellung neben dem Video in einem `img`-Element angezeigt wird. 

**Lesen Sie sich zu Beginn die komplette Aufgabenstellung durch. Ihre Aufgabe beschränkt sich auf die Implementierung der Programmlogik mit Javascript. Sie müssen keine Änderungen am vorgegebenen CSS-Dokument oder der HTML-Datei vornehmen. Erweitern Sie nur den bereits vorhanden Javascript-Code. Abgabetermin ist der 23. Dezember 2019. Wir bewerten den letzten Commit, der an diesem Abgabetag in das Repository *gepusht* wird.**

Fragen zur Übungsaufgabe können Sie in das [GRIPS-Forum](https://elearning.uni-regensburg.de/mod/forum/view.php?id=1166886) *posten* oder diese per Mail (mi.mme@mailman.uni-regensburg.de) stellen.

!!! danger "Github Classroom"
	Das Starterpaket wird über *Github Classroom* bereitgestellt. Sie implementieren Ihre Lösung über ein *Repository* auf *Github*. **Das Repository, mit einer Kopie des Starterpaket, können Sie über diesen [Link](https://classroom.github.com/a/AO_54k29) generieren und anschließend mit der Arbeit an der Aufgabe beginnen.** Klonen Sie das erstellte *Repository* dazu auf Ihren Rechner. Die notwendigen Rechte für Ihr *Github*-Konto werden automatisch beim Erstellen des *Repository* gesetzt. Denken Sie daran, Ihre Arbeit an der Aufgabe durch regelmäßiges *Commiten* der Änderungen und Ergänzungen zu dokumentieren. Laden Sie Ihren aktuellen Stand regelmäßig auf *Github* hoch (*Push*). 

## Bewertungskriterien

Die allgemeinen Bewertungskriterien finden Sie [hier](index.md). Zusätzlich gelten für diese Aufgabe die folgenden Punkte:

* Wurde auf eine inhaltliche und strukturelle Trennung der einzelnen Komponenten geachtet? Wurde der Modulmechanismus sinnvoll für die Ausgestaltung dieser Aufteilung verwendet?
* Sind die einzelnen Komponenten der Anwendung entlang des MVC- oder MVP-Musters entworfen und implementiert worden?
* Wurde (im Rahmen der Aufgabenstellung) auf eine gute Bedienbarkeit der Anwendung geachtet?
* Wurden alle, unter dem Punkt [Aufgabenstellung](#aufgabenstellung) notierten Anforderungen erfüllt?

Eine eigenständige Erweiterung der Aufgabenstellung ist nicht notwendig. Unabhängig davon können Sie natürlich gerne das Design optimieren, eigene *Features*, Verbesserungsvorschläge oder andere Inhalte ergänzen. Kennzeichnen Sie diese Änderungen bitte im Code.

![Screenshot der finalen Anwendung](img/screenshot-complete.png)


## Vorgaben 

Eine funktionierende HTML-Struktur sowie eine CSS-Datei sind vorgegeben. Machen Sie sich mit beiden Punkten vertraut und versuchen Sie das auf dem Screenshot zu sehenden Design korrekt umzusetzen Für die interne Kommunikation können Sie den bereits bekannten `Observable`-Prototypen verwenden. Implementieren Sie die einzelnen Komponenten in separaten Modulen und nutzen Sie die bereits vorhanden Datei `app.js` als Bindeglied zwischen diesen Programmbestandteilen. Setzten Sie auf *Events* als grundlegende Kommunikationsmetapher zwischen den Modulen.

## Aufgabenstellung

Versuchen Sie die folgenden Features möglichst komplett und fehlerfrei umzusetzen. Achten Sie dabei darauf, die vorgeschlagenen Architektur und die Aufgabenverteilung bezüglich der Modulstruktur einzuhalten. Vermeiden Sie fehlerhafte Implementierungen und stellen Sie eine funktionierende Bedienung der Anwendung sicher. Denken Sie daran, dass auch die qualitative Gestaltung des Quellcodes in die Bewertung einfließt. 


### Import des Videos in den Browser

Per *Drag & Drop* [Vgl. Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) kann der Nutzer Videodateien auf dem Video-Element ablegen, die daraufhin in diesem abgespielt werden. Nach dem erfolgreichen Import wird der Hinweistext aus- und die Schaltfläche zum Erzeugen von Einzelbildern eingeblendet. Versehen Sie das Ausgabeelement (`video-box`) mit der CSS-Klasse `playing` um die auf den Screenshots dargestellte Gestaltung zu erreichen. Es reicht, wenn Ihre Anwendung mit dem im Ordner `videos` mitgelieferten Video funktioniert.

### Export und Darstellung der Einzelbilder

Beim Betätigen des entsprechenden *Buttons* wird das aktuelle Bild des Videos extrahiert (siehe dazu [Multimedial Inhalte im Browser](../..//MME/canvas-element)) und als `li` bzw. `image`-Element der Liste der exportierte *Frames* hinzugefügt. Die Einzelbilder werden als Listenelemente dargestellt. Nutzen Sie den unten angegebenen Aufbau, um die gewünschte Darstellung zu erreichen. Diese Vorlage finden Sie auch als *Template* im HTML-Code der Anwendung.

```html
<ul class="frames">
  <li draggable="true">
      <img height="{{height}}" width="{{width}}" frame="{{id}}" src="{{src}}">
      <span class="button delete-frame">remove</span>
    </li>
</ul>
```

**Hinweis**: Versuchen Sie im gesamten Im- und Export-Prozess die Größen der Video- und Einzelbilder sowie des *GIFs* einheitlich zu halten. Dadurch vermeiden Sie Probleme wie etwa verzehrte oder fehlerhafte Darstellung in der Bilderliste oder der *GIF*-Ausgabe.

### Löschen und Sortieren der exportieren Einzelbilder

Über die *remove*-Buttons der einzelnen Listenelemente kann ein *Frame* aus der Liste entfernt werden. Das Einzelbild verschwindet aus dem UI und wird im Anschluss nicht mehr für das zu erstellende *GIF* verwendet.

Sorgen Sie zusätzlich dafür, dass der Nutzer einzelne Bilder per *Drag & Drop* innerhalb der Liste verschieben bzw. sortieren kann. Dabei gilt: Wird ein *Frame* auf einen anderen geschoben, wird das Bild innerhalb der Liste vor den darunterliegenden *Frame* einsortiert. Halten Sie sich bei der Implementierung an die [Beschreibung des MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#The_basics) und achten Sie insbesondere darauf, welche Elemente *draggable*, also verschiebbar sind, welche Elemente Ziel eine *Drops* sein müssen und welche Informationen (Vgl. `dataTransfer`-Eigenschaft des *dragstart*-Events) Sie dem *Drag*-Event zur Identifikation des intendierten Vorgangs mitgeben müssen. **Die Verwendung des Drag & Drop-Mechanismus wird durch eine API möglich, die nicht explizit im Kurs vorgestellt wurde. Sie müssen sich selbstständig in diese Thematik einarbeiten!**

### Erzeugen des *Animated GIFs*

Beim Klick auf den entsprechenden Button wird aus den Einzelbildern ein *Animated GIFs* erzeugt. Diese Funktion ist erst zugänglich, wenn mindestens zwei Einzelbilder exportiert wurden (CSS-Klasse `disabled` des Buttons). Die Reihenfolge der Einzelbilder basiert auf der Sortierung innerhalb der oben beschriebenen Liste. Wählen Sie eine sinnvolle *Frame Rate* für das *GIF*. Nach Fertigstellung wird das *Animated GIF* im linken Bereich der Anwendung (`gif-box`) angezeigt. Der dort angezeigte Hinweistext wird dabei deaktiviert. Nutzen Sie diesen Aufbau, um die gewünschte Darstellung zu erreichen:

```html
<img class="gif" src="{{src}}">
```

Für die Generierung des *Animated GIFs* verwenden Sie bitte die *gif.js*-Bibliothek, die bereits in das Projekt eingebunden wird. Die Dokumentation zur Verwendung der Bibliothek finden Sie [hier](https://github.com/jnordberg/gif.js). Beim Erstellen des Generators müssen Sie in der Regel den vollständigen Pfad zum *Worker*-Skript angeben (Vgl. Dokumentation der Bibliothek). Die Bibliothek generiert als Ergebnis ein [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)-Objekt. Für die Verwendung im `<img>`-Container können Sie dieses mithilfe der Methode [`URL.createObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) umwandeln.


