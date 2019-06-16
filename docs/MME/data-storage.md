# Datenspeicherung in Webanwendungen I: Lokale Möglichkeiten

Viele Anwendungsideen setzen Möglichkeiten zur sitzungsübergreifenden, persistenten Speicherung von Informationen voraus. Das können explizit angelegte Daten, wie z.B. die Einträge einer *ToDO*-Liste, implizit erstellte Werte, wie z.B. das zuletzt erreichte Level eines Spiels oder benutzerspezifische Konfigurationswerte wie Schriftgrößen oder Hintergrundfarben sein. Das zentrale Merkmal aller Beispiele ist die kontinuierliche Verwendung der Anwendung durch die Nutzer, die über eine einzelne abgeschlossene Sitzung hinausgeht. Dieses Kapitel stellt verschiedene Anwendungsbeispiele für die lokale Speicherung von Anwendungsdaten im Browser vor und erläutert kurz die aktuell unterstützten APIs zur Datenspeicherung. 

!!! note Hinweis
	Die Verwendung lokaler Speichermöglichkeiten ist nicht für alle Problemstellungen geeignet. Die eingesetzten Technologien sind bestimmten Einschränkungen hinsichtlich Volumen und Art der gespeicherten Daten unterworfen und sind nur im Browser des jeweils verwendeten Geräts zugänglich. Zusätzlich kann das bewusste oder unbewusste Entfernen der gespeicherten Inhalte durch die Nutzer nicht kontrolliert werden. Komplexere Anwendungen, insbesondere solche, die den Nutzern die Verwendung mehrere Endgeräte erlauben, sollten über eine serverseitig implementierte Lösung zur Benutzer- und Datenverwaltung verfügen. LÖsungvorschläge dazu werden in einem späteren Kapitel vorgestellt.

## Motivation

In der Regel profitieren Anwendungen von einer sinnvoll umgesetzten Strategie für die sitzungsübergreifende, wiederholte Verwendung durch individuelle Nutzer. Viele Anwendungen (*ToDo*-Listen, Notizbücher) setzen eine entsprechende Lösung zwingend voraus. Andere, weniger komplexe Beispiele, profitieren von einer nahtlosen *User Experience*, die es Nutzern erlaubt, eine unterbrochene Sitzung unter Beibehaltung des letzten Anwendungszustands fortzusetzen. Die Verwendung lokaler Lösungen für diese Anforderungen stellt einen ersten, einfachen Schritt zur Verbesserung entsprechender Anwendungen dar. Im Unterschied zu anderen Plattformen erlaubt der Browser keinen programmatischen Zugriff auf das lokale Dateisystem[^1]. Moderne Browser stellen Ihnen unterschiedliche Methoden (*APIs*) zur Verfügung mit der einfache und komplexe Speicherkonzepte direkt im  Browser umgesetzt werden können. Nutzen Sie diese wann immer es möglich ist, um das Nutzungserlebnis Ihrer Anwendung zu verbessern.

## Unterschiedliche Anwendungsfälle

Relevante Anwendungsfälle für die lokale Datenspeicherung lassen sich in unterschiedliche Kategorien aufteilen. Diese reichen von einfachen Ansätzen zur temporären Speicherung von Eingabewerten oder Zwischenergebnissen bis zur langfristigen Bereitstellung zentraler Anwendungsinhalte. Versuchen Sie im Rahmen der Planung Ihrer Anwendung festzustellen, auf bzw. mit welchen Daten Ihre Anwendung operiert. Überlegen Sie sich, in welchem Umfang und in welcher Form Sie diese Daten dauerhaft speichern und bereitstellen müssen und wählen Sie auf Basis dieser Informationen eine passende Lösungsstrategie aus. 

### Temporäre Daten (sitzungsintern)

In wenigen Fällen kann das Speichern sitzungsinterner Daten außerhalb der eigenen Programmstruktur notwendig sein. Versuchen Sie grundsätzlich, benötigte Informationen innerhalb der entsprechenden Komponenten und in der korrekten Schicht Ihrer Anwendung zu speichern (Vgl. u.a. MVC). In Ausnahmefällen kann es notwendig sein, diese Daten an andere Stelle bereitzustellen, um sie z.B. mit nicht-verbundenen Komponenten zu teilen.

**Beispiele**: Tokens für die Benutzerauthentifizierung oder Zwischenspeicherung (Cache) von Serveranfragen in einem REST-Client.

### Temporäre Daten (sitzungsübergreifend)

