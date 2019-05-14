# Pair Programming

*Pair programming* ist eine Technik des *software engineerings*, die die gleichzeitige, lokale Kollaboration zweier Programmierer oder Programmiererinnen beschreibt. Die beiden beteiligten Personen lösen ein gemeinsames Programmierproblem gleichzeitig und unter Verwendung eines gemeinsamen Arbeitsplatzes. Die beiden Personen nehmen dabei jeweils eine klar definierte Rolle ein, die vorgibt, wie und in welcher Art zur Problemlösung beigetragen werden kann. Ziel des *Pair Programming* ist es, das Wissen und die Kompetenzen beider Beteiligten zu bündeln und eine qualitativ hochwertigere Lösung als in Einzelarbeit zu erlangen.

## Hintergründe

Die heute praktizierte Technik des *pair programming* wurde im Kontext des *extreme programming* (XP) konzipiert und in diesem Zusammenhang erstmals von [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) beschrieben[^1]. *Extreme Programming* ist eine der *agilen* Methoden der Softwareentwicklung und stellt ein Prozessmodel und entsprechende Werkzeuge (Methoden und Techniken) bereit, mit denen die Anpassungsfähigkeit des Entwicklungsprozess und die Qualität des Endprodukts gesteigert werden soll. Dabei werden vor allem die beteiligten Personen und deren organisatorische Kollaboration in den Mittelpunkt der Überlegungen gerückt. Die ursprüngliche Idee war es, bekannte und bewährte *best practices* zu sammeln und in ein zusammenhängendes methodisches Vorgehen zu integrieren. Viele dieser Methoden [wurden und werden](https://martinfowler.com/bliki/ExtremeProgramming.html) auch im Rahmen anderer Vorgehensmodelle verwendet. Das tatsächliche Kodieren bzw. Programmieren der Software ist eine der Aktivitäten, der im *extreme programming* besonderen Stellenwert eingeräumt wird, da der *Code* als zentrales und bedeutendstes Artefakt angesehen wird. *Pair programming* ist eine der Möglichkeiten diesen Code zu erzeugen. Das dabei zugrunde liegende Prinzip zweier, gleichzeitig und kooperativ arbeitender Entwickelnden lässt sich bis weit vor der Etablierung von XP in den frühen 1990er Jahren und Becks entsprechender Veröffentlichung zurückverfolgen. [Larry Constantine](https://en.wikipedia.org/wiki/Larry_Constantine) beschreibt in *Constantine on Peopleware*[^2] eine Beobachtung ähnlicher Praktiken aus den 1980er Jahren. 

## Methodik

*Pair programming* beschreibt nicht das bloße Zusammenarbeiten zwei oder mehrerer Personen an einem Programmierproblem. Statt dessen wird der Kontext, Ablauf und die Rollenverteilung der beteiligten Personen klar definiert:

- Kontext: Beide Personen sitzen am gleichen Arbeitsplatz. Die Arbeitsumgebung wird auf einem gemeinsamen, zentral positionierten Monitor angezeigt.

- Problem: Beiden Personen ist das Ziel bzw. ihre Aufgabe klar. 

- *Navigator: Eine der Personen, der *Navigator*, bestimmt die grobe Strategie des Vorgehens, bringt Verbesserungsvorschläge ein und spricht Probleme an.

- *Driver*: Die zweite Personen, der *Driver* bedient Maus und Tastatur und schreibt den eigentlichen Code. Der *Navigator* hat keinen Zugriff auf die Tastatur.

*Navigator* und *Driver* arbeiten zusammen. Der *Driver* konzentriert sich auf die taktischen, akuten Maßnahmen zur Lösung des eigentlichen Problems. Der *Driver* agiert als direkter Feedback- und Review-Kanal und versucht auch mögliche Probleme zu antizipieren. Beide Personen arbeiten auf ein gemeinsames Software-Artefakt hin, das am Ende qualitativ hochwertiger ist, als es jeder der Beteiligten in Einzelarbeit entwickeln könnte. **Die Rollen des *Driver* und *Navigator* werden regelmäßig und häufig gewechselt.**

## Variationen und Probleme

In der Regel arbeiten beim *pair programming* Entwickler bzw. Entwicklerinnen mit ähnlichem Wissenstand zusammen. Problematisch wird dies vor allem dann, wenn das Team mit neuen Problemstellungen konfrontiert ist, deren Lösung von keinem der Beteiligten als *Navigator* kritisch hinterfragt werden kann. In diesem Fall kann keine der Personen die Qualität des gemeinsamen Artefakts signifikant durch eigene Erfahrung oder entsprechendes Vorwissen beeinflussen. Paarung aus einem Novizen und einem Experten können dieses Problem auffangen, führen aber ihrerseits häufig zu einem passiven Verhalten des *Novizen*, der dem Meister bei der Arbeit *zuschaut*. Grade im universitären oder schulischen Umfeld sind auch Paarungen interessant, in denen keiner der Beteiligten über großes Vorwissen verfügt (zwei Novizen). In diesem Fall kann die gemeinsame Arbeit als methodisch organisierte Lerngruppe angesehen werden, die von dem besonderen Vorgehen des *pair programming* profitiert. Das Ausprobieren der Technik in dieser Konstellation gibt die Möglichkeit, Erfahrungen für die spätere Anwendung im professionellen Kontext zu sammeln. Für den Lernerfolg ist dabei die aktive Begleitung oder zumindest die nachträgliche Evaluation des Vorgehens und des produzierten Artefakts durch einen entsprechenden *Experten* notwendig. Grundsätzlich erzeugen auch Paarungen aus zwei Novizen qualitativ hochwertigere Artefakte als jene, die aus der entsprechenden Einzelarbeit hervorgehen würden [^3].

[^1]: Kent Beck, *Extreme Programming Explained*, Addison–Wesley, 1999
[^2]: Larry, Constantine, *Constantine on Peopleware*, Yourdon Press Computing Series, 1995
[^3]: Kim ManLui, Keith Chan, *Pair programming productivity: Novice–novice vs. expert–expert*, International Journal of Human-Computer Studies, Band 64, Ausgabe 9, Elsevier, September 2006