# Ortsseiten pflegen

Die Ortsseiten sind eigenständige Leistungsseiten unter `/einblasdaemmung-in-<ort>`.

- `orte.json`: Ortsname, individuelle Texte, Quellen und verknüpfte Nachbarorte.
- `../templates/ort.html`: gemeinsamer Aufbau und gemeinsame Inhalte.
- `../css/ort.css`: Gestaltung, ergänzt das bestehende Website-Stylesheet.

Nach Änderungen `npm run build:orte` im Projektverzeichnis ausführen. Die erzeugten HTML-Dateien zusammen mit der Vorlage und den Daten committen. Der Generator aktualisiert die Ortslinks auf der Startseite und ergänzt neue URLs in der Sitemap. Bei späteren inhaltlichen Änderungen die betroffenen `lastmod`-Angaben aktualisieren; das Datum der ersten Veröffentlichung ist hier der 7. September 2026.

Die Auswahl stammt aus den Ortsbegriffen des Search-Console-Exports vom 7. September 2026. Verwendet werden Städte und kleinere Gemeinden im Nordwesten einschließlich des Raums Bremen und des westlichen Hamburger Umlands. Regionen ohne eindeutigen Ort und weiter entfernte Suchorte werden nicht automatisch zu Ortsseiten. Die Rohdaten des Berichts gehören nicht in die Website-Veröffentlichung.

Alle Seiten nennen den tatsächlichen Standort Südbrookmerland. Es werden keine Niederlassungen, lokalen Referenzaufträge oder ortsspezifischen Preise behauptet. Das Formular verwendet die bestehende Kontaktanbindung und übermittelt den editierbaren Ort als `address`.
