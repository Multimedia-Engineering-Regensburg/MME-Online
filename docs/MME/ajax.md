# Client-Server-Kommunikation: AJAX und XMLHttpRequest

Die Verwendung von *Javascript* erlaubt die Realisierung interaktiver Websites und Anwendungen. Die vorhandenen *APIs* für die Netzwerkkommunikation erlauben das *client*-seitigen Nachladen von Ressourcen. Dadurch lässt sich die Datengrundlage einer Anwendung ohne vollständiges Neuladen des HTML-Dokuments anpassen. Eine Anwendung kann Informationen verarbeiten und präsentieren, die nicht bereits beim initialen Laden der Seite bereitgestellt werden, sondern zu einem beliebigen Zeitpunkt während der Laufzeit nachgeladen werden. Funktionen, die sich auf Grundlage dieser Möglichkeiten realisieren lassen, sind z.B Wetter-*Widgets*, *Push*- oder *Pull*-Benachrichtigungen oder das automatische Speichern von Inhalten auf dem Server. Die technische Grundlage dafür ist *AJAX* (Asynchronous Javascript and XML). Der Begriff beschreibt die kombinierte Verwendung von existierenden Webtechnologien wie HTML, *Javascript* oder XML, zur Realisierung interaktiver und responsiver Webanwendungen. Der Einsatz von *AJAX* erlaubt damit auch die Realisierung von *Server/Client*-Anwendungen, also Programmen, die nicht nur im lokalen Browser des Nutzers ausgeführt werden, sondern auch über externe Komponenten, z.B. für die Bereitstellung der Datenschicht, verfügen. In dieser Lektion erhalten Sie einen Überblick über die grundlegenden Mechanismen, die zur Verwendung von *AJAX* nötig sind. 

## Motivation & Problemstellung

Der Einsatz von AJAX geschieht in der Regel aus zwei Gründen: 1) Ihre Anwendung muss mit einer von Ihnen selbst implementierten serverseitigen Komponente kommunizieren oder 2) Sie integrieren Daten in Ihre Anwendung, die von Dritten über eine HTTP-Schnittstelle bereitgestellt wird. Sie erhalten die Möglichkeit, Daten in Ihre Anwendung zu integrieren und zu aktualisieren, ohne diese bereits beim Ausliefern des initialen HTML-Dokuments bereitstellen zu müssen. Dieser Ansatz erlaubt es, gezielt diejenigen Informationen zu beziehen und zu verwenden, die aktuell vom Nutzer benötigt werden. Zusätzlich wird es möglich, Informationen zur Laufzeit der Anwendung zu aktualisieren oder auszutauschen ohne den Ablauf der Anwendung zu stören oder einen Neustart notwendig zu machen.

## AJAX

*AJAX* (*Asynchronous JavaScript and XML*), beschreibt das 2005 von Jesse James Garret vorgeschlagene Konzept [^1] zur Realisierung von interaktiven Webanwendungen. Die beschriebenen Technologien und auch deren kombinierte Verwendung waren dabei keine neuen Erfindungen. Die Bedeutung lag vielmehr in der zusammenhängenden Beschreibung der schon damals eingesetzten Methoden. Garret definiert als Grundlagen für moderne Webanwendungen die Verwendung passender Standards für die Gestaltung der Benutzeroberfläche (**(X)HTML** und **CSS**), die dynamische Interaktion mit dem *UI* über das **DOM**, den Austausch und das dynamische Beziehen von Daten mittels **XML** und **XMLHttpRequests** sowie die logische Gestaltung und Steuerung dieser Komponenten mittels **Javascript**. Häufig wird der Begriff auch für die alleinige Bezeichnung der *JavaScript*-API verwendet, die zur Durchführung von HTTP-Anfragen und damit für das dynamische Beziehen von Daten verwendet wird.

### Dynamisches Laden von Daten mit dem XMLHttpRequest-Objekt

Browser (Client) und Server kommunizieren im WWW in der Regel über das  [HTT-Protokoll](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). Die vom Nutzer eingegebene URL wird dabei vom Browser in eine entsprechende HTTP-Anfrage (*Request*) übersetzt und an den über die URL definierten Server geschickt. Dieser antwortet, ebenfalls über HTTP, und sendet dem Browser die angeforderte Seite bzw. deren HTML-Code, in Form einer *Response*. Stößt der Browser beim Interpretieren dieses Dokuments auf Verweise in Form von z.B. CSS- oder Javascript-Dateien, werden diese auf die gleiche Weise vom Server angefordert und an den Client übermittelt. Die Kommunikation zwischen Client und Server hat bis jetzt an dieser Stelle geendet. Das `XMLHttpRequest`-Objekt, das über die Web-APIs im Browser bereitgestellt wird, erlaubt uns die programmatische Erzeugung und Versendung von HTTP-Requests sowie die Verarbeitung der entsprechenden Antwort in unseren Webanwendungen. 

