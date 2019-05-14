<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-AmbiPlayer"></a> 
# AmbiPlayer

In dieser Demo erstellen Sie eine *Ambilight*- bzw. [*bias lighting*](https://en.wikipedia.org/wiki/Bias_lighting)-Funktion für Video-Elemente im Browser. Entwerfen und Implementieren Sie dazu eine *Library*, die beliebige DOM-Elemente mit einem farbigen *Glow*-Effekt umgibt. Das Setzen der Leuchtfarbe erfolgt über eine öffentliche Funktion, der entweder ein *String* ([CSS-Farbwert](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)), ein `Image`-Objekt oder ein `<video>`-Element übergeben wird. In den beiden letzten Fällen wird die Leuchtfarbe aus der Durchschnittsfarbe des Bildes bzw. des aktuellen Inhalts (*Frames*) des `<video>`-Elements bestimmt. Verwenden Sie die erstellte *Library*, um den vorhandenen *Video Player* mit einem *Ambilight* zu versehen, das sich während der Videowiedergabe dynamisch an dessen aktuellen Inhalt anpasst. 

!!! warning "Hinweis"
	Implementieren Sie zuerst eine rudimentäre Version der Anwendung, die alle wichtigen Teilschritte implementiert, um eine vollständige, aber prototypische, Demonstration der Funktionalität zu erlauben. Beginnen Sie erst im Anschluss damit, die einzelnen Teilbereiche vollständig auszubauen. Das aus einem solchen Vorgehen entstehende Artefakt bezeichnet man im Projektmanagement, vor allem im Kontext der Videospielentwicklung, häufig als [*vertical slice*](https://en.wikipedia.org/wiki/Vertical_slice).

![Screenshot des AmbiPlayer](../../img/demos/ambi-player-complete.png)

## Aufbau der Anwendung und Ausgangslage

HTML- und CSS-Dateien der Anwendung sind vollständig vorgegeben. Das *User Interface* des *Video Players* wird im Element mit der ID `player`definiert. Dort befinden sich sowohl das für die Wiedergabe verwendete `<video>`-Element als auch die Schaltflächen zu dessen Steuerung bzw. zum Setzen der abzuspielenden Datei (`.controls`). 

Als *Namespace* der Anwendung wird das globale Objekt `AmbiPlayer` verwendet. Das zentrale Modul `App` befindet sich in der Datei `app.js`. In dessen `init`-Methode wird das Modul `VideoPlayer` initialisiert, das den im HTML-Code definierten *Video Player* verwaltet. Dessen Logik ist vollständig implementiert: Der Nutzer kann die Wiedergabe über die vorhandenen Schaltflächen steuern und über den *Upload*-Button eine lokale Datei auswählen, die abgespielt werden soll. Der *Player* unterstützt Dateien im `mp4`-Container. 

**Videodateien für das Testen den Anwendung können Sie [hier](https://sample-videos.com/) herunterladen.**

Die fertige Anwendung soll in etwa so aussehen:

![Screenshot des AmbiPlayer](../../img/demos/ambi-player-demo.gif)

## Aufgabenstellung

1. Erweitern Sie das Modul `VideoPlayer`: Ergänzen Sie die vorhanden Funktionalität so, dass interessierte *Listener* regelmäßig per *Event*  vom *Video Player* informiert werden, wenn sich der dargestellte *Content* ändert. Nutzen Sie hierzu das bereits zur Aktualisierung der Zeitleiste verwendete *Event* `timeupdate` des `<video>`-Elements.

2. Ergänzen Sie eine *Callback*-Methode im zentralen `App`-Modul und fangen Sie das vom *Video Player* ausgesendete *Event* ab.

3. Erstellen Sie die *Ambilight*-Bibliothek in einer separaten Datei. Nutzen Sie einen eigenen *Namespace* für das Bereitstellen der *Library*-Funktionen.

4. Planen Sie die öffentliche Schnittstelle Ihrer Bibliothek: Wie sollen *Client*-Programmierer oder -Programmiererinnen die von Ihnen (dem *Implementer*) bereitgestellte Funktionalität verwenden? Wie augmentieren Sie ein vorhandenes DOM-Element mit dem durch die Bibliothek bereitgestellten *Ambilight*? Notieren Sie Ihre Überlegungen als Kommentare in der erstellten Datei (siehe Punkt `3`).

5. Erstellen Sie die Bibliothek und verknüpfen Sie die implementierte Funktionalität mit dem *Video Player* bzw. dem in Punkt `2` abgefangenen *Event*.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-AmbiPlayer). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.