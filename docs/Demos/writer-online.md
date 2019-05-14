<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Writer-Online"></a> 

# Writer-Online

In dieser Demo implementieren Sie eine erweiterte Version der [Writer](../writer)-Anwendung. An Stelle des `localstorage` wird in dieser Variante eine Server-seitige Komponenten zur Speicherung der Dokumente verwendet. Diese Persistenzschicht sowie die Schnittstelle zwischen der lokalen Browser-Anwendung und dem Server-seitigen *Backend* wird mit der [Node.js](../MME/node-js)-Umgebung entwickelt. Dabei wird auf das [*express*](https://expressjs.com/)-*Framework* zugegriffen. Zusätzlich zu den genannten Aufgaben wird auch die Client-Anwendung selbst über den *Node.js*-Server bereitgestellt und nicht mehr aus dem lokalen Dateisystem heraus geöffnet.


!!! warning "Hinweis"
	Die Demo dient als einfacher Einstieg in die Entwicklung von *Server-Client*-Anwendungen auf Basis von *Node.js*. Insbesondere sollen die Möglichkeiten des *express*-*Frameworks* zur schnellen und unkomplizierten Implementierung von Webanwendungen aufgezeigt werden. Beachten Sie, dass die vorgestellte Architektur nicht für Produktivsysteme oder öffentlich zugängliche Dienste geeignet ist, da wichtige Sicherheitsmaßnahmen und notwendige Schritte zur Fehlerbehandlungen fehlen.

## Ausgangslage

Im Starterpaket finde Sie einen Ordner für das Gesamtprojekt mit dem folgenden Inhalt:

- `lib`: In diesem Ordner werden die neu implementierten Komponenten des Server-seitigen Teils der Anwendung gespeichert.

- `www`: In diesem Ordner wird der vollständige Client-Code der Anwendung gespeichert.

- `index.js`: Diese Datei dient als (Server-seitiger) Einstiegspunkt in die Anwendung und wird beim Start als Parameter an die *Node.js*-Umgebung übergeben.

- `package.json`: Diese Datei beschreibt das Projekt und beinhaltet Informationen über ggf. vorhandene Abhängigkeiten des Projekts gegenüber externen Bibliotheken. Die Datei wird u.A. vom Paketmanager `npm` verwendet.

Der Client ist - mit Ausnahme der Anbindung an die Server-seitige Persistenzschicht - vollständig vorgegeben. Die Server-seitige Anwendung ist nicht implementiert. Die bekannten Konfigurationsdateien für *ESLint* und den *JS-Beautifier* finden sich im Hauptverzeichnis des Projekts und können in Client- und Server-Code für die Qualitätssicherung verwendet werden. Die Datei `.gitignore` ist so konfiguriert, dass eine versehentliche Veröffentlichung der Daten (`data`) sowie der lokal installierten Abhängigkeiten (`node_modules`) ins *Remote Repository* verhindert wird.

## Vorbereitung

Erstellen Sie im Projektverzeichnis einen leeren Ordner `data`, in dem später die einzelnen Dateien bzw. Dokumente, die von den Nutzern erstellt werden abgespeichert werden.

Für die weitere Implementierung der Anwendung ist die Installation des *Node.js*-*Framework* *express* notwendig. Führen Sie dazu im Projektverzeichnis den Befehl `node install express` aus. Da die Abhängigkeit gegenüber diesem *Framework* bereits in der `packge.json`-Datei eingetragen ist, können Sie diese auch über den Befehl `npm install` installieren.

## Schnittstellenbeschreibung

Zur Kommunikation zwischen Client und Server wird eine einfache HTTP-Schnittstelle verwendet. Die verschiedenen Funktion des Servers sind über unterschiedliche *URLs* erreichbar. Client-seitige Anfragen an diese Schnittstelle werden mit Hilfe des bekannten [AJAX](../../MME/ajax)-Prinzips gestellt. Auf Seiten der Server-Anwendung dienen *express*-Routen als Zielpunkt für die Anfragen. Die eigentlichen Dokumente werden Client-seitig durch ein *Suffix* in der URL identifiziert bzw. angegeben. Die *ID* des aktuell angezeigten Dokuments wird dazu innerhalb der URL durch einen *String* angegeben, der über ein vorangestelltes `#`-Zeichen identifiziert wird (also z.B. in der Form `http://localhost:8080/#abc123`). Eine identische URL verweist dabei immer - unabhängig vom Zeitpunkt der Anfrage auf das selbe Dokument. Wird die Client-Anwendung ohne *ID* aufgerufen (`http://localhost:8080/`) wird ein neues, leeres Dokument angefordert und die aktuelle URL - nach Eingang der korrekte Antwort des Servers - entsprechend angepasst.

### Endpoints

- `/file/new`: Wird vom Client aufgerufen um eine neues Dokument auf dem Server zu erstellen. Der Server antwortet mit einem JSON-formatierten Objekt, das die *ID* und den anfänglichen Inhalt der neu erstellten Datei beinhaltet. Anfragen werden über die HTTP-*Request Method* `PUT` gestellt.

- `/file/$ID/`: Wird vom Client aufgerufen um die Datei mit der übergebenen *ID* (hier Platzhalter `$ID`) zu erhalten. Der Server antwortet mit einem JSON-formatierten Objekt, das die *ID* und den aktuellen Inhalt der angeforderten Datei beinhaltet. Anfragen werden über die HTTP-*Request Method* `GET` gestellt.

- `/file/$ID/$CONTENT`: Wird vom Client aufgerufen um den übergebenen Inhalt (hier Platzhalter `$CONTENT`) in die Datei mit der übergebenen *ID* (hier Platzhalter `$ID`) zu schreiben. Der Server antwortet mit einem JSON-formatierten Objekt, das die *ID* und den neuen Inhalt der editierten Datei beinhaltet. Anfragen werden über die HTTP-*Request Method* `POST` gestellt.

Diese Implementierung stellt eine sehr einfache Möglichkeiten einer HTTP-basierten Schnittstelle dar. Teilweise werden bei der Implementierung - insbesondere bei der Verwendung passender [HTTP-Verbs](https://developer.mozilla.org/de/docs/Web/HTTP/Methods) - Empfehlungen aus dem Umfeld des [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)-Paradigmas verwendet. Der implementierte Dienst ist aber in keinster Art und Weise [*RESTful*](https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints).

## Aufgabenstellung

1. Erstellen Sie in der Datei `index.js` eine einfache *express*-Anwendung, die über den Port `8080` erreichbar ist. Verwenden Sie die Möglichkeiten zur Bereitstellung statischer Dateien, um den Inhalt des `www`-Ordners über die *express*-Anwendung zugänglich zu machen. Testen Sie die Anwendung, in dem Sie die Datei `index.js` mit `node` ausführen und anschließend die Adresse `http://localhost:8080` aufrufen. Sie sollten nun die Startseite der Client-Anwendung im Browser sehen.

2. Erstellen Sie ein neues Modul (im *Node.js*-Stil, nicht als *Revealing Module*) in einer Datei im Pfad `lib/DataStorage.js`. Implementieren Sie Mithilfe der `fs`-Bibliothek die notwendigen Funktionen um Dateien zu erstellen, zu laden und zu speichern. Die öffentlichen Funktionen des Moduls geben jeweils ein Objekt zurück, das *ID* und Inhalt der betreffenden Datei beinhaltet. Beim Erstellen einer neuen Datei wird die notwendige und eindeutige *ID* berechnet und als Dateiname für die persistente Speicherung verwendet.

3. Erstellen Sie in der Datei `index.js` die notwendigen *express*-Routen, um die oben beschriebenen *Endpoints* zu realisieren (Vgl.: [*Basic routing*](http://expressjs.com/en/starter/basic-routing.html)). Verwenden Sie die vorher implementierten Funktionen des `DataStorage`-Moduls, um in den *Callbacks* der einzelnen Routen die notwendige Funktionalität bereit zustellen. Denken Sie daran, das erstellte Modul vorher mit Hilfe der `require`-Methode zu importieren.

4. Vervollständigen Sie den Client-Code, insbesondere das Modul aus der Datei `DocumentStorage.js`. Implementieren Sie dort die Anbindung des Clients an den Server und verwenden Sie dazu die eben implementierte Schnittstelle. Zur Realisierung der AJAX-Komponenten können Sie eine eigene Implementierung aus Basis des `XMLHTTPRequest`-Objekts erstellen oder die vorgefertigte `request`-Funktion verwenden, die über das Einbinden der Datei `vendors/request/request.js` im globalen *Scope* der Anwendung bereitgestellt wird. 

5. Ergänzen Sie die Anwendung um eine Funktion zur automatischen, Intervall-basierten Speicherung des aktuellen Dateiinhalts. Sie können das HTML-Element mit der *ID* `notification` verwenden, um den Benutzer über die erfolgreiche Speicherung zu informieren. Entfernen Sie dazu für eine selbst gewählten Zeitraum die Klasse `hidden`.

## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-Writer-Online). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `solution`-Branch.