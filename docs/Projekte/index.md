# Abschlussprojekte

Der MME-Kurs wird durch die Bearbeitung eines Abschlussprojekts abgeschlossen. Im Rahmen dieses Projektes entwerfen und implementieren Sie eine browserbasierte Webanwendung. Dazu nutzen Sie die im Kurs erworbenen Kompetenzen. Das Abschlussprojekt wird in der Regel als Gruppenarbeit in kleinen Teams von nicht mehr als drei Teilnehmern absolviert. Jeder der Teilnehmer muss gleichberechtigt an denjenigen Projektbereichen arbeiten, die durch die Kursinhalte vorbereitet wurden. Dazu gehören insbesondere die Generierung hochwertigen Quellcodes und die kollaborative Verwaltung und Dokumentation der gemeinsamen *Codebase* mittels *git*.

Die Beschreibung des Rahmenthemas und einige Projektvorschläge für das aktuelle Semester finden Sie [hier](./sommer-2019).

!!! danger "Projektabgabe"
	Die Projekte müssen für das **Sommersemester bis zum 30. September** und für das **Wintersemester bis zum 31. März** abgegeben werden. Bewertet wird jeweils der letzte *Commit* des Abgabetags in den *Master*-Branch. 

## Anforderung

Durch die erfolgreiche Bearbeitung des Projektes weisen Sie nach, dass Sie in der Lage sind, eine überschaubare Problemstellung zu analysieren und eine passende benutzerfreundliche Lösung auf der Basis von Webtechnologien zu entwickeln. 

Ihr Projekt muss ein klar definier- und beschreibbares Problem lösen. Durch die Implementierung schaffen Sie einen messbaren Mehrwert für die angesprochene Zielgruppe. Bei der Umsetzung steht die Generierung lauffähiger, fehlerfreier Software im Vordergrund. Forschungsarbeiten oder Prototypen sind keine akzeptablen Gegenstände der Projektarbeit. Die implementierte Lösung soll dabei Werkzeugcharakter haben und in den Bereich der Anwendungen fallen; Spiele werden im MME-Kurs nicht entwickelt.

**Achten Sie darauf, ein überschaubares Problem zu bearbeiten. Implementieren Sie wenige Features, entwickeln Sie diese aber bis zur höchst möglichen Güte. Achten Sie auch auf die Gestaltung der Benutzeroberfläche, insbesondere auf grundlegende ästhetische Prinzipien und Ihnen bekannte Faktoren guter Usability. Ihre Anwendung sollte am Ende eine in sich geschlossene, voll funktionstüchtige, sorgfältig getestete und gut dokumentierte Lösung für das zu Beginn ausgewählte Problem darstellen.**

Ihre Anwendung wird auf Basis von Javascript, HTML- und CSS entwickelt. An entsprechenden Stellen können und sollen Sie auf Bibliotheken und *Frameworks* zurückgreifen. Die Architektur der Anwendung und der Hauptteil des Codes müssen aber von Ihnen selbst entworfen und implementiert werden. 

Die von Ihnen implementierte Anwendung wird nach Abgabe anhand dieser Kriterien bewertet:

- Funktionale Vollständigkeit gegenüber den ausgemachten Anforderungen

- Fehlerfreie Implementierung der Funktionen

- Grad der (objektiv) messbaren Usability und allgemeinen Gestaltung der Benutzeroberfläche

- Qualität von Architektur, Design und allgemeinen Eigenschaften des Quellcodes

- Sorgfalt bei der Verwendung von Github für die Verwaltung von Anforderungen und der Dokumentation des Projektfortschritts inklusive der Zuordbarkeit einzelner Beiträge zu individuellen Projektteilnehmern

Ihr Repository besteht während der Entwicklung aus mindestens zwei Branches: Einem `master`-Branch der stets die aktuell lauffähige, fehlerfreie Version Ihrer Software beinhaltet und die *Release*-Geschichte Ihres Projekts repräsentiert, sowie einen `dev`-Branch in dem die eigentliche Entwicklung der Anwendung voran getrieben wird. An geeigneten Zeitpunkten werden die Ergebnisse aus dem `dev`-Branch in den *Master* übertragen. Weitere formale Kriterien zur Nutzung finden Sie nach Generierung der Repositorys in einer entsprechenden vorgegebenen Datei.

