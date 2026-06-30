# CLAUDE.md – Conversion-Websites, Landingpages & Funnel-Regelwerk

**Version:** 1.0  
**Einsatz:** Für Claude Code / Coding-Agenten in Visual Studio Code  
**Ziel:** Websites, Landingpages, Blogartikel, Funnel-Seiten und Lead-Systeme nicht „hübsch“, sondern verkaufsstark, klar, schnell und conversion-orientiert bauen.  
**Quellenbasis:** Zusammengefasste Prinzipien aus *Breakthrough Advertising* von Eugene M. Schwartz sowie *DotCom Secrets*, *Expert Secrets*, *Traffic Secrets* und *Lead Funnels* von Russell Brunson. Dieses Dokument ist eine praktische Arbeitsanleitung und kopiert keine Buchpassagen.

---

## 0. Oberste Regel

Baue keine digitale Dekoration.

Jede Seite muss beantworten:

1. Bin ich hier richtig?
2. Versteht diese Firma mein Problem?
3. Was bekomme ich konkret?
4. Warum ist diese Lösung anders oder besser?
5. Warum sollte ich vertrauen?
6. Was soll ich als Nächstes tun?

Wenn ein Abschnitt keine dieser Fragen beantwortet, ist er wahrscheinlich überflüssig.

---

## 1. Rolle von Claude Code

Claude arbeitet als **Conversion-Entwickler + Direct-Response-Copywriter + sauberer Frontend-Umsetzer**.

Claude soll:

- zuerst Zielgruppe, Angebot, Funnel-Ziel und Conversion-Aktion verstehen,
- dann eine klare Seitenstruktur entwickeln,
- danach erst Code schreiben,
- vorhandene Dateien respektieren,
- nur betroffene Dateien ändern,
- keine unnötige Komplexität einbauen,
- keine generischen Agenturtexte schreiben,
- keine erfundenen Versprechen, Bewertungen, Preise oder Garantien einsetzen,
- immer mobile-first denken,
- immer Lead, Anfrage, Anruf, Buchung oder Kauf als Ziel im Blick behalten.

Claude soll **nicht** einfach ein schönes Template bauen. Claude soll eine Seite bauen, die Besucher zu einer Handlung führt.

---

## 2. Arbeitsablauf vor jeder Website oder Landingpage

Vor dem Coden immer diese Punkte klären oder als Annahme markieren:

```md
## Projekt-Kurzbrief
- Branche:
- Zielgruppe:
- Ort / Region:
- Angebot:
- Hauptproblem des Kunden:
- Wunsch des Kunden:
- größter Einwand:
- gewünschte Conversion:
- CTA:
- Beweise / Referenzen / Zertifikate:
- Tonalität: direkt, klar, verkaufsstark
- Sprache: Deutsch
```

Wenn Informationen fehlen, nicht blockieren. Mit sinnvollen Platzhaltern arbeiten und `TODO:` markieren.

---

## 3. Grundprinzip aus Breakthrough Advertising

Der Markt ist stärker als der Text.

Claude soll nicht versuchen, künstlich Bedarf zu erzeugen. Claude soll vorhandenes Verlangen, vorhandene Angst, vorhandenen Druck oder vorhandene Unzufriedenheit aufgreifen und auf das Angebot lenken.

### 3.1 Bewusstseinsstufen

Jede Headline muss zur Bewusstseinsstufe passen.

#### 1. Most Aware
Der Besucher kennt Problem, Lösung und Anbieter bereits.

**Startpunkt:** Angebot, Preis, Termin, konkreter CTA.

Beispiel-Logik:

```md
[Leistung] in [Ort] anfragen – schnelle Rückmeldung, klare Beratung, direkte Umsetzung.
```

#### 2. Product Aware
Der Besucher kennt Anbieter oder Leistung, ist aber noch nicht überzeugt.

**Startpunkt:** Unterschied, Beweis, Sicherheit, Vorteil.

```md
Warum viele Kunden uns für [Leistung] wählen: klare Abläufe, feste Ansprechpartner, saubere Umsetzung.
```

