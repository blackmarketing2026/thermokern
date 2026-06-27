const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = process.env.CONTACT_EMAIL || "thermokern@function-concept.de";

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

  const rows = [
    ["Name", name],
    ["Telefon", phone],
    ["E-Mail", email || "–"],
    ["Leistung", serviceLabels[service] || service || "–"],
  ];
  if (address) rows.push(["Adresse", address]);
  if (message) rows.push(["Nachricht", message]);

  const htmlBody = `
    <h2>Neue Kontaktanfrage über thermo-kern.de</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr>
              <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;width:140px;">${label}</td>
              <td style="padding:8px 12px;border:1px solid #ddd;">${value.replace(/</g, "&lt;")}</td>
            </tr>`
        )
        .join("")}
    </table>
  `;

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