## Ablauf 

Im Rahmen der letzten beiden Vorlesungswochen werden die Projekt vorbereitet. Die Implementierung findet in der vorlesungsfreien Zeit statt. Im Anschluss and die Zusammenstellung der Teams und der Themenvergabe gliedert sich der restliche Projektablauf wie folgt:

**Ende der Vorlesungszeit**: Im Rahmen eines Workshops wird eine erste Projektskizze vorbereitet und diskutiert. Zusätzlich werden die Github-Repositorys für die Arbeit an den Projekten angelegt und vorbereitet. Die Themenvergabe erfolgt online über den GRIPS-Kurs.

**Beginn der vorlesungsfreien Zeit**: Im Anschluss wird von jedem Team jeweils eine konkrete Liste mit Anforderungen sowie den technischen Rahmenbedingungen für die Umsetzung erstellt. Beide Dokumente werden im Rahmen von Projektsprechstunden in der ersten Woche der vorlesungsfreien Zeit diskutiert und finalisiert. Der hier ausgemachte Funktionsumfang der Anwendung muss am Ende der Bearbeitungszeit nachgewiesen werden können.

**Vorlesungsfreie Zeit**: Nach der Festlegung der *Features* sowie des technischen Rahmens übertragen Sie die Anforderungen in Form von *User Stories* in den *Issue Tracker* oder ein *Project Board* Ihres Github-Repository. Anschließend arbeiten Sie selbstständig an der Umsetzung Ihres Projektes. Nutzen Sie dabei konsequent die Möglichkeiten von *git* bzw. Github um Ihre Arbeit zu organisieren und zu dokumentieren. Melden Sie sich bei Problemen rechtzeitig und proaktiv. Während der Bearbeitungszeit können Sie per Mail (alexander.bazo@ur.de) oder im Rahmen individueller Sprechstunden Kontakt aufnehmen.