Kern der entsprechenden AJAX-Komponente ist das `XMLHttpRequest`-Objekt, das eine HTTP-Anfrage repräsentiert. Das Objekt repräsentiert sowohl die initialen Parameter der Anfrage (z.B. die Domain des angesprochenen Servers oder den Pfad des angeforderten Dokuments) als auch den jeweils aktuellen Zustand der Anfrage, der sich bei der Ausführung und Verarbeitung der Anfrage mehrmals ändert. Um diese programmatisch, d.h. in Ihrem Javascript-Code auszuführen und zu verarbeiten sind eine Reihe von Schritten notwendig:

1. Sie erstellen ein neues `XMLHttpRequest`-Objekt
2. Sie definieren eine `Callback`-Funktion für die Verarbeitung der Zustandsänderungen
3. Sie legen die wichtigsten Parameter der Anfrage fest
4. Sie senden die Anfrage ab

### Ablauf einer Anfrage

Vor dem Absenden der Anfrage wird das notwendige Objekt erstellt:

``` javascript
var request = new XMLHttpRequest();
```

Anschließend kann die Anfrage parametrisiert und versendet werden. Die [`open`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)-Methode verlangt dabei mindestens zwei Parameter um die [*Request*-Methode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) sowie die URL des angeforderten Dokuments zu definieren. 

``` javascript
request.open("GET", "http://my.api/data.json"); 
request.send();
``` 

Die Anfrage durchläuft fünf verschiedene Phasen, die sogenannten *Ready States*. Den jeweils aktuellen Zustand können Sie über die Eigenschaft `readyState` des erstellten `XMLHttpRequest`-Objekts auslesen. Die verschiedenen Phasen werden dort über numerische Werte (`0` bis `4`) abgebildet.[^2] Für eine verbesserte Lesbarkeit des Codes empfiehlt sich die Verwendung sprechender Konstanten, die sich auch als Eigenschaften im `XMLHttpRequest`-Objekt finden (Quelle: *Web Hypertext Application Technology Working Group*):

| Status | Konstante und Wert | Beschreibung |
|--------|--------------------|--------------|
| unsent |  UNSENT (numeric value 0) | The object has been constructed. |
| opened |  OPENED (numeric value 1) | The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the fetch can be initiated using the send() method. |
| received | HEADERS_RECEIVED (numeric value 2) | All redirects (if any) have been followed and all HTTP headers of the response have been received. |
| loading | LOADING (numeric value 3) | The response’s body is being received. |
| done | DONE (numeric value 4) | The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects). |

Durch das Registrieren einer *Callback*-Methode auf der `onreadystatechange`-Eigenschaft des *Request*-Objekts können Sie die Änderungen am *State* der Anfrage nachvollziehen und die jeweilige Antwort des Server verarbeiten. Da *AJAX*-Anfragen in der Regel asynchron durchgeführt werden, ist die Event-basierte Verarbeitung über die *Callback*-Methode meistens zwingend erforderlich um an die Antwort des Servers zu kommen:

``` javascript
function onReadyStateChanged() {
  if (request.readyState === XMLHttpRequest.DONE) {
    console.log(request.responseText);
  }
}

request.onreadystatechange = onReadyStateChanged;
```

