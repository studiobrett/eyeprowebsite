import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, ScanLine, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Technology | Eyepro',
  description: 'Eyepro uses the Topcon Maestro 2 OCT to detect eye disease early — no dilation required in most cases.',
};

export default function TechnologyPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Seeing More, So You Can Live Fully</h1>
          <div className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            <p>
              At Eyepro, we invest in the technology that lets us see what others might miss.
              Our Topcon Maestro 2 gives our doctors a comprehensive view of your eye health
              in a single, comfortable scan — no dilation required in most cases.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <Image
            src="/images/dr-goerl-technology.jpg"
            alt="Dr. Daniel Goerl with advanced diagnostic equipment at Eyepro."
            width={1200}
            height={800}
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="space-y-6">

          {/* What It Sees */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-eyepro-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-eyepro-blue" />
              </div>
              <h2 className="text-2xl font-bold">What It Sees</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                The Maestro 2 captures detailed images and gives thorough reports of the retina,
                optic nerve, macula, and anterior segment of the eye. Conditions like glaucoma,
                diabetic retinopathy, and macular degeneration often have no symptoms until they
                are advanced. We find them early, when treatment is most effective.
              </p>
            </div>
          </div>

          {/* What It Feels Like */}
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-eyepro-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ScanLine className="w-5 h-5 text-eyepro-blue" />
              </div>
              <h2 className="text-2xl font-bold">What It Feels Like</h2>
            </div>
            <div className="text-slate-600 leading-relaxed">
              <p>
                Quick, painless, and non-invasive. You simply look into the device for a few
                seconds while it does the work. No discomfort, no recovery time, no drops in
                most cases.
              </p>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-eyepro-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-eyepro-blue" />
              </div>
              <h2 className="text-2xl font-bold">Why It Matters</h2>
            </div>
            <div className="text-slate-600 leading-relaxed">
              <p>
                A photograph of the inside of your eye becomes your baseline. Year after year,
                our doctors can track subtle changes before they become serious problems. This
                is preventive medicine applied to eye care.
              </p>
            </div>
          </div>

          {/* Closing + CTA */}
          <div className="bg-gradient-to-r from-eyepro-blue to-slate-700 rounded-xl p-8 text-white text-center">
            <p className="text-xl italic font-medium mb-6 text-slate-100">
              &ldquo;This is what medical eye care looks like.&rdquo;
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-eyepro-blue px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