**Minimum viable product**: Bis spätestens vier Wochen vor Abgabe der Projekte müssen Sie ein [*minimum viable product*](https://en.wikipedia.org/wiki/Minimum_viable_product), also eine lauffähige Version Ihrer Anwendung mit minimalen Funktionsumfang zur Demonstration der Projektidee vorweisen können. Erstellen Sie dazu auf Basis des erreichten Standes ein [*Release*](https://help.github.com/en/articles/creating-releases). Sie erhalten auf Basis dieses Releases Feedback zum aktuellen Stand Ihres Projektes.

**Abgabe**: Das fertige Projekt wird am Ende der Bearbeitungszeit eingereicht. Dazu wird der letzte *Commit* in den `master`-Branch berücksichtigt, den Sie am Abgabetag vornehmen. 

## Zeitlicher Aufwand

Für den Abschluss des Moduls **MEI-BA-M07: Multimedia Engineering** erhalten Sie insgesamt sechs Leistungspunkte. Für diese Punkte sollten Sie insgesamt **180 Stunden** Arbeit in den Kurs investieren. Während der Vorlesungszeit erarbeiten Sie dazu die folgenden Leistungen:

- 30 Stunden für die selbstständige Vorbereitung der Übung

- 30 Stunden Präsenzzeit in den praktischen Übungen

- 30 Stunden für die Nachbereitung der Sitzungen 

- Jeweils 8 Stunden für die Bearbeitung der drei Übungsaufgaben/Studienleistungen

Mit dem Ende der Vorlesungszeit sind daher bereits mindestens **114 Stunden** Aufwand erbracht worden. Im Rahmen der Gruppen- und Themenfindung und der Projektvorbereitung fallen inklusive der Besprechungen weitere 6 Stunden Arbeitslast an. Für den eigentlichen Entwurf und die Umsetzung Ihres Projektes verbleiben pro Teilnehmer **60 Stunden**, was in etwa 1,5 vollen Arbeitswochen entspricht. Versuchen Sie Ihr Projekt innerhalb dieses Zeitrahmens zu absolvieren. Am Ende muss Ihre Software einen Zustand erreicht haben, der diesen Aufwand angemessen repräsentiert. Im Rahmen der Anforderungserhebung werden wir versuchen, einen Funktionsumfang festzulegen, der innerhalb dieser Zeit gut umsetzbar ist. Unverhältnismäßiger Mehraufwand bei der Umsetzung des Projekts wird von Ihnen nicht verlangt.

Um den verfügbaren Zeitraum optimal zu nutzen und Ihnen während der vorlesungsfreien Zeit Raum für andere Projekte oder Aktivitäten zu ermöglichen, beachten Sie bitte die folgenden Hinweise:

- Nehmen Sie die Möglichkeiten zur iterativen Zusammenstellung und Besprechung der Features wahr. Die verantwortlichen Lehrpersonen haben Erfahrungswerte, die es erlauben, den tatsächlichen Arbeitsaufwand für Ihr Projekt gut einschätzen zu können.

- Schaffen Sie Raum für regelmäßige Begutachtungen und Tests der Software bzw. des Quellcodes. Je früher Sie funktionale oder qualitative Mängel feststellen, desto schneller können Sie diese beheben. Kurz vor Ende des Projekts ist es eher unwahrscheinlich, tief verwurzelte Probleme zufriedenstellend zu lösen. Unterstützen Sie sich gegenseitig und finden Sie Wege, die Beiträge der anderen Teammitglieder zu bewerten und sinnvolle Verbesserungsvorschläge zu geben.

- Stellen Sie möglichst früh ein funktionierendes Grundgerüst der Anwendung fertig. Je später Sie diesen *proof of concept* liefern, desto schwieriger wird es auftretende technische Probleme rechtzeitig zu beheben. Dazu gehört auch die Bereitstellung einer selbst-gehosteten und online verfügbaren Version der Software.
Sollten Sie bei diesem Schritt Hilfe benötigen, nehmen Sie bitte rechtzeitig Kontakt auf.

- Konzentrieren Sie sich auf wenige aber wichtige Funktionen. Planen Sie Zeit ein, um Ihre Anwendung hinsichtlich der Gestaltung und Benutzerfreundlichkeit zu optimieren. Testen Sie regelmäßig die Funktionsfähigkeit der Anwendung. Legen Sie dazu zu Beginn exemplarische Anwendungsfälle (*Walktroughs*) fest und spielen Sie diese nach jeder größeren Änderung durch.

- Arbeiten Sie gemeinsam, nicht nur parallel zueinander. Maximieren Sie die Häufigkeit, mit der Sie die Beiträge der einzelnen Teammitglieder zusammenführen. So stellen Sie sicher, dass Ihre Änderungen kompatibel zueinander sind und keine Konflikte erzeugen. Dazu ist es wichtig, vor Beginn der Implementierung die Schnittstellen zwischen den einzelnen Komponenten gemeinsam zu besprechen und zu dokumentieren.

- Planen Sie mindestens einen vollen Arbeitstag für abschließende Arbeiten, wie z.B. das Ergänzen von Dokumentationen oder die Überarbeitung von Readme-Dateien ein. Schließen Sie die Implementierung der eigentlichen Funktionalität bereits einige Tage vor dem von Ihnen angestrebten Projektende ab. Konzentrieren Sie sich danach auf das ausgiebige Testen der Anwendung, das Beheben von *Bugs* und dem Vervollständigen der Dokumentation.

## Abgabe

Am Abgabetag muss Ihr Repository die folgenden Inhalte vorweisen:

- Vollständiger Quellcode Ihrer Anwendung

- Eine ausführliche Readme-Datei mit einer Kurzbeschreibung der Anwendung (mit Screenshots der wichtigsten Funktionen) und einer vollständigen Anleitung für die Installation bzw. Inbetriebnahme der Anwendung

- Einen Link (in der Readme-Datei) zu einer funktionierenden, im WWW-gehosteten Version Ihrer Anwendung

- Eine Datei `Kommentare.md` in der Sie kurz den erreichten Zustand der Anwendung beschreiben, nicht implementierte Funktionen nennen und begründen, warum diese nicht umgesetzt wurden sowie eine kurze Zusammenfassung der Arbeitsaufteilung der Programmbestandteile, die von jedem der Teilnehmenden implementiert wurden.