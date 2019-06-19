<a class="github-button button" href="https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-ToDo-List-DB"></a> 
# ToDo-Liste mit Datenbank

In dieser Demo erweitern Sie die [einfache ToDo-Liste](./todo-list.md) um eine Komponente zur dauerhaften Speicherung der eingetragenen Aufgaben. Für die Datenpersistierung wird eine [IndexedDB](../MME/data-storage.md)-Lösung implementiert.

## Aufbau der Anwendung

Die Anwendung basiert auf einer optisch und strukturell angepassten Lösung zur ersten *ToDo*-Aufgaben. Alle Funktionen zur Anzeige und Aktualisierung der einzelnen Aufgaben im *User Interface* wurden bereits implementiert, sind aber noch nicht in den Anwendungsablauf integriert. Nach der Implementierung der Datenbank-Komponente können Sie diese über das zentrale Modul in der `index.js`-Datei mit den restlichen Komponenten der Anwendung verbinden. Der bereits bekannte Prototyp `TaskView` muss dabei nicht mehr direkt verwendet werden, die Verwaltung der graphischen Oberfläche wird vollständig im neuen Modul `TaskController` realisiert.W

### TaskController

Das Modul exportierte einfach Schnittstelle aus Methoden und *Events* zur Steuerung der Abläufe im *User Interface*:

**`add`**: Mit dieser Methode wird das übergebene `Task`-Objekt im *User Interface* angezeigt. Dazu werden interne `TaskView`-Objekte verwendet. Die *Event* im Kontext von Benutzeraktionen mit diesem *View* werden innerhalb des *Controllers* abgefangen.

**`remove`**: Mit dieser Methode wird der `TaskView`, der zur Repräsentation des übergebenen `Task`-Objekts verwendet wird, aus dem *User Interface* entfernt. Die Identifikation erfolgt über die `id`-Eigenschaft des Objekts.

**`taskRequest` (Event)**: Der *Controller* sendet dieses Ereignis aus, nachdem der Nutzer den *Button* zum Hinzufügen einer neuen Aufgabe angeklickt hat. Mit diesem *Event* werden keine weiteren Informationen kommuniziert.

**`taskViewUpdate` (Event)**: Das *Event* wird gesendet, wenn der Nutzer Status oder die Beschreibung einer Aufgabe ändert. In der `data`-Eigenschaft des *Events* befindet sich eine `Event`-Objekt, das den aktualisierten Zustand der Aufgabe repräsentiert.

**`taskDeletionRequest` (Event)**: Das *Event* wird individuell für jede Aufgabe versendet, die gelöscht werden soll. In der `data`-Eigenschaft des *Events* befindet sich eine `Event`-Objekt, das die zu löschenden Aufgabe repräsentiert..

## Aufgabenstellung

Implementieren Sie die Datenbankfunktionalität in einem neuen Modul `DBManager` im Ordner `db`. Im Ordner finden Sie bereits eine Konfigurationsdatei mit Textkonstanten für den Datenbanknamen sowie *Store*-Bezeichnung und -Schlüssel.

1. Skizzieren Sie im neuen Modul die öffentliche Schnittstelle zur Datenbank. Welche Funktionen muss das Modul anbieten? Wie werden diese von den anderen Komponenten der Anwendung verwendet? Welche Informationen müssen an die Datenbank übergeben werden? Implementieren Sie die skizzierte Schnittstelle, vorerst mit leeren Methodenrümpfen.

2. Implementieren Sie zuerst die Funktionalität zur Erstellung bzw. zum Öffnen der Datenbank. Verwenden Sie dazu die [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open)-Methode des globalen `indexedDB`-Objekts. Wie auch die meisten anderen Datenbankoperationen der IndexedDB-API verläuft das Erstellen und Öffnen der Datenbank asynchron. Überlegen Sie sich, wie Sie diese asynchrone, interne Aktion mit der externen Komponenten verbinden, die das Öffnen der Datenbank angestoßen hat. Der Zeitpunkt, an dem die Datenbank bereit steht, muss mit hoher Wahrscheinlichkeit an diese Komponente kommuniziert werden. Die `open`-Methode liefert ein [`IDBOpenDBRequest`](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest)-Objekt zurück. Durch die Verknüpfung verschiedener *Callbacks* mit den Objekteigenschaften `onerror`, `onupgradeneeded` und `onsuccess` können Sie die verschiedenen Phasen der Operation überwachen und auf die möglichen Ergebnisse reagieren. Verwenden Sie den `onupgradeneeded`-Ereignis um beim erstmaligen Erstellen der Datenbank den [`ObjectStore`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore) und in [diesem](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore) die benötigten Indizes zu erstellen.

3. Implementieren Sie anschließenden die zusätzlich notwendigen Operationen: Speichern, Auslesen und Entfernen von `Task`-Objekte in bzw. aus der Datenbank. Alle Operationen verlaufen dabei nach dem gleichen Muster. Über ein [`IDBTransaction`](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction)-Objekt erhalten Sie Zugriff auf den relevanten `ObjectStore`. Über dessen Methoden können Sie notwendigen *Requests* zum Durchführen der Operationen erstellen. Auch hier erfolgt die Bearbeitung der Anfrage über *Callback*, äquivalent zum Vorgehen beim Öffnen der Datenbank. Die Resultate der Datenbankanfrage werden in der Regel über den Parameter des `onsuccess`-*Callbacks* kommuniziert.

4. Verwenden Sie das zentrale Modul aus der `index.js`-Datei um die implementierte Datenbank mit dem Rest der Anwendung zu verknüpfen. Versuchen Sie dabei, die einzelnen Datenbankoperationen (siehe Punkt 3) nacheinander zu implementieren. D.h. integrierten Sie jede der fertiggestellten Funktionen vollständig in die restliche ANwendung, bevor Sie mit der Implementierung weitere Datenbankoperationen beginnen (Vgl. [*Vertical slice*](https://en.wikipedia.org/wiki/Vertical_slice)).


## Starterpaket und Lösung

Ein vorbereitetes Starterpaket zur selbständigen Implementierung der Aufgabe sowie einen Lösungsvorschlag finden Sie auf [Github](https://github.com/Multimedia-Engineering-Regensburg-Demos/MME-ToDo-List-DB). Die Lösung findet sich im `master`-Branch des verlinkten Repositories. Das Starterpaket im `starter`-Branch.