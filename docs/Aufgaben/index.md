# Übungsaufgaben

Im Rahmen des Multimedia Engineering-Kurses werden semester-begleitend fünf Übungsaufgaben gestellt. In jeder Übungsaufgabe werden Sie, ausgehend von einem vorgegebene Grundgerüst aus HTML und CSS eine vollständige Webanwendung implementieren. Zu jeder Aufgabe erhalten Sie ein ausführliches Handout, das Ihnen die Ziele und Bewertungskriterien erläutert. Die vorgegebenen Inhalte werden im Handout erläutert. Spezifische, nicht-funktionale Anforderungen an die zu implementierende Aufgabe, werden ebenfalls im Handout definiert. Dazu gehören z.B. bestimmte Vorgaben bezüglich der Softwarearchitektur oder des -Designs. Alle notwendigen Materialien werden über ein Github-Repository bereitgestellt und können über einen Link importiert werden. Zu diesem Zweck wird [Github Classroom](https://classroom.github.com/) eingesetzt. Zugriff auf die von Ihnen erstellten Inhalte haben Sie selbst, Teile Ihrer Lerngruppe sowie die Tutoren und Dozierende des Lehrstuhls. 

Die Bearbeitung der Übungsaufgaben sowie das anfertigen eines Reviews zur Lösung eines Ihrer Komilitonen ist für alle Studierenden, die ihr Medieninformatikstudium zum oder nach dem Wintersemester 2017/18 aufgenommen haben, verpflichtend (die Übungsaufgaben stellen die in der [Modulbeschreibung](https://www.uni-regensburg.de/studium/modulbeschreibungen/medien/ba/medieninformatik-ba-ws1718.pdf) vorgesehenen Studienleistungen dar). **Drei von fünf Aufgaben müssen bestanden werden, um die Studienleistungen insgesamt erfolgreich abzuschließen.** Für alle anderen Teilnehmenden ist die Bearbeitung dringend empfohlen. Eine erfolgreiche Teilnahme an den Abschlussprojekten ist ohne die Erfahrungen aus den Übungsaufgaben in der Regel nicht möglich.

## Die Aufgaben

Im **Sommersemester 2020** werden die Übungsaufgaben in den folgenden Zeiträumen bearbeitet:

- **Aufgabe 1**: 1. Mai bis 10. Mai ([Handout](./SS20-01-Klopapierrechner), [Lösungsvorschlag](https://github.com/Multimedia-Engineering-Regensburg-Tasks/SS20-U01-Klopapier-Rechner))
- **Aufgabe 2**: 15. Mai bis 24. Mai ([Handout](#))
- **Aufgabe 3**: 29. Mai bis 7. Juni ([Handout](#))
- **Aufgabe 4**: 12. Juni bis 21. Juni ([Handout](#))
- **Aufgabe 5**:  26. Juni bis 5. Juli ([Handout](#))

Alle Informationen zu den individuellen Aufgaben finden zum Start der Bearbeitungszeit auf den verlinkten Seiten.

## Anforderungen und Bewertungskriterien

Spezifische Anforderungen und Bewertungskriterien werden im Handout der jeweiligen Aufgabe erläutert. Zusätzlich werden diese allgemeinen Punkte bei der Bewertung der Aufgabe berücksichtigt:

- Mit jeder Aufgabe wird eine Konfigurationsdatei für ESLint (Vgl. [Arbeitsumgebung](../MME/work-environment)) veröffentlicht. Der Code Ihrer Lösung darf keine der dort notierten Regeln verletzten.

- Der Code Ihrer Lösung muss sauber und einheitlich formatiert sein. Im Zweifelsfall halten Sie sich an die ebenfalls mit jeder Aufgabe bereitgestellte Konfigurationsdatei für *JSBeautifer*-Plugins.

- Die Qualität des Codes muss mindestens den aus OOP und Android bekannten Qualitätskriterien genügen. Dazu gehören die Verwendung sinnvoller Bezeichner, das gezielte Einsetzten bekannter Entwurfsmuster, Vermeidung bekannter *Code Smells* wie *Magic Numbers* oder *Duplicate Code* und das **sinnvolle** Kommentieren relevanter Stellen.

- Der im Handout beschrieben Funktionsumfang muss sich verlässlich und fehlerfrei nutzten lassen.

## Ablauf

1. Zu Beginn der Bearbeitungszeitraum wird hier und im GRIPS-Kurs ein Link bereitgestellt. Über diesen Link können Sie das bereitgestellte Repository mit Handout und Grundgerüst importieren. Dazu müssen Sie sich mit Ihrem Github-Account authentifizieren[^1]. Im Github-Bereich der Medieninformatik wird daraufhin eine Kopie dieses Repositorys erstellt. Sie erhalten Lese- und Schreibzugriff für dieses Repository.

2. Klonen Sie das Repository auf Ihren Rechner und beginnen Sie mit der Arbeit. Im Repository steht neben dem *Master Branch* (in dem Sie Ihre Lösung implementieren) auch ein zusätzlicher Branch * reference* bereit, in dem Sie jederzeit das ursprünglich bereitgestellte Grundgerüst einsehen können. Dokumentieren Sie Ihre Arbeit durch regelmäßige *Commits*.

3. Stellen Sie Ihre Lösung spätestens am Abgabetag bereit. *Pushen* Sie die Änderungen Ihres lokalen Repositorys dazu auf Github. Bewertet wird der jeweils letzte *Commit*, der am Abgabetag im Remote-Repository (auf Github) bereitgestellt wurde. Es empfiehlt sich, lokale Änderungen bereits während der Bearbeitung regelmäßig in das Remote-Repository zu *pushen*. Anhand der Weboberfläche von Github können Sie direkt im Browser prüfen, ob das Bereitstellen Ihrer Lösung erfolgreich war. 

![Übersicht über die Verwendung von Github Classroom](img/classroom-overview.png)

Mit Hilfe [dieser Testaufgabe](https://classroom.github.com/assignment-invitations/d84cc63e1f72964722cec4f9c46a6684) können Sie den Vorgang vor der ersten Übungsaufgabe testen.

## Feedback & Peer Review

Zu jeder Aufgabe erhalten Sie von uns eine kurze Bewertung, die ihnen angibt, ob Sie die Anforderungen erfüllt haben (`bestanden` oder `nicht bestanden`) sowie eine kurze Zusammenfassung unserer Eindrücke. Ausführlicheres Feedback, inbesondere auch zur Qualität Ihrer Lösung und mögliche Verbesserungsvorschläge erhalten und geben Sie innerhalb Ihrer Lerngruppe. Dazu erstellt jedes Gruppenmitglied für jede Aufgabe ein [Code Review](https://en.wikipedia.org/wiki/Code_review) für einen bzw. eine andere Teilnehmerin. Um die Zuteilung die technische Realisierung kümmern wir uns und organisieren den Ablauf innerhalb der Lerngruppen. Im Vorfeld des ersten Reviews erhalten Sie eine entsprechende Einführung.

Sie erhalten zu jeder der Aufgaben ein ausführliches Feedback. Dieses wird direkt in dem verwendeten Repository bereitgestellt. Nach Korrektur der Aufgabe wird dort ein neuer Branch (*review*) erstellt in dem Sie allgemeines Feedback (z.B. bestanden/nicht bestanden) in Form einer Textdatei im Hauptverzeichnis des Repository finden. Der Branch enthält zusätzlich ausführliches Feedback in Form eines *Code Reviews*, das Sie in Form von Kommentaren direkt im Code Ihrer Lösung finden. Arbeiten Sie dieses Feedback in Ruhe durch und kontaktieren Sie bei Nachfragen den Dozierenden.

[^1]: Wir müssen Ihre Abgabe eindeutig Ihrer Person zuordnen können. Verwenden Sie daher entweder einen Github-Nutzernamen, der Ihren realen Namen (Vor- und Nachname) enthält oder hinterlegen Sie Ihren Realnamen in Ihrem öffentlichen Github-Profil unter "Name" (oder Sie machen beides). [Hier](https://github.com/alexanderbazo) ist ein Beispiel für ein eindeutig zuordenbares Profil. 
