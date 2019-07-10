<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Color-Clicker"></a> 
# Color Clicker

In dieser Aufgabe planen und implementieren Sie ein einfaches Javascript-Spiel. Dabei handelt es sich um eine Neuimplementierung des [*Color Picker*](https://gamejolt.com/games/color-picker/35110) von Peter Lauris. In diesem Spiel werden dem Spieler mehrere nahezu gleichfarbige Quadrate präsentiert. Der Farbton einer der Flächen unterscheidet sich leicht von den anderen. Der Spieler muss dieses abweichende Quadrat identifizieren. Gelingt ihm dies, wird die nächste Runde gestartet, in der die Menge der Quadrate erhöht und die Farbabweichung verringert wird. Wählt der Spieler ein falsches Quadrat aus, wird das Spiel neugestartet. Farben werden als Pastellwerte im `RGB`-Raum abgebildet. Farbabweichungen werden durch die Veränderung aller drei Kanäle um den gleichen Wert berechnet. Die einführenden Folien zum Workshop finden Sie [hier](../files/MME-Workshop-II-Intro.pdf).

## Aufgabenbeschreibung

Versuchen Sie in Teams von maximal drei Studierenden eine funktionierende Lösung für die Spielidee zu implementieren. Planen Sie zuerst Ihr Vorgehen und skizzieren Sie Architektur und Design der Anwendung. Planen Sie den Spielablauf und überlegen Sie, welche Phasen und Ereignisse diesen ausmachen bzw. beeinflussen. Halten Sie die Übereinkünfte bezüglich des Vorgehens in Form eines Planungsdokuments fest. Verwenden Sie auch für diese Aufgabe die [*vertical slice*](https://en.wikipedia.org/wiki/Vertical_slice)-Methode und implementieren Sie nach Skizzieren des Vorgehens zuerst die wesentlichen Spielfeatures, bevor Sie diese in der Breite durch Feedback-Funktionen und andere Erweiterungen ergänzen.

!!! note "Mob programming"
	Nutzen Sie zur Codierung der Anwendung die [*mob programming*](https://en.wikipedia.org/wiki/Mob_programming)-Methode, eine Abwandlung des [*pair programming*](../MME/pair-programming.md). Beim *mob programming* arbeitet eine größere Gruppe von Entwicklern und Entwicklerinnen gemeinsam und gleichzeitig am selben Codeabschnitt. Wie beim *pair programming* bedient dabei nur eine Person die verwendeten Arbeitsgeräte (d.h. Maus und Tastatur des Entwicklungsrechners). Diese Person formuliert auf Basis der Kommentare und Diskussionen der übrigen Beteiligten den eigentlichen Code. Die Rolle wird abwechselnd von allen Teammitgliedern übernommen. Die Intention hinter dieser Praxis ist es, einen wesentlichen Teil der *Codebase* im wörtlichen Sinne gemeinsam zu entwickeln.

### Vorbereitung

Das notwendige Repository können Sie über [diesen Link](https://classroom.github.com/g/AVItOiRr) erstellen. Verwenden Sie konsequent `git` um Ihren Fortschritt zu dokumentieren. Versuchen Sie dabei, Änderungen zuerst lokal zu implementieren und nach erfolgreicher Integration in einen `dev`-*Branch* in das *Remote*-Repository zu überführen. Beim Erreichen größerer Meilensteine können Sie die diesen *Branch* mit dem `master`-*Branch* *mergen*.

Beginnen Sie erst mit der eigentlichen Codierung der Aufgabe, nachdem Sie alle wesentlichen Komponente der Software festgelegt haben. Für jedes größere Modul sollte eine Datei im Repository angelegt sein, in der Sie Aufgaben, Schnittstellen und Kollaborationspartner festhalten. Legen Sie bereits im Vorfeld wichtige *Events* und deren Eigenschaften fest.

## Anforderungen

Der Spielablauf der fertigen Anwendung setzt diese Anforderungen um:

- Für jede Runde wird ein *Game State* mit allen wichtigen Parametern erstellt. Die Farbe der Quadrate wird zufällig ausgewählt. Die Anzahl der Quadrate sowie die Schwierigkeit bezüglich der Farbabweichung steigt mit jeder Runde und wird durch sinnvolle Vorgabe- und Grenzwerte kontrolliert.

- Dem Spieler werden die generierten Quadrate angezeigt. Klickt dieser auf das korrekte abweichende Quadrat, wird die nächste Spielrunde gestartet. Wählt er das falsche Element aus, wird das Spiel auf den initialen Zustand zurückgesetzt.

- Wichtige Spielereignisse werden dem Spieler über passende Kanäle mitgeteilt.

- Der höchste jemals erreichte Level (*Highscore*) wird neben dem aktuellen *Level* im *User Interface* angezeigt. Diese Information bleibt *Session*-übergreifend erhalten.


<video controls>
  <source src="../videos/color-clicker-demo.mp4" type="video/mp4">
  	Ihr Browser unterstützt die Wiedergabe dieses Videos leider nicht.
</video> 

<div class="img-label">Video einer einfachen Implementierung des Spiels</div>


## Vorgaben im Starterpaket

Das Starterpaket gibt nur die HTML-Struktur bzw. die Benutzeroberfläche vor. Die korrekte Anordnung der Quadrate und etwaige Feedback-Elemente müssen Sie selbstständig ergänzen.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Color-Clicker). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.