Um den Komfort der Benutzer zu steigern, empfiehlt es sich, auch nicht-kritische Informationen, wie z.B. Inhalte von Textfeldern, aktuelle Arbeitsschritte oder andere benutzerspezifische Werte zu speichern und beim Start der nächsten Sitzung zur Wiederherstellung des Anwendungszustands zu verwenden. Dadurch ermöglichen Sie Nutzern eine kontinuierliche Erfahrung und z.B. die direkte Wiederaufnahme einer unterbrochenen Aufgabe. Einige der Anwendungsfälle werden bereits von browserinternen Funktionen umgesetzt (z.B. das Speichern von Formularinhalten). Prüfen Sie in solchen Fällen, ob die Lösungen im Rahmen Ihrer Anwendung verlässlich und zufriedenstellend funktionieren, insbesondere bei Feldern aus clientseitig erstellten UIs.

**Beispiele**: Eingegebene Inhalte, z.B. für automatische Vervollständigung von Formularen.

### Langfristige Daten (unkritisch)

Unter Umständen fallen innerhalb Ihrer Anwendung Daten an, die von einer dauerhaften Speicherung profitieren, bei Verlust aber keine kritischen Auswirkungen auf die Funktionalität der Anwendung haben. Das können z.B. vorgenommene Personalisierungen der Benutzeroberfläche oder andere Konfigurationsoptionen sein.

**Beispiele**: Aktuelle Zwischenergebnisse oder Schritte in einem mehrstufigen Prozess, z.B. bei Bestellungen in einem Online-Shop.

### Langfristige Daten (kritisch)

Am wichtigsten ist die Speicherung von Daten dann, wenn die Persistierung und dauerhafte Bereitstellung dieser selbst eine genuine Funktion der jeweiligen Anwendung darstellt. Das ist dann der Fall, wenn Nutzer Ihrer Anwendung zum Erstellen von Inhalten verwenden oder von Nutzern erwirkte Anwendungszustände (z.B. Speicherstände in einem Videospiel) für die sinnvolle Wiederaufnahme einer unterbrochenen Sitzung zwingend notwendig sind.

**Beispiele**: Spielstände in einem Videospiel oder Aufgaben in einer *ToDo*-Liste.


## Speichermöglichkeiten in modernen Browsers

Moderne Browser stellen Ihnen unterschiedliche  Möglichkeiten zur Persistierung von Daten zur Verfügung. Die hier vorgestellten Lösungen verfügen über APIs, die eine programmatische Verwendung innerhalb einer Javascript-Anwendung erlauben. Wesentliche Unterschiede der verschiedenen Ansätze sind die unterstützten Datenformate, das verfügbare Speichervolumen und der Grad der Komplexität der Integration in die eigenen Anwendung.

In der Regel verwenden alle Technologien Domain-basierte Speicherlösungen. D.h. für jede Domain werden individuelle Speicher verwendet, auf die auch nur aus dem Javascript-Kontext der jeweiligen Domain zugegriffen werden kann.  

### Cookies

[Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) stellen die einfachste und älteste Möglichkeit zur dauerhaften Speicherung von Inhalten im Browser dar. Während das ursprüngliche Cookie-Konzept serverseitige Anfragen zum Erstellen und Auslesen der Inhalte vorsah, besteht seit der [DOM-Level-2](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-8747038)-Spezifikation auch eine clientseitige Javascript-Schnittstelle. Cookies werden im Browser als zusammenhängende Zeichenkette gespeichert, die über eine einfache [API](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) ausgelesen und bearbeitete werden kann. Individuelle Einträge werden dabei (per Konvention) als *Key*/*Value*-Paar (`id=42`) gespeichert.

### Storage API

Eine komplexere Möglichkeit zur browserinternen Speicherung von Daten stellt die [Storage-API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) dar. Die API ermöglicht das temporäre sowie dauerhafte Speichern von Inhalten auf Domainebene. Gespeicherte Inhalte sind nur aus dem Javascript-Kontext der jeweiligen Domain zugänglich, d.h. Inhalte aus Ihrer Webanwendung können nicht über den Javascript-Code einer anderen Website ausgelesen werden. Beide Möglichkeiten können über globale Objekte (`sessionStorage` und  `localStorage`) verwendet werden. Der *Session Storage* wird beim Schließen des Browser vollständig geleert. Die API der beiden Objekte unterscheidet sich nicht.

Innerhalb der *Storage*-Objekte werden Inhalte als *Key*/*Value*-Paar abgespeichert. Für Schlüssel und Wert können dabei nur *Strings* verwendet werden. 

**Verwendung der Storage-API**

``` javascript
// Zugriff auf den local storage
let myStorage = localStorage;

// Speichern eines Werts
myStorage.setItem("ID", "ID-1337");

// Auslesen eines Werts
let id = myStorage.getItem("ID");
console.log(id); // Gibt "ID-1337" auf der Konsole aus
```

**Storage-API und JSON**