Die Standardisierung des HTT-Protokoll sieht vor, dass mit jeder Server-Antwort ein [Statuscode](https://tools.ietf.org/html/rfc7231#section-6) an den anfragenden Client gesendet wird. Mit Hilfe des Codes ist der Client in der Lage, das Ergebnis der Anfrage und damit die Antwort des Servers zu interpretieren. Dies ist insbesondere dann wichtig, wenn die Anfrage nicht erfolgreich war und das angefordert Dokument nicht ausgeliefert werden konnte. Anhand der verschiedenen Status-Gruppen und der individuellen Codes ist es client-seitig möglich, den Grund für die gescheitere Anfrage zu identifizieren und entsprechend darauf zu reagieren. Im Kontext des `XMLHttpRequest`-Objekts kann der aktuelle Status über die Eigenschaft `status` ausgelesen werden. Eine Liste der numerischen Codes finden Sie [hier](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Falls Sie in Ihrem Code "exotische", weniger bekannte Codes prüfen und verarbeiten müssen, bietet es sich an, beschreibende Konstanten oder Kommentare zu verwenden. 

Der vollständige Code zum Ausführen und Verarbeiten einer einfachen AJAX-Anfrage lautet:

``` javascript
var request = new XMLHttpRequest();

function onReadyStateChanged() {
  if (request.readyState === XMLHttpRequest.DONE) {
    // server responds with 'OK'-Code (200)
    if (request.status === 200) {
      console.log(request.responseText);
    }
  }
}

request.onreadystatechange = onReadyStateChanged;
request.open("GET", "http://my.api/data.json"); 
request.send();
```

### Die Fetch-API und Promises

Neben dem `XMLHttpRequest`-Objekt existiert mit der [Fetch-API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) eine zusätzliche, modernere Möglichkeit, Ressourcen über das HTT-Protokoll anzufordern. Die API wird von der *Web Hypertext Application Technologien Working Group* als *Living Standard* entworfen[^3] und ist mittlerweile in den meisten aktuellen Browsern implementiert. *Fetch* ermöglicht eine modernere Implementierung von HTTP-Anfragen und ist grundsätzlich sehr [einfach zu verstehen](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Ein wesentlicher Unterschied zu dem vorgestellten `XMLHttpRequest`-Objekt ist die Art und Weise, in der die Asynchronität der HTTP-Kommunikation umgesetzt wird. Statt auf klassiche *Callbacks* setzt *Fetch* dabei auf [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). 

*Promises*[^4] stellen einen Gegenentwurf zum bekannten *Handling* asynchroner Operationen in Javascript dar. Traditionell wird einer Komponente oder Funktion die asynchron arbeitet eine *Callback*-Methode übergeben, die nach Abschluss der Operation aufgerufen wird. Da häufig unterschiedliche Ergebnisse einer solchen Operation möglich sind, verlangen viele asynchron-arbeitende APIs die Bereitstellung mehrere *Callbacks* für das *Handling*  einer erfolgreich abgeschlossenen Aufgabe bzw. das Kommunizieren von Fehlern im Falle einer fehlgeschlagenen Operation. Ein Beispiel dafür könnte so aussehen:

``` javascript
function getRequestedResourceAsync(resource, onSuccess, onError) {
  // get requested resource 
  // when successfully: call onSuccess
  // otherwise: call onError
}

function onSuccess(resource) {
  // process resource
}

function onError(error) {
  // handle error
}

getRequestedResourceAsync(myResource, onSuccess, onError);
```

Das Promise-Prinzip dreht dieses Prinzip um. Die asynchron arbeitende Komponente gibt direkt ein Objekt zurück, das die asynchrone Operation bzw. deren Ergebnis repräsentiert. Dieses Objekt ist das sogenannte *Promise*. Das [`Promise`-Objekt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) bietet standardisierte Schnittstellen um *Callback*-Methoden für das erfolgreiche oder fehlgeschlagene Durchführen der Operation zu registrieren. Diese Registrierung wird jedoch von der aufrufenden Komponenten übernommen:

``` javascript
function getRequestedResourceAsync(resource) {
  let p = new Promise(function(resolve, reject) {
    // async operation
  }); 
  return p;
}

function onSuccess(resource) {
  // process resource
}

function onError(error) {
  // handle error
}

let myPromise = getRequestedResourceAsync(myResource);
myPromise.then(onSuccess, onError);
```

Der tatsächliche Mehrwert des *Promise*-Ansatzes wird deutlich, wenn mehrere asynchrone Operationen koordiniert werden müssen. Dies ist der Fall, wenn mehrere *AJAX*-Operationen durchgeführt werden müssen, deren Anfrage-Parameter sich aus der jeweils vorherigen Server-Antwort ergeben (z.B. komplexe Datenbankanfragen). Das Ergebnis ist meist sehr schwer lesbarer Code ([*Pyramid of doom*](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming))):

``` javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

*Promises* bieten die Möglichkeit, die verschiedenen Anfragen zu verketten (Vgl.: *Chaining*) und übersichtlicher zu gestalten:

``` javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

### Daten an den Server senden

Die beschriebenen Beispiele und Abläufe beschränkten sich bis jetzt darauf, eine spezielle, über die URL definierte Ressource anzufordern. Häufig müssen Sie die Anfrage um weitere Daten ergänzen, wenn Sie beispielsweise Client-seitig generierte Informationen auf dem Server abspeichern wollen oder sich für die erfolgreiche Bearbeitung Ihrer Anfrage authentifizieren müssen. Werden diese Informationen nicht innerhalb der URL zur angeforderten Ressource codiert (z.B. `http://my.api/data.json?key=12345`), müssen die Werte in das Anfrage-Objekt, präzise den *Body* des HTTP-Request geschrieben werden. Bei Verwendung des `XMLHttpRequest`-Objekts geschieht dies über zusätzliche Parameter der [send-Methode](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send). Die Fetch-API ermöglicht es Ihnen, die Anfrage-Optionen als zusätzliches [Parameter-Objekt](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) zu setzen, oder das vollständige Anfrage-Objekt [selbständig zu gestalten](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_your_own_request_object).

## JSON

Für die Strukturierung der Daten, die zwischen *Server* und *Client* ausgetauscht werden, sind standardisierte Datenformate nötigt. Der *Client* muss wissen, wie Inhalt und Struktur der Serverantwort interpretiert werden sollen. Bei der Verwendung von *HTTP* zur Realisierung der Kommunikationsschicht ergibt sich die zusätzliche Anforderung, dass der Datenaustausch auf Grundlage eines der unterstützten [MIME-Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) erfolgt. 

*JSON* (*Javascript Object Notation*) ist ein textbasiertes Datenformat, das in diesem Kontext von vielen Anwendungen und Diensten verwendet wird. Der Standard [^5], der nicht Teil der *Javascript*-Sprachdefinition ist, definiert dabei nur eine Syntax. Der konkrete Ablauf oder die Form des Datenaustausch ist nicht Teil der Spezifikation und wird von den jeweiligen Anwendungen auf Basis von *JSON* definiert. Der verwendete Syntax ähnelt stark der Art und Weise, die in *Javascript* zur Definition von Objekt-Literalen verwendet wird. 

### Datenrepräsentation in JSON

Daten werden in JSON als Objekte definiert, die aus einer strukturierten, Komma-separierten Auflistung von Eigenschaften bestehen. Jede Eigenschaft besteht dabei aus einem beschreibenden *Key* und dem zugehörigen *Value*. Die *Keys* bestehen immer aus Text, für die Werte stehen sechs verschiedene Datentypen zur Verfügung: `Null`, `Boolean`, `Number`, `String`, `Array` und `Object`. Letztes ist ein JSON-Objekt und kann selbst wieder aus Daten der sechs Typen bestehen. 

Ein einfaches Beispiel für die Darstellung eines JSON-Objekts kann so aussehen:

``` json
{
  "list": [1,2,3], // Array
  "data": { // Object
    count: 42, // Number
    test: false // Boolean
  },
  "name": "Test", // String
  "next": null // Null
}
```

Die Darstellung unterscheidet sich dabei - in diesem Beispiel - nicht von einem *Javascript*-Literal. Tatsächlich existieren einige syntaktische, vor allem aber logische Unterschiede zwischen dem *JSON*-Format und den *Javascript*-Literalen. Die Schlüssel eines *JSON*-Objekts müssen aus *Strings* bestehen. Javascript unterstützt zusätzlich die Datentypen `undefined` und `Symbol`. *JSON* wurde als textbasiertes Datenformat für den Austausch zwischen unterschiedlichen Systemen und Programmiersprachen definiert. Aus diesem Grund fehlt die Möglichkeit, logische Operationen in Form von Funktionen zu definieren. Diese Unterschiede müssen bei der Verwendung von *JSON*, insbesondere bei dem begrenzt möglichen Konvertieren zwischen *JSON*- und *Javascript*-Objekten berücksichtigt werden.

### JSON-API im Browser

Aufgrund dem hohen Verbreitungsgrad und der strukturellen Nähe zwischen *JSON* und *Javascript* beinhaltet der Sprachstandard seit der 6. Edition ein globales 'JSON'-Objekt [^6], das Methoden zum *Parsen* und *Erstellen* von *JSON*-Objekten beinhaltet. Das Objekt `JSON` ist im globalen Kontext des Browsers verfügbar. Mit Hilfe der Methoden `JSON.parse` können Sie ein in Textform vorliegendes *JSON*-Objekt in ein *Javascript*-Objekt umwandeln. Die Methode `stringify` ermöglicht es, einen *String* zu erstellen, der das übergebene *Javascript*-Objekt als *JSON*-formatierten Text repräsentiert. Dabei gehen die Informationen, die nicht durch *JSON* dargestellt werden können (z.B. Funktionen oder der Wert `undefined`) verloren.

**Umwandeln eines Javascript-Objekts nach JSON**

``` javascript 
let o = {
	id: 42,
	owner: "me",
	getID: function() {
		return this.id;
	} 
}

let json = JSON.stringify(o);
console.log(json) // Prints: {"id":42,"owner":"me"}
```

**Umwandeln eines JSON-Strings nach Javascript**

``` javascript
let json = "{\"id\":42,\"owner\":\"me\"}"; // String was escaped by JSON.stringify

let o =  JSON.parse(json);

// Parsed object can now be used and modified
o.id = 1337;
```

## Übungsaufgaben

### Rechtschreibprüfung
Erstellen Sie eine einfache Anwendung, die aus einem Eingabefeld, einem *Button* sowie einem Bereich für die Textausgabe verfügt. Der Benutzer kann Wörter in das Eingabefeld eingeben. Nach einem Klick auf den Button wird geprüft, ob es sich um ein korrektes Wort der Deutschen Sprache handelt. 

Für die Überprüfung wird die deutsche Ausgabe des [Wiktionary](https://de.wiktionary.org/wiki/Wiktionary:Hauptseite) verwendet. Dieses Portal bietet eine HTTP-Schnittstelle an, über die nach Einträgen im Wörterbuch gesucht werden kann. Ein Wort gilt dann als korrekt geschrieben, wenn es im Wörterbuch vorkommt. Die Anfrage-Adresse lautet `https://de.wiktionary.org/w/api.php?action=query&titles={{WORD}}}&format=json`, wobei `{{WORD}}` durch das gesuchte Wort ersetzt werden muss. Der Server antwortet mit einer JSON-formatierten *Response*. In der Eigenschaft `query.pages` des als Antwort kommunizierten JSON-Objekts findet sich ein *Array* mit den gefundenen Einträgen. 

Die Antwort auf die Anfrage `https://de.wiktionary.org/w/api.php?action=query&titles=Programmiersprache&format=json` sieht so aus:

``` json
{"batchcomplete":"","query":{"pages":{"13347":{"pageid":13347,"ns":0,"title":"Programmiersprache"}}}}
```

Wurde nach einem Wort gesucht, das nicht im Wiktionary vorhanden ist, erkennen Sie dies am Index des *Array*-Eintrags. Dieser hat dann den Wert `-1`.

Die Antwort auf die Anfrage `https://de.wiktionary.org/w/api.php?action=query&titles=Programmiehrsprache&format=json`  sieht so aus:

``` json
{"batchcomplete":"","query":{"pages":{"-1":{"ns":0,"title":"Programmiehrsprache","missing":""}}}}
```

### Ajax Library
Extrahieren und abstrahieren Sie den Code, den Sie für die AJAX-Anfrage geschrieben haben. Erstellen Sie ein wiederverwendbares Modul, dass den vollständigen Vorgang kapselt und die HTTP-Funktionalität (für `GET`-Anfragen)für beliebige Dokumente über eine einfache Schnittstelle anbietet. Ihr Modul soll über eine einzige öffentliche Methode (`get`) verfügen, der eine URL sowie eine Callback-Methode übergeben wird. Das Ergebnis der Anfrage an diese URL wird als Parameter in die Callback-Methode zurückgegeben. 


[^1]: Jesse James Garret, [Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
[^2]: Web Hypertext Application Technology Working Group,  [XMLHttpRequest: 4.4 States](https://xhr.spec.whatwg.org/#states)
[^3]: Web Hypertext Application Technologien Working Group, [Fetch](https://fetch.spec.whatwg.org/)
[^4]: Mozilla Developer Network, [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
[^5]: ECMA International, [Standard ECMA-404: The JSON Data Interchange Syntax](https://www.ecma-international.org/publications/standards/Ecma-404.htm)
[^6]: ECMA International, [Standard ECMA-262, Kapitel 24.3: The JSON Object](https://www.ecma-international.org/ecma-262/6.0/#sec-json-object)





