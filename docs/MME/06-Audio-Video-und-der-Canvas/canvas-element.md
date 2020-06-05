# Die Canvas-API

Die [Canvas-API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) erlaubt das programmatische Erzeugen von 2D- bzw. 3D-Grafiken und Animationen im Browser. Die Inhalte des `<canvas>`-Elements werden, anders als bei klassischen DOM-Elementen, nicht durch Textinhalte oder Kindelemente definiert, sondern durch eine manipulierbare Grafikoberfläche erzeugt. Zentrale Akteure sind dabei das eigentliche `canvas`-Element, das im HTML-Dokument definiert und so in den DOM-Baum eingebunden wird sowie die *Javascript*-API, die eine Manipulation der vom *Canvas* bereitgestellten Zeichenfläche erlaubt. Die Canvas-API erlaubt die Erzeugung und Darstellung statischer Grafiken (z.B. Diagrammen) oder dynamischen Animationen und Inhalten (z.B. Videospielen) und ist Grundlage für zahlreiche *Frameworks* und *Libraries* (z.B. [Phaser](https://phaser.io/), [Fabric.js](http://fabricjs.com/) oder [Chart.js](https://www.chartjs.org/)).

### Grundlagen

Um die Möglichkeiten der Canvas-API zu verwenden, muss zuerst ein entsprechendes Element erzeugt werden. Im folgenden Beispiel wird dabei von einem HTML-Dokument ausgegangen, das unter anderem das folgende Element beinhaltet:

``` html
<canvas id="canvas" width="500" height="500">
</canvas>
```

Das `canvas`-Element verfügt über `width`- und  `height`-Attribute, mit denen die Dimensionen des DOM-Elements definiert werden. Zusätzlich werden diese Angaben verwendet, um die Auflösung der internen Zeichenfläche anzugeben, auf der die *Canvas*-Inhalte dargestellt werden. Das DOM-Element, nicht die Zeichenfläche, kann auch durch CSS-Eigenschaften angepasst werden. Sollte über diesen Weg eine andere als die ursprünglich definiert Elementgröße ausgewählt werden, kann es zu Darstellungsfehlern kommen, wenn Zeichenfläche und Element über unterschiedliche Seitenverhältnisse verfügen. Ähnlich wie bei den *media elements*, kann auch beim *Canvas*-Element *fallback content* angegeben werden, der angezeigt wird, wenn die eigentliche *Canvas*-Funktionalität im Browser nicht zur Verfügung steht. Neben textuellen Inhalten bieten sich hier auch statischer Bilder (`<img>`) an.

**Die Zeichenfläche**

Die eigentlichen Zeichenoperationen werden nicht direkt auf dem *Canvas*-Element ausgeführt. Um Inhalte auf dem Element darzustellen, muss zuerst eine Zeichenfläche, der sogenannte *rendering context*, aus dem *Canvas* ausgewählt werden: 

``` javascript
let canvasEl = document.querySelector("#canvas"),
context = canvasEl.getContext("2d");
```

Über den Parameter der [`getContext`-Methode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) bestimmen Sie die Art der erzeugten Zeichenfläche. Im Beispiel wird ein `CanvasRenderingContext2D`-Objekt zurückgegeben, das für die Darstellung zwei-dimensionaler Inhalte verwendet werden kann. Zusätzlich stehen im Rahmen der [WebGL-API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) auch entsprechende Schnittstellen für die Darstellung drei-dimensionaler Inhalte zur Verfügung. In dieser Lektion wird nur auf die Möglichkeiten des 2D-Kontexts eingegangen.

**Die Zeichenoperationen**

Mit Hilfe des ausgewählten *Contexts* können nun die eigentlichen Zeichenoperationen ausgelöst werden. Die API erlaubt dabei das Zeichnen von einfachen [Formen und Pfaden](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), [Bildern](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images) sowie [Texten](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text). Grundlage für die Operationen ist ein Koordinatensystem, dessen Ursprung `(0,0)` in der oberen, linken Ecke liegt. Die Dimensionen des Gitternetzes ergeben sich aus den gewählten Werten der `width`- bzw. `height`-Attribute. Die Auflösung entspricht in der Regel einem Pixel. Für [komplexere Operationen](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations) besteht die Möglichkeit, den Ursprung des Koordinatensystem zu versetzen bzw. das Gitternetz zu skalieren und zu rotieren. Im folgenden Beispiel wird nur eine Auswahl der vorhandenen Methoden vorgestellt. Machen Sie sich ggf. mit der vollständigen API vertraut.

Rechtecke stellen die einfachste Variante der Formen dar, die auf dem [Canvas gezeichnet werden können](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_rectangles). Mit Hilfe der Methode `fillRect` wird ein einfarbiges Rechteck erstellt. Übergeben werden Parameter, die den Ursprung sowie die Länge bzw. Höhe der zu zeichnenden Form definieren.

``` javascript
context.fillRect(50,50,100,100);
```

Das Resultat sieht im Browser so aus:

![Screenshot des Canvas](img/canvas-box.png)

Neben Rechtecken stellen [*Pfade*](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_rectangles) die zweite primitive Form dar, die mittels der Canvas-API gezeichnet werden können. Pfade bestehen aus [Linien](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Lines) und [Bögen](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Arcs). Im oben gezeigten Screenshot wurden Linien verwendet, um das Koordinatensystem des *Canvas* zu visualisieren.

Beim Zeichnen von Pfaden sind - im Gegensatz zu den Rechtecken - weitere Teilschritte notwendig:

1. Ein einzelner Pfad wird durch den Aufruf der `beginPath`-Methode geöffnet und durch die Methode `closePath` geschlossen. 

2. Die Definition des Pfades erfolgt durch Zeichenoperationen, die zwischen den beiden Methodenaufrufen ausgelöst werden.

3. Der definierte Pfad wird anschließend durch Nachzeichnen (*stroke*) oder Füllen (*fill*) dargestellt.

Um das im Screenshot dargestellte Koordinatensystem zu zeichnen, wird der folgende Code verwendet:

``` javascript
const WIDTH = 500,
  HEIGHT = 500,
  GRID_SIZE = 10,
  GRID_COLOR = "rgb(220,220,220)";

  var canvasEl, context;

function initCanvas() {
  canvasEl = document.querySelector("#canvas");
  context = canvasEl.getContext("2d");
}

function drawGrid() {
  for (let i = GRID_SIZE; i <= WIDTH - GRID_SIZE; i += GRID_SIZE) {
  	drawLine({x: i, y: 0},{x: i, y: HEIGHT},GRID_COLOR);
  	drawLine({x: 0, y: i},{x: WIDTH, y: i},GRID_COLOR);
  }
}

function drawLine(from, to, color) {
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.closePath();
}

initCanvas();
drawGrid();
```

Farbe und Stärke der Pfade und Formen können durch das Manipulieren der entsprechenden Eigenschaften des *Context*-Objekts verändert werden. Diese Manipulation muss dabei vor dem *Nachzeichnen* bzw. *Füllen* des Pfades erfolgen. Im Beispiel wird die `strokeStyle`-Eigenschaft geändert, um die Linienfarbe anzupassen. Die *Canvas*-API ist dabei kompatibel zu den bekannten CSS-Farbwerten (RGB-, HEX- oder Text-Darstellung). Neben der Farbe können auch noch [weitere Eigenschaften](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#Line_styles) beeinflusst werden.

**Importieren von Bildern**

Mittels der `drawImage`-Methode der *Canvas*-API können Bilder auf den ausgewählten Kontext gezeichnet werden. Neben der Position und den (optionalen) Dimensionen wird der Methode dazu die Bild-Quelle übergeben. Diese kann aus einem `HTMLImageElement` (`<img>`), einem `HTMLVideoElement` (`<video>`) oder einem anderen *Canvas* (`<canvas>`) bestehen[^1]. Die jeweilige Quelle kann dabei entweder bereits im DOM vorhanden sein, oder für den Zeichenprozess neu erstellt werden. Vor allem im zweiten Fall muss berücksichtigt werden, dass das Zeichnen des Bildes erst dann möglich ist, wenn dieses vollständig aus den entsprechenden Quellen (`src`-Attribut) geladen ist:

``` javascript
// Erstellen eines leeren img-Containers mit jeweils 100px Breite und Höhe
let image = new Image(100, 100);

// Registrieren des Listeners für die Benachrichtigung über das abgeschlossene Laden des Bildes
image.addEventListener("load", function() {
  // Zeichnen des vollständig geladenen Bildes an die Postion x = 10, y = 10
  context.drawImage(image, 10,10);
});

// Setzen der Bildquelle  über einen relativen Pfad
image.src = "image.png"
```

**Pixel-basierte Manipulation der Canvas-Inhalte**

Der aktuelle Inhalt des *Canvas* kann als Pixel-Matrix exportiert, manipuliert und re-importiert werden. Bindeglied zwischen diesen Operationen ist der [`ImageData`-Prototyp](https://developer.mozilla.org/en-US/docs/Web/API/ImageData), der die einzelnen Pixel (bzw. deren Farbwerte) eines *Canvas* repräsentiert. Über die Methode `getImageData` wird dazu der aktuelle Inhalt des gesamten *Canvas* oder eines über die Parameter definierten Teilbereichs ausgelesen:

``` javascript
let imageData = context.getImageData();
```

Das zurückgegebene `ImageData`-Objekt enthält Informationen zu der Breite (`width`) und Höhe (`height`) des exportierten Ausschnitts. Über die Eigenschaft `data`, einem ein-dimensionalen-Array, werden die einzelnen Pixel zugänglich gemacht. Deren `RGBA`-Werte werden durch jeweils vier aufeinanderfolgende Elemente des Arrays repräsentiert. Die Pixel sind dabei zeilenweise, beginnend von der oberen, linken Ecke des Bildes sortiert:

``` javascript
// Auslesen aller Pixel des exportierten Ausschnitts
for(let i = 0; i < imageData.data.length; i += 4) {
  let r = imageData.data[i], // R value
  g = imageData.data[i + 1], // G value
  b = imageData.data[i + 2], // B value
  a = imageData.data[i + 3]; // Alpha value
}
```

Die Werte innerhalb des Arrays können manipuliert werden. Da zwischen dem exportierten `ImageData`-Objekt und dem ursprünglichen *Canvas* jedoch keine Verbindung besteht, bleiben die eigentlichen Pixel im *Canvas* unverändert. Um diese anzupassen, muss das manipulierte `ImageData`-Objekt wieder in den *Canvas* zurückgeschrieben werden. Ein vollständiges Beispiel zum Anwenden eines Graustufen-Effekts auf den Inhalt eines *Canvas* könnte so aussehen:

``` javascript
// Info: context enthält die Referenz auf den 2D-Kontext eines Canvas-Elements

// Auslesen des aktuellen Inhalts des Canvas
let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

// Iteration über alle Pixel
for(let i = 0; i < imageData.data.length; i += 4) {
  let r = imageData.data[i],
  g = imageData.data[i + 1], 
  b = imageData.data[i + 2],
  // Berechnen der Graustufe
  grayscale = (r + g + b)/3;
  // Überschreiben der ursprünglichen Farbwerte
  imageData.data[i] = grayscale;
  imageData.data[i + 1] = grayscale;
  imageData.data[i + 2] = grayscale;
  // Der Alpha-Wert bleibt unverändert
}

// Schreiben des modifizierten ImageData-Objekts in den Canvas (an die Positon 0,0)
context.putImageData(imageData, 0, 0); 
``` 

Auf dem folgenden Screenshot sehen Sie ein Beispiel für die Anwendung des oben skizzierten Codes. Im linken *Canvas* wurde ein Bild (Quelle: *Lucas V. Barbosa*, [The Gunk](https://commons.wikimedia.org/wiki/File:The_Gunk.png))  eingezeichnet. Der Inhalt dieses *Canvas* wurde anschließend in Form eines `ImageData`-Objekts ausgelesen, in eine Graustufen-Repräsentation umgewandelt und in dieser Form in den rechten *Canvas* übertragen.

![Beispiel für Graustufen-Effekt im Canvas](img/canvas-effect.png)

**Export des Canvas-Inhalts**

Neben dem Export der Pixel-Daten kann der aktuelle Inhalt eines *Canvas*-Elements auch in Form einer [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) ausgelesen werden. *Data URLs* erlauben das Kodieren und Bereitstellen kleinerer Dateien. Dabei werden diese nicht mehr durch die URL referenziert sondern innerhalb der URL repräsentiert. Über die Methode `toDataURL`, die direkt auf dem *Canvas*-Element - nicht auf dessen Kontext - aufgerufen wird, kann eine solche URL erzeugt werden. Diese enthält dann dessen kodierten Inhalt. Die exportierte *Data URL* des oben verwendeten *Canvas* (mit dargestelltem Graustufen-Bild) beginnt mit der folgenden Zeichenkette:

``` xml
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArsAAAGVCAYAAAD+LTlZAAAgAElEQVR4nO3dwY3lurWwUadxg3kZeOosDLRD6BA8dQAGnIGnzsBDDxyBgZvD+wf90ND9u1neu8gtbkprAZwI5VPnSBT51YV8+ne/AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqPf73//+fzuN3ecDAIAH2R23YhcAgDK741bsAgDwg1Vx+ec///mn429/+9tPxz/+8Y/vY+b46PeKYAAAxC4AAM8ldgEAOEaHSO02ru9TBAMAHEzsil0AgMcSu2IXAOBIFfFaPSJxXH08G8G7rzMAwCuJXbELAPBYYlfsAgAcLxKy1WE681xs9ni34Ba+AACFxK7YBQB4LLErdgEAjlcdtTPxuipwI2P0eVcdF74AABuIXbELAPBYYlfsAgAcryJqZyL13//+d2pkwzcbpquG8AUA2EDsil0AgMcSu2IXAOB4q6L2zpCtCNxI+FaPivAVuwDAq4ldsQsA8FhiV+wCADzKnVEbidRff/31+9gVtaP/7fX8fPny5fsY/ZGQHdfXzAZx5Lpcf0b4AgCvIHbF7u45CABQRuyK3d1zEABg2szzuDMhe43XyJiJ2kjgRp5tvZ6TSKRWX6NRBGc/
``` 

Die URL beginnt mit dem Präfix `data:` an das sich der *mime type* (hier: `image/png`) und die Codierung (hier `base64`) anschließt. Der Rest der Zeichenkette beinhaltet den eigentlichen Dateiinhalt.

Die so erzeugte URL kann dann verwendet werden, um den codierten *Canvas*-Inhalt zum Download (als Link) anzubieten oder als Inhalt eines `<img>`-Elements genutzt werden.

``` javascript
let imageUrl = canvas.toDataURL(),
imageEl = document.querySelector("img");
iamgeEl.src = imageUrl;
```
 
## Beispiel: Echtzeit-Videoeffekte im Browser

Die Kompatibilität zwischen *Canvas*- und *Video*-Element lässt sich nutzen, um z.B. einfache Echtzeit-Videoeffekte direkt im Browser zu realisieren. Ein naiver Ansatz dafür kann nach folgendem Schema implementiert werden:

1. Das Originalvideo wird in einem `<video>`-Element abgespielt (optional auch unsichtbar über die CSS-Eigenschaft `display: none`).

2. In einem regelmäßigen, an die Wiedergabefrequenz des Videos angepassten, Intervall wird der aktuelle *Frame* des Videos auf den *Canvas* gezeichnet.

3. Nach jedem Zeichenvorgang werden die Pixel-Informationen (`ImageData`) des *Canvas* ausgelesen, manipuliert und anschließend zurück in den *Canvas* geschrieben.

Die wichtigsten Einzelschritte lassen sich mit Hilfe dieser *Javascript*-Bausteine realisieren:

**Vorbereiten von Video- und Canvas-Element**

``` javascript 
let videoEl = document.querySelector("video"),
  canvasEl = document.querySelctor("canvas"),
  context = canvasEl.getContext("2d");
```

**Regelmäßiges Auslesen und Importieren des Video-Inhalts (als Einzelbild)**

``` javascript
// Angenommen wird eine Frequenz von 25 Bildern pro Sekunde
let fps = 1000 / 25;

function drawFrame() {
  // Zeichenen des aktuellen Einzelbildes auf den Canvas
  context.drawImage(videoEl, 0, 0, videoEl.width, videoEl.height);
  // Hier kann nun das ImageData-Objekt exportiert, manipuliert und zurückgeschrieben werden
}

setInterval(drawFrame, fps);
```

Die tatsächliche *frame rate* eines Videos kann im Browser und mit *Javascript* nicht eindeutig bestimmt werden. Ist die Wiedergabefrequenz des verwendeten Videomaterials nicht bekannt, muss diese geschätzt werden. Dies führt unter Umständen dann dazu, dass nicht alle Einzelbilder des Videos exportiert werden, was sich ggf. auch visuell bemerkbar macht.

**Anwendungsbeispiel**

Das folgende Video zeigt ein einfaches Anwendungsbeispiel für die oben beschriebenen Echtzeit-Video-Effekte. Links sehen Sie ein Video-Element. Die Einzelbilder werden regelmäßig auf den *Canvas* (rechts) übertragen. Die Farbwerte der Pixel des `ImageData`-Objekts werden manipuliert, um ein *Threshold*-Bild zu erzeugen. Alle Pixel, deren Graustufe einen bestimmten Wert überschreiten, werden mit der Farbe Weiß (`255,255,255`) überschrieben, alle anderen Pixel mit der Farbe Schwarz (`0,0,0`). Die modifizierten Pixel werden zurück in den *Canvas* geschrieben:

![Beispiel für Graustufen-Effekt im Video](img/canvas-effect-player.gif)

<div class="mme-quiz-wrapper" data-url="../../quizzes/canvas-element.md.quiz"></div>

[^1]: Zusätzlich unterstützt die [`drawImage`-Methode](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) auch weitere, teils experimentelle Quellen