# 04 | Dynamische Webanwendungen als Server-Client-System

In der vierten Woche lernen Sie, die funktionalität Ihrer Anwendungen zur Laufzeit durch die Kommunikation mit serverseitigen Komponenten zu erweitern. Sie frischen Ihre Kenntnisse über die HTTP-basierten Kommunikation zwischen Client- und Server-Anwendungen auf und lernen die verschiedenen Möglichkeiten kennen, entsprechende Anfragen programmatisch im JavaScript-Code zu implementieren. Durch den Einsatz dieser *Ajax*-Ansätze, können wir in unseren Anwendungen dynamisch Inhalte nachladen und integrieren, ohne die Anwendung selbst neu zustarten. Damit wird die Realisierung dynamsicher Webanwendungen möglich, die entweder auf Inhalten eigener Server zugreifen können oder Daten und Informationen aus externen Quellen, z.B. *REST-APIs* integrieren.

**Die Live-Sitzung zu dieser Lektion findet am 20. Mai ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.** Eine Beschreibung der dort vorgestellten Demo finden Sie [hier](../../Demos/mensa-app).

## Ziele

- Sie können mit dem `XMLHttpRequest`-Prototypen und der `fetch`-API auf zwei unterschiedliche Art und Weisen, dynamisch Inhalte externer Server in lokale JavaScript-Anwendungen integrieren.
- Sie kennen die wichtigsten Methoden und *Workflows* für den Umgang mit JSON-formatierten Inhalten im Browser.
- Sie sind mit den grundlegenden Informationen und Hintergründen von *HTTP* und *REST* vertraut.

## Inhalte zum Durcharbeiten

- [Client-Server-Kommunikation: AJAX und XMLHttpRequest](./ajax)
- [JSON: Javascript Object Notation](./json)
- [HTTP und das REST-Prinzip](./rest)

## Weitere Materialien im Mozilla Developer Network

- [AJAX: Getting Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Zusätzliche Quellen, Tutorials und Hilfestellungen

- [Roy Thomas Fielding: Architectural Styles and
the Design of Network-based Software Architectures (Kapitel 5, Representational State Transfer (REST))](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

## Übungsaufgaben

### Rechtschreibprüfung

Erstellen Sie eine einfache Anwendung, die aus einem Eingabefeld, einem *Button* sowie einem Bereich für die Textausgabe verfügt. Der Benutzer kann Wörter in das Eingabefeld eingeben. Nach einem Klick auf den Button wird geprüft, ob es sich um ein korrektes Wort der Deutschen Sprache handelt. 

Für die Überprüfung wird die deutsche Ausgabe des [Wiktionary](https://de.wiktionary.org/wiki/Wiktionary:Hauptseite) verwendet. Dieses Portal bietet eine HTTP-Schnittstelle an, über die nach Einträgen im Wörterbuch gesucht werden kann. Ein Wort gilt dann als korrekt geschrieben, wenn es im Wörterbuch vorkommt. Die Anfrage-Adresse lautet `https://de.wiktionary.org/w/api.php?action=query&titles=<WORD>&format=json`, wobei `<WORD>` durch das gesuchte Wort ersetzt werden muss. Der Server antwortet mit einer JSON-formatierten *Response*. In der Eigenschaft `query.pages` des als Antwort kommunizierten JSON-Objekts findet sich ein *Array* mit den gefundenen Einträgen. 

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
