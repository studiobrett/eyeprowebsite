import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata = {
  title: 'About Us | Eyepro',
  description: 'Learn about Eyepro — our founding story, how we practice, and the people behind our eye care clinics in Virginia and South Carolina.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Eyepro was founded on a simple belief: that every person who walks through our door
            deserves real, honest, medical-grade eye care — regardless of their age, background,
            or insurance status. We are a team of optometrists and staff who chose this work
            because we care about people. Not products. Not quotas. People.
          </p>
        </div>

        <div className="space-y-6">

          {/* Our Story */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-slate-600 leading-relaxed">
              In 2011, Dr. Daniel Goerl opened the first Eyepro location in the Northern Virginia
              community where he raised his family. Having spent years working alongside
              ophthalmologists in LASIK and refractive surgery, he saw firsthand how transformative
              thorough, medically-minded eye care could be — and how underserved everyday
              communities were when it came to that level of care. He wanted to change that. So he
              built a practice that would. Today Eyepro operates locations across Virginia and South
              Carolina, each one grounded in the same founding principle: treat every patient
              like family.
            </p>
          </div>

          {/* How We Practice */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How We Practice</h2>
            <p className="text-slate-600 leading-relaxed">
              We practice with a medical mindset. That means we invest in advanced diagnostic
              technology — including OCT imaging, fundus photography, and anterior and posterior
              segment evaluation — so our doctors can detect and manage conditions like glaucoma,
              diabetic retinopathy, and macular degeneration early, when it matters most. We see
              patients of all ages, work with most insurance plans, and will always do our best to
              navigate your specific situation. We do not sell eyewear. Our only interest is in the
              health of your eyes and the clarity of your vision.
            </p>
          </div>

          {/* Our Setting */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Setting</h2>
            <p className="text-slate-600 leading-relaxed">
              Our locations are situated alongside retail optical and vision centers, which allows
              us to focus entirely on what we do best — comprehensive medical eye exams. Patients
              who need optical services are well served by our neighbors, while we remain focused
              on your eye health. It is a relationship that works well for the community.
            </p>
          </div>

          {/* Our Team */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our doctors and staff are hospitable, knowledgeable, and genuinely invested in your
              care. We believe the relationship between a patient and their doctor should feel human
              — not rushed, not transactional. Each location operates with autonomy, empowering our
              doctors and managers to make the best decisions for each patient on any given day.
              What stays constant is our standard of care and our commitment to you.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-eyepro-blue font-semibold hover:underline"
            >
              Meet our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Our Locations */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Our Locations</h2>
            <p className="text-slate-600 mb-6">
              We serve communities in Haymarket VA, Winchester VA, and Georgetown SC — with
              convenient locations designed to be accessible to patients of all backgrounds.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {locations.map((location) => (
                <Link
                  key={location.id}
                  href={`/locations/${location.id}`}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-eyepro-blue/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-eyepro-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-eyepro-blue" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-eyepro-blue transition-colors">
                      {location.name}
                    </p>
                    <p className="text-sm text-slate-500">{location.stateAbbr}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Come See Us CTA */}
          <div className="bg-gradient-to-r from-eyepro-blue to-slate-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Come See Us</h2>
            <p className="text-slate-200 mb-6 max-w-xl mx-auto leading-relaxed">
              Whether you are due for a routine exam, managing a chronic eye condition, or
              exploring your options for vision correction, we are here. No pressure. No agenda.
              Just good eye care from people who genuinely care.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-white text-eyepro-blue px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Find a Location <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-slate-300 text-sm mt-6">
              <a
                href="https://reviewob.com/finding-best-practice-setting/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Read our founder&apos;s story as featured in Review of Optometric Business
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
