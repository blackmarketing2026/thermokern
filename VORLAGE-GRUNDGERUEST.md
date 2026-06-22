# Website-Grundgerüst – Musterprojekt

Statische HTML-Website mit Blog, Landingpages und DSGVO-konformem Cookie-Banner.  
Alle Dateien sind reines HTML, CSS und JavaScript – keine Frameworks, keine Abhängigkeiten.

---

## Ordnerstruktur

```
{{PROJEKTNAME}}/
├── index.html                          ← Startseite
├── robots.txt                          ← Suchmaschinen-Steuerung
├── sitemap.xml                         ← Sitemap für SEO
├── css/
│   └── style.css                       ← Globales Stylesheet
├── js/
│   ├── main.js                         ← Allgemeines JavaScript
│   └── cookie-consent.js               ← Cookie-Banner (DSGVO/TDDDG)
├── img/                                ← Bilder & Medien
├── blog/
│   └── index.html                      ← Blog-Übersicht (/blog/)
│   └── {{beitrag-slug}}/
│       └── index.html                  ← Einzelner Blogbeitrag (/blog/{{beitrag-slug}}/)
├── landingpages/
│   └── {{landingpage-slug}}/
│       └── index.html                  ← Landingpage (/landingpages/{{landingpage-slug}}/)
├── datenschutz/
│   └── index.html                      ← Datenschutzerklärung (/datenschutz/)
└── impressum/
    └── index.html                      ← Impressum (/impressum/)
```

---

## Saubere URLs

Jede Seite ist ein **Ordner mit `index.html`**. Der Webserver liefert die Datei automatisch aus – `.html` taucht nie in der URL auf.

| Datei                                      | URL im Browser                                    |
|--------------------------------------------|---------------------------------------------------|
| `/index.html`                              | `{{DOMAIN}}/`                                     |
| `/blog/index.html`                         | `{{DOMAIN}}/blog/`                                |
| `/blog/{{beitrag-slug}}/index.html`        | `{{DOMAIN}}/blog/{{beitrag-slug}}/`               |
| `/landingpages/{{slug}}/index.html`        | `{{DOMAIN}}/landingpages/{{slug}}/`                |
| `/datenschutz/index.html`                  | `{{DOMAIN}}/datenschutz/`                          |
| `/impressum/index.html`                    | `{{DOMAIN}}/impressum/`                            |

---

## Platzhalter-Referenz

| Platzhalter              | Ersetzen durch                                    | Beispiel                          |
|--------------------------|---------------------------------------------------|-----------------------------------|
| `{{PROJEKTNAME}}`        | Name des Projektordners                           | `meine-website`                   |
| `{{DOMAIN}}`             | Vollständige Domain mit Protokoll                 | `https://www.beispiel.de`         |
| `{{SEITENNAME}}`         | Name der Website / des Unternehmens               | `Musterfirma GmbH`               |
| `{{META_DESCRIPTION}}`   | Beschreibung für Suchmaschinen (max. 160 Zeichen) | `Ihr Partner für …`              |
| `{{SEITENTITEL}}`        | Titel im Browser-Tab                              | `Musterfirma – Leistungen`       |
| `{{beitrag-slug}}`       | URL-freundlicher Beitragsname                     | `tipps-fuer-xyz`                  |
| `{{landingpage-slug}}`   | URL-freundlicher Landingpage-Name                 | `service-abc`                     |
| `{{JAHR}}`               | Aktuelles Jahr                                    | `2026`                            |

---

## HTML-Seitenvorlage

Jede neue Seite folgt diesem Grundaufbau:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{META_DESCRIPTION}}">
  <title>{{SEITENTITEL}} – {{SEITENNAME}}</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="canonical" href="{{DOMAIN}}/{{pfad}}/">
</head>
<body>

  <header>
    <nav>
      <a href="/" class="logo">{{SEITENNAME}}</a>
      <ul>
        <li><a href="/">Startseite</a></li>
        <li><a href="/blog/">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Seiteninhalt hier -->
  </main>

  <footer>
    <p>&copy; {{JAHR}} {{SEITENNAME}}. Alle Rechte vorbehalten.</p>
    <p>
      <a href="/datenschutz/">Datenschutz</a> ·
      <a href="/impressum/">Impressum</a> ·
      <a href="#" id="cb-revoke">Cookie-Einstellungen</a>
    </p>
  </footer>

  <script src="/js/cookie-consent.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
```

> **Hinweis zu Pfaden:** In Unterordnern (z. B. `blog/beitrag/`) können statt absoluter Pfade (`/css/style.css`) auch relative Pfade (`../../css/style.css`) verwendet werden. Absolute Pfade funktionieren nur auf einem Webserver, nicht beim direkten Öffnen der Datei im Browser.

---

## Blog-Beitrag anlegen

1. Ordner erstellen: `blog/{{beitrag-slug}}/`
2. Darin `index.html` mit der Seitenvorlage oben anlegen
3. Im `<main>` den Inhalt als `<article>` strukturieren:

```html
<main>
  <article>
    <h1>{{Beitragstitel}}</h1>
    <time datetime="{{YYYY-MM-DD}}">{{Datum}}</time>
    <p>{{Inhalt}}</p>
  </article>