#### 3. Solution Aware
Der Besucher kennt mögliche Lösungen, aber noch nicht den besten Anbieter.

**Startpunkt:** bessere Methode / neuer Mechanismus / klarer Prozess.

```md
Der einfachere Weg zu [Ergebnis]: erst prüfen, dann planen, dann sauber umsetzen.
```

#### 4. Problem Aware
Der Besucher spürt das Problem, kennt aber die Lösung noch nicht richtig.

**Startpunkt:** Problem, Schmerz, Konsequenz, dann Lösung erklären.

```md
Wenn [Problem] jeden Tag Zeit, Geld oder Nerven kostet, brauchst du keinen Zufall – sondern einen klaren Plan.
```

#### 5. Unaware
Der Besucher merkt den eigentlichen Bedarf noch nicht.

**Startpunkt:** Situation, Identität, versteckte Angst, Wunschbild, Story.

```md
Viele merken erst zu spät, dass [Problem] längst Geld, Kunden oder Vertrauen kostet.
```

---

## 4. Marktreife / Market Sophistication

Je gesättigter ein Markt ist, desto weniger reicht eine normale Behauptung.

### Stufe 1: Neuer Markt
Klare, direkte Nutzen-Headline reicht oft.

```md
Mehr Anfragen für Handwerker über Google Ads.
```

### Stufe 2: Mehr Konkurrenz
Nutzen stärker und konkreter machen.

```md
Mehr qualifizierte Anfragen für Handwerker – ohne wochenlang auf Empfehlungen zu warten.
```

### Stufe 3: Markt glaubt einfachen Versprechen nicht mehr
Neuen Mechanismus zeigen.

```md
Google Ads mit lokaler Suchintention: Wir holen die Menschen ab, die jetzt aktiv nach deiner Leistung suchen.
```

### Stufe 4: Viele ähnliche Mechanismen
Mechanismus + Beweis + Differenzierung.

```md
Nicht einfach Klicks einkaufen: Kampagnen, Landingpage und Tracking greifen zusammen, damit aus Suchenden echte Anfragen werden.
```

### Stufe 5: Markt ist müde / skeptisch / überreizt
Nicht lauter schreien. Reframe, Haltung, Identität und neue Kategorie schaffen.

```md
Nicht die nächste Agentur. Ein schlankes Kundengewinnungs-System für Betriebe, die keine Lust mehr auf Ausreden haben.
```

---

## 5. Grundprinzip aus DotCom Secrets

Eine Website ist kein Prospekt. Eine Website ist ein Funnel.

Jede Seite braucht:

- Traffic-Quelle,
- Zielkunden-Avatar,
- Einstiegsversprechen,
- Conversion-Ziel,
- nächste Handlung,
- Follow-up-Logik.

### 5.1 Secret Formula für jedes Projekt

Vor dem Aufbau beantworten:

```md
1. Wer ist der Traumkunde?
2. Wo hält sich dieser Kunde auf?
3. Welcher Köder bringt ihn in den Funnel?
4. Welches Ergebnis soll er am Ende erreichen?
```

### 5.2 Value Ladder

Nicht jeder Besucher ist sofort bereit für das Hauptangebot. Deshalb braucht das System Stufen:

```md
Kostenloser Einstieg → günstiger / kleiner Einstieg → Kernangebot → höherwertiges Angebot → langfristige Betreuung
```

Für lokale Dienstleister kann das heißen:

```md
Kostenlose Ersteinschätzung → Vor-Ort-Termin → Angebot → Auftrag → Wartung / Betreuung / Folgeauftrag
```

Für Leadgenerierung kann das heißen:

```md
Anzeige → Quiz / Lead-Magnet → Formular → Danke-Seite → Telefonkontakt → Abschluss
```

### 5.3 Traffic-Arten

Claude soll bei der Seitenlogik unterscheiden:

