# 03 | Anwendungen modularisieren

In der dritten Woche beschäfitgen wir uns mit ersten Ansätzen für gutes *Software Design* in JavaScript-Anwendungen. Sie lernen mehr über die besonderen Eigenschaften von Funktionen kennen und erfahren, wie Sie mit unterschiedlichen Modul-Konzepten Teilbereiche Ihrer Anwendung separieren und von einander lösen können. Sie vertiefen Ihre Kenntnisse über die Event-Verarbeitung und *Callback*-Funktionen in JavaScript um auf dieser Basis auch eine indirekte KOmmunikation zwischen Bestandteilen Ihrer Anwendung zu ermöglichen.  

**Die Live-Sitzung zu dieser Lektion findet am 13. Mai ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.**

## Ziele

- Sie verstehen das Konzept der *Closures* und können diese bewusst zum Erstellen separater Teilbereiche (*Scopes*) in Ihrer Anwendungen verwenden.
- Sie kennen mit dem *Revealing Module Pattern* und den mit ES6 eingeführten *Modulen* zwei Möglichkeiten, *Closures* für die Gestaltung unabhängiger Teilkomponenten zu verwendenden.
- Sie haben Ihre Kenntnisse über die Event-Verarbeitung in JavaScript und im Browser vertieft und kennen in diesem Zusammenhang auch die Möglichkeiten, die die `bind`-Funktion zur Gestaltung von *Callbacks* bietet.
- Sie können Methoden- und Objekt-Referenzen verwenden, um zwischen modularen Bereichen Ihrer Anwendung zu kommunizieren.

## Inhalte zum Durcharbeiten

- [Javascript-Anwendungen mit dem Module-Pattern gestalten](./closures-and-module-pattern)
- [Der Event-Loop in Javascript und die Events der Web-APIs](./event-loop)

## Weitere Materialien im Mozilla Developer Network

- [Functions and Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)

## Zusätzliche Tutorials und Hilfestellungen

- [Marijn Javerbeke, Eloquent JavaScript: Modules (Kapitel 10)](https://eloquentjavascript.net/10_modules.html)

## Übungsaufgaben

### Module erstellen

1. Erstellen Sie ein Modul (*revealing module pattern*), das bei Konstruktion innerhalb eines übergebenen DOM-Elements ein leeres Kindelement (`div`) erzeugt und bei jedem Mausklick auf diesen Element die Hintergrundfarbe zufällig verändert.

2. Erstellen Sie ein Modul (ES6), das eine Liste an Personen (auf der Basis eines einfachen Prototypen mit Namen und einer eindeutigen ID) verwaltet. Das Modul bietet öffentliche Methoden zur Suche nach bestimmten Personen anhand z.B. des Namens an. Befüllen Sie das Modul mit Informationen, die Sie über Eingabefelder vom Benutzer eingeben lassen.

3. Prüfen Sie Ihre Lösung zur [ersten Übungsaufgabe](../../Aufgaben/SS20-01-Klopapierrechner). Können Sie Ihren Code durch die bewusste Verwendung von Modulen optimieren?