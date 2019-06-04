<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-MensaApp"></a> 
# Mensa App

In dieser Demo implementieren Sie eine einfache Anwendung, die den aktuellen Speiseplan der Uni Mensa anzeigt. Der Nutzer kann dabei das Menü für einen Tag auswählen und erhält eine, nach Speisekategorien aufgeteilte, Darstellung des Tagesmenüs für den ausgewählten Wochentag. Die Bereitstellung und Aktualisierung des Speiseplans erfolgen über den Einsatz von [AJAX](https://regensburger-forscher.de/mme/MME/ajax/#ajax) und den dadurch umgesetzten Zugriff auf eine HTTP-Schnittstelle, die die angebotenen Speisen als JSON-Datei bereitstellt. 

!!! warning "Hinweis"
	Diese Aufgabenstellung und die bereitgestellte Lösung stellen nur eine Minimalversion der Anwendung dar. Experimentieren Sie in Ihrer eigenen Lösung mit den ungenutzten Daten, die Ihnen die API bereitstellt und ergänzen Sie die Funktionalität bzw. das *User Interface* um weiteren Mehrwert für den Nutzer zu schaffen.

![Screenshot der Simon-Says-App](../../img/demos/mensa-app-complete.png)


## Mensa-API

Das Studentenwerk Niederbayern/Oberpfalz stellt den Speiseplan der Uni Mensa als [CSV-Datei zum Download](http://www.stwno.de/joomla/de/gastronomie/speiseplan/uni-regensburg/mensa-mittags) bereit. Diese Daten sind auch über eine HTTP-Schnittstelle verfügbar, die den Speiseplan in Form einer JSON-Datei anbietet. Die Speisepläne werden täglich mit dem Server des Studentenwerks abgeglichen und können für jeden Tag der aktuellen Woche einzeln abgerufen werden. Das zurückgelieferte JSON besteht aus einem Array, in dem alle verfügbaren Hauptgerichte, Suppen, Beilagen und Desserts des entsprechenden Tags als einzelne Objekte formatiert sind. Über die Eigenschaften der Objekte kann auf deren Beschreibung, Kategorie, Preis und Labels zugegriffen werden. 

Die URL zu dieser JSON-Schnittstelle lautet `https://regensburger-forscher.de:9001/mensa/uni/WOCHENTAG` wobei `WOCHENTAG` durch die ID (`mo`, `di`, `mi`, `do`, `fr`) des jeweiligen Tags ersetzt werden muss. Die Kommunikation erfolgt verschlüsselt.

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

Die Modulstruktur der Anwendung soll dem MVC- bzw. MVP-Ansatz folgen. Das zentrale Modul `index.js` initialisiert die übrigen Komponenten und organisiert den Anwendungsablauf. Ein- und Ausgabe der Anwendung wird in einem `ViewController`-Modul (`ui/ViewController.js`) implementiert. Der Datenbestand der Anwendung wird im Model (`data/DataManager.js`) aktualisiert und bereitgestellt. Zusätzlich benötigte Module und Prototypen werden innerhalb der jeweiligen Unterordner angelegt. Versuchen Sie konsequent, die Benutzeroberfläche (*UI*) von der Datenschicht der Anwendung zu trennen. Abstrahieren Sie Aufgaben und Konzepte, wie z.B. das Herunterladen der Speisepläne oder das Erstellen von UI-Elementen und stellen Sie diese Funktionalität über separate Module bereit.

## Komplexität

Überlegen Sie sich beim Entwurf der Software, an welcher Stelle Sie komplexere Funktionalitäten implementieren wollen. Versuchen Sie, die Schnittstelle zu den Modulen möglichst einfach zu gestalten und im Gegenzug aufwendigere Aufgaben im inneren der Module zu implementieren.

## Aufgabenstellung

1. Implementieren Sie zuerst das Aktualisieren und Bereitstellen der Speiseplandaten. Beginnen Sie damit, das Herunterladen einer beliebigen (JSON-formatierten) Datei zu ermöglichen und entwerfen Sie auf Basis dieser Funktion das Beziehen der notwendigen Speiseplandaten für die fünf Wochentage. 

2. Stellen Sie über den `DataManger` eine öffentliche Schnittstelle zum Aktualisieren des Speiseplans und zur Ausgabe der Speisefolge für einen einzelnen Tag bereit. Innerhalb des Moduls müssen Sie die von der API bezogenen Daten ggf. Zwischenspeichern und Vorverarbeiten, um diese für die anderen Komponenten bereit stellen zu können. Überlegen Sie sich, in welcher Form das Modul andere Stellen der Anwendung über den erfolgreichen oder fehlgeschlagenen Versuch der Datenaktualisierung benachrichtigt.


3. Implementieren Sie ein `ViewController`-Modul, das die Informationen aus dem Speiseplan für den Benutzer anzeigt. Zur Darstellung werden die verschiedenen Listen im Element `<div class="daily-menu">` verwendet. Verwenden Sie das *Template* aus der HTML-Datei und ggf. weitere Module/Prototypen um die einzelnen Einträge des Speiseplans abzubilden. Stellen Sie sicher, das die Benutzerinteraktion mit dem Auswahlelement (`<ul class="day-selector">`) aus dem Modul nach Außen kommuniziert werden kann.

4. Implementieren Sie im zentralen Modul in der Datei `index.js` die Initialisierung und Steuerung der Anwendung bzw. die Kommunikation zwischen den anderen Modulen.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-MensaApp). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `solution`-Branch.