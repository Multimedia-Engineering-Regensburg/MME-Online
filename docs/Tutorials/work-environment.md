# Einrichten der Arbeitsumgebung

Im Rahmen des Kurses entwickeln Sie Browser-basierte Anwendungen auf der Basis von Javascript, HTML und CSS. Die wesentlichen Bestandteile der Arbeitsumgebung sind daher ein Editor zum Erstellen und Bearbeiten der notwendigen Quellcodedateien sowie ein Browser zum Ausführen der so erstellen Anwendungen. Zusätzlich zu diesen Grundlagen werden weitere Werkzeuge benötigt, um die praktische Arbeit an den Beispielen und Übungsaufgaben effizient und effektiv zu gestalten. In diesem Dokument erhalten Sie eine kurze Übersicht über die notwendigen Programme sowie deren Einrichtung auf Ihrem Arbeitsrechner. Die konkrete Verwendung - sowie sich diese nicht direkt aus dem Kontext ergibt - wird in anderen Kapiteln besprochen. Im allgemeinen sowie im speziellen für die Versionierungssoftware GIT gilt dabei: Die verwendete Software dient als Werkzeug zur Durchführung bestimmter Prozess und Methoden. Dabei stehen die zu reichenden Ziele an erster Stelle. Die Werkzeuge sind Mittel zum Zweck und werden in einem wohl definierten Prozess eingesetzt, bestimmen aber nicht die Durchführung von diesem.

## Browser

