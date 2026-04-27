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
              When you use this website, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Information you submit through our contact form (such as your name, email, phone number, and message).</li>
              <li>Basic technical information your browser sends automatically (such as IP address, device type, and pages visited).</li>
            </ul>
            <p className="text-slate-700 mt-3">
              <strong>Please do not include protected health information (PHI) in messages submitted through
              this website.</strong> The contact form is not a secure channel for medical information. To
              discuss specific health concerns, please call the office directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How We Use Information</h2>
            <p className="text-slate-700 mb-3">
              We use the information collected to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Respond to your inquiries.</li>
              <li>Schedule appointments when requested.</li>
              <li>Improve the website and our services.</li>
            </ul>
            <p className="text-slate-700 mt-3">
              We do not sell your personal information.
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
