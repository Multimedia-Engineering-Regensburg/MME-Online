<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Bundesliga"></a> 
# Bundesliga-Tabelle

In dieser Demo implementieren Sie eine Bundesliga-Tabelle. Datengrundlage sind die Informationen, die frei über die *JSON*-API der [OpenLigaDB-Website](https://www.openligadb.de/) bezogen werden können. Für den Zugriff auf die API wird [AJAX](../../MME/ajax) verwendet. In dieser Übung werden keine neuen Inhalte vermittelt. Statt dessen sollen Sie die Methode des [*Pair Programming*](../../Tutorials/pair-programming) ausprobieren. Folgen Sie dazu den hier bereitgestellten Anweisungen.

![Screenshot der Bundesliga-App](../../img/demos/bundesliga-app-complete.png)

## Informationen zur OpenLigaDB-API

Eine vollständige Dokumentation der API finden Sie [hier](https://github.com/OpenLigaDB/OpenLigaDB-Samples). Zur Lösung der Aufgabenstellung werden nur ein Teil der bereitgestellten *Endpoints* benötigt:

- Die aktuelle Bundesliga-Tabelle beziehen Sie über die URL `https://www.openligadb.de/api/getbltable/bl1/2018`. Zurückgegeben wird ein *JSON*-String, der, entsprechende [verarbeitet](../../MME/ajax/#json), im Model der Anwendung verwendet werden kann.

- Die Partien eines beliebigen Spieltags der aktuellen Saison beziehen Sie über die URL `https://www.openligadb.de/api/getmatchdata/bl1/2018/{{SPIELTAG}}`, wobei der *substring* `{{SPIELTAG}}`durch die Nummer des entsprechenden Spieltags ersetzt werden muss.

## Beschreibung

Die Anwendung zeigt die aktuelle Tabelle der 1. Fußballbundesliga an. Die Tabelle wird im Element `<div id="table"></div>` angezeigt. Die einzelnen Mannschaften werden, korrekt sortiert, als Zeilen im `tbody`-Element eingetragen. Verwenden Sie dazu das *Template*, das Sie im Element mit der ID `table-entry-template` finden. In der Tabelle werden Informationen wie gespielte Spiele, aktuelle Punkte und Torverhältnis angezeigt. Zusätzlich wird für jede Mannschaft der Gegner für den nächsten Spieltag angezeigt. *Hovert* der Nutzer über eine Zeile der Tabelle, wird die Zeile mit dem jeweils nächsten Gegner der ausgewählten Mannschaft hervorgehoben. 

Nutzen Sie den Prototypen `Team` (Datei: `resources/js/Team.js`) zur Repräsentation einer - logischen - Mannschaft. Der Prototyp verfügt über eine Methode `fromData`, die es erlaubt, ein `Team`-Objekt auf Basis der Daten-Objekt zu erzeugen, die Sie von der API erhalten.

## Aufgabenstellung

1. Bilde Sie Zweier-Gruppen und legen Sie fest, wer initial die Rolle des *Navigator* bzw. die des *Drivers* übernimmt.

2. Laden Sie das [Starterpaket](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Bundesliga) herunter und verschaffen Sie sich einen kurzen Überblick über den bereitgestellten Code.

3. Implementieren Sie zuerst das Module `AJAXHelper` (Datei `vendors/AJAXHelper.js`), das eine globale Methode `getContentAsJSON` bereitstellt. Die Methode gibt ein `Promise`-Objekt zurück, das bei erfolgreicher Auflösung die per Parameter `url` definierte Ressource als JSON-Objekt bzw. -Array übergibt.

4. Implementieren Sie ein Modul, das die aktuelle Tabelle herunterlädt, jeder Mannschaft den Gegner des nächsten Spieltags zuweist und die Daten über eine *Event*-Schnittstelle bereitstellt.

5. Implementieren Sie ein Modul, das die aufbereiteten Tabellendaten *rendert* bzw. in das vorhandene Tabellenelement einträgt. Implementieren Sie in diesem *View* das Hervorheben des jeweils nächsten Gegners während des *Hover*-Vorgangs.

Implementieren Sie während der Bearbeitung der oben genannten Punkte aus das zentrale `App`-Modul, in dem die übrigen Komponenten der Anwendung initialisiert und gesteuert werden. 

Während der Bearbeitung der Aufgabe erhalten Sie mehrmals den Hinweis, die Rollen (*Navigator* und *Driver* ) zu wechseln.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Bundesliga). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.