<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-MensaApp"></a> 
# Mensa App

In dieser Demo implementieren Sie eine einfache Anwendung, die den aktuellen Speiseplan der Uni Mensa anzeigt. Der Nutzer kann dabei das Menü für einen Tag auswählen und erhält eine, nach Speisekategorien aufgeteilte, Darstellung des Tagesmenüs für den ausgewählten Wochentag. Die Bereitstellung und Aktualisierung des Speiseplans erfolgen über den Einsatz von [AJAX](https://regensburger-forscher.de/mme/MME/ajax/#ajax) und den dadurch umgesetzten Zugriff auf eine HTTP-Schnittstelle, die die angebotenen Speisen als JSON-Datei bereitstellt. 

!!! warning "Hinweis"
	Diese Aufgabenstellung und die bereitgestellte Lösung stellen nur eine Minimalversion der Anwendung dar. Experimentieren Sie in Ihrer eigenen Lösung mit den ungenutzten Daten, die Ihnen die API bereitstellt und ergänzen Sie die Funktionalität bzw. das *User Interface* um weiteren Mehrwert für den Nutzer zu schaffen.

![Screenshot der Simon-Says-App](../../img/demos/mensa-app-complete.png)


## Mensa-API

Das Studentenwerk Niederbayern/Oberpfalz stellt den Speiseplan der Uni Mensa als [CSV-Datei zum Download](http://www.stwno.de/joomla/de/gastronomie/speiseplan/uni-regensburg/mensa-mittags) bereit. Diese Daten sind auch über eine HTTP-Schnittstelle verfügbar, die den Speiseplan in Form einer JSON-Datei anbietet. Die Speisepläne werden täglich mit dem Server des Studentenwerks abgeglichen und können für jeden Tag der aktuellen Woche einzeln abgerufen werden. Das zurückgelieferte JSON besteht aus einem Array, in dem alle verfügbaren Hauptgerichte, Suppen, Beilagen und Desserts des entsprechenden Tags als einzelne Objekte formatiert sind. Über die Eigenschaften der Objekte kann auf deren Beschreibung, Kategorie, Preis und Labels zugegriffen werden. 

Die URL zu dieser JSON-Schnittstelle lautet `https://regensburger-forscher.de:9001/mensa/uni/WOCHENTAG` wobei `WOCHENTAG` durch die ID (`mo`, `di`, `mi`, `do`, `fr`) des jeweiligen Tags ersetzt werden muss. Unter Umständen müssen Sie die URL einmalig direkt im Browser öffnen, um eine Ausnahme zu den Sicherheitseinstellung Ihres Browsers hinzuzufügen (Die Kommunikation erfolgt verschlüsselt, die verwendeten Zertifikate sind jedoch *self signed*).

Eine mögliche Antwort auf eine API-Anfrage lautet:

``` json
[
            {
                "name":"Feine Kräutersuppe",
                "day":"Mo",
                "category":"Suppe",
                "labels":"V",
                "cost":
                    {
                        "students":"0,60",
                        "employees":"0,80",
                        "guests":"1,30"
                    },
                "id": 50,
                "upvotes": 7,
                "downvotes": 2
            },

            {
                "name":"Grüne Nudeln mit Gorgonzola",
                "day":"Mo",
                "category":"HG1",
                "labels":"V",
                "cost":
                    {
                        "students":"1,90",
                        "employees":"2,70",
                        "guests":"3,50"
                    },

                "id": 12,
                "upvotes": 12,
                "downvotes": 1
            },

        ... ]
```

Die Kategorien (Eigenschaft `category`) der einzelnen Speisen sind mit verschiedenen, teilweise nummerierten, Kürzeln beschrieben dabei steht `HG*` für *Hauptgericht*, `B*` für *Beilage* und `N*` für *Dessert*.

## Aufbau der Anwendung und Ausgangslage

Das *User Interface* der Anwendung besteht aus einem Auswahlmenü (`<ul class="day-selector">`), in dem der Benutzer den anzuzeigenden Wochentag auswählen kann. Die Speisefolge des ausgewählten Tags wird, sortiert nach Kategorien, in den Kindelementen des `<div class="daily-menu">`-Elements angezeigt. Für die Darstellung eines einzelnen Eintrags wird ein *Template* verwendet, das sich in der HTML-Datei unter der ID `menu-entry` findet. Im bereitgestellten Lösungsvorschlag werden die einzelnen Einträge des Menüs leicht zeitversetzt eingeblendet.

Die Modulstruktur der Anwendung soll dem MVC- bzw. MVP-Ansatz folgen. Das zentrale Modul `Daily.App` initialisiert die übrigen Komponenten und organisiert den Anwendungsablauf. Ein- und Ausgabe der Anwendung wird in einem `ViewController`-Modul implementiert. Der Datenbestand der Anwendung wird im Model (`DataProvider`) aktualisiert und bereitgestellt.

## Aufgabenstellung

1. Implementieren Sie im bereitgestellten `DataProvider`-Modul die Aktualisierung und Bereitstellung des Speiseplans. Das Modul stellt das *Model* der Anwendung dar. Hier wird die oben beschriebene API verwendet, um das Menü für die aktuelle Woche zu beziehen und zu speichern. Die Aktualisierung wird durch den Aufruf einer öffentlichen Methode angestoßen. Nach erfolgreicher Aktualisierung steht der Speiseplan über eine öffentliche Schnittstelle bereit. Verwenden Sie die [Fetch-API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) um die Anfragen für die Speisefolge der verschiedenen Wochentage zu stellen und die Server-Antwort zu verarbeiten. Speichern Sie die - von [JSON-Strings](https://regensburger-forscher.de/mme/MME/ajax/#json) in Javascript-Objekte umgewandelte - Serverantwort in einer geeigneten Datenstruktur. Ermöglichen Sie anderen Komponenten der Anwendung das registrieren als *Observer* und kommunizieren Sie die erfolgreiche Aktualisierung des Speiseplans nach außen.

2. Implementieren Sie ein neues Modul `ViewController`, das die Informationen aus dem Speiseplan für den Benutzer anzeigt. Zur Darstellung werden die verschiedenen Listen im Element `<div class="daily-menu">` verwendet. Die einzelnen Einträge können durch den Einsatz des vorgegebenen Prototyp `Daily.EntryView` angezeigt werden. Dieser erhält bei Erstellung einen einzelnen Menüeintrag (Inhalt der von der API erhaltenen *Arrays*) übergeben und erstellt auf dessen Basis ein HTML-Element (Siehe auch `#menu-entry`-Template in der HTML-Datei). Die Objekte verfügen über Methoden zum Hinzufügen des erstellten HTML-Elements in ein Elternelement (`appentTo`) sowie dem Ein- bzw. Ausblenden (`show` und `hide`). Zusätzlich registriert der `ViewController` Auswahloperationen bei den Wochentags-*Buttons* und gibt diese Events an registrierte *Observer* weiter.

3. Initialisieren die einzelnen Komponenten im zentralen `App`-Modul und steuern Sie von dort den Ablauf der Anwendung.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-MensaApp). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `solution`-Branch.