<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-ToDo-List"></a> 
# ToDo-Liste

In dieser Demo implementieren Sie eine einfache Javascript-Anwendung in Form einer *ToDo-Liste*. Nutzer können individuelle Aufgaben zur Liste hinzufügen. Die Aufgaben werden nach dem Schließen des Browser nicht gespeichert. Im späteren Verlauf des Kurses werden wir passende Lösungen zur Implementierung einer Persistenzschicht kennen lernen. Mittels *Checkbox* kann der Status einer Aufgabe zwischen *offen* und *erledigt* gewechselt werden. Über einen zusätzlichen *Button* kann der Nutzer alle *erledigten* Aufgaben aus der Liste entfernen. Die Aufgabe dient als Überblick über die grundlegenden Mechanismen, die im Rahmen des Kurses zur Entwicklung von *Browser*-basierten Anwendungen eingesetzt werden. 

## Aufbau der Anwendung

Die Anwendung besteht aus HTML- und CSS-Dateien, in denen der Aufbau und die Gestaltung der Benutzeroberfläche definiert wird. Die Logik zum dynamischen Hinzufügen und Editieren der einzelnen Aufgaben wird in Javascript implementiert. Die einzelnen Komponenten dieser Programmlogik werden - in Form von Modulen - in separaten Javascript-Dateien verfasst. Die HTML-Datei dient als Einstiegspunkt in den Anwendungsablauf. Hier werden sowohl die notwendigen CSS-Dateien zur korrekten Darstellung der Oberfläche als auch die zentrale Javascript-Datei zur Initialisierung der Anwendung eingebunden.

## Ausgangslage

Innerhalb der HTML-Datei finde sich eine unsortierte Liste (`<ul>`), die später dazu dient die einzelnen Aufgaben anzuzeigen. Jede Aufgabe wird dabei durch ein Listenelement (`<li>`) repräsentiert, das über weitere Kindelemente verfügt. Im *Template* mit der ID `task-template` wird der Aufbau eines solchen *Task*-Elements vorgegeben. Zusätzlich findet sich in der initialen HTML-Struktur ein Menü (`<div id="menu">`) mit zwei Schaltflächen zum Hinzufügen eines neue Eintrags (`.new-task`) sowie zum Löschen der erledigten Aufgaben (`.clear-list`). Die CSS-Regeln zur Gestaltung dieser Element werden in die Datei `styles.css` definiert, die über ein `<link>`-Tag in die HTML-Datei eingebunden wird.

Mit der Datei `app.js` ist eine erste Quellcodedatei für den Javascript-Teil der Anwendung vorgegeben. Diese Datei wird über einen `<script>`-Tag eingebunden und beim Laden der HTML-Datei ausgeführt. In der Datei finden Sie die Anweisung `console.log("Hello World")`, die den String *Hello World* auf der im Browser eingebauten [Konsole](https://developer.mozilla.org/en-US/docs/Web/API/Console) ausgibt. Die Konsole erreichen Sie im *Firefox Browser* mit dem Tastaturkürzel `Ctrl` + `Shift` + `c` und im *Chrome Browser* über `Ctrl` + `Shift` + `j`.

## Aufgabenstellung

**Achtung**: Die Aufgabe wird im Rahmen des Kurses gemeinsam und Schritt-für-Schritt implementiert. Diese Liste der Teilaufgaben dient dazu, die Abläufe im Nachhinein zu rekapitulieren. Es wird nicht davon ausgegangen, dass Sie alle Schritte ohne Vorwissen selbstständig implementieren können.

1. Implementieren Sie in einer neuen Javascript-Datei einen Prototypen (`Task`), der eine einzelne Aufgabe repräsentiert. Eine Aufgabe hat einen Text, eine eindeutige ID sowie einen Status, der aussagt, ob die Aufgabe erledigt wurde. Status und Text können später geändert werden.

2. Implementieren Sie in einer neuen Javascript-Datei einen Prototypen (`TaskView`), der ein Element des UIs repräsentiert, das zur Anzeige einer einzelnen Aufgabe verwendet werden kann. Beim Erstellen des *Views* wird eine Aufgabe (Siehe 1.) übergeben. Der *View* erstellt - auf Basis des passenden *Templates* aus der HTML-Datei - ein HTML-Element, in dem die Eigenschaften der übergebenen Aufgabe angezeigt werden. Der *View* Verfügt über eine Methode, mit deren Hilfe das erstelle Element ausgelesen werden kann. Zusätzlich kann über eine `focus`-Methode das Eingabefeld (siehe *Template*) selektiert werden. Der *View* überwacht die *UI Events*, die der Nutzer auf den verschiedenen Kindelementen auslösen kann: (1) Selektieren bzw. Deselektieren der *Checkbox* (*Event*: `change`) sowie (2) Ändern des Aufgabentextes im `<input>`-Element (*Event*: `input`). Als Reaktion auf diese Events wird das ursprünglich übergebene `Task`-Objekt entsprechend manipuliert.

3. Importieren Sie die beiden erstellten Prototypen in der Datei `apps.js`. Erstellen Sie dort eine Initialisierungsmethode, die beim Programmstart aufgerufen wird. Hier werden zuerst die beiden Schaltflächen der Anwendung selektiert und anschließend *Listener* auf die *Click*-Events beider Element registriert. Erstellen Sie in der Initialisierungsmethode eine [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) zum Speichern der einzelnen *Tasks*. Implementieren Sie die weitere Logik der Anwendung: Beim Klick auf die Schaltfläche zum Hinzufügen einer Aufgabe wird eine neues `Task`-Objekt erstellt und zur *Map* hinzugefügt. Anschließen wird auf Basis des *Tasks* ein `TaskView` erstellt und als Kindelement zum entsprechenden HTML-Element (`<ul class="task-list">`) hinzugefügt. Beim Klick auf die zweite Schaltfläche werden alle abgeschlossenen Aufgaben aus der *Map* und aus der Benutzeroberfläche entfernt. 

![Screenshot der ToDo-Liste](img/todo-list-complete.png){: class="center"}

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-ToDo-List). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.