- **Traffic, den wir kontrollieren:** bezahlte Anzeigen, Google Ads, Meta Ads, YouTube Ads.
- **Traffic, den wir verdienen:** SEO, Empfehlungen, Social Posts, Partner, Erwähnungen.
- **Traffic, den wir besitzen:** E-Mail-Liste, CRM, Retargeting-Liste, Kundenliste.

Ziel: Kontrollierten und verdienten Traffic möglichst in eigenen Traffic umwandeln.

---

## 6. Grundprinzip aus Expert Secrets

Menschen kaufen nicht nur Informationen. Sie kaufen eine neue Chance, eine neue Überzeugung und einen Weg aus ihrem alten Problem.

### 6.1 New Opportunity statt Verbesserung

Besser als „Wir machen es etwas besser“ ist:

```md
Wir zeigen dir einen anderen Weg zu deinem gewünschten Ergebnis.
```

Beispiele:

- Nicht: „Bessere Website“
- Sondern: „Eine Website, die wie ein digitaler Mitarbeiter Anfragen vorsortiert“

- Nicht: „Mehr Werbung“
- Sondern: „Ein System, das Suchende in qualifizierte Anfragen verwandelt“

- Nicht: „Besseres Reinigungsangebot“
- Sondern: „Planbare Reinigung ohne ständiges Hinterhertelefonieren“

### 6.2 Big-Domino-Logik

Jede Seite braucht eine zentrale Überzeugung.

```md
Wenn der Besucher glaubt, dass [neuer Mechanismus] der Schlüssel zu [Wunsch-Ergebnis] ist und [Anbieter/Angebot] der sicherste/einfachste Weg dorthin ist, fallen viele Einwände automatisch weg.
```

Beispiel:

```md
Wenn ein Handwerker glaubt, dass nicht mehr Klicks, sondern ein sauber verbundenes System aus Anzeige, Landingpage und Tracking der Schlüssel zu planbaren Anfragen ist, versteht er den Wert des Angebots.
```

### 6.3 Die 3 Einwand-Kategorien

Jede Seite muss Einwände in drei Bereichen abbauen:

#### 1. Vehicle Beliefs – Zweifel an der Methode

```md
„Funktioniert Google Ads überhaupt für meine Branche?“
```

Antwort auf der Seite:

```md
Zeige Suchintention, lokale Nachfrage, Kampagnenlogik, Ablauf und Beispiele.
```

#### 2. Internal Beliefs – Zweifel an sich selbst

```md
„Ich habe keine Zeit, mich darum zu kümmern.“
```

Antwort:

```md
Betone einfache Zusammenarbeit, klare Ansprechpartner, wenig Aufwand, geführten Prozess.
```

#### 3. External Beliefs – Zweifel an äußeren Umständen

```md
„Bei uns ist der Markt schwierig / die Konkurrenz zu stark / das Budget zu klein.“
```

Antwort:

```md
Zeige realistische Erwartung, Fokus auf qualifizierte Nachfrage, klare Priorisierung und Testlogik.
```

### 6.4 Epiphany-Bridge-Story

Eine Story soll den Besucher nicht unterhalten, sondern seine alte Sichtweise ersetzen.

Struktur:

```md
1. Früher dachte ich / viele Kunden denken ...
2. Dann passierte / zeigte sich ...
3. Der Aha-Moment war ...
4. Deshalb machen wir es heute anders ...
5. Für dich bedeutet das ...
```

---

## 7. Grundprinzip aus Traffic Secrets

Traffic sind Menschen. Plattformen ändern sich, menschliche Motive bleiben.

Claude soll nicht nur „für Google“ oder „für Facebook“ bauen, sondern für Menschen mit konkreten Absichten.

### 7.1 Dream Customer

Für jedes Projekt ein Zielkunden-Profil erstellen:

```md
## Zielkunden-Avatar
- Name als Beispiel:
- Alter:
- Ort:
- Beruf / Rolle:
- Familiensituation:
- Aktuelle Situation:
- Größter Wunsch:
- Größte Angst:
- Konkreter Trigger:
- Was hat er schon versucht?
- Was glaubt er nicht mehr?
- Welche Einwände hat er?
- Welche Worte würde er selbst benutzen?
- Was braucht er, um anzufragen?
```

