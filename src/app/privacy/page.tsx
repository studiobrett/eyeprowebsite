export const metadata = {
  title: 'Privacy Policy | Eyepro',
  description: 'How Eyepro collects, uses, and protects information shared through this website.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: April 27, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none bg-white border rounded-xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">Overview</h2>
            <p className="text-slate-700">
              This Privacy Policy describes how Eyepro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
              and protects information you provide through this website. This policy applies only to
              information collected through the website. Information shared during in-office visits is
              governed by our HIPAA Notice of Privacy Practices, which is provided separately at our
              offices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p className="text-slate-700 mb-3">
              This website does not include online contact forms. The only information collected
              automatically by the site is basic technical information your browser sends (such as IP
              address, device type, and pages visited).
            </p>
            <p className="text-slate-700 mt-3">
              All patient communication takes place in person at our offices or by phone using the
              numbers listed on our{' '}
              <a href="/locations" className="text-eyepro-blue hover:underline">Locations page</a>.
              Information shared during in-office visits is governed by our HIPAA Notice of Privacy
              Practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How We Use Information</h2>
            <p className="text-slate-700">
              Technical information collected by the site is used to keep the website running
              reliably and to understand how visitors use it. We do not sell or share personal
              information collected through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Cookies and Analytics</h2>
            <p className="text-slate-700">
              This website may use cookies and similar technologies to remember preferences and to
              understand how visitors use the site. You can control cookies through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
            <p className="text-slate-700">
              Some pages may include links to third-party services or content (such as map providers).
              Their privacy practices are governed by their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Children&apos;s Privacy</h2>
            <p className="text-slate-700">
              This website is not directed to children under the age of 13, and we do not knowingly
              collect personal information from children online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="text-slate-700">
              Questions about this Privacy Policy can be directed to any of our offices. Phone numbers
              and addresses are listed on our{' '}
              <a href="/locations" className="text-eyepro-blue hover:underline">Locations page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
