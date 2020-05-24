# 05 | Daten im Browser persistieren

In der fünften Wochen beschäftigen wir uns mit unterschiedlichen Möglichkeiten, Informationen sitzungsübergreifend in Webanwendungen zu speichern. In einem ersten Schritt erhalten Sie dabei eine Übersicht über die APIs und Technologien, die eine persistente Speicherung von Anwendungsdaten im Browser selbst erlauben. Im weiteren Verlauf des Kurses, vor allem aber auch im Rahmen der Abschlussprojekte, sind ggf. auch Strategien notwendig, die eine Speicherung außerhalb des Browsers, z.B. auf einem Datenbank-Server erfordern. Zusätzlich werfen Sie einen Blick auf das Konzept der *Web Workers*, die eine Ausführung von JavaScript-Code parallel zum *UI Thread* Ihrer Anwendung erlauben. Dadurch können die komplexere Vorgänge oder dauerhafte Hintergrundoperationen implementieren, ohne die restlichen Teile Ihrer Anwendung zu blockieren. Ein Anwendungsfall dafür kann z.B. die Auslagerung komplexerer Datenbankanfragen bei der Verwendung der *IndexedDB*-API sein. 

**Die Live-Sitzung zu dieser Lektion findet am 27. Mai ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.**

## Ziele

- Sie kennen die wesentlichen APIs, die eine sitzungsübergreifende Speicherung von Anwendunsgdaten im Browser ermöglichen.
- Sie können entscheiden, welche der APIs sich für welchen Anwendungsfall eignet und einschätzten, wann zusätzliche Infrastrukturen, z.B. in Form externen Datenbanken notwendig sind.
- Sie wissen, dass auch in JavaScript die Parallelisierung unterschiedlicher Abläufe innerhalb einer Anwendung möglich ist und können dies für einfache Anwendungsfälle auf Basis der *Web Worker*-API umsetzen.

## Inhalte zum Durcharbeiten

- [Datenspeicherung in Webanwendungen I: Lokale Möglichkeiten](./data-storage)
- [Nebenläufigkeit im Browser: Web Worker verstehen und einsetzen](./webworkers)

## Weitere Materialien im Mozilla Developer Network

- [Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
- [Storage API (Überblick)](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
- [Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [WebStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Zusätzliche Quellen, Tutorials und Hilfestellungen

- [Raanan Weber: "IndexedDB and Web-workers" (Performance Demo)](https://github.com/RaananW/WebWorkers-IndexedDB), Live-Demo [hier](https://raananw.github.io/WebWorkers-IndexedDB/)