</main>
```

4. Beitrag in `blog/index.html` verlinken
5. URL in `sitemap.xml` eintragen

---

## Landingpage anlegen

1. Ordner erstellen: `landingpages/{{landingpage-slug}}/`
2. Darin `index.html` anlegen
3. Eigene Hero-Section, Call-to-Action etc. im `<main>` einbauen
4. URL in `sitemap.xml` eintragen

---

## sitemap.xml – Vorlage

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{{DOMAIN}}/</loc>
    <lastmod>{{YYYY-MM-DD}}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>{{DOMAIN}}/blog/</loc>
    <lastmod>{{YYYY-MM-DD}}</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Neue Seiten hier ergänzen -->
</urlset>
```

---

## robots.txt – Vorlage

```
User-agent: *
Allow: /

Sitemap: {{DOMAIN}}/sitemap.xml
```

---

## Cookie-Banner (DSGVO / TDDDG §25)

Der Banner wird über `js/cookie-consent.js` geladen und erfüllt folgende Anforderungen:

### Rechtliche Compliance

| Anforderung                          | Umsetzung                                              |
|--------------------------------------|---------------------------------------------------------|
| Ablehnen gleichwertig sichtbar       | „Alle ablehnen" auf erster Ebene, gleiche Buttongröße   |
| Granulare Auswahl                    | 3 Kategorien: Notwendig, Statistik, Marketing           |
| Keine vorausgewählten Boxen          | Nur „Notwendig" aktiv (nicht abwählbar)                 |
| Informationspflicht                  | Zweck, Anbieter, Speicherdauer pro Kategorie            |
| Einwilligung vor Laden               | Kein Script wird ohne Consent ausgeführt                |
| Widerruf jederzeit                   | „Cookie-Einstellungen"-Link im Footer                  |
| Consent-Protokollierung              | Zeitstempel + Version in `localStorage`                 |
| Link zur Datenschutzerklärung        | Im Banner-Text verlinkt                                 |

### Kategorien anpassen

In `cookie-consent.js` die `CATEGORIES`-Variable bearbeiten:

```javascript
var CATEGORIES = {
  necessary: {
    label: "Notwendig",
    description: "{{Beschreibung}}",
    provider: "{{Anbieter}}",
    duration: "{{Dauer}}",
    required: true
  },
  statistics: {
    label: "Statistik",
    description: "{{Beschreibung}}",
    provider: "{{Anbieter, z. B. Google Analytics}}",
    duration: "{{Dauer, z. B. bis zu 2 Jahre}}",
    required: false
  },
  marketing: {
    label: "Marketing",
    description: "{{Beschreibung}}",
    provider: "{{Anbieter, z. B. Google Ads}}",
    duration: "{{Dauer}}",
    required: false
  }
};
```

### Externes Script nur nach Consent laden

```javascript
document.addEventListener("cookieConsentChanged", function (e) {
  if (e.detail.statistics) {
    // Hier z. B. Analytics-Script laden
    var s = document.createElement("script");
    s.src = "https://...";
    document.head.appendChild(s);
  }
});
```

Oder per Abfrage an beliebiger Stelle:

```javascript
if (window.CookieConsent.hasCategory("marketing")) {
  // Marketing-Script laden
}
```

---

## CSS-Aufbau

Die `style.css` ist in Abschnitte gegliedert:

| Abschnitt          | Inhalt                                       |
|--------------------|----------------------------------------------|
| Reset & Basis      | Box-Sizing, Schriftart, Grundfarben          |
| Layout             | Max-Width-Container für Header, Main, Footer |
| Navigation         | Flexbox-Navigation mit Logo und Links        |
| Hero               | Zentrierte Hero-Section für Startseite       |
| Footer             | Trennlinie, Links, Copyright                 |
| Cookie Banner      | Fixierter Banner, Buttons, Kategorien        |
| Responsive         | Mobile-Anpassungen ab 600px                  |

---

## Checkliste: Neue Seite live schalten

- [ ] Ordner mit `index.html` angelegt
- [ ] `<title>` und `<meta name="description">` gesetzt
- [ ] `<link rel="canonical">` mit vollständiger URL
- [ ] Navigation ergänzt (falls nötig)
- [ ] Cookie-Banner-Script eingebunden
- [ ] Footer mit Datenschutz, Impressum, Cookie-Einstellungen
- [ ] URL in `sitemap.xml` eingetragen
- [ ] Seite im Browser getestet (Desktop + Mobil)
