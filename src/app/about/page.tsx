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
          <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
          <div className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed space-y-4">
            <p>
              When Eyepro opened in 2011, it was built around a clear vision: that patients
              deserved to really experience a difference in their eye care.
            </p>
            <p>
              Coming from a LASIK background, Dr. Goerl knew he wanted to offer comprehensive
              medical eye care — the kind that ensures every patient receives innovative,
              person-centered care. He understood that medical eye care services were the future
              of optometry, and he made the decision to build a practice around that conviction
              — not just for long-term success, but for the communities he wanted to serve.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          {/* Growing Essential Services */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Growing Essential Services in Our Community</h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Eyepro opened its first location in the Northern Virginia community where Dr. Goerl
                raised his family. After establishing himself as a reputable optometrist and working
                alongside ophthalmologists in LASIK and refractive surgery patient management, he
                wanted to create a practice with an atmosphere best fit for a growing community's
                needs — one that would make a positive difference for future generations.
              </p>
              <p>
                The ability to choose the "how" and the "why" of serving the community is what
                motivates the Eyepro team to continue doing what they love: putting patients first.
              </p>
              <p>
                Eyepro sees and takes care of all patients — young and old, with insurance or
                without. The team will always do its best to navigate the specific circumstances of
                each patient to ensure everyone receives the care they need and deserve. The goal is
                to provide affordable, accessible, and quality eye care to anybody and everybody who
                walks through the door — and to treat each person as family. Eyepro is trying to
                connect with the heart of every type of community.
              </p>
            </div>
          </div>

          {/* Forest path image */}
          <img src="/images/forest-hero.jpg" alt="" className="w-full block rounded-xl" />

          {/* A Competitive Edge */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">A Competitive Edge Rooted in Care</h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Eyepro&apos;s edge over other independent practices comes from the value placed on
                person-centered ethics and care.
              </p>
              <p>
                Doctors and staff alike are hospitable, knowledgeable, personable, and empathetic.
                The relationship between the doctor and the office manager at each location is
                incredibly important to ensuring every patient receives a very real and human
                experience. Eyepro would not be where it is today without its team and the family
                culture built around them.
              </p>
              <p>
                Each location operates with autonomy, empowering managers and doctors to make the
                best judgments on any situation that arises — always within the framework of
                Eyepro&apos;s person-centered ethical standards.
              </p>
            </div>
          </div>

          {/* Outfitted for Modern Medical Eye Care */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Outfitted for Modern Medical Eye Care</h2>
            <p className="text-slate-600 leading-relaxed">
              Alongside industry-standard technology, Eyepro invests in advanced medical equipment
              — including the Topcon Maestro 2 OCT — so that doctors can see as much of the
              interior of the eye as needed to determine general health, make precise diagnoses, and
              build effective treatment plans. Technology like fundus photography and anterior and
              posterior segment OCT allows the team to detect conditions such as diabetic
              retinopathy, ischemia, and glaucoma early on, when it matters most. Keeping pace
              with modern medicine has been a cornerstone of Eyepro&apos;s growth.
            </p>
          </div>

          {/* Our Locations */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Our Locations</h2>
            <p className="text-slate-600 mb-6">
              Eyepro now operates locations across Northern Virginia and South Carolina, each one
              grounded in the same founding principle: treat every patient like family.
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
              Whether you are due for a routine exam, managing a chronic eye condition, or exploring
              your options for vision correction — the team is here. No pressure. No agenda. Just
              good eye care from people who genuinely care.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-white text-eyepro-blue px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Find a Location <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
