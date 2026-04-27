import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { locations, getLocation } from '@/data/locations';
import { JsonLd } from '@/components/JsonLd';
import { locationSchema } from '@/lib/schema';

export function generateStaticParams() {
  return locations.map((location) => ({
    id: location.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const location = getLocation(params.id);
  if (!location) return {};
  
  return {
    title: `${location.name}, ${location.stateAbbr} Eye Doctor | Eyepro`,
    description: `Visit Eyepro in ${location.city}, ${location.state}. Comprehensive eye exams, contact lenses, and more. Located inside Walmart at ${location.address}.`,
  };
}

export default function LocationPage({ params }: { params: { id: string } }) {
  const location = getLocation(params.id);
  
  if (!location) {
    notFound();
  }

  return (
    <div className="py-12">
      <JsonLd data={locationSchema(location)} />
      <div className="container-narrow">
        <div className="mb-8">
          <Link href="/locations" className="text-eyepro-blue hover:underline">
            ← All Locations
          </Link>
        </div>

        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <div className="mb-2">
            <span className="inline-block bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
              {location.state}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Eyepro {location.name}</h1>
          {location.insideWalmart && (
            <p className="text-slate-500 mb-8">Inside Walmart Vision Center</p>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-eyepro-blue" />
                  Address
                </h2>
                <p>{location.address}</p>
                <p>{location.city}, {location.stateAbbr} {location.zip}</p>
                {location.googleMapsUrl && (
                  <a 
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-eyepro-blue hover:underline mt-2"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-eyepro-blue" />
                  Phone
                </h2>
                <a 
                  href={`tel:${location.phone}`}
                  className="text-xl text-eyepro-blue font-medium hover:underline"
                >
                  {location.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-eyepro-blue" />
                Hours
              </h2>
              <table className="w-full">
                <tbody>
                  {Object.entries(location.hours).map(([day, hours]) => (
                    <tr key={day} className="border-b last:border-0">
                      <td className="py-2 font-medium">{day}</td>
                      <td className="py-2 text-right">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t">
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Ready to Schedule?</h3>
              <p className="text-slate-600 mb-4">
                Call us to book your eye exam at our {location.name}, {location.stateAbbr} location.
              </p>
              <a 
                href={`tel:${location.phone}`}
                className="inline-flex items-center gap-2 bg-eyepro-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyepro-blue/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {location.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