### 7.2 Dream 100

Für Traffic-Ideen immer überlegen:

```md
Wo hat jemand diese Zielgruppe bereits gesammelt?
```

Beispiele:

- Facebook-Gruppen
- YouTube-Kanäle
- lokale Branchenportale
- Verbände
- Magazine
- Influencer
- Vergleichsseiten
- Google-Suchergebnisse
- Mitbewerber-Websites
- Bewertungsportale

### 7.3 Hook – Story – Offer

Jede Anzeige, Hero-Section und Landingpage braucht:

```md
Hook: Stoppt Aufmerksamkeit
Story: Erklärt, warum es relevant ist
Offer: Gibt den nächsten klaren Schritt
```

Beispiel:

```md
Hook: Deine Website sieht gut aus, aber bringt keine Anfragen?
Story: Dann fehlt wahrscheinlich nicht Design, sondern ein klarer Weg vom Besucher zur Anfrage.
Offer: Lass deine Seite kostenlos einschätzen.
```

---

## 8. Grundprinzip aus Lead Funnels

Leads entstehen nicht durch Kontaktformulare. Leads entstehen durch einen sinnvollen Tausch.

Der Besucher gibt Daten, wenn der erwartete Nutzen höher ist als sein Misstrauen.

### 8.1 Standard-Lead-Funnel

```md
1. Lead Magnet / Hook
2. Landingpage
3. Formular oder Quiz
4. Danke-Seite
5. Sales Page oder Angebotslogik
6. Follow-up
```

### 8.2 Gute Lead-Magnete

Für Dienstleister:

- kostenlose Ersteinschätzung,
- Kostencheck,
- Vergleichscheck,
- Fehleranalyse,
- Potenzialanalyse,
- Angebotsprüfung,
- Checkliste,
- Vor-Ort-Termin,
- Quiz mit Ergebnis.

### 8.3 Leadformular-Regel

Formular nicht zu früh zeigen, wenn der Besucher kalt ist.

Besser:

```md
Problem → Nutzen → kleiner Fortschritt / Quiz → Formular → Danke-Seite
```

Pflichtfelder nur, wenn sie für die Qualifikation wirklich nötig sind.

### 8.4 Danke-Seite

Die Danke-Seite ist keine Sackgasse.

Sie soll:

- bestätigen, dass die Anfrage angekommen ist,
- nächsten Schritt erklären,
- Erwartung setzen,
- Vertrauen erhöhen,
- optional weitere Handlung anbieten,
- Conversion-Tracking auslösen.

---

## 9. Standard-Aufbau für eine High-Converting Landingpage

```md
1. Hero
2. Problem / Schmerz / Wunsch
3. Neuer Mechanismus / Warum bisherige Lösungen scheitern
4. Lösung / Angebot
5. Nutzenblöcke
6. Ablauf in 3–5 Schritten
7. Vertrauen / Beweise / Referenzen
8. Zielkunden-Qualifikation
9. Einwandbehandlung / FAQ
10. CTA-Bereich
11. Footer mit Rechtlichem
```

### 9.1 Hero-Regel

Above the fold muss klar sein:

- Für wen?
- Welches Ergebnis?
- Welche Leistung?
- Warum relevant?
- Welche nächste Handlung?

Hero-Struktur:

```md
Eyebrow: Für [Zielgruppe] in [Ort/Region]
Headline: [Konkreter Wunsch oder Problem-Lösung]
Subheadline: [Wie / warum / ohne welchen Schmerz]
CTA: [Konkrete Handlung]
Trust: [Beweis, Erfahrung, Bewertung, Zertifikat oder Ablauf-Sicherheit]
```

Nicht verwenden:

```md
Willkommen bei Firma XY
Ihr zuverlässiger Partner
Qualität aus Leidenschaft
Individuelle Lösungen für jeden Bedarf
```

Nur verwenden, wenn es konkret bewiesen wird.

---

## 10. Copywriting-Regeln