Grundlage für die Entwicklung und Verwendung von Webanwendungen ist ein moderner Browser. Dieser dient als [Plattform](../javascript-browser) für die interaktiven Software, die im Kurs implementiert wird. Der Browser rendert dabei die durch HTML und CSS vorgegebene Benutzerschnittstelle und interpretiert den zugrundeliegenden Javascript-Quellcode. Zusätzlich werden vom Browser die [Programmierschnittstellen (APIs)](https://developer.mozilla.org/en-US/docs/Web/API) bereitgestellt, die innerhalb des Javascript-Codes für die Ausgestaltung der Anwendungen verwendet werden.

Während sich die konkrete API-Implementierungen und Feature-Unterstützung zwischen der Browsern in der Vergangenheit häufig stark unterschied (Vgl. [Browser wars](https://en.wikipedia.org/wiki/Browser_wars)) werden zentrale Funktionen mittlerweile von allen gängigen Browserherstellern adaptiert und angeboten. Die [Dokumentation](https://developer.mozilla.org/en-US/) im *Mozilla Developer Network* listen dazu für alle vorgestellten APIs auf, in welchem Grad diese von den jeweiligen Browser-Versionen unterstützt werden (z.B. [hier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Browser_compatibility) für das Beispiel des nativen `<video>`-Tags). 

Grundsätzlich können Sie daher einen beliebigen Browser für die Arbeit im Kurs verwenden. Die Korrektur Ihrere Studienleistungen und Abschlussprojekte erfolgt in den aktuellen Version von [Mozilla Firefox](https://www.mozilla.org/de/firefox/new/) und [Google Chrome](https://www.google.com/intl/de/chrome/). Es reicht, wenn Ihre Anwendung jeweils in einem der Browser funktioniert. Die im Kurs angebotenen Demos funktionieren in der Regel in beiden Browsern, im Zweifelsfall aber immer im *Firefox*. Sollten in einer der Demos spezielle Funktionen verwendet werden, die nur in einem bestimmten Browser verfügbar sind, wird an geeigneter Stelle darauf hingewiesen.

## Editor

Zur Bearbeitung der Quellcode-, Markup- und Designdateien wird ein Texteditor benötigt. Auch hier sind Sie grundsätzlich frei in der Auswahl eines geeigneten Arbeitsinstruments. Berücksichtigen Sie bei der Auswahl die folgenden Anforderungen, die die Arbeit mit dem Editor komfortabler für Sie gestalten sollen:

- [*Syntax Highlighting*](https://en.wikipedia.org/wiki/Syntax_highlighting) für die Sprachen Javascript, HTML und CSS
- Automatische (und korrekte) Formatierung des Quellcodes auf Basis von z.B. dem [Javascript Beautifier](https://beautifier.io/)
- Möglichkeiten zur Darstellung mehrere Dateien (*Tabs*) und einer Übersicht über das Projektverzeichnis
- Möglichkeiten zur Anzeige von Warnungen und Fehlermeldungen einer installierten ESLint-Instanz (siehe unten)
- Möglichkeiten zur individuellen Anpassung an Ihre persönlichen Anforderungen (*Plugins*, *Themes*, ...)

Einige Vorschläge für Editoren oder Entwicklungsumgebungen, die diese Anforderungen erfüllen sind (in alphabetischer Reihenfolge):

- Atom: [Website](https://atom.io/), [Plugin-Übersicht](https://atom.io/packages)
- Brackets: [Website](http://brackets.io/), [Plugin-Übersicht](https://registry.brackets.io/)
- Sublime Text: [Website](https://www.sublimetext.com/), [Plugin-Übersicht](https://packagecontrol.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/),[Plugin-Übersicht](https://marketplace.visualstudio.com/)

Alle diese Editoren können kostenlos getestet und verwendet werden. Für die Verwendung von *Sublime Text* muss nach der (unbefristeten) Testphase eine Lizenz erworben werden.

Die vorgestellten Editoren verfügen über ein reichhaltiges Angebot an *Plugins* und Erweiterungen. Diese können leicht über die eingebauten Mechanismen installiert und konfiguriert werden. Im Idealfall verbringen Sie viel Zeit mit diesem Werkzeug, nehmen Sie sich daher die Zeit, den Editor individuell an Ihre Bedürfnisse anzupassen. 

## Git

Das Versionskontrollsystem [git](https://git-scm.com/) ist wichtige Grundlage für die Arbeit im *Multimedia Engineering*-Kurs. Demos werden in Form von Repositories bereitgestellt. Ihre Studienleistungen bzw. Übungsaufgaben beziehen Sie per git und reichen diese auch mittels dieser Software ein. Im Rahmen Ihrer Abschlussprojekte verwenden Sie git zur kollaborativen Entwicklung und Dokumentation Ihrer Projektidee. Für die Verwendung im Kurs kommen Kommandozeilen-basierte *git clients* als auch graphische Lösung in Frage. Entscheiden Sie selbst, mit was für einem Maß an Abstraktion Sie diesbezüglich arbeiten möchten. Unabhängig davon empfiehlt es sich, zusätzlich auch die [originäre Version](https://git-scm.com/) des Programms zu installieren. Ziele und Methoden der Verwendung von git im Rahmen der Versionskontrolle werden [im Rahmen des Kurs](../MME/version-control) genauer erläutert.

## Node.js

[Node.js](https://nodejs.org/en/) ist eine Browser-unabhängige Laufzeitumgebung für Javascript. Durch die Installation schaffen Sie die Möglichkeit, Javascript-basierte Programme auch außerhalb des Browser auf Ihrem Rechner auszuführen. Die bereitgestellten APIs unterscheiden sich dabei grundsätzlich von denen des Browsers und bieten z.B. die Möglichkeit, direkt auf das Dateisystem zuzugreifen. Im zweiten Teil des Kurse werden wir uns auch mit der [Entwicklung Node.js-basierter Anwendungen](../MME/node-js) beschäftigen. Zu Beginn dient die Installation in erster Linie dafür, bestehende Werkzeuge auszuführen, die im Kontext der Entwicklung von Web-Anwendungen nützlich sind. Zahlreiche *Tools*, wie z.B. das im Kurs verwendete *Linting*-Werkzeug oder Software für das automatische Bauen und Testen von Webanwendungen sind in der Programmiersprache Javascript verfasst und für die Verwendung mit der Node.js-Laufzeitumgebung ausgelegt. 

Im Kurs wird die Version 10 der Node.js-Umgebung verwendet, die Sie [hier](https://nodejs.org/en/download/) herunterladen können. Falls Sie unterschiedliche Versionen von Node.js verwenden müssen, empfiehlt sich der Einsatz einer geeigneten VErwaltungssoftware wie z.B. dem [node version manager](https://github.com/nvm-sh/nvm)(für Windows: [nvm-windows](https://github.com/nvm-sh/nvm)).

## Webserver

Viele der im Kurs behandelten Beispiele können durch einfaches Öffnen der lokal erstellten HTML-Dateien im Browser gestartet und ausgeführt werden. In einigen Fällen scheitert diese Art der Programmausführung an den eingebauten Sicherheitsvorkehrungen moderner Browser. Die Anwendungen müssen in diesem Fall über einen Webserver bereitgestellt und vom Browser von diesem Server angefordert werden. im Rahmen der Entwicklung solcher Anwendungen ist daher der Einsatz eines lokalen Webservers notwendig, der ein direktes Ausführen und testen der Software erlaubt. Die Inhalte des Projektverzeichnisses werden dann von diesem Server über eine URL angeboten (in der Regel über den [`localhost`-Domainnamen](https://en.wikipedia.org/wiki/Localhost)) und können so im Browser geöffnet werden. Einige Editoren bieten eine eingebaute Funktion für einen solchen Testserver an (z.B. [Brackers Live Preview](https://github.com/adobe/brackets/wiki/How-to-Use-Brackets#live-preview)). In anderen Fällen können Sie die Funktionalität durch entsprechende Plugins nachrüsten (z.: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) für Visual Studio Code). 

Mitte dem Paket [`local-web-server`](https://github.com/lwsjs/local-web-server) können Sie leicht einen Node.js-basierten Webserver installieren, den Sie schnell und einfach über die Kommandozeile starten können. 

## ESLint

Ein [Linter](https://en.wikipedia.org/wiki/Lint_(software)) ist ein Werkzeug zur [statischen Codeanalyse](https://en.wikipedia.org/wiki/Static_program_analysis). Es analysiert Quellcode und stellt Programmfehler (*bugs*), stilistische Fehler oder Verstöße gegen Formatvorlagen sowie kritische Stellen fest, die zur Laufzeit negative Auswirkungen auf Performanz und Stabilität haben könnten. Ursprünglich wurden Linter eingesetzt, um Syntaxfehler schon vor dem mit unter aufwändigen und zeitintensiven Kompilierung von Software zu finden. Auch in interpretierten Sprachen können Linter wertvolle Hinweise für den Programmierenden bieten. Sie werden in der kollaborativen Softwareentwicklung vor der Zusammenführung der individuell erarbeiteten Änderungen in die gemeinsame *code base* eingesetzt und stellen sicher, dass z.B. Stil- und Formatvorgaben eingehalten werden und kein potentiell risiko-behafteten Code akzeptiert wird. Auch in der individuellen Arbeit können Linter die Programmierenden unterstützen. Dazu werden die Werkzeuge in der Regel direkt in die Entwicklungsumgebung integriert um zeitnah (im Moment, in dem der Code entsteht) und kontext-behaftet (direkt an der kritischen Stelle des Quellcodes) Informationen zu liefern. Diese Art des Feedbacks kennen Sie schon aus z.B. den im OOP- oder Android-Kurs verwendeten Entwicklungsumgebungen (in diesen Fällen sind sowohl statische Code-Analyse als auch die Ergebnisse des *just in time*-Kompilierung Grundlage für das Feedback der Entwicklungsumgebung).

Der Einsatz von Lintern im Kontext der Javascript-Entwicklung wird in der Regel durch: 1. die globale Installation des eigentlichen Linters, also dem Werkzeug, das die Analyse des Quellcode übernimmt und 2. die Integration des Linters in den präferierten Editor realisiert. 

Im Kurs wird die Software [ESLint](https://eslint.org/) verwendet. Dieses besteht aus einer Menge an [Regeln](https://eslint.org/docs/rules/) sowie einem in [Javascript geschriebenen Werkzeug](https://github.com/eslint/eslint), dass Quellcodedateien auf Verstöße bezüglich dieser Regeln untersucht. Dazu wird eine Konfigurationsdatei verwendet, die vorgibt, welche Regeln für den Analyseprozess verwendet werden. Diese Datei kann beim Aufruf des Werkzeugs entweder explizit angegeben werden oder implizit durch das Ablegen im Projektverzeichnis vorgegeben werden. Für den Kurs wird eine solche Regeldatei [hier](https://github.com/Multimedia-Engineering-Regensburg/Eslint-Rules) gepflegt und angeboten. Ihre Studienleistungen bzw. Übungsaufgaben müssen insofern fehlerfrei sein, als das beim Prüfen der Quellcodedateien mittels ESLint und dieser Regeldatei keine Verstöße auftreten. 

Neben ESlint existieren weitere Linter für die Überprüfung von JAvascript-Code (z.B. [JSLint](https://jshint.com/about/) oder [JSHint](https://jshint.com)). Die jeweiligen Regelsätze überschneiden sich dabei stark. Auf [dieser Seite](http://linterrors.com/js) finden Sie eine Übersicht über alle verfügbaren Regeln. Zusätzlich erhalten Sie hier auch Informationen darüber, warum die entsprechenden Codestellen beanstanden wurden. Grade zu Beginn sollten Sie die Meldungen des Linters nicht nur blind durch Korrigieren des Codes beheben sondern immer auch versuchen die Intention  hinter dem durch die Warnungen und Fehler propagierten *coding style* zu verstehen. Die verwendeten Regelsätze stellen eine (zumindest im Falle von JSHint und ESLint) gemeinschaftlich erstellte und gepflegte *best practice*-Sammlung dar, die aus den persönlichen Erfahrungen der Projektbeteiligten definiert wird. JSLint stellt hier eine Sonderform da, da diese maßgeblich bzw. ausschließlich durch Douglas Crockford, einem der ursprünglichen Autoren der Javascript-Programmiersprache vorgegeben wird (Vgl. [Commit-History auf github](https://github.com/douglascrockford/JSLint/commits/master))


### Installation und Verwendung

Zur Installation und Einrichtung von ESLint auf Ihrem Rechner gehen Sie wie folgt vor:

1. Installieren Sie die Node.js-Umgebung. Node.js kann [hier](https://nodejs.org/en/download/) heruntergeladen werden.
2. Installieren Sie ESLint über `npm`, den Paketmanager der Node.js-Umgebung. Eine Anleitung finden Sie [hier](https://github.com/eslint/eslint#installation-and-usage). Unter Windows verwenden Sie den `Node.js command prompt` zur Eingabe der notwendigen Befehle. Diese Kommandozeilenumgebung wird zusammen mit Node.js installiert und kann über das Startmenü gefunden werden.
3. Installieren Sie das passende Plugin für den Editor Ihrer Wahl. Anleitungen dazu finden sie [hier]https://atom.io/packages/linter-eslint)(für Atom), [hier](https://github.com/brackets-userland/brackets-eslint)(für Brackets), [hier](https://github.com/SublimeLinter/SublimeLinter-eslint)(für Sublime Text) und [hier](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)(für Visual Studio Code)

Testen Sie die eingerichtete ESLint-Umgebung in dem Sie einen neuen Ordner erstellen, die Regeldatei [herunterladen](https://raw.githubusercontent.com/Multimedia-Engineering-Regensburg/Eslint-Rules/master/mme-rules.eslintrc) und im erstellten Ordner unter dem Namen `.eslintrc` abspeichern. Unter Windows müssen Sie die Änderung des Namens ggf. im Editor durchführen. Erstellen Sie nun auf gleicher Ebene eine weitere Datei `index.js`, in die Sie den folgenden Inhalt kopieren:

```javascript
var app;
```

Ihr Editor sollte Sie durch Hervorheben der eingegeben Zeile darüber informieren, dass im Code die Regel `no-unused-vars` verletzt wird, da die erstelle Variable `app` an keiner Stelle des Programms verwendet wird.


<!---
## Kommandozeile
-->