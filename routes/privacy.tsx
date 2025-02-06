import { Layout } from "../components/Layout.tsx";

export default function HomePage() {
  return (
    <Layout title="Home">
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Privatlivspolitik</h1>
            <p className="text-xl text-gray-600">
              Jeg indsamler ikke noget data, så det er så nemt!
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p>
              Jeg har ikke rigtig noget stort behov for at indsamle data om dig,
              så jeg lader være.
            </p>
            <p>
              Hvis du sender en mail til mig, så gemmer jeg selvfølgelig, det du
              skriver i den. Men det er så også det.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
