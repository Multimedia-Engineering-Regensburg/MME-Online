<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Simon-Says"></a> 
# Simon Says

In dieser Demo planen und implementieren Sie eine einfache *Javascript*-Variante des Reaktionsspiels [Simon](https://en.wikipedia.org/wiki/Simon_(game)). Dem Spieler wird eine zufällige Abfolge verschiedener Farbsignale vorgeführt, das anschließend in der richtigen Reihenfolge reproduziert werden muss. In dieser Anwendung werden die Farbsignale durch hervorheben unterschiedlich-farbiger Kreissegmente erzeugt. Die Eingabe erfolgt durch das Anklicken derselben Segmente. Für die Realisierung der Anwendungen werden die verfügbaren APIs zur zeitgesteuerten bzw. wiederholten Ausführung von Methoden ([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) und [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)) benötigt.

!!! warning "Limitierungen"
	Im verlinkten Lösungsvorschlag wird eine Minimalversion des Spiels implementiert. Sinnvolle Möglichkeiten zur Erweiterung der Spielidee sind die kontinuierliche Steigerung des Schwierigkeitsgrads durch komplexere Farbmuster, ein vorgegebenes Zeitintervall für die Reproduktion des Musters oder verbessertes Feedback an den Nutzer (z.B. durch die Integration von [*Sound*-Ausgabe](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)). Versuchen Sie, Ihre eigene Lösung entsprechend zu ergänzen.

![Screenshot der Simon-Says-App](img/simon-complete.png)

### Spielablauf

In der fertigen Anwendung soll der folgende Ablauf vollständig und fehlerfrei implementiert werden:

1. Zu Beginn jeder Runde erstellt die Anwendung auf Basis der verfügbaren Farben (rot, blau, gelb und grün) ein zufälliges Muster. Dabei werden insgesamt vier Farben ausgewählt, wobei einzelne Farben mehrfach vorkommen dürfen. Mögliche Muster sind z.B. `rot, rot, grün, blau` oder `grün, gelb, rot, blau`. Das aktuelle Level sowie der allgemeine Fortschritt (Verhältnis vom aktuellen Level zur maximalen Anzahl an Level) wird mittels des entsprechenden UI-Elements dargestellt.

2. Die Anwendung spielt dem Nutzer das ausgewählte Muster vor. Dazu werden die Farben in der ausgewählten Reihenfolge einzeln hervorgehoben (sieh oben). Jede Farbe wird dabei für eine in der Konfigurationsdatei definierte Zeit angezeigt. Zwischen dem Anzeigen zweier Farben erfolgt stets eine Pause, deren Dauer ebenfalls in der Konfigurationsdatei definiert ist und in der keine Farbe hervorgehoben wird.

3. Der Benutzer hat nun die Möglichkeit, das vorher angezeigte Muster durch Anklicken der Farbsegmente in korrekter Reihenfolge einzugeben.

4. Nachdem der Spieler vier Segmente angeklickt hat bestimmt die Anwendung den Ausgang der Runde. Dazu wird kontrolliert, ob der Spieler das korrekte Muster eingegeben hat.

5. Je nach Ausgang der Runde wird dem Spieler ein positiver oder negativer Text angezeigt und das Spiel mit dem nächsten Level oder einem vollständigen Neustart (*Reset*) fortgesetzt. 

## Aufbau der Anwendung und Ausgangslage

Das *User Interface* der Anwendung besteht vorrangig aus den farbigen Kreissegmenten, einem Bereich zur Anzeige von Text-Nachrichten sowie einem Fortschrittsbalken, der den aktuell gespielten Level anzeigt. Die Kreissegmente sind als Kindelemente des `#board`-Elements angelegt. Die farbliche Hervorhebung eines einzelnen Segments kann durch das temporäre Hinzufügen der bereitgestellten CSS-Klasse `highlight` erreicht werden.

Die Anwendung wird über ein zentrales Modul gesteuert, das in der Datei `index.js` implementiert wird. Hier werden die übrigen Module erstellt und miteinander verknüpft. Die Spiellogik wird dabei separat von den Interaktion- und Anzeigekomponenten implementiert und gesteuert.  

Neben den unvollständigen implementierten zentralen Modul (`index.js`) finden Sie zwei vollständige Module im Starterpaket. Über das Modul *Observer* (`utils/Observer.js`) werden Prototypen für ein *Observer*- sowie ein *Event*-Objekt bereitgestellt. Das Modul aus der Datei `utils/config.js` stellt wichtige Parameter für den Spielablauf bereit, die von den übrigen Komponenten der Anwendung verwendet werden.

Die zusätzlich notwendige Funktionalität wird in weiteren Modulen implementiert. Halten Sie sich dabei an die folgende, grobe Aufteilung:

Modul | Datei | Beschreibung | Komplexität | Abhängig von | Kooperiert mit
:-----|:------|:-------------|:------------|:---------------|---------------
**Pattern** | `game/Pattern.js` | Im Pattern-Modul wird ein Prototyp zur Repräsentation eines einzelnen Farbmusters bereitgestellt. Ein Muster besteht dabei aus den anzuzeigenden bzw. zu erratenden Farben sowie Informationen darüber wie Lange die Farben in der Merkphase angezeigt werden sollen und wie lange dabei die Pause zwischen zwei angezeigten Farben dauern soll. | simple | - | -
**Level** | `game/Level.js` | Im Level-Modul wird ein Prototyp zur Repräsentation eines Levels bereitgestellt. Level bestehen dabei aus einer eindeutigen, aufsteigenden Nummer sowie einem vom Spieler zu merkenden bzw. zu erratenden Farbmuster. | simple | Pattern | -
**Game** | `game/Game.js` | Das Game-Modul bildet den logischen Kern der Anwendung und simuliert das Spiel. Hier werden die Level mit zufälligen Farbmustern erstellt und die Nutzereingaben validiert. Das Modul informiert über erfolgreiche und fehlgeschlagene Versuche, das Muster zu erraten. Es bietet eine Schnittstelle zur Rückgabe des jeweils nächsten Levels sowie zur Zwischenspeicherung (Buffer) der eingegebenen Farben an. | complex | Pattern, Level | Main
**View** | `ui/View.js` | Im View-Modul wird ein Prototyp bereitgestellt, der als Grundlage für alle weiteren UI-Elemente der Anwendung dient. Die hier definierten Grundfunktionalitäten betreffen das Setzten eines zu verwaltenden DOM-Bereichs in Form eines vorselektierten HTML-Elements sowie das Ein- und Ausblenden dieses Elements. Alle Views sind Observer (Vgl.: js/utils/Observer.js). | simple | - | -
**MessageView** | `ui/MessageView.js` | Das Message-View erlaubt das Anzeigen von Textinformationen. Es verwaltet das HTML-Element mit der ID message. Neben den Grundfunktionalitäten eines Views bietet es auch eine Schnittstelle zum Ändern des angezeigten Texts (innerHTML-Eigenschaft des verwalteten HTML-Elements) an. | medium | View | Main
**ProgressView** | `ui/ProgressView.js` | Der Progress-View verwaltet den Status-Balken, der über das HTML-Element mit der ID progress dargestellt wird. Er bietet eine Schnittstelle zum Rendern des aktuellen Levels an. Dabei wird die Levelnummer im Element mit der Klasse .level angezeigt und der Fortschritt, das prozentuale Verhältnis von aktuellem zu maximalen Level über die Länge (vw) der Elements mit der CSS-Klasse .value dargestellt. | medium | Level, View | Main
**GameView** | `ui/GameView.js` | Das Game-View verwaltete das zentrale UI-Element des Spiels (ID board). Es erlaubt das zeitgesteuerte Abspielen eines vorgegebenen Musters (Pattern) durch entsprechend langes hervorheben der einzelnen Segmente (CSS-Klasse highlight) und informiert registrierte Observer u.a. während der Ratephase über die Eingaben des Nutzers, also die jeweils angeklickten Farbsegmente.  | complex | View | Main
**Main** | `index.js` | Das zentrale Modul der Anwendung steuert die initiale Einrichtung der übrigen Module, fängt relevante Events aus diesen ab und dient als Vermittler zwischen den verschiedenen Anwendungsbestandteilen. In Abhängigkeit des jeweiligen Game States, den das Modul regelmäßig über das Game-Modul empfängt,  werden die verschiedenen Views ein- und ausgeblendet bzw. inhaltlich aktualisiert.  | complex | - | MessageView, ProgressView, GameView, Game

Überlegen Sie sich jeweils, welche Informationen die Module für andere Komponenten bereitstellen und über was für eine Schnittstelle (z.B. exportierte Objekte oder Methoden) diese zugänglich gemacht werden. Die Angaben zu den Abhängigkeiten und Kooperationspartner sind nur als Vorschlag zu verstehen und müssen nicht zwangsläufig auch in Ihrer Lösung so umgesetzt werden.

## Aufgabenstellung

Versuchen Sie die die Aufgabenstellung gemeinsam mit einem Partner bzw. einer Partnerin zu lösen:

1. Definieren Sie anhand der Modulbeschreibungen und -Abhängigkeiten eine Implementierungsreihenfolge. Legen Sie die Dateien für die notwendigen Module an und skizzieren Sie, vor dem Beginn der Implementierung, grob, welche Methoden oder *Events* aus dem jeweiligen Modul nach außen gegeben werden.

2. Beginnen Sie mit der Implementierung der wenig komplexen Module. Arbeiten Sie dabei zusammen und entwickeln Sie eine gemeinsame Lösung zu den einzelnen Modulen.

3. Beginnen Sie mit der Arbeit an den komplexeren Modulen und verwenden Sie dazu die simpleren Module bzw. Prototypen. Nutzen Sie dabei das zentrale Modul zum Testen einzelner Funktionen (z.B. *Generieren eines zufälligen Musters*, *Wiedergabe des Musters* oder *Korrekte Weitergabe der angeklickten Farben*) bevor Sie diese in den übergeordneten Spielablauf integrierten.

4. Führen Sie am Ende alle Stränge der Anwendung im zentralen Modul (`index.js`) zusammen. Zentrale Phasen oder Ereignisse des Spiels (z.B. gewonnene oder verlorene Runden) werden von den zuständigen Komponenten durch *Events* kommuniziert, die hier abgefangen und verarbeitet werden. 


## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Simon-Says). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.