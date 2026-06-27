const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = process.env.CONTACT_EMAIL || "thermokern@function-concept.de";
const LOGO_URL = process.env.LOGO_URL || "https://thermo-kern.de/img/logo-thermokern.png";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, address, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name und Telefon sind Pflichtfelder." });
  }

  const serviceLabels = {
    kerndaemmung: "Kerndämmung / Fassade",
    dachdaemmung: "Dachdämmung",
    geschossdecke: "Oberste Geschossdecke",
    kellerdecke: "Kellerdeckendämmung",
    beratung: "Energieberatung",
    sonstiges: "Sonstiges",
  };

  const serviceText = serviceLabels[service] || service || "–";
  const phoneClean = phone.replace(/\s+/g, "").replace(/^0/, "+49");
  const waPhone = phoneClean.replace(/\+/, "").replace(/[^0-9]/g, "");

  const htmlBody = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f6f0;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f0;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#2D3436;padding:24px 32px;text-align:center;">
            <img src="${LOGO_URL}" alt="ThermoKern" width="180" style="max-width:180px;height:auto;" />
          </td>
        </tr>

        <!-- Title -->
        <tr>
          <td style="background:#6AA832;padding:16px 32px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.3px;">Neue Kontaktanfrage</h1>
          </td>
        </tr>

        <!-- Action Buttons -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="33%" align="center" style="padding:0 4px;">
                  <a href="tel:${phoneClean}" style="display:block;background:#6AA832;color:#ffffff;text-decoration:none;padding:12px 8px;border-radius:8px;font-size:14px;font-weight:600;text-align:center;">
                    &#9742; Anrufen
                  </a>
                </td>
                <td width="33%" align="center" style="padding:0 4px;">
                  <a href="mailto:${email || ""}" style="display:block;background:#2E86C1;color:#ffffff;text-decoration:none;padding:12px 8px;border-radius:8px;font-size:14px;font-weight:600;text-align:center;">
                    &#9993; E-Mail
                  </a>
                </td>
                <td width="33%" align="center" style="padding:0 4px;">
                  <a href="https://wa.me/${waPhone}" style="display:block;background:#25d366;color:#ffffff;text-decoration:none;padding:12px 8px;border-radius:8px;font-size:14px;font-weight:600;text-align:center;">
                    &#128172; WhatsApp
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Lead Details -->
        <tr>
          <td style="padding:20px 32px 0;">
            <h2 style="margin:0 0 12px;font-size:15px;color:#2D3436;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #6AA832;padding-bottom:8px;">Kontaktdaten</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#2D3436;width:120px;border-bottom:1px solid #f0f0f0;">Name</td>
                <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;">${name.replace(/</g, "&lt;")}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#2D3436;border-bottom:1px solid #f0f0f0;">Telefon</td>
                <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;"><a href="tel:${phoneClean}" style="color:#6AA832;text-decoration:none;">${phone.replace(/</g, "&lt;")}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#2D3436;border-bottom:1px solid #f0f0f0;">E-Mail</td>
                <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;">${email ? '<a href="mailto:' + email.replace(/"/g, "&quot;").replace(/</g, "&lt;") + '" style="color:#6AA832;text-decoration:none;">' + email.replace(/</g, "&lt;") + "</a>" : "–"}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#2D3436;border-bottom:1px solid #f0f0f0;">Leistung</td>
                <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;">${serviceText}</td>
              </tr>
              ${address ? '<tr><td style="padding:10px 12px;font-weight:600;color:#2D3436;border-bottom:1px solid #f0f0f0;">Adresse</td><td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;">' + address.replace(/</g, "&lt;") + "</td></tr>" : ""}
            </table>
          </td>
        </tr>

        <!-- Message -->
        ${message ? '<tr><td style="padding:20px 32px 0;"><h2 style="margin:0 0 12px;font-size:15px;color:#2D3436;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #6AA832;padding-bottom:8px;">Nachricht</h2><div style="background:#f8faf5;border-left:4px solid #6AA832;padding:16px 20px;border-radius:0 8px 8px 0;font-size:14px;color:#475569;line-height:1.7;">' + message.replace(/</g, "&lt;").replace(/\n/g, "<br>") + "</div></td></tr>" : ""}

        <!-- Footer -->
        <tr>
          <td style="padding:24px 32px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8faf5;border-radius:8px;padding:16px 20px;">
              <tr>
                <td style="padding:12px 16px;font-size:13px;color:#64748b;line-height:1.5;">
                  <strong style="color:#2D3436;">ThermoKern</strong> &middot; Lars Dirksen<br>
                  Westvictorburer Straße 2a, 26624 Südbrookmerland<br>
                  <a href="tel:+491627673545" style="color:#6AA832;text-decoration:none;">+49 162 7673545</a> &middot;
                  <a href="mailto:info@thermo-kern.de" style="color:#6AA832;text-decoration:none;">info@thermo-kern.de</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Copyright -->
        <tr>
          <td style="padding:16px 32px 24px;text-align:center;font-size:11px;color:#94a3b8;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf thermo-kern.de erstellt.
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const rows = [
    ["Name", name],
    ["Telefon", phone],
    ["E-Mail", email || "–"],
    ["Leistung", serviceText],
  ];
  if (address) rows.push(["Adresse", address]);
  if (message) rows.push(["Nachricht", message]);
  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    await resend.emails.send({
      from: "ThermoKern Website <lead@leadcenter.function-concept.de>",
      to: [RECIPIENT],
      subject: `Neue Anfrage von ${name}`,
      html: htmlBody,
      text: textBody,
      replyTo: email || undefined,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "E-Mail konnte nicht gesendet werden." });
  }
};
