# Weiterführende Literatur und Nachschlagewerke

Grundsätzlich können Sie alle Themen des Kurses mit den auf dieser Seite bereitgestellten Informationen bearbeiten. Wichtige Literatur oder externe Quellen werden innerhalb der verschiedenen Lektionen genannt. Die hier aufgeführten Publikationen können Sie bei Ihrem Selbststudium unterstützen. Es handelt sich um eine Auswahl verschiedener Werke aus dem Bereich der Softwaretechnik und -Entwicklung. Die Liste wird in unregelmäßigen Abständen ergänzt. 

# Javascript

## Eloquent Javascript
**von Marijn Haverbeke**

Marijn Haverbeke ist ein niederländischer Softwareentwickler, der maßgeblich an verschiedenen *Open Source*-Projekten beteiligt ist. Dazu gehört u.A. die *Javascript*-Editoren [*CodeMirror*](https://github.com/codemirror/codemirror) und [*ProseMirror*](https://github.com/ProseMirror/prosemirror). In dem frei als E-Book verfügbaren *Eloquent Javascript* führt Haverbeke anhand der Programmiersprache *Javascript* in die Programmierung von Anwendungssoftware ein. Dazu werden zentrale Inhalte, wie z.B. Funktionen, Objekte, Module oder asynchrone Programmierung erläutert und am Beispiel von *Javascript* demonstriert. Das Buch ist dabei in drei Abschnitte unterteilt, die nacheinander die grundlegenden Sprachelemente, die Verwendung von *Javascript* im Browser und die Möglichkeiten von *Node.js* behandeln. *Eloquent Javascript* ist [online verfügbar](http://eloquentjavascript.net/) und kann auf der Projektseite auch als *Pdf*-, *epub*- oder *mobi*-Datei heruntergeladen werden.

## Mozilla Developer Network

Bei konkreten Problemen zur Programmiersprache *Javascript* oder den *Browser-APIs* kann ein Blick in die Dokumente des *Mozilla Developer Networks (MDN)* helfen. Auf dieser Plattform werden Inhalte zu Web Standards, APIs und verschiedenen Projekten der Mozilla-Organisation zusammengetragen. Die Beiträge stammen dabei von Mitgliedern und Mitgliederinnen der *Community* und Mitarbeitenden der Mozilla-Organisation. Neben der Dokumentation der verfügbaren APIs finden sich hier auch zahlreiche Überblicksartikel und Tutorials zu den verschiedenen Browserfeatures.

- [Javascript-Übersicht des MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Javascript-Dokumentation des MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

# Softwaretechnik

## Refactoring
**von Martin Fowler**

[Martin Fowler](https://martinfowler.com/) ist *Chief Scientist* der Software- und Consulting-Firma *ThoughtWorks*. In *Refactoring: Improving the Design of Existing Code* werden konkrete Vorschläge für die qualitative Verbesserung häufiger *code smells* gegeben. Zu Beginn stellt Fowler die Grundidee des *Refactorings*, also der strukturellen und qualitativen Verbesserung existierenden Code-Strukturen ohne deren funktionale Veränderung, vor und gibt konkrete Beispiel für daraus resultierende positive Effekte. Fowler stellt Indikatoren (*smells*) vor, die auf ein notwendiges *Refactoring* betroffender Code-Stellen hinweisen. Im Anschluss werden konkrete Handlungsanweisungen für die positive Neustrukturierung dieser Stellen genannt. Dabei werden alle Beispiele durch konkreten Quellcode und deren Umformung nachvollziehbar vorgeführt. Die aktuelle, überarbeitete Ausgabe erschien 2019 und verwendet in den Beispielen die Programmiersprache Javascript.

## A Philosophy of Software Design 
**von John Ousterhout**

John Ousterhout lehrt Informatik an der [Stanford University](https://web.stanford.edu/~ouster/cgi-bin/home.php). In "A Philosophy of Software Design" fasst er Erkenntnisse aus seinem *Software Design*-Kurs zusammen und formuliert wesentliche Prinzipien für den Entwurf komplexer Softwaresysteme. Diese Prinzipien werden in 20 einzelnen Kapiteln vorgestellt, die in den meisten Fällen unabhängig voneinander gelesen werden können. Dabei werden die einzelnen Problembereiche (z.B. Modularisierung, Abstraktion, Strategien oder Schichtenmodelle) knapp vorgestellt und durch einen abstrakten Lösungsvorschlag ergänzt. Anhand sehr kurzer Beispiele wird anschließend eine konkrete Implementierung vorgestellt. Der Autor verweist dabei auch auf häufig bemerkbare Code-Konstrukte (*Red flags*), die auf ein Zuwiderhandeln gegen diese Prinzipien hinweisen. Insgesamt ist dieser Überblick über das Feld des *Software Designs* (nicht zu verwechseln mit [*Software Architecture*](https://stackoverflow.com/questions/704855/software-design-vs-software-architecture#704909)) eher breit aufgestellt. Das Buch richtet sich vorrangig an Studierende und Programmierer und Programmiererinnen, die vorhandenes Grundwissen über die Programmierung erweitern wollen. Die vorgestellten Prinzipien und Vorgehensmodelle werden zum Teil auch im MME-Kurs behandelt. 

## Design Patterns: Elements of Reusable Object-Oriented Software
**von Erich Gamma et al.**

Erich Gamma ist Informatiker und arbeitete unter anderem für die Eclipse Foundation, IBM und Microsoft. Zusammen mit Richard Helm, Raplh Johnson und John Vlissides bildete er die *Gang of Four*, die 1994 das Buch *Design Patterns: Elements of Reusable Object-Oriented-Software* veröffentlichten, das bis heute als Standardwerk im Bereich der Entwurfsmuster gilt. Gamma et al. stellen in dem Werk einen Katalog von *Design Pattern* zusammen, der Problem- und Lösungsbeschreibungen für zahlreiche Situationen im Kontext der Entwicklung objektorientierte Software enthält. Die einzelnen Muster bestehen dabei stets aus einer Problembeschreibung und einem entsprechenden Lösungsvorschlag, der durch ein konkretes Codebeispiel anschaulich beschrieben wird. Zusätzlich wird der Zusammenhang der einzelnen Muster erklärt. Dadurch werden Abhängigkeiten zu anderen Mustern und mögliche Konsequenzen der Verwendung deutlich gemacht. Die Inhalte des Katalogs sind anhand dreier größerer Bereiche sortiert, die die Konstruktion, die Struktur und das Verhalten von Objekten betreffen. Das Buch ist digital über den [Bibliothekskatalog](https://www.regensburger-katalog.de/TouchPoint/perma.do?q=+1035%3D%22BV037353408%22+IN+%5B2%5D&v=ubr&l=de) verfügbar.

# Versionsverwaltung

## Pro Git
**von Scott Chacon und Ben Straub**

Im [frei verfügbaren](https://git-scm.com/book/en/v2) Buch *Pro Git* beschreiben Chancon und Straub grundlegende und fortgeschrittene Funktionen des Versionsverwaltungssystems *git*. Dabei werden nach einer Übersicht über und einer Einführung in die Verwendung des *Tools*  auch Prozesse und *Workflows* vorgestellt, die auf Basis von *git* umgesetzt werden können. Neben der Verwendung als Nachschlagewerk bei konkreten Problemen bieten einige Kapitel, z.B. [*Git Branching*](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), auch eine gute Übersicht über das korrekte methodische Vorgehen bei der Verwendung von *git*.

# User Interface-Design

## Design for Software. A Playbook for Developers
**von Erik Klimczak**

Erik Klimczak fast in *Design for Software. A Playbook for Developers* die wichtigsten Schritt eines Nutzer-zentrierten Entwicklungsprozess zusammen. Das Buch richtet sich dabei voranging Entwickler und Entwicklerinnen und versucht diesen, die grundlegenden Ziele bzw. sinnvolle Methoden der einzelnen Entwicklungsphasen näher zubringen. Dabei werden Innovationsmethoden, Informationsarchitekturen, Prototyping sowie *Visual* und *Interaction Design* thematisiert, während die eigentliche Implementierung (Codierung) der Software ausgespart wird. *Design for Software* eignet sich gut, um Wissen aus dem *Usability*- bzw. *User Experience*-Bereich aufzufrischen und kann zusammen mit Ousterouts *Phliosophy of Software design* als Handbuch bzw. Leitpfaden für die Entwicklung einfacher, studentischer Softwareprojekte verwendet werden. Das Buch ist digital über den [Bibliothekskatalog](https://www.regensburger-katalog.de/TouchPoint/perma.do?q=+1035%3D%22BV041432102%22+IN+%5B2%5D&v=ubr&l=de) verfügbar.