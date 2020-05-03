# Versionskontrolle und -verwaltung in der Softwareentwicklung: Grundlagen

Eines der wichtigsten Werkzeuge, die Sie im Rahmen der Entwicklung von Software einsetzen werden, ist die Versionskontrolle. Ein Versionskontrollsystem, bestehend aus Prozessen, Methoden und Anwendungen, beschreibt und dokumentiert die Änderungen an einer Datei oder einer Sammlung von Dateien. Dadurch wird es möglich, den Entstehungsprozess eines Dokuments nachträglich nachzuvollziehen und gezielt verschiedene zeitliche Repräsentationen (Versionen) zu betrachten[^1]. Während heutzutage (und vor allem im Bereich der Softwareentwicklung) nahezu ausschließlich digitale Systeme zum Einsatz kommen, existieren ähnliche Modelle auch in der analogen Welt, z.B. in Form von überarbeiteten und mit entsprechenden Versionshinweisen versehene Neu-Auflagen gedruckter Bücher[^2]. In diesem Kurs werden Sie Versionskontrolle hauptsächlich im Zusammenhang der von Ihnen implementierten Übungsaufgaben und Abschlussprojekte einsetzen. 

## Der Werkzeugbegriff in der Softwaretechnik

Der häufig verwendete Begriff *Tools* (Werkzeug) beschreibt in der Regel konkrete Anwendungen, also Software, die als Mittel zum Erreichen bestimmter Ziele des Nutzers eingesetzt werden. Im Kontext der Entwicklung von Software gehören dazu z.B. Entwicklungsumgebungen, Kompiler oder Anwendungen für das Projektmanagement. Weiter gefasst gehören auch Prozesse und Techniken (z.B. bestimmte Vorgehensmodelle) oder Medien (z.B. Programmier- und Markupsprachen) zur Werkzeugkategorie[^3]. Auch im Bereich der Versionsverwaltung müssen neben den eingesetzten Anwendungen (z.B. *git*) zusätzlich die Modelle und Verfahren betrachtet werden, die auf Basis bzw. durch den Einsatz dieser Anwendungen umgesetzt werden. In der Regel sollte ein im Vorfeld definierter, wohlüberlegter Prozess durch den Einsatz ausgewählter Anwendungen begleitet werden. Vermeiden Sie es, Ihre Arbeitsweise an ein bestimmtes Werkzeug (hier: Anwendung) anzupassen. Wählen Sie stattdessen ein passendes Vorgehen für die zugrundeliegende Problemstellung aus und entscheiden Sie dann, mit welcher Anwendung Sie dieses optimal umsetzen können. Dies ist insofern relevant, als dass Sie die genuinen Ziele und Vorüberlegungen kennen sollten, die im Bereich der Softwareentwicklung mit Versionskontrolle verfolgt werden und z.B. git als Medium zum Umsetzen dieser Ziele, nicht als Maßstab für Versionskontrolle an sich, einsetzen sollen.

## Versionierung vs. Versionskontrolle

Im täglichen Umgang mit digitalen Systemen begegnen uns viele Anwendungen, die auf den ersten Blick eine große Ähnlichkeit mit Versionskontrollsystemen haben. Viele *Cloud*-Speicher, wie z.B. *Dropbox* oder *Seafile*, speichern unterschiedliche Versionen von Dateien. Dabei werden neben dem Änderungszeitpunkt auch Informationen zum Autor der jeweiligen Dateiversion abgespeichert. Der wesentliche Unterschied zu einem Versionskontrollsystem ist, dass die verschiedenen Varianten einer Datei indirekt, durch das Bearbeiten und Abspeichern der Datei versioniert werden und neben den automatisch erfassten Aspekten (Autor, Zeitpunkt) keinerlei inhaltliche Beschreibung zu konkreten Änderungen der Datei erfasst werden können. Diese Anwendungen versionieren automatisch den Bearbeitungsverlauf einer Datei und erlauben in der Regel auch die Revision von Änderungen bzw. die Betrachtung archivierter Varianten. Sie erlauben dem Benutzer jedoch nicht die selbstständige Kontrolle des Versionierungsprozesses oder die semantische Beschreibung einer konkreten Revision.

![Screenshot des Seafile-Clients](../img/vc-seafile-example.png) 

<div class="img-label">Beispiel für Versionierung in der Seafile-Webanwendung</div>

