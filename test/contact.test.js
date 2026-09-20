const test = require("node:test");
const assert = require("node:assert/strict");

test("sendet das vorhandene Template an zwei kommagetrennte Empfaenger", async () => {
  process.env.smtp_server = "127.0.0.1";
  process.env.smtp_user = "website@example.test";
  process.env.smtp_password = "secret-password";
  process.env.smtp_empfaenger = "first@example.test, second@example.test";

  const nodemailer = require("nodemailer");
  let transportOptions;
  let sentMail;
  nodemailer.createTransport = (options) => {
    transportOptions = options;
    return {
      sendMail: async (mail) => {
        sentMail = mail;
        return { messageId: "test-message" };
      },
    };
  };

  delete require.cache[require.resolve("../api/contact")];
  const handler = require("../api/contact");

  const req = {
    method: "POST",
    body: {
      name: "Max Mustermann",
      phone: "04941 123456",
      email: "max@example.test",
      service: "kerndaemmung",
      address: "Musterweg 1, 26624 Suedbrookmerland",
      message: "Bitte um Rueckruf.",
    },
  };
  const response = {};
  const res = {
    status(code) {
      response.status = code;
      return this;
    },
    json(body) {
      response.body = body;
      return this;
    },
  };

  await handler(req, res);

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { success: true });
  assert.equal(transportOptions.auth.user, "website@example.test");
  assert.equal(transportOptions.auth.pass, "secret-password");
  assert.deepEqual(sentMail.to, ["first@example.test", "second@example.test"]);
  assert.equal(sentMail.replyTo, "max@example.test");
  assert.match(sentMail.subject, /Max Mustermann/);
  assert.match(sentMail.html, /Neue Kontaktanfrage/);
  assert.match(sentMail.html, /ThermoKern/);
  assert.match(sentMail.text, /Bitte um Rueckruf\./);
});