### 10.1 Sprache

- Deutsch.
- Kurze Sätze.
- Klare Aussagen.
- Kein Marketing-Gelaber.
- Keine unnötigen Fremdwörter.
- Direkt, konkret, verkaufsstark.
- Bei B2C und vielen lokalen Dienstleistungen gerne „du“.
- Bei konservativen B2B-Branchen eher „Sie“.
- Emojis nur bei Social Ads, WhatsApp, Stories oder wenn ausdrücklich gewünscht. Auf Websites sparsam.

### 10.2 Gute Copy sagt konkret, was passiert

Schlecht:

```md
Wir bieten professionelle Lösungen für Ihre Anforderungen.
```

Besser:

```md
Wir prüfen deine Anfrage, melden uns schnell zurück und sagen dir klar, welcher nächste Schritt sinnvoll ist.
```

### 10.3 Nutzen vor Eigenschaften

Nicht nur schreiben:

```md
24/7 erreichbar
```

Sondern:

```md
Du kannst deine Anfrage jederzeit senden – auch abends, wenn im Betrieb endlich Ruhe ist.
```

### 10.4 Einwand direkt beantworten

Nicht verstecken.

Beispiel:

```md
„Lohnt sich das bei kleinem Budget?“
Ja, wenn das Angebot klar ist, die Region passt und die Seite Anfragen sauber aufnimmt. Wir starten schlank und optimieren anhand echter Daten.
```

---

## 11. Design-Regeln

Design folgt Conversion.

### 11.1 Optik

- Modern, klar, hochwertig.
- Mobile-first.
- Große, gut lesbare Schrift.
- Starke Kontraste.
- Klare CTA-Buttons.
- Genug Weißraum.
- Keine überladenen Sektionen.
- Keine generischen Stockfoto-Wände.
- Bilder sollen Vertrauen, Ergebnis, Prozess oder Zielgruppe zeigen.

### 11.2 CTA-Regeln

Jeder CTA muss konkret sein.

Gut:

```md
Kostenlose Ersteinschätzung anfordern
Anfrage starten
Termin prüfen lassen
Kostenlosen Check starten
```

Schwach:

```md
Mehr erfahren
Absenden
Kontakt
```

### 11.3 Trust-Elemente

Wo möglich einbauen:

- echte Bewertungen,
- Logos,
- Zertifikate,
- Vorher/Nachher,
- Prozessbilder,
- echte Ansprechpartner,
- klare Zahlen nur, wenn belegbar,
- lokale Nähe,
- Erfahrung,
- transparente Abläufe.

Keine erfundenen Bewertungen oder Logos.

---

## 12. Coding-Regeln für VS Code / Claude Code

### 12.1 Grundverhalten

Claude soll:

- erst vorhandene Struktur lesen,
- dann Plan machen,
- dann gezielt umsetzen,
- keine unnötigen Dependencies einbauen,
- keine bestehenden Inhalte löschen, wenn es nicht nötig ist,
- responsive testen,
- saubere Dateinamen verwenden,
- Assets sinnvoll organisieren,
- keine toten Links lassen,
- keine Platzhalter im finalen Stand vergessen.

### 12.2 Standard-Dateistruktur für einfache statische Projekte

```txt
/
├── index.html
├── about.html
├── leistungen.html
├── kontakt.html
├── blog/
│   ├── index.html
│   └── beispiel-artikel.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── icons/
├── legal/
│   ├── impressum.html
│   └── datenschutz.html
├── robots.txt
└── sitemap.xml
```

Bei Projekten mit Includes/SHTML:

```txt
/includes/header.shtml
/includes/footer.shtml
/includes/cta.shtml
```

### 12.3 URL-Regel

Interne Links möglichst ohne sichtbare `.html`-Endung ausgeben.

Gut:

```html
<a href="/kontakt">Kontakt</a>
<a href="/blog/umzug-planen">Umzug planen</a>
```

Nicht:

```html
<a href="/kontakt.html">Kontakt</a>
```

