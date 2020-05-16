# JSON: Javascript Object Notation

Für die Strukturierung der Daten, die zwischen *Server* und *Client* ausgetauscht werden, sind standardisierte Datenformate nötigt. Der *Client* muss wissen, wie Inhalt und Struktur der Serverantwort interpretiert werden sollen. Bei der Verwendung von *HTTP* zur Realisierung der Kommunikationsschicht ergibt sich die zusätzliche Anforderung, dass der Datenaustausch auf Grundlage eines der unterstützten [MIME-Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) erfolgt. 

*JSON* (*Javascript Object Notation*) ist ein textbasiertes Datenformat, das in diesem Kontext von vielen Anwendungen und Diensten verwendet wird. Der Standard [^1], der nicht Teil der *Javascript*-Sprachdefinition ist, definiert dabei nur eine Syntax. Der konkrete Ablauf oder die Form des Datenaustausch ist nicht Teil der Spezifikation und wird von den jeweiligen Anwendungen auf Basis von *JSON* definiert. Der verwendete Syntax ähnelt stark der Art und Weise, die in *Javascript* zur Definition von Objekt-Literalen verwendet wird. 

## Datenrepräsentation in JSON

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

## JSON-API im Browser

Aufgrund dem hohen Verbreitungsgrad und der strukturellen Nähe zwischen *JSON* und *Javascript* beinhaltet der Sprachstandard seit der 6. Edition ein globales 'JSON'-Objekt [^2], das Methoden zum *Parsen* und *Erstellen* von *JSON*-Objekten beinhaltet. Das Objekt `JSON` ist im globalen Kontext des Browsers verfügbar. Mit Hilfe der Methode `JSON.parse(<JSONString>)` können Sie ein in Textform vorliegendes *JSON*-Objekt in ein *Javascript*-Objekt umwandeln. Die Methode `stringify(<OBJECT>)` ermöglicht es, einen *String* zu erstellen, der das übergebene *Javascript*-Objekt als *JSON*-formatierten Text repräsentiert.

!!! danger "Vorsicht!"
    Dabei gehen die Informationen, die nicht durch *JSON* dargestellt werden können (z.B. Funktionen oder der Wert `undefined`) verloren.

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

[^1]: ECMA International, [Standard ECMA-404: The JSON Data Interchange Syntax](https://www.ecma-international.org/publications/standards/Ecma-404.htm)
[^2]: ECMA International, [Standard ECMA-262, Kapitel 24.3: The JSON Object](https://www.ecma-international.org/ecma-262/6.0/#sec-json-object)
