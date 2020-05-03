# 02 | Versionskontrolle für Softwareprojekte

Versionskontrollsysteme sind ein wichtiges Werkzeug in der Softwareentwicklung. Sie ermöglichen es uns die Versionsgeschichte unserer Projekte nachvollziehbar zu dokumentieren und erlauben es, Änderungen am Code bei Bedarf rückgängig zu machen. Auf Grundlage diese fundamentalen Eigenschaften, können komplexere Aufgaben und Prozess etabliert werden. Dazu gehört z.B. die kollaborative Entwicklung von Software oder automatisierte [Bau- und Bereitstellungsprozesse](https://en.wikipedia.org/wiki/Continuous_integration). In dieser Woche machen Sie sich mit den wichtigsten Eigenschaften dieser Werkzeuge vertraut und lernen die grundlegenden Funktionen des Versionskontrollsystems `git` kennen.	

**Die Live-Sitzung zu dieser Lektion findet am 6. Mai ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.** Im Stream machen wir uns mit der praktischen Verwendung des Versionskontrollwerkzeug `git` zur Dokumentation und Steuerung unserer Entwicklungsprojekte vertraut. 

## Ziele

- Sie verfügen auf Ihrem Arbeitsrechner über eine funktionierende `git`-Installation und können lesend und schreibend auf *Remote Repositories* zugreifen, die auf [github.com](https://github.com) für Sie freigegeben wurden.
- Sie kennen wesentliche Gründe dafür, warum Versionskontrolle in Softwareprojekten eingesetzt wird und welche Vorteile sich aus der Verwendung ergeben.
- Sie kennen die wesentlichen Befehle und Abläufe, die zur Verwendung des dezentralen Versionskontrollsystems `git` notwendig sind.
- Sie können die Arbeit an den Übungsaufgaben und Kursbeispielen sinnvoll mit `git` dokumentieren und bei Bedarf auch vorherige Versionen Ihres Softwareprojekts wiederherstellen.
- Sie kennen das Prinzip der *Branches* in `git` und können dieses zur Organisation Ihre Entwicklungsprojekte einsetzten.

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