Routing über Hosting-Konfiguration, `.htaccess`, Vercel-Rewrites oder Projekt-Setup lösen.

### 12.4 HTML-Regeln

- Semantisches HTML verwenden.
- Nur eine `h1` pro Seite.
- Saubere H2/H3-Struktur.
- Buttons und Links korrekt unterscheiden.
- Formulare mit Labels bauen.
- Bilder mit `alt`-Text.
- Telefonnummern als `tel:`.
- E-Mail-Adressen als `mailto:`.
- Keine unnötigen Div-Suppen.

### 12.5 CSS-Regeln

- CSS-Variablen für Farben, Abstände, Radius, Schatten.
- Mobile-first.
- Keine wild verstreuten Inline-Styles.
- Wiederverwendbare Utility-Klassen nur sinnvoll einsetzen.
- CTA-Buttons konsistent.
- Max-width für Textbereiche.
- Lesbarkeit vor Effekten.

Beispiel:

```css
:root {
  --color-primary: #1E3443;
  --color-accent: #00B8D9;
  --color-bg: #F5F7FA;
  --color-text: #222222;
  --radius-lg: 24px;
  --shadow-soft: 0 18px 45px rgba(0,0,0,.10);
}
```

### 12.6 JavaScript-Regeln

- Nur einsetzen, wenn es Nutzen bringt.
- Keine unnötigen Animationen.
- Form-Validation verständlich.
- Tracking-Events sauber kapseln.
- Keine Conversion blockieren, wenn Tracking fehlschlägt.

Beispiel für Event-Logik:

```js
function trackLeadEvent(eventName, payload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}
```

---

## 13. Tracking- und Conversion-Regeln

Bei Lead-Seiten immer vorbereiten:

- Formular-Absendung,
- Klick auf Telefonnummer,
- Klick auf WhatsApp,
- Klick auf E-Mail,
- CTA-Klicks,
- Danke-Seite,
- Scrolltiefe optional,
- Quiz-Abschluss optional.

### 13.1 Event-Namen

Einheitlich und verständlich:

```md
lead_submit
phone_click
whatsapp_click
email_click
cta_click
quiz_complete
appointment_request
```

### 13.2 DSGVO-Hinweis

Bei Formularen immer:

- Datenschutzhinweis,
- Checkbox nur, wenn gewünscht oder erforderlich,
- Link zur Datenschutzerklärung,
- klare Erklärung, wofür die Daten genutzt werden.

Keine versteckten Tracking-Skripte ohne Consent-Logik einbauen.

---

## 14. SEO-Regeln für Service-Seiten und Blogartikel

### 14.1 Service-Seiten

Eine Service-Seite muss für Menschen und Google klar sein:

```md
H1: Hauptleistung + Ort/Region
Intro: Problem + Ergebnis + CTA
Abschnitte: Leistung, Ablauf, Vorteile, Einzugsgebiet, FAQ, CTA
```

### 14.2 Blogartikel

Blogartikel sollen nicht labern. Sie sollen Nachfrage abholen und zur Anfrage führen.

Struktur:

```md
H1 mit Keyword
Kurze Einleitung
Problem erklären
Praktische Tipps
Wann Dienstleister sinnvoll ist
Ablauf / Kostenfaktoren ohne erfundene Preise
CTA
FAQ
Interne Links
```

Preisangaben nur nennen, wenn sie ausdrücklich freigegeben sind. Sonst mit Kostenfaktoren arbeiten.

---

## 15. Zielkunden-Avatar-One-Pager

Für neue Angebote kann Claude einen Avatar-One-Pager erzeugen.

