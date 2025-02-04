// utils/sendgrid.ts

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL");
const TO_EMAIL = Deno.env.get("TO_EMAIL");

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(
  { name, email, subject, message }: EmailData,
) {
  if (!SENDGRID_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
    throw new Error("Missing required environment variables for SendGrid");
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: `New Contact Form Message: ${subject}`,
        },
      ],
      from: { email: FROM_EMAIL, name: "Website Contact Form" },
      reply_to: { email, name },
      content: [
        {
          type: "text/plain",
          value:
            `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        },
        {
          type: "text/html",
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      `Failed to send email: ${
        error ? JSON.stringify(error) : response.statusText
      }`,
    );
  }

  return response;
}
