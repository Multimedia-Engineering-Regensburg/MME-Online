# Dritte Übungsaufgabe: Digital Typewriter

In der letzten Übungsaufgabe entwickeln Sie selbständig und ohne Vorgaben einen einfachen Texteditor. Die Anwendung ermöglicht es Nutzern, kontinuierlich an einem zusammenhängenden Text zu arbeiten. Während der Bearbeitung werden in regelmäßigen Abständen automatisiert Versionen des Dokuments gespeichert, das sitzungsübergreifend persistiert wird. Zusätzlich zeigt die Anwendung dem Nutzenden in Echtzeit aktualisierte Statistiken zum Dokument an. Alle UI-Komponenten werden von Ihnen selbständig entworfen und umgesetzt. Konzipieren Sie dazu ein einfaches aber ansprechendes *User Interface*.

**Abgabetermin ist der 29. Juli 2019.** Wir bewerten den letzten *Commit*, der an diesem Abgabetag in das *Repository* *gepusht* wird. Informationen zur Nutzung von *Github* finden Sie im GRIPS-Kurs und [hier](./index.md).

Fragen zur Übungsaufgabe können Sie in das [GRIPS-Forum](https://elearning.uni-regensburg.de/mod/forum/view.php?id=1098788) *posten* oder per Mail (mi.mme@mailman.uni-regensburg.de) stellen.

!!! danger "Github Classroom"
	Das Starterpaket wird über *Github Classroom* bereitgestellt. Sie implementieren Ihre Lösung über ein *Repository* auf *Github*. **Das Repository, mit einer Kopie des Starterpakets, können Sie über diesen [Link](https://classroom.github.com/a/z4g2z2YY) generieren und anschließend mit der Arbeit an der Aufgabe beginnen.** Klonen Sie das erstellte *Repository* dazu auf Ihren Rechner, die notwendigen Rechte für Ihr *Github*-Konto werden automatisch beim Erstellen des *Repository* gesetzt. Denken Sie daran, Ihre Arbeit an der Aufgabe durch regelmäßiges *Committen* der Änderungen und Ergänzungen zu dokumentieren. Laden Sie Ihren aktuellen Stand regelmäßig auf *Github* hoch (*Push* bzw. im *Github Desktop*-Client über den *Sync*-Befehl). 

## Vorgaben
**Im Starterpaket finden Sie eine minimale Projektstruktur.** Die Vorgaben beschränken sich auf ein HTML-Dokument mit rudimentärer CSS-Gestaltung sowie einem ersten *Javascript*-Modul. Die Konzeption und Implementierung der Benutzeroberfläche gehört in dieser Aufgabe zu den geforderten Leistungen. Überlegen Sie sich, welche Elemente zur Umsetzung der unten aufgeführten, funktionalen Anforderungen notwendig sind. Der Schwerpunkt sollte auf der übersichtlichen, benutzerfreundlichen Gestaltung liegen. Beschränken Sie die aktiven Elemente des *User Interface* auf die tatsächlich notwendigen Komponenten. Auch das Design und die Umsetzung des Codes liegt vollständig in Ihrer Hand. Verwenden Sie dazu die im Kurs besprochene [Modul-API (ES6)](../../MME/closures-and-module-pattern/#module-in-modernen-browsern-es6-module). Die `init`-Methode in der Datei `index.js` stellt den Einstiegspunkt in die Anwendung dar. Erstellen Sie selbstständig weitere Module für die von Ihnen konzipierten Komponenten der Anwendung. Achten Sie dabei darauf, die unterschiedlichen Aufgaben dieser Komponenten klar voneinander abzugrenzen.

Erstellen Sie für jedes neue Modul eine eigene Datei im Ordner `resources/js` und verwenden Sie geeignete Unterordner zur Strukturierung des Codes.

**Formatierung und ESLint:** 
Sie finden im Starterprojekt bereits Dateien mit Formatvorgaben für [JS-Beautify](https://github.com/beautify-web/js-beautify) bzw. Regeldateien für [ESLint](http://eslint.org/). Ihr eingereichter Programmcode darf bei Überprüfung gegen die ESLint-Datei keine Fehler erzeugen. 

## Bewertungskriterien

Die allgemeinen Bewertungskriterien finden Sie [hier](index.md). Zusätzlich gelten für diese Aufgabe die folgenden Punkte:

* Wurden alle funktionalen Anforderungen (Vgl. [Anforderungen](#anforderungen)) erfüllt?

* Können die erstellten UI-Elemente sinnvoll verwendet werden? Wurde auf eine benutzerfreundliche Umsetzung geachtet? Wurde versucht, die UI-Elemente einheitlich und ansprechend zu gestalten?

* Wurde auf eine inhaltliche und strukturelle Trennung der einzelnen Komponenten geachtet? Wurde der Modulmechanismus sinnvoll für diese Aufteilung verwendet?

* Sind die einzelnen Komponenten der Anwendung entlang des MVC- oder MVP-Musters entworfen und implementiert worden?

## Anforderungen

Die von Ihnen implementierte Anwendung muss die folgenden Funktionen fehlerfrei implementieren:

- Als zentrale UI-Komponente steht dem Benutzer ein ausreichend großes **Element zu Eingabe und Bearbeitung des Textes** zur Verfügung. Orientieren Sie sich an bekannter Software, wie *Word* oder *Google Docs*. Der Text muss vom Nutzer **nicht formatiert** werden können.

- Der Text wird **dauerhaft im Browser gespeichert** und beim erneuten Starten der Anwendung geladen. Dabei wird die letzte Position des *Cursors* wiederhergestellt und fokussiert. 

- Neben dem Text werden dem Nutzer **Statistiken über das Dokument** angezeigt. Dazu gehören mindestens dessen Umfang in Zeichen und Wörtern, die gesamte Bearbeitungszeit und die Dauer der aktuellen sowie der längsten Sitzung. Alle Angaben werden übersichtlich und verständlich dargestellt und beschrieben. Auch die Statistiken werden dauerhaft im Browser gespeichert.

- Der Nutzer kann Text und Statistiken **vollständig löschen** und die Anwendung so zurücksetzten. Implementieren Sie für diese **kritische** Funktionalität einen entsprechenden Bestätigungsmechanismus.


## Tipps für die Umsetzung

Skizzieren Sie vor Beginn der Implementierung sowohl das UI als auch die *Javascript*-Komponenten der Anwendung. Beginnen Sie anschließend damit, das *User Interface* durch HTML-Elemente und CSS-Regeln zu strukturieren und zu gestalten. Sobald die wichtigsten Elemente in ihren Grundzügen entwickelt wurden, können Sie mit der Programmierung der Module und Prototypen beginnen. Planen Sie Ihr Vorgehen sinnvoll und versuchen Sie in einer ersten Version zuerst die wichtigsten Funktionen umzusetzen, bevor Sie diese dann nach und nach erweitern. Verbessern Sie anschließend iterativ die Gestaltung der Benutzeroberfläche.