Die manuelle Versionskontrolle, insbesondere die Dokumentation der vorgenommenen Änderungen sind essentieller Bestandteil von Versionskontrollsystemen wie z.B. *git*. Hier hat der Nutzer die Möglichkeit, die zu versionierende Variante einer oder mehrerer Dateien bewusst zu wählen (Zusammenstellen und Durchführen eines *Commits* in *git*) und dabei zusätzliche Informationen anzugeben, um die konkreten Änderungen gegenüber der vorangegangenen Version inhaltlich zu beschreiben. Änderungen an mehreren Dateien lassen sich zu einem gemeinsamen Versionseintrag zusammenfassen. Insbesondere in der Softwareentwicklung, in der inhaltlicher Fortschritt (z.B. die Implementierung eines bestimmten Features) in der Regel die Änderungen von mehreren Dateien erfordert, kann dieser so besser und verständlicher dokumentiert werden. 

![Screenshot der Github-Website](../img/vc-github-example.png)

<div class="img-label">Beispiel für Versionskontrolle in der Github-Webanwendung</div>

## Versionskontrolle in der Softwareentwicklung

Wie bereits erwähnt bezeichnet der Begriff der Versionskontrolle (im Kontext der Softwareentwicklung) nicht nur die eingesetzte Software zur Beschreibung der Verlaufsinformationen. Vielmehr lassen sich drei unterschiedliche Ausprägungen des Begriffs definieren:

**System**: Versionskontrolle (VC) stellt ein System, d.h. ein definiertes, zusammenhängendes Geflecht aus *Prozessen* und *Anwendungen* zur Dokumentation von inhaltlichen Änderungen an einem Set von Dokumenten über einen zeitlichen Raum dar. (Übergreifende Perspektive)

**Prozess**: Der Begriff Versionskontrolle bezeichnet in der Regel nicht nur die jeweils eingesetzten Systeme, sondern vor allem die Prozesse, in denen diese Systeme genutzt werden. Die Systeme sind Mittel um konkrete Probleme im Umfeld eines vorhandene Arbeitsprozesses zu lösen. (Abstrakte Perspektive)

**Anwendungen**: Schließlich kann eben auch die konkrete Software gemeint sein, die innerhalb eines  *Systems* zur Durchführung der definierten *Prozesse* eingesetzt wird. (Anwendungsperspektive)

### Ziele

Eric Raymon fasst die zentralen Möglichkeiten von Versionskontrollsystemen (VC-Systeme) mit den Begriffen *Reversibility*, *Concurrency* und  *Annotation* zusammen[^4]. *Reversibility* steht dabei für die Möglichkeit, frühere Versionen des Quellcodes wiederherzustellen. *Concurrency* meint die gemeinsame (und gleichzeitige) Arbeit am Quellcode und *Annotation* erlaubt die inhaltliche Beschreibung vorgenommener Änderungen. Aus diesen Möglichkeiten lassen sich die konkreten Ziele rekonstruieren, die mit dem Einsatz von Versionskontrollsystemen in der Softwareentwicklung verfolgt werden:

1. VC-Systeme erlauben es uns, die kontinuierliche Arbeit an einem Softwareprojekt nachvollziehbar zu dokumentieren. An geeigneter Stelle, z.B. nach erfolgreicher Implementierung einer neuen Funktion, kann eine neue Version des Quellcodes, zusammen mit einer inhaltlichen Beschreibung der vorgenommenen Änderungen, erstellt werden. Jede Änderung kann eindeutig einem Autor bzw. einer Autorin zugeordnet werden.

2. VC-Systeme erlaube es uns, verschiedene Varianten (Versionen) des Quellcodes zu vergleichen und wiederherzustellen. Bei Problemen mit einer aktuellen oder vorangegangen Version kann gezielt zu einer früheren Variante zurückgekehrt und die Entwicklung an dieser Stelle wieder aufgenommen werden. Dabei dient das VC-System nicht als Backup, sondern bildet eine zusammenhängende, explorierbare Dokumentation der Entstehungsgeschichte des Codes ab.

3. VC-Systeme sind Grundlage für die sinnvolle, kollaborative und gleichzeitige Arbeit an einer gemeinsamen Code-Base. Sie verwalten die Beiträge unterschiedlicher Autoren und stellen Möglichkeiten zum Austausch von Änderungen (Revisionen) bereit. Vorgehensmodelle oder *Workflows*, die Richtlinien und Abläufe für diese gemeinsame Arbeit vorgeben, können durch VC-Systeme implementiert werden.


[^1]: Chancon & Straub, Pro Git: [About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), online
[^2]: [Hier](https://martinfowler.com/articles/refactoring-2nd-changes.html) finden Sie ein entsprechendes Beispiel für die Neuauflage von Martin Fowlers Buch *Refactoring*
[^3]: Riddle & Fairley, Software Development Tools, Springer, 1980
[^4]: Raymon, [Understanding Version-Control Systems](http://www.catb.org/~esr/writings/version-control/version-control.html), online