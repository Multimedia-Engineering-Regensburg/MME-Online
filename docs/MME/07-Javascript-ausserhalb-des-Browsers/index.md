# 07 | JavaScript außerhalb des Browsers

In dieser Woche beschäftigen wir uns mit den Anwendungsmöglichkeiten von Node.js außerhalb des Browsers. Dazu lernen wird die Laufzeitumgebung [Node.js](https://nodejs.dev/) und deren Ökosystem kennen. Wir entwickeln kleine Programme, die direkt über *Node.js*, d.h. ohne den Browser-Kontext ausgeführt werden. Auf dieser Basis entwicklen wir erste server-seitige Komponenten unter Verwendung der bekannten Programmiersprache JavaScript.

**Die Live-Sitzung zu dieser Lektion findet am 24. Juni ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.** Eine Beschreibung der dort vorgestellten Demo finden Sie [hier](../../Demos/writer-online).

## Ziele

- Sie können die `<audio>`- und `<video>`-Elemente über deren API-Methoden ansteuern und die entsprechenden Wiedergabe-*Events* in Ihren Anwendungen abfangen.
- Sie könne Bildmaterial aus Videos, `<img>`-Tags oder anderen Quellen im *Canvas* bearbeiten, in dem Sie über die entsprechende API einfache Zeichen- und Bildverarbeitungsoperationen durchführen.

## Inhalte zum Durcharbeiten

- [Einführung in die Verwendung von Node.js](./node-js)

### Für die Übung

- [Code-Kata](./code-kata.md)
- [Repository mit Kata-Aufgaben](https://github.com/Multimedia-Engineering-Regensburg/Code-Kata)

## Weitere Materialien im Mozilla Developer Network

- [Servert-side website programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side)
- [Node.js server without a framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

## Weitere Materialien und Tutorials

- [Introduction to Node.js (nodejs.org)](https://nodejs.dev/learn)

## Übungsaufgaben

### Hello World

[Laden](https://nodejs.org/en/download/) Sie die passende Version von *Node.js* für Ihr Betriebssystem herunter und installieren Sie die Umgebung auf Ihrem Rechner. Erstellen Sie eine neue *Javascript*-Datei, die den String "Hello World" auf der Konsole ausgibt. Starten Sie die *Node.js Engine* und übergeben Sie die erstellte Datei als Parameter.

### Parameter

Schreiben Sie ein *Node.js*-Programm, das beim Aufruf zwei Zahlen (`Number`) als Parameter (Vgl.: [`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv)) übergeben bekommt und die Summe, das Produkt sowie das Maximum der beiden Werte zurückgibt.

### Textverarbeitung

Schreiben Sie ein *Node.js*-Programm, das den Inhalt einer als Parameter übergebenen Textdatei einliest und ausgibt, wie viele Zeichen bzw. Wörter vorhanden sind sowie die 10 häufigsten Wörter der Datei geordnet auflistet.

### Modularisierung

Extrahieren Sie die Funktionalität aus der vorherigen Aufgabe ("Textverarbeitung") in ein separates Modul. Importieren Sie dieses anschließend über die `require`-Funktion in das ursprüngliche Programm.