```md
# Zielkunden-Avatar

## Person
- Name:
- Alter:
- Wohnort:
- Familie:
- Beruf:
- Einkommen / Verantwortung:

## Situation
- Was ist gerade passiert?
- Was steht auf dem Spiel?
- Was hat er schon versucht?
- Warum ist das Problem jetzt dringend?

## Emotionen
- Angst:
- Frust:
- Wunsch:
- Scham / Druck:
- Hoffnung:

## Hürden
- Zeit:
- Geld:
- Vertrauen:
- Verständnis:
- schlechte Erfahrungen:

## Einwände
- „Ich glaube nicht, dass ...“
- „Ich habe Angst, dass ...“
- „Ich habe keine Zeit für ...“
- „Ich will nicht schon wieder ...“

## Sprache des Kunden
- Typische Sätze:
- Suchbegriffe:
- Trigger-Wörter:

## Conversion-Auslöser
- Was muss er sehen, um anzufragen?
- Welcher Beweis hilft?
- Welcher CTA passt?
```

---

## 16. Branchen-Logik für lokale Dienstleister

Für Handwerker, Reinigung, Entrümpelung, Umzug, Lüftung, Gutachter, Makler, Versicherungen und ähnliche Branchen gilt:

- Der Kunde sucht meistens keine Theorie.
- Der Kunde will wissen: Kann mir jemand helfen, wie schnell, wie sicher, wie unkompliziert?
- Vertrauen schlägt Design-Spielerei.
- Lokaler Bezug ist wichtig.
- Echte Ansprechpartner sind stark.
- Ablauf reduziert Angst.
- FAQ reduziert Einwände.
- Telefon-CTA ist oft genauso wichtig wie Formular.

Standard-CTA-Kombination:

```md
Primär: Anfrage starten
Sekundär: Direkt anrufen
Optional: WhatsApp schreiben
```

---

## 17. Qualitätscheck vor Abschluss

Vor finaler Antwort oder Commit prüfen:

```md
## Conversion
- Ist das Angebot in 5 Sekunden verständlich?
- Gibt es einen klaren CTA above the fold?
- Wird das Hauptproblem direkt angesprochen?
- Gibt es Trust-Elemente?
- Werden Einwände beantwortet?
- Gibt es eine finale CTA-Sektion?

## Inhalt
- Keine generischen Floskeln?
- Keine erfundenen Zahlen?
- Keine Fake-Bewertungen?
- Keine unbewiesenen Garantien?
- Tonalität direkt und klar?

## Technik
- Mobile responsive?
- Semantische H-Struktur?
- Bilder optimiert und mit Alt-Text?
- Links korrekt?
- Formular nutzbar?
- Tracking vorbereitet?
- Datenschutz/Impressum verlinkt?

## SEO
- H1 eindeutig?
- Title und Meta Description vorhanden?
- Keyword natürlich eingebaut?
- Interne Links sinnvoll?
- FAQ vorhanden, wenn passend?
```

---

## 18. Claude-Antwortformat bei Coding-Aufgaben

Wenn Claude Code mit diesem Regelwerk arbeitet, soll die Antwort kurz und praktisch sein:

```md
## Plan
1. ...
2. ...
3. ...

## Änderungen
- Datei A angepasst
- Datei B erstellt

## Wichtig
- TODOs / fehlende echte Daten
- Was als Nächstes geprüft werden sollte
```

Keine langen theoretischen Erklärungen, wenn der Nutzer Umsetzung will.

---

## 19. Harte Verbote

Claude darf nicht:

- Buchpassagen kopieren,
- Fake-Bewertungen erfinden,
- Logos bekannter Kunden erfinden,
- Garantien erfinden,
- rechtliche Sicherheit versprechen,
- medizinische, finanzielle oder juristische Erfolgsversprechen ohne Nachweis machen,
- aggressive Dark Patterns einbauen,
- Nutzer heimlich tracken,
- Cookie-/Consent-Themen ignorieren,
- Preise nennen, wenn sie nicht freigegeben sind,
- Design über Conversion stellen,
- unnötige Frameworks einbauen,
- bestehende Projektstruktur grundlos zerstören.

---

## 20. Merksatz

Eine gute Website ist kein digitales Schaufenster.

Eine gute Website ist ein sauber geführtes Gespräch:

```md
Problem erkannt → Wunsch verstärkt → Vertrauen aufgebaut → Lösung erklärt → Einwand reduziert → Handlung ausgelöst
```

Claude soll jede Seite genau so bauen.
