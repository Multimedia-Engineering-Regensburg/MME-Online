<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Simon-Says"></a> 
# Simon Says

In dieser Demo planen und implementieren Sie eine einfache *Javascript*-Variante des Reaktionsspiels [Simon](https://en.wikipedia.org/wiki/Simon_(game)). Dem Spieler wird eine zufällige Abfolge verschiedener Farbsignale vorgeführt, das anschließend in der richtigen Reihenfolge und innerhalb eines bestimmten Zeitfensters reproduziert werden muss. In dieser Anwendung werden die Farbsignale durch hervorheben unterschiedlich-farbiger Kreissegmente erzeugt. Die Eingabe erfolgt durch das Anklicken derselben Segmente. Für die Realisierung der Anwendungen werden die verfügbaren APIs zur zeitgesteuerten bzw. wiederholten Ausführung von Methoden ([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) und [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)) benötigt.

!!! warning "Hinweis"
	Im verlinkten Lösungsvorschlag wird eine Minimalversion des Spiels implementiert. Sinnvolle Möglichkeiten zur Erweiterung der Spielidee sind die kontinuierliche Steigerung des Schwierigkeitsgrads durch komplexere Farbmuster oder verbessertes Feedback an den Nutzer (z.B. durch die Integration von [*Sound*-Ausgabe](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)). Versuchen Sie, Ihre eigene Lösung entsprechend zu ergänzen.

![Screenshot der Simon-Says-App](../../img/demos/simon-complete.png)

## Aufbau der Anwendung und Ausgangslage

Das *User Interface* der Anwendung besteht vorrangig aus den farbigen Kreissegmenten sowie einem Bereich zur Anzeige von Text-Nachrichten. Die Kreissegmente sind als Kindelemente des `#board`-Elements angelegt. Die farbliche Hervorhebung eines einzelnen Segments kann durch das temporäre Hinzufügen der bereitgestellten CSS-Klasse `highlight` erreicht werden.

Die Anwendung wird über ein zentrales Modul `App` gesteuert, dass im *Namespace* (`SimonSays`) der Anwendung gespeichert wird. Hier werden die übrigen Module erstellt und miteinander verknüpft. Die Spiellogik wird dabei separat von der Interaktion- und Anzeigekomponente implementiert und gesteuert.  

Die Komponente zur Anzeige von Text-Nachrichten ist bereits vollständig in der Datei `MessageView.js` vorhanden. Das dort implementierte Modul verfügt über öffentliche Methoden zur Initialisierung der Komponente (`init(messageEl)`), zum Setzen des angezeigten Texts (`setText(text))` sowie zum Ein- und Ausblenden des Elements (`show` bzw. `hide`). 

Im Starterpaket befinden sich Dateien für weitere Module, die bereits mit dem HTML-Dokument verknüpft worden sind. Die Spiellogik kann im `GameManager` implementiert werden, die Aktualisierung des *User Interface* und die Registrierung der Benutzereingaben soll im `BoardViewController` erfolgen. Die konkrete Ausgestaltung aller Module bleibt Ihnen selbst überlassen.

### Ablauf

In der fertigen Anwendung soll der folgende Ablauf vollständig und fehlerfrei implementiert werden:

1. Zu Beginn erstellt die Anwendung auf Basis der verfügbaren Farben (rot, blau, gelb und grün) ein zufälliges Muster. Dabei werden insgesamt vier Farben ausgewählt, wobei einzelne Farben mehrfach vorkommen dürfen. Mögliche Muster sind z.B. `rot, rot, grün, blau` oder `grün, gelb, rot, blau`.

2. Die Anwendung spielt dem Nutzer das ausgewählte Muster vor. Dazu werden die Farben in der ausgewählten Reihenfolge einzeln hervorgehoben (sieh oben). Jede Farbe wird dabei für 500ms angezeigt. Zwischen dem Anzeigen zweier Farben erfolgt stets eine Pause von 500ms, in der keine Farbe hervorgehoben wird.

3. Die Anwendung weist den Spieler durch eine Text-Nachricht auf den Beginn der Runde hin. Der Benutzer hat nun die Möglichkeit, das vorher angezeigte Muster durch Anklicken der Farbsegmente in korrekter Reihenfolge einzugeben.

4. Nachdem der Spieler vier Segmente angeklickt hat bestimmt die Anwendung den Ausgang der Runde. Dazu wird kontrolliert, ob der Spieler das korrekte Muster eingegeben hat und die Eingabe innerhalb einer vorgegebenen Zeit (5000ms) erfolgte.

5. Je nach Ausgang der Runde wird dem Spieler ein positiver oder negativer Text angezeigt. Nach einer Verzögerung von 3000ms startet das Spiel eine neue Runde.

## Aufgabenstellung

In dieser Aufgabe steht nicht die Implementierung der beschriebenen Funktionalität im Vordergrund. Stattdessen sollen Sie die Aufgabenverteilung sowie die Kollaboration der beteiligten Module planen, skizzieren und durch die öffentlichen Schnittstellen der Module definieren.

1. Erstellen Sie für jedes der drei zu implementierenden Module eine sogenannte [*Class-responsibility-collaboration card*](https://en.wikipedia.org/wiki/Class-responsibility-collaboration_card). Notieren Sie, welche Aufgaben das Modul im Rahmen des beschriebenen Anwendungsablaufs erfüllen muss. Beschreiben Sie, mit welchen anderen Modulen dazu kollaboriert werden muss und welche Informationen aus dem Modul heraus kommuniziert werden müssen. Für die Erstellung der Karten können Sie Stift und Papier oder z.B. [diesen Online-Editor](https://guidolx.github.io/simple-crc-app/) verwenden.

2. Erstellen Sie eine grobe Skizze, die darstellt welche *Events* von welchen Modulen an welche *Observer* versendet werden müssen. Notieren Sie dabei auch welche Informationen mit dem *Event* kommuniziert werden (*payload*).

3. Implementieren Sie auf der Basis Ihrer Überlegungen die Struktur der beteiligten Module. Konzentrieren Sie sich dabei auf die Bereiche der Module, die in direktem Zusammenhang mit deren öffentlichen Schnittstellen bzw. der Tätigkeit des Moduls als *Observable* bzw. `EventTarget` stehen. Nicht-öffentliche Methoden sollten in diesem Schritt nur als [*stub*](https://en.wikipedia.org/wiki/Method_stub) definiert werden.

4. Implementieren Sie in einem letzten Schritt die eigentliche Funktionalität der Anwendung.


## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Simon-Says). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `solution`-Branch.