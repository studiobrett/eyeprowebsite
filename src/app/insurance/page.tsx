import { Phone } from 'lucide-react';
import { insurances } from '@/data/insurance';
import { locations } from '@/data/locations';

export const metadata = {
  title: 'Insurance Information | Eyepro',
  description: 'We accept most major vision and medical insurance plans. Learn about insurance options at Eyepro.',
};

export default function InsurancePage() {
  return (
    <div className="py-12">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Insurance Information</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We accept most major vision and medical insurance plans to help keep your eye care affordable.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 shadow-sm mb-8">
          <p className="text-slate-600 mb-8">
            We accept Medicare and select plans from the carriers listed below. Coverage varies
            by location and plan — please call us before your visit to confirm your specific
            plan is accepted.
          </p>

          <h2 className="text-2xl font-bold mb-6">Accepted Insurance Plans</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {insurances.map((insurance) => (
              <div
                key={insurance}
                className="bg-slate-50 rounded-lg p-4 text-center font-medium"
              >
                {insurance}
              </div>
            ))}
          </div>

          <p className="text-slate-600 mt-6 text-sm">
            We do not accept Medicaid, however we are committed to making care accessible and
            will always do our best to work with you on affordable options. Don&apos;t see your
            insurance listed? Reach out and we&apos;ll help you understand your options.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-slate-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Questions About Coverage?</h3>
          <p className="text-slate-600 mb-6">
            Our team can help you understand your insurance benefits and out-of-pocket costs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <a
                key={location.id}
                href={`tel:${location.phone}`}
                className="inline-flex items-center gap-2 bg-eyepro-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-eyepro-blue/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {location.name}: {location.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
