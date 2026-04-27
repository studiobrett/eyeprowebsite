export const metadata = {
  title: 'Accessibility | Eyepro',
  description: 'Eyepro\'s commitment to digital accessibility and how to report accessibility issues.',
};

export default function AccessibilityPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-slate-600">Last updated: April 27, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none bg-white border rounded-xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">Our Commitment</h2>
            <p className="text-slate-700">
              Eyepro is committed to making this website accessible to as many people as possible,
              including people with disabilities. We strive to meet the Web Content Accessibility
              Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">What We&apos;ve Done</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Used semantic HTML and clear heading structure to support screen readers.</li>
              <li>Provided text alternatives for images.</li>
              <li>Designed for keyboard navigation throughout the site.</li>
              <li>Selected colors with sufficient contrast for readability.</li>
              <li>Used responsive design so content adapts to mobile devices and zoom levels.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Ongoing Improvement</h2>
            <p className="text-slate-700">
              Accessibility is an ongoing effort. We regularly review the site for issues and welcome
              feedback that helps us identify barriers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Reporting an Issue</h2>
            <p className="text-slate-700">
              If you encounter a part of this website that is difficult to use, please let us know so
              we can address it. You can reach us by phone at any of our office locations listed on the{' '}
              <a href="/locations" className="text-eyepro-blue hover:underline">Locations page</a>.
            </p>
            <p className="text-slate-700 mt-3">
              When reporting an issue, please mention the page URL, a description of the problem, and
              the device and browser you are using if possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Alternative Access</h2>
            <p className="text-slate-700">
              If any information on this website is not accessible to you in its current form, we are
              happy to provide it in another format. Please contact our office and we will assist you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
