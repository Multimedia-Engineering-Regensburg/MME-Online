# Der Projektordner

Für die Entwicklung und Bereitstellung von Webanwendungen auf der Basis von HTML und Javascript ist keine besondere Strukturierung des Projektordners erforderlich oder vorgeschrieben. Da die Verknüpfung der verschiedenen Dateien durch (relative) Verlinkung innerhalb der Dokumente erfolgt können die Projektdateien theoretisch an beliebigen Stellen des Entwicklungsrechners bzw. des Webservers liegen, der die Anwendung an den Nutzer ausliefert. Aus naheliegenden Gründen sollte bei der Arbeit an einer Webanwendungen jedoch ein strukturierter Projektordner verwendet und gepflegt werden. 

!!! warning "Development vs. Deploying"
	Der hier vorgestellte und im Kurs verwendete Aufbau des Projektordners beschreibt die Entwicklersicht bzw. die Ordnerstruktur während der Implementierung. Diese kann sich von dem schlussendlich ausgelieferten und über einen Webserver bereitgestellten Produkt unterscheiden. Auf einige dieser Unterschiede wird im Laufe des Kurses eingegangen. Ein wesentlicher Unterschied sind z.B. die Reduzierung der Anzahl der Einzeldateien durch Konkatenieren der individuellen Javascript- und CSS-Dateien. Dadurch wird die Menge der *Client*-Anfragen zum Übertragen der Webanwendungen minimiert.


## Vorüberlegungen
In der Regel besteht ein Softwareprojekt aus unterschiedlichen Dateien, die im Rahmen des *Build*-Prozesses zu einem ausführbaren Artefakt zusammen gesetzt werden. Unabhängig von der eingesetzten Programmiersprache oder -Plattform können verschiedene Anforderungen an die Organisation dieser Dateien gestellt werden:

1. Alle Projektdateien sollten, soweit dies keine offensichtlichen Nachteile erzeugt, in einem gemeinsamen Projektordner gespeichert werden.

2. Dort wo möglich, sollte dieser Projektordner die logische oder inhaltliche Struktur der Anwendung repräsentieren.

3. Die Ordnerstruktur sollte das effiziente Wiederfinden von benötigten Dateien ermöglichen bzw. unterstützen.

4. Innerhalb des Ordners sollten die konkret für das Projekt erstellen Quellcode- und *Asset*-Dateien getrennt von den von Fremdherstellern bereitgestellten Bibliotheken oder Medien, die zur Erstellung bzw. Ausführen der Anwendung nötig sind verwaltet werden.

## Projektstruktur
Für die Organisation des Projektordners einer Webanwendung existieren zahlreiche Vorschläge oder *Best Practices*. Die im Kurs verwendete Struktur basiert dabei vor allem auf [diesem Vorschlag](https://stackoverflow.com/questions/24199004/best-practice-to-organize-javascript-library-css-folder-structure) und versucht die oben genannten Überlegungen umzusetzen.

### Der Projektordner

``` text
- project			
-- resources		
--- data
--- images
--- css
--- js
-- vendors			
-- index.html
```

Alle Projektdateien werden in einem gemeinsamen Ordner, in der Regel nach dem Projektnamen benannt, gespeichert (hier: `project`). Auf oberster Ebene befinden sich in diesem Ordner:

1. Die HTML-Datei (`index.html`), die als Einstiegspunkt in die Anwendung dient und die Struktur des UIs vorgibt

2. Ein Ordner `resources` für alle anderen Projektdateien

3. Ein Ordner `vendors` in dem alle externen Bibliotheken in separierten Unterordnern abgelegt werden

Der Ressourcen-Ordner ist dabei weiter untergliedert:

- Für den Betrieb der Anwendung notwendige Rohdaten (z.B. JSON-Dokumente) werden unter `data` abgelegt

- Grafiken sind unter `images` abgelegt

- Alle CSS-Dateien, verwendete Schriftarten, sowie Grafiken, die zur Gestaltung des UIs eingesetzt werden, sind unter `css` abgelegt

- Der Quellcode der Anwendung liegt, separiert in Einzeldateien, unter `js`

Die verschiedenen Ordner können weiter untergliedert werden um zusätzliche Strukturen zu schaffen bzw. abzubilden. Innerhalb des `js`-Ordners können z.B. Unterordner eingesetzt werden um verschiedene Komponenten oder Module der Anwendung zu trennen oder zusammengehörige Dateien zu bündeln. Hier kann ähnlich wie bei der Verwendung und Gliederung der der *Packages* im Java-Kontext vorgegangen werden.

<div class="mme-quiz-wrapper" data-url="../../quizzes/project-directory.md.quiz"></div>
