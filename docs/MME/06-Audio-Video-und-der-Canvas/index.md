# 06 | Multimedia im Browser und das Canvas-Element

In der sechsten (siebten) Wochen beschäftigen wir uns mit den multimedialen Fähigkeiten modernen Browser. Sie verschaffen sich einen Überblick über die HTML-Elemente zum Darstellung bzw. Wiedergabe von Audio- und Videodateien und lernen, diese programmatisch aus dem JavaScript-Code Ihrer Anwendung zu steuern. Mit dem *Canvas*-Element erhalten Sie die Möglichkeit Bildmaterial direkt im Browser zu bearbeiten. Der *Canvas* kann auch Grundlage komplexerer Anwendungen, z.B. 2D oder 3D Spiele sein.

**Die Live-Sitzung zu dieser Lektion findet am 10. Juni ab 10:00 Uhr per Stream über [Twitch.tv](https://twitch.tv/alexanderbazo) statt.** Eine Beschreibung der dort vorgestellten Demo finden Sie [hier](../../Demos/ambi-player).

## Ziele

- Sie können die `<audio>`- und `<video>`-Elemente über deren API-Methoden ansteuern und die entsprechenden Wiedergabe-*Events* in Ihren Anwendungen abfangen.
- Sie könne Bildmaterial aus Videos, `<img>`-Tags oder anderen Quellen im *Canvas* bearbeiten, in dem Sie über die entsprechende API einfache Zeichen- und Bildverarbeitungsoperationen durchführen.

## Inhalte zum Durcharbeiten

- [Multimediale Inhalte im Browser: Audio und Video](./multimedia-elements)
- [Die Canvas-API](./canvas-element)

## Weitere Materialien im Mozilla Developer Network

- [Web media technologies](https://developer.mozilla.org/en-US/docs/Web/Media)
- [Video and audio content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Manipulating video using canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Liste einiger Libraries für die einfacherere Verwendung des Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API#Libraries)

## Übungsaufgaben

1. Erstellen Sie einen einfachen *video player*: Über ein Text-Eingabefeld kann der Benutzer nacheinander verschiedene Video-URLs eingeben (z.B. URLs aus [dieser](https://gist.github.com/jsturgis/3b19447b304616f18657) Liste). Die Videos ergeben eine *Playlist*, deren Inhalte nacheinander in einem `<video>`-Element mit angezeigten Standard-Steuerelementen abgespielt wird. Nutzen Sie entsprechende Eigenschaften bzw. *Events* des [`<video>`-Elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) um das automatische Abspielen des jeweils nächsten Eintrags zu realisieren. Beispiel-Videos zum Testen der Anwendung finden Sie [hier](http://techslides.com/sample-webm-ogg-and-mp4-video-files-for-html5).

2. Ergänzen Sie den erstellen *video player* mit eigenen Schaltflächen für das Starten und Stoppen des aktuellen Videos sowie das Auswählen des nächsten Eintrags der *Playlist*.

3. Implementieren Sie eine einfache Web-Anwendung, die es dem Benutzer erlaubt, Zeichnungen zu erstellen. Erzeugen Sie ein HTML-Dokument und fügen Sie diesem ein `<canvas>`-Element hinzu. Fangen Sie die Mausinteraktion des Nutzers auf diesem Element ab (Vgl. [`mousemove`](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove)) und übersetzen Sie die Mausbewegung in eine Zeichenoperation. Verwenden Sie die [`lineTo`-Methode](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Lines) der *Canvas*-API bzw. um jeweils eine Linie zwischen der letzten bekannten und der aktuellen Position des Mauszeigers zu zeichnen.