# MME-Online: Online-Tutorial zum MME-Kurs

Live-Version: [https://regensburger-forscher.de/mme](https://regensburger-forscher.de/mme)

## Arbeit an den Inhalten

Alle Materialien liegen als [Markdown](https://en.wikipedia.org/wiki/Markdown)-Dokumente im `docs`-Ordner. Zum Erstellen [der Seite](https://regensburger-forscher.de/oop) wird [MkDocs](https://www.mkdocs.org/) eingesetzt. Die Gestaltung der Seite erfolgt über ein angepasstes *Theme* im Ordner `mme-template`.

### Hinweise Verwendung von MkDocs

- Um die Seite lokal zu testen müssen per `pip` die Erweiterungen `pymdown-extensions`, `mkdocs-git-revision-date-plugin` und  `mkdocs-bootswatch` installiert werden
- Auf dem Server wird Python3 verwendet, im Zweifelsfall sind MkDocs und Plugins nicht mit der Version 2.7 kompatible
