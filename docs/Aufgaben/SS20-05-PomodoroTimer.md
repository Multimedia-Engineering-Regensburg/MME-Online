# Fünfte Übungsaufgabe: Pomodoro Timer

In dieser Aufgabe entwickeln Sie eine einfache Webanwendung, die NutzerInnen bei der Anwendung der [Pomodoro-Technik](https://en.wikipedia.org/wiki/Pomodoro_Technique) unterstützt. Dabei geben wir Ihnen nur die funktionalen Anforderungen und ein einfaches Grundgerüst der Webanwendung vor. Ihre Aufgabe ist es, die Anforderungen durch ein geeignetes *User Interface* (HTML und CSS) und entsprechende JavaScript-Module umzusetzen.

Die Pomodoro-Technik soll bei der Bearbeitung beliebiger Aufgaben helfen. Zu Beginn entscheiden die NutzerInnen sich für eine zu erledigenden Aufgabe. An dieser Aufgabe wird für eine fest definierte Zeit gearbeitet. Die verbleibende Zeit wird in der Regel durch einen _Timer_ (im analogen Bereich z.B. durch eine Eieruhr) angezeigt. Nach jedem Intervall wird eine kurze, nach vier Intervallen eine lange Pause eingelegt.


**Abgabetermin ist der 8. Juli 2020.** Wir bewerten den letzten *Commit*, der an diesem Abgabetag in das *Repository* *gepusht* wird. Informationen zur Nutzung von *Github* finden Sie im GRIPS-Kurs und [hier](./index.md). Bei Fragen zur Übungsaufgabe können Sie uns im Chat erreichen, in das [GRIPS-Forum](https://elearning.uni-regensburg.de/course/view.php?id=40901) *posten* oder per Mail (mi.mme@mailman.uni-regensburg.de) Kontakt mit uns aufnehmen.

!!! danger "Github Classroom"
	Das Starterpaket wird über *Github Classroom* bereitgestellt. Sie implementieren Ihre Lösung über ein *Repository* auf *Github*. **Das Repository, mit einer Kopie des Starterpakets, können Sie über diesen [Link](https://classroom.github.com/a/NvzSCbeq) generieren und anschließend mit der Arbeit an der Aufgabe beginnen.** Klonen Sie das erstellte *Repository* dazu auf Ihren Rechner, die notwendigen Rechte für Ihr *Github*-Konto werden automatisch beim Erstellen des *Repository* gesetzt. Denken Sie daran, Ihre Arbeit an der Aufgabe durch regelmäßiges *Committen* der Änderungen und Ergänzungen zu dokumentieren. Laden Sie Ihren aktuellen Stand regelmäßig auf *Github* hoch (*Push* bzw. im *Github Desktop*-Client über den *Sync*-Befehl). 

## Vorgaben

Im Starterpaket finden Sie eine einfache Webanwendung, bestehend aus einer HTML-Datei, einer verknüpften CSS-Datei und einem JavaScript-Modul, dessen (leere) `init`-Methode beim Anwendungsstart aufgerufen wird. Zusätzlich stellen wir Ihnen im Starterpaket den bekannten `Observable`-Prototypen bereit, den Sie in Ihrer eigenen Lösung verwenden können. HTML- und CSS-Datei beschränken sich auf die Anzeige und Darstellung des Anwendungstitels. Weitere Vorgaben werden nicht gemacht. Sie können Ihre Anwendung auf Basis des vorgegebene CSS-Designs gestalten oder dieses vollständig überarbeiten. Zu Ihrer Unterstützung haben wir Ihnen aber bereits ein Set an abgestimmten Farben vorgegeben, die Sie gerne zu Gestaltung des _User Interface_ verwenden können. **Sie müssen in dieser Aufgabe selbstständig eine passende HTML-Struktur und ein entsprechendes CSS-Design implementieren.**

## Bewertungskriterien

Die allgemeinen Bewertungskriterien finden Sie [hier](index.md). Zusätzlich gelten für diese Aufgabe die folgenden Punkte:

* Wurde auf eine inhaltliche und strukturelle Trennung der einzelnen Komponenten geachtet? Wurde der Modulmechanismus sinnvoll für diese Aufteilung verwendet?
* Sind die einzelnen Komponenten der Anwendung entlang des MVC- oder MVP-Musters entworfen und implementiert worden?
* Wurden alle funktionalen Anforderungen (Vgl. [Anforderungen](#anforderungen)) erfüllt?
* Kann die Anwendung fehlerfrei und intuitiv verwendet werden um die geforderten Funktionen zu nutzen?
* Wurde das _User Interface_ funktional und gebrauchstauglich umgesetzt?

## Anforderungen

- NutzerInnen können einen neuen Task starten. Die Dauer kann aus einer Liste von Vorschlägen (1, 5, 10 oder 25 Minuten) ausgewählt werden. Beim Start des Tasks wird ein Name bzw. eine Beschreibung eingegeben.
- Während der Task läuft, zeigt die Anwendung die verbleibende Zeit in Form eines _Countdowns_ und den Namen bzw. die Beschreibung des Tasks im _User Interface_ an.
- Nach Ablauf der Zeit wird die Anwendung in einen Pausen-Modus versetzt. Für die Dauer von 1 Minute können keine neuen Tasks gestartet werden. Die verbleibende Zeit der Pause wird in Forme eines _Countdowns_ angezeigt.
- Abgeschlossene Tasks bzw. _Pomodoros_ (d.h. abgeschlossene Intervalle) werden in einer Liste dargestellt. Dabei werden Name bzw. Beschreibung und Dauer des _Pomodoro_ angezeigt. Diese Liste muss **nicht** Sitzungs-übergreifend gespeichert werden. 