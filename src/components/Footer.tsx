import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star } from 'lucide-react';
import { locations } from '@/data/locations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eyepro-ink text-slate-300">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 bg-white rounded-lg px-3 py-2">
              <Image
                src="/images/eyepro-logo.webp"
                alt="Eyepro"
                width={986}
                height={600}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm">
              Trusted eye care serving Virginia and South Carolina. 
              Conveniently located in Virginia and South Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/comprehensive-eye-exams" className="hover:text-white transition-colors">Eye Exams</Link></li>
              <li><Link href="/services/contact-lenses" className="hover:text-white transition-colors">Contact Lenses</Link></li>
              <li><Link href="/services/lasik-co-management" className="hover:text-white transition-colors">LASIK</Link></li>
              <li><Link href="/services/eye-emergencies" className="hover:text-white transition-colors">Eye Emergencies</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Locations</h3>
            <ul className="space-y-4 text-sm">
              {locations.map((location) => (
                <li key={location.id}>
                  <Link href={`/locations/${location.id}`} className="hover:text-white transition-colors font-medium">
                    {location.name}, {location.stateAbbr}
                  </Link>
                  <div className="flex items-center gap-1 mt-1">
                    <Phone className="w-3 h-3" />
                    <a href={`tel:${location.phone}`} className="hover:text-white transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 pb-4 text-sm text-slate-400 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span className="flex gap-0.5 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span>Love your experience? Leave us a review:</span>
          <span className="flex gap-3 flex-wrap justify-center">
            {locations.filter(l => l.reviewUrl).map((location) => (
              <a
                key={location.id}
                href={location.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                {location.name}
              </a>
            ))}
          </span>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-slate-400">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; {currentYear} Eyepro. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
