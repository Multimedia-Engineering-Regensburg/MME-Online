<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Writer"></a> 
# Writer

In dieser Demo implementierten Sie einen einfachen, *browser*-gestützten Text-Editor. Nutzer können diesen verwenden um Texte zu verfassen, die automatisch, lokal und dauerhaft im *Browser* gespeichert werden. Während der Texteingabe werden dem Nutzer Statistiken zum aktuellen Text (Wortanzahl und Lesegeschwindigkeit) angezeigt. Die Architektur der Anwendung basiert auf unterschiedlichen Komponenten, die mit dem [*revealing module pattern*](../../MME/closures-and-module-pattern) strukturiert werden und deren Zuständigkeitsbereiche sich grob entlang des *MVC*-Ansatzes einordnen lassen. 

Die Demo dient der praktischen Umsetzung und Einübung des vorgestellten [*Module Patterns*](../../MME/closures-and-module-pattern). Zusätzlich können Sie hier die Grundlagen des bekannten [*model-view-controller*](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)-Ansatzes auffrischen. 

![Screenshot der Writer-App](../../img/demos/writer-complete.png)

## Aufbau der Anwendung

Die Anwendung besteht aus vier Modulen, die alle im Namensraum `Writer` implementiert werden. Als zentrale Komponente dient dabei `App`, in dem die anderen Module initialisiert und miteinander verknüpft werden. 

Das **Textfeld** wird in einem *controller* (`EditorController`) verwaltet. Grundlage für die Texteingabe und -darstellung ist ein `<textarea>`-Element. Eingaben können im *Code* über das `keyup`-Ereignis abgefangen werden. 

Die dynamischen Bereiche der Benutzeroberfläche werden in einem *view*-Modul (`StatsView`) verwaltet. In der HTML-Struktur werden dazu zwei Elemente zur **Anzeige** der Textstatistiken vorgegeben (`.stats .words` und `.stats .time`). Über deren `innerHTML`-Eigenschaft können die jeweils aktuellen Statistiken gesetzt werden. 

Die dauerhafte **Speicherung** des eingegebenen Texts erfolgt in einem weiteren Modul (`Storage`). Die Kommunikation zwischen den Modulen wird entweder über öffentliche Methoden oder, im Falle der *controller*-Schicht, über ein *observer pattern* realisiert.

## Ausgangslage

Sowohl das HTML-Dokument (`index.html`) als auch die CSS-Regeln (`style.css`) sind vollständig vorgegeben. Für die Lösung der Aufgabenstellung ist nur die Bearbeitung der ebenfalls beigefügten *Javascript*-Dateien erforderlich. Alle *Javascript*-Dateien sind bereits über das HTML-Dokument eingebunden. Beim Laden des Dokuments wird automatisch die `init`-Methode des `Writer`-Moduls ausgeführt, das in der Datei `Writer.js` implementiert wird. Die globale Variable `Writer` wird als [Namespace](../../Tutorials/javascript-browser#namespacing) für alle Module verwendet.

## Aufgabenstellung

Implementieren Sie nacheinander die verschiedenen Module, die für die unterschiedlichen Funktionsbereiche der Anwendung zuständig sind. Das in Grundzügen bereits vorhandene Modul `Writer.App` in der Datei `Writer.js` dient als zentrale Komponente der Anwendung. Es ist für die Initialisierung und Steuerung der übrigen Module verantwortlich. Alle Module werden als Eigenschaften des *Namespace*-Objektes `Writer` erstellt.

### Editor

1. Implementieren Sie in der Datei `EditorController.js` ein Modul (`Writer.EditorController`), das Eingaben im [Textfeld](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) erkennt und daraus berechnete Statistiken über eine *Observer*-Schnittstelle nach Außen gibt. Nutzen Sie zur Implementierung des *observables* das `that`-Objekt und das global bereitgestellten [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)-Prototypen (Vgl.: [Vererbung im Revealing Module Pattern](../../MME/closures-and-module-pattern/#vererbung-im-revealing-module-pattern)). Während der Texteingabe informiert das Modul registrierte *Listener* über die aktuelle Anzahl der Wörtern sowie die geschätzte Lesedauer[^1]. Der relevante Bereich der Benutzerschnittstelle wird dem Modul bei der Initialisierung als Parameter übergeben.

2. Implementieren Sie in der Datei `StatsView.js` ein Modul (`Writer.StatsView`), das für die Aktualisierung der beiden Anzeige-Elemente (*Wortanzahl* und *Lesedauer*) zuständig ist. Bei Initialisierung wird dem Modul der relevante Bereich der Benutzerschnittstelle (hier: `#stats`) übergeben. Das Modul bietet eine *öffentliche* Methode an, über die die Aktualisierung der beiden Anzeige-Elemente möglich ist. Dieser Methode wird als Parameter ein Objekt übergeben, in dem die aktuelle Wortanzahl und die geschätzte Lesedauer als Eigenschaften gespeichert sind.

3. Verwenden Sie die beiden implementierten Module im  `Writer`-Modul (Datei `Writer.js`). Speichern Sie dazu die initialisierten Module in lokalen Variablen und verknüpfen Sie die erzeugten *Events* des `EditorController` mit den öffentlichen Methoden des `StatsView`.

4. Implementieren Sie selbstständig die persistente Speicherung des eingegebenen Texts in einem zusätzlichen `Storage`-Modul (Datei: `Storage.js`). Verwenden Sie dazu das `localStorage`-Objekt aus der [Storage-API](https://developer.mozilla.org/en-US/docs/Web/API/Storage). Integrieren Sie an geeigneter Stelle das Speichern und Wiederherstellen des Textes in den Anwendungsablauf.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Writer). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `solution`-Branch.


[^1]: Um die [Lesegeschwindigkeit](https://de.wikipedia.org/wiki/Lesegeschwindigkeit) zu berechnen, können Sie davon aus gehen, dass ein normaler Leser ca. 200 Wörter pro Minute lesen kann.