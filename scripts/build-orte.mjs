import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// One template for all locations. Edit templates/ort.html and content/orte.json,
// then run `node scripts/build-orte.mjs`; generated pages remain plain HTML.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(root, p), s);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cities = JSON.parse(read('content/orte.json'));
const bySlug = new Map(cities.map(c => [c.slug, c]));
if (bySlug.size !== cities.length) throw new Error('Duplicate city slug');
const template = read('templates/ort.html');
const home = read('index.html');
const trackingHead = home.match(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/)[0];
const trackingBody = home.match(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/)[0];
const footer = home.match(/<footer>[\s\S]*?<\/footer>/)[0];
const route = c => `/einblasdaemmung-in-${c.slug}`;
const link = c => `<a href="${route(c)}">Einblasdämmung in ${escape(c.name)}</a>`;

for (const city of cities) {
  if (!/^[a-z]+(?:-[a-z]+)*$/.test(city.slug)) throw new Error('Invalid slug');
  const url = 'https://www.thermo-kern.de' + route(city);
  const officeAnswer = city.slug === 'suedbrookmerland'
    ? 'Ja. Unser Standort ist Südbrookmerland in Ostfriesland. Von hier aus stimmen wir Beratungen und Ausführung mit Ihnen ab.'
    : `Unser Firmensitz ist Südbrookmerland in Ostfriesland. Für Ihr Vorhaben in ${city.name} stimmen wir Beratung, Anfahrt und Ausführung nach Vereinbarung ab.`;
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      {'@type':'WebPage','@id':url,'url':url,'name':`Einblasdämmung in ${city.name} – ThermoKern`,'description':city.description,'inLanguage':'de-DE','mainEntity':{'@id':url+'#leistung'}},
      {'@type':'Service','@id':url+'#leistung','name':`Einblasdämmung in ${city.name}`,'serviceType':'Einblasdämmung, Kerndämmung, Dachdämmung und Geschossdeckendämmung','url':url,'areaServed':{'@type':'Place','name':city.name},'provider':{'@type':'Organization','@id':'https://www.thermo-kern.de/#organisation','name':'ThermoKern','url':'https://www.thermo-kern.de/','telephone':'+491627673545','address':{'@type':'PostalAddress','addressLocality':'Südbrookmerland','addressCountry':'DE'}}},
      {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Startseite','item':'https://www.thermo-kern.de/'},{'@type':'ListItem','position':2,'name':`Einblasdämmung in ${city.name}`,'item':url}]}
    ]
  };
  const values = Object.fromEntries(Object.entries({NAME:city.name,REGION:city.region,DESCRIPTION:city.description,URL:url,LOCAL_TITLE:city.localTitle,LOCAL_TEXT:city.localText,LOCAL_TIP:city.localTip,SOURCE:city.source,SOURCE_LABEL:city.sourceLabel,LOCAL_QUESTION:city.localQuestion,LOCAL_ANSWER:city.localAnswer,OFFICE_ANSWER:officeAnswer,WHATSAPP:'https://wa.me/491627673545?text='+encodeURIComponent(`Guten Tag, ich interessiere mich für Einblasdämmung in ${city.name}.`)}).map(([k,v])=>[k,escape(v)]));
  Object.assign(values, {TRACKING_HEAD:trackingHead,TRACKING_BODY:trackingBody,FOOTER:footer,SCHEMA:JSON.stringify(schema).replace(/</g,'\\u003c'),NEARBY:city.nearby.map(slug=>{if(!bySlug.has(slug))throw new Error(`Unknown nearby city ${slug}`);return link(bySlug.get(slug));}).join('\n        ')});
  const output = template.replace(/\{\{([A-Z_]+)\}\}/g, (_,key)=>{if(!(key in values))throw new Error(`Unknown placeholder ${key}`);return values[key];})
    .replace('name="robots" content="noindex, nofollow"', 'name="robots" content="index, follow"');
  write(route(city).slice(1)+'.html', output);
}

// Keep discovery links and sitemap aligned with the same city list.
const markerStart = '<!-- ORTSSEITEN:START -->';
const markerEnd = '<!-- ORTSSEITEN:END -->';
const areaBlock = `${markerStart}\n      <div class="area-tags">\n        ${cities.map(c=>link(c).replace('<a ', '<a class="area-tag" ')).join('\n        ')}\n      </div>\n      <p class="area-note">Unser Standort ist Südbrookmerland. Für die aufgeführten Orte stimmen wir Vorhaben, Anfahrt und Termine persönlich ab.</p>\n      ${markerEnd}`;
let nextHome = home;
if (home.includes(markerStart)) nextHome = home.replace(/<!-- ORTSSEITEN:START -->[\s\S]*?<!-- ORTSSEITEN:END -->/, areaBlock);
else nextHome = home.replace(/(<section class="section section-alt" id="gebiet">[\s\S]*?)(\s*<\/section>)/, (_,start,end)=>start+'\n      '+areaBlock+end);
nextHome = nextHome.replace('Einblasdämmung für den Raum Ostfriesland – auch bei Ihnen vor Ort.', 'Einblasdämmung in Ostfriesland und weiteren Orten im Nordwesten – fragen Sie Ihr Vorhaben an.');
write('index.html', nextHome);

let sitemap = read('sitemap.xml');
const additions = cities.filter(c=>!sitemap.includes(`<loc>https://www.thermo-kern.de${route(c)}</loc>`)).map(c=>`  <url>\n    <loc>https://www.thermo-kern.de${route(c)}</loc>\n    <lastmod>2026-09-07</lastmod>\n    <priority>0.8</priority>\n  </url>`).join('\n');
if (additions) sitemap = sitemap.replace('</urlset>',additions+'\n</urlset>');
write('sitemap.xml',sitemap);
console.log(`Generated ${cities.length} location pages, homepage links and sitemap.`);
