# 02 | Versionskontrolle für Softwareprojekte

Versionskontrollsysteme sind ein wichtiges Werkzeug in der Softwareentwicklung. Sie ermöglichen es uns die Versionsgeschichte unserer Projekte nachvollziehbar zu dokumentieren und erlauben es, Änderungen am Code bei Bedarf rückgängig zu machen. Auf Grundlage diese fundamentalen Eigenschaften, können komplexere Aufgaben und Prozess etabliert werden. Dazu gehört z.B. die kollaborative Entwicklung von Software oder automatisierte [Bau- und Bereitstellungsprozesse](https://en.wikipedia.org/wiki/Continuous_integration). In dieser Woche machen Sie sich mit den wichtigsten Eigenschaften dieser Werkzeuge vertraut und lernen die grundlegenden Funktionen des Versionskontrollsystems `git` kennen.	

**Die Live-Sitzung zu dieser Lektion findet am 6. Mai ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.** Im Stream machen wir uns mit der praktischen Verwendung des Versionskontrollwerkzeug `git` zur Dokumentation und Steuerung unserer Entwicklungsprojekte vertraut. 


## Ziele

- Sie verfügen über eine funktionierende Arbeitsumgebung, mit der Sie qualitativ hochwertigen HTML- und JavaScript-Code implementieren können. Dabei werden Sie durch einen korrekt eingerichteten *Linter*, der Sie während der Arbeit am Code auf Probleme und Fehler hinweist.
- Sie haben sich mit unserem Vorschlag für die Strukturierung von Projekordnern für JavaScript vertraut gemacht und finden sich in den bereitgestellten Demos und Übungsaufgaben zurecht.
- Sie wissen, wie und unter welchem Umständen JavaScript-Code im Browser ausgeführt wird.
- Sie kennen mit HTML, CSS und JavaScript die drei wesentlichen Bestandteile einer Webanwendung und sind in der Lage, die per HTML und CSS strukturiert und gestaltete Benutzeroberfläche programmatisch, d.h. aus Ihrem JavaScript-Code heraus, zu manipulieren und auf einfache Interaktionsereignisse zu reagieren.

## Inhalte zum Durcharbeiten

- [Grundlagen der Versionskontrolle](./version-control)
- [Erste Schritte mit git](./git)

## Zusätzliche Tutorials und Hilfestellungen

- [Interaktive Online-Kurse auf github.com](https://lab.github.com/)
- [Interaktive Online-Kurse auf atlassian.com](https://www.atlassian.com/git)
- [Scott Chacon & Ben Straub: Pro Git](https://git-scm.com/book/en/v2)

## Übungsaufgaben

1. Installieren Sie *git* und die zugehörige *Git Bash* über den Download der [Projektseite](https://git-scm.com/downloads)
2. Richten Sie den installierten *git*-Client für die Verwendung mit (privaten) *Github*-Repositorys ein. Folgen Sie dazu [diesem](https://help.github.com/en/articles/connecting-to-github-with-ssh) Tutorial
3. Erstellen Sie ein lokales Projektverzeichnis und initialisieren Sie in diesem ein neues Git-Repository. 
4. Erstellen Sie in diesem Verzeichnis eine HTML-Datei, die den als Überschrift formatierten Text "Hello World" enthält. Erstellen und verlinken Sie eine CSS-Datei, die Schriftfarbe und -art der Überschrift im HTML-Dokument ändert. Erstellen und verlinken Sie eine Javascript-Datei, die beim Aufruf des HTML-Dokuments die Überschrift durch den Text "Hello Javascript" ersetzt. Erstellen Sie eine leere Datei `Readme.md` in Ihrem Projektverzeichnis. Dokumentieren Sie Ihre Arbeit nach jedem Teilschritt nur das Erzeugen einer neuen Revision im Git-Repository.
5. Erstellen Sie auf *github.com* ein neues, privates Repository. Verbinden Sie ihr lokales Repository mit dem erstellen Github-Repository.
6. *Pushen* Sie den Inhalt des lokalen *Master Branch* in Ihr soeben erstelltes Github-Repository.
7. Bearbeiten Sie die erstellte `Readme.md`-Datei über die Webansicht ihres Repositorys auf *github.com*.
8. *Pullen* Sie die online vorgenommenen Änderungen in Ihr lokales Repository.