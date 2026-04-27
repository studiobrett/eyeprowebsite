import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata = {
  title: 'Contact Us | Eyepro',
  description: 'Contact Eyepro for appointments, questions, or eye emergencies. Locations in Haymarket VA, Winchester VA, and Georgetown SC.',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or ready to schedule an appointment? 
            Reach out to any of our locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-eyepro-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{location.address}</p>
                    <p>{location.city}, {location.state} {location.zip}</p>
                    {location.insideWalmart && (
                      <p className="text-sm text-slate-500 mt-1">Inside Walmart</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-eyepro-blue flex-shrink-0" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-eyepro-blue font-medium hover:underline"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-eyepro-blue flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    {Object.entries(location.hours).map(([day, hours]) => (
                      <p key={day}>
                        <span className="font-medium">{day}:</span> {hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href={`tel:${location.phone}`}
                className="block w-full text-center bg-eyepro-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-eyepro-blue/90 transition-colors"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-red-50 border border-red-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-2">Eye Emergency?</h3>
          <p className="text-red-700 mb-4">
            If you're experiencing sudden vision changes, eye pain, or trauma, 
            call us immediately for same-day care.
          </p>
          <Link 
            href="/services/eye-emergencies"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Learn About Emergency Care
          </Link>
        </div>
      </div>
    </div>
  );
}