Das [JSON-Format](https://en.wikipedia.org/wiki/JSON) kann im Kontext der *Storage*-API verwendet werden, um auch komplexere Informationen dauerhaft zu speichern. JSON-Inhalte werden einfach lesbar als strukturierte Zeichenketten abgebildet. Grundsätzlich sind alle Javascript-Objekte JSON-kompatibel, können also in diesem Format abgebildet, bzw. aus dem Format generiert werden. Eine Ausnahme stellen objektinterne Funktionen dar, die im JSON-Format nicht abgebildet werden können.

Javascript verfügt mit dem globalen [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt über eine integrierte API zur einfachen Konvertierung zwischen JSON- und Javascript-Objekten. Mithilfe der [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)-Funktion kann aus einer JSON-formatierte Zeichenkette ein Javascript-Objekt erzeugt werden. Die Funktion [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) wandelt ein Javascript-Objekt in die äquivalente JSON-Repräsentation um. 

Auf Basis der JSON-API kann der *Storage* auch zur Speicherung komplexerer Daten verwendet werden. Dabei werden die entsprechenden Inhalte vor der Speicherung [serialisiert](https://en.wikipedia.org/wiki/Serialization) und beim Auslesen wieder in verwendbare Javascript-Objekte konvertiert:

``` javascript
let user = {
  id: "ID-1337",
  email: "user@mail.de",
  options: {
    theme: "default",
	fontSize: 16,
	local: "en"
  }
}

// Erstellt und speichert die JSON-Repräsentation 
// des übergebenen Nutzer-Objekts
function storeUser(user) {
  let key = user.id,
  value = JSON.stringify(user);
  localStorage.setItem(key, value);
}

// Liest anhand der übergebenen Nutzer-ID den zugehörigen
// JSON-Wert aus und gibt diesen als Javascript-Objekt zurück
function loadUser(id) {
	let userString = localStorage.getItem(id);
	return JSON.parse(userString);
}

```

### IndexedDB

Die komplexeste Lösung für die lokale Datenspeicherung im Browser stellt die [*IndexedDB-API*](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) dar. Mit dieser Schnittstelle lassen sich auch größere Mengen von Daten dauerhaft in objektorientierten Datenbanken speichern und abrufen. Dabei können durch die Verwendung des [*structured clone algorithm*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) theoretisch alle in Javascript verwendeten Objekttypen verwendet werden, u.a. auch [File](https://developer.mozilla.org/en-US/docs/Web/API/File)- und [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)-Objekte. Die Implementierung der Datenbank innerhalb einer eigenen Anwendung erfolgt auf sehr niedrigem Level. Grundsätzlich sollte daher über die Verwendung einer Bibliothek nachgedacht werden, die den Umgang mit der API erleichtert (Vgl. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)).

Sowohl die Initialisierung und Bereitstellung als auch alle Datenbanktransaktionen erfolgen asynchron. Innerhalb einer Webanwendung können beliebig viele, unabhängige Datenbanken angelegt und verwendet werden. Auch die *IndexedDB-API* arbeitet domainenspezifisch. Auf die erstellten Datenbanken kann daher nur aus dem Kontext der jeweiligen Anwendung heraus zugegriffen werden. Eine Übersicht über die Verwendung der API finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB).

### Vergleich der Lösungen

|   | Cookies | Session Storage | Local Storage | IndexedDB | 
|---|---------|-----------------|---------------|-----------|
| **Browserunterstützung** | Alle modernen Browser | Alle modernen Browser | Alle modernen Browser | Alle modernen Browser |
| **Unterstützte Datenformate** | Zeichenketten (daher auch JSON-kompatible Formate) | (daher auch JSON-kompatible Formate) | (daher auch JSON-kompatible Formate) | Grundsätzlich alle in Javascript verwendbare Formate (auch `Files` und `Blobs`|
| **Verwendbarer Speicher** | Browserabhängig, in der Regel bis zu 4KiB | Browserabhängig, in der Regel zwischen 5 und 50 MB | Browserabhängig, in der Regel zwischen 5 und 50 MB | Stark (!) browserabhängig, von einigen MB bis zu 20% des verfügbaren Festplattenspeichers |
| **Zeitpunkt der Datenlöschung** | Beim Leeren des Caches | Beim Leeren des Caches | Beim Leeren des Caches | Browserabhängig, beim Leeren des Caches oder beim Löschen der entsprechenden Datenbankdateien durch den Nutzer |
| **Sinnvolle Anwendungsfälle** | Benutzer-IDs, Flags zur Erkennung wiederkehrender Nutzer| Sitzungsinformationen (*Timestamps*, Serverantworten, etc.) | Unkritische, aber längerfristig benötigte Inhalte wie z.B. Progammeinstellungen  | Dauerhaft benötigte Inhalte, z.B. *user generated content* |
| **Komplexität** | gering | gering | gering | hoch |

### Limitierungen der vorgestellten Lösungen.

Alle vorgestellten Lösungen sind hinsichtlich der Dauer der Datenspeicherung dem Nutzerverhalten unterworfen. Dieser kann die durch die Anwendung erstellten Daten bewusst oder unbewusst entfernen. Cookies und *Local Storage*werden in der Regel beim Leeren des Browser-Cache entfernt. Die Persistenz erstellter Datenbanken hängt von der jeweiligen Implementierung des Browserherstellers bzw. dessen Interpretation des [Standards](https://w3c.github.io/IndexedDB/#user-tracking) ab. Grundsätzlich sollten Sie eine *Fallback*-Strategie für den Fall des Datenverlust einplanen. Diese sollte die Reinitialisierung der benötigten Speicherstrukturen und ggf. auch entsprechendes Feedback an den Nutzer bzw. die Nutzerin beinhalten. 

### Offline-Anwendungen mit dem Application Cache

Eine weitere, indirekte Möglichkeit der Datenspeicherung stellt die HTML5-Funktionalität des [*Application Cache*](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) dar. Anders als bei den vorher vorgestellten Lösungen werden hier keine individuellen Daten persistiert, sondern konkrete Ressourcen in Form von Dateien zur Speicherung vorgemerkt. Es handelt sich dabei um solche Inhalte, die im Normalfall zur Laufzeit von der serverseitigen Komponenten einer Anwendung bezogen und dynamisch in die clientseitige Anwendung integriert werden. Das können HTML- und CSS-Dokumente, Grafiken oder andere Ressourcen (z.B. JSON-Dokumente sein). Die Persistierung dieser Inhalte auf Client-Seite erfolgt durch explizite Caching-Anweisungen in einer Manifest-Datei. Die lokale Datenspeicherung dient als *Fallback* für den Fall, dass die Anwendung bei fehlender Internetverbindung *offline* betrieben wird und ersetzt kurzfristig die Server-Client-Kommunikation. Der *Application Cache* wird in der Regel parallel zu einer anderen Speicherstrategie verwendet. 

## Allgemeine Strategien

Überlegen Sie sich bei der Implementierung einer Persistenzschicht - unabhängig von der verwendeten Technologie -, an welchen Stellen die Komponente zur Datenspeicherung mit dem Rest Ihrer Anwendung in Berührung kommt bzw. mit dieser kommunizieren muss. Stellen Sie fest, in welchen Phasen der Laufzeit Sie Operationen im Kontext der Schicht durchführen müssen. Denken Sie dabei u.A. über die folgenden Punkte nach:

### Initialisierung des Speichers

In der Regel müssen Sie die verwendeten Speicher zu einem geeigneten Zeitpunkt initialisieren. In diesem Zusammenhang kann z.B. das Vorbereiten der verwendeten Datenbanken notwendig sein. Überlegen Sie sich, wie und wann Sie die implementierten *Setup*-Vorgänge ggf. wiederholen müssen.

### Einlesen gespeicherter Werte

Häufig werden Sie die Datenspeicher zum Abbilden und Wiederherstellen des [Anwendungszustandes](https://en.wikipedia.org/wiki/State_(computer_science)) verwenden. Überlegen Sie sich, welche Inhalte bereits beim Anwendungsstart benötigt werden und implementieren Sie einen strukturierten Prozess zur Reinitalisierung Ihrer Anwendung auf Basis der in vorangegangenen Sitzungen gespeicherten Informationen.

### Zeitpunkt der Speicherung

Überlegen Sie sich, zu welchem Zeitpunkt Sie Inhalte speichern müssen. Während unkritische Inhalte beim Schließen der Anwendung in den jeweiligen *Storage* überführt werden können, sollten kritische Inhalte möglichst zeitnah zu ihrer Erstellung bzw. Manipulation persistiert werden.

### Abstraktion der Persistenzschicht

Trennen Sie die *Model*-Schicht Ihrer Anwendung (d.h. die zur Laufzeit benötigten Daten und Datenstrukturen bzw. den daraus resultierenden *State*) von der eingesetzten Speicherlösung. Abstrahieren Sie den Datenzugriff soweit wie möglich und achten Sie insbesondere bei parallelen Zugriff durch unterschiedliche Komponenten auf eine einheitliche Schnittstelle, die auch die Datenintegrität sicher stellt.


[^1]: Mit der [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) existiert eine - aktuell nicht standardisierte - Möglichkeit, lokale Dateisysteme zu emulieren und zur Datenspeicherung zu verwenden. Die gespeicherten Inhalte werden im lokalen Dateisystem des Geräts abgelegt. Die verwendeten Bereiche sind jedoch vom restlichen Dateisystem getrennt, eine Möglichkeit zum direkten Zugriff auf die Festplatte des Nutzers/der Nutzerin besteht auch hier nicht.