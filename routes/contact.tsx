// routes/contact.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { sendContactEmail } from "../utils/sendgrid.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    try {
      const form = await req.formData();
      const name = form.get("name")?.toString();
      const email = form.get("email")?.toString();
      const subject = form.get("subject")?.toString();
      const message = form.get("message")?.toString();

      if (!name || !email || !subject || !message) {
        return new Response("Missing required fields", { status: 400 });
      }

      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      // Redirect back to contact page with success message
      const headers = new Headers();
      headers.set("location", "/contact?sent=true");
      return new Response(null, {
        status: 303,
        headers,
      });
    } catch (error) {
      console.error("Failed to send email:", error);

      // Redirect back with error message
      const headers = new Headers();
      headers.set("location", "/contact?error=true");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
  },
};

export default function ContactPage(props: PageProps) {
  const sent = props.url.searchParams.get("sent") === "true";
  const error = props.url.searchParams.get("error") === "true";

  // Get pre-filled values from URL parameters
  const prefillSubject = props.url.searchParams.get("subject") ?? "";
  const prefillMessage = props.url.searchParams.get("message") ?? "";

  return (
    <Layout title="Contact">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-gray-600">
              Lad os vende, hvordan jeg kan hjælpe din organisation!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Lad os tage en snak!</h2>
              <div className="prose prose-lg">
                <p>
                  Jeg er altid intereseret i at høre om nye projekter og
                  muligheder for samarbejde. Send mig en besked, så vender jeg
                  tilbage snarest muligt!
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1">
                      <a
                        href="mailto:magnus@creativeoak.dk"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        magnus@creativeoak.dk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <p className="mt-1 text-gray-600">
                      Langelandsgade 62, st. 8000, Aarhus Denmark
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Sociale Medier</h3>
                    <div className="mt-1 flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/magnushoholt/"
                        className="text-gray-600 hover:text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/magniswerfer"
                        className="text-gray-600 hover:text-gray-900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {sent
                ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-green-800 mb-2">
                      Tak for din besked!
                    </h3>
                    <p className="text-green-700">
                      Jeg vender tilbage snarest muligt!
                    </p>
                  </div>
                )
                : error
                ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-red-800 mb-2">
                      Upsi, der er sket en fejl!
                    </h3>
                    <p className="text-red-700">
                      Prøv igen lidt senere. Jeg arbejder på sagen...
                    </p>
                  </div>
                )
                : (
                  <form
                    method="POST"
                    className="space-y-6 bg-gray-50 p-6 rounded-lg"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Navn
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Emne
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={prefillSubject}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Besked
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        required
                        defaultValue={prefillMessage}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Send besked
                      </button>
                    </div>
                  </form>
                )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
