# 01 | Grundlagen der Webentwicklung mit JavaScript

In der ersten Woche machen Sie sich mit den grundsätzlichen Prinzipien der Webentwicklung mit JavaScript vertraut. Sie frischen Ihre Erfahrungen im Umgang mit HTML und CSS auf und richten Ihre persönliche Arbeitsumgebung ein. Im Rahmen der ersten Live-Sitzung fassen wir diese Grundlagen kurz zusammen und nutzden diese direkt, um ein kleines Anwendungsbeispiel zu implementieren.

**Die Live-Sitzung zu dieser Lektion findet am 29. April ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt. Handout und Startercode zur [Übungsaufgabe](../../Aufgaben/index.md) zu dieser Lektion finden Sie ab 1. Mai auf dieser Seite.**

!!! danger "JavaScript als neue Programmiersprache"
    Für viele von Ihnen wird JavaScript eine neue Programmiersprache sein. In den ersten Woche werden am Rande der Übungen und Live-Sitzungen auf syntaktische und andere Besonderheiten der Sprache  eingehen. Grundsätzlich sollten Sie sich die Grundlagen der Sprache aber selbst beibringen können, und dabei auf Ihrem Vorwissen aus anderen, objektorientierten Programmiersprachen zurückgreifen können. Im Rahmen des Kurses werden wir uns vorallem diejenigen *Features* der Sprache anschauen, die von besonderer Bedeutung für die Gestaltung und Optimierung von Webanwendungen verwendet werden können. **Bitte beachten Sie zu diesem Punkt auch die unten aufgeführten Materialien für das Selbststudium.

## Ziele

- Sie verfügen über eine funktionierende Arbeitsumgebung, mit der Sie qualitativ hochwertigen HTML- und JavaScript-Code implementieren können. Dabei werden Sie durch einen korrekt eingerichteten *Linter*, der Sie während der Arbeit am Code auf Probleme und Fehler hinweist.
- Sie haben sich mit unserem Vorschlag für die Strukturierung von Projekordnern für JavaScript vertraut gemacht und finden sich in den bereitgestellten Demos und Übungsaufgaben zurecht.
- Sie wissen, wie und unter welchem Umständen JavaScript-Code im Browser ausgeführt wird.
- Sie kennen mit HTML, CSS und JavaScript die drei wesentlichen Bestandteile einer Webanwendung und sind in der Lage, die per HTML und CSS strukturiert und gestaltete Benutzeroberfläche programmatisch, d.h. aus Ihrem JavaScript-Code heraus, zu manipulieren und auf einfache Interaktionsereignisse zu reagieren.

## Inhalte zum Durcharbeiten

- [JavaScript im Browser](./javascript-browser)
- [Einrichten der Arbeitsumgebung](./work-environment)
- [Das Projektverzeichnis](./project-directory)
- [Programmatische Manipulation des DOMs](./dom-introduction)

## Weitere Materialien im Mozilla Developer Network

Das [Mozilla Developer Network](https://developer.mozilla.org/en-US/) bietet einige sehr gut ausgearbeitete Übersichten und *Tutorials* für den Einstieg in bzw. das Auffrischen von der Arbeit mit den grundlegenden Webtechnologien. Zu Beginn des Kurses sind dabei vorallem die folgenden Anleitungen hilfreiche:

- [Structuring the web with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [Learn to Style HTML with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [JavaScript - Dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

## Übungsaufgaben
Als erste Fingerübung im Rahmen der DOM-Manipulation mit Javascript können Sie die hier verlinkte [Übungsaufgabe](https://classroom.github.com/a/u3svFPFO) bearbeiten. Die Aufgabe wird mittels [Github Classroom](https://classroom.github.com/) bereitgestellt. Für die Bearbeitung benötigen Sie einen (kostenlosen) Account auf der Webseite [github.com](https://github.com/).

### Weitere Aufgaben
- Rufen Sie die [Webseite der Medieninformatik](https://www.uni-regensburg.de/sprache-literatur-kultur/medieninformatik/) auf und öffnen Sie die JavaScript-Konsole Ihres Browsers. Nutzen Sie die bekannten Javascript-Befehle um die Überschrift "Aktuelle Meldungen der Medieninformatik" zu selektieren und durch den *String* "Hello World" zu ersetzen.
- Versuchen Sie weitere Bestandteile der Website zu manipulieren: Tauschen Sie z.B. die Quellpfade von angezeigten Bildern aus oder ergänzen Sie weitere Texte bzw. Abschnitte.
- Erstellen Sie ein einfaches HTML-Dokument mit einer Überschrift und einer unsortierten Liste. Versuchen Sie, beim Öffnen des Dokuments - über eine integrierte Javascript-Datei - neue Listenelemente mit beliebigem Inhalt hinzuzufügen. x   	
- Versuchen Sie, Mausklicks auf den hinzugefügten Listenelementen zu registrieren und verändern Sie in der entsprechenden *Callback*-Methode das Erscheinungsbild des angeklickten Elements. Definieren Sie dazu eine CSS-Klasse (in einem ausgelagerten Dokument) und nutzen Sie die entsprechenden API-Methoden um diese Klasse zum angeklickten Element hinzuzufügen.