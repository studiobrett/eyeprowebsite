import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { virginiaLocations, southCarolinaLocations } from '@/data/locations';

export const metadata = {
  title: 'Locations | Eyepro',
  description: 'Find an Eyepro location near you in Virginia (Haymarket, Winchester) or South Carolina (Georgetown).',
};

function LocationCard({ location }: { location: typeof virginiaLocations[0] }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
      <p className="text-slate-500 text-sm mb-4">{location.state}</p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-eyepro-blue flex-shrink-0 mt-0.5" />
          <div>
            <p>{location.address}</p>
            <p>{location.city}, {location.stateAbbr} {location.zip}</p>
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
            {Object.entries(location.hours).slice(0, 3).map(([day, hours]) => (
              <p key={day}>
                <span className="font-medium">{day}:</span> {hours}
              </p>
            ))}
            <p className="text-slate-500 mt-1">+ more hours</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href={`/locations/${location.id}`}
          className="flex-1 text-center bg-eyepro-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-eyepro-blue/90 transition-colors"
        >
          View Details
        </Link>
        {location.googleMapsUrl && (
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-eyepro-blue text-eyepro-blue py-2 px-4 rounded-lg font-medium hover:bg-eyepro-blue/5 transition-colors"
          >
            Directions
          </a>
        )}
      </div>
    </div>
  );
}

export default function LocationsPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conveniently located inside Walmart Vision Centers in Virginia and South Carolina. 
            Find the location nearest you.
          </p>
        </div>

        {/* Virginia Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-eyepro-blue"></span>
            Virginia
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {virginiaLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>

        {/* South Carolina Locations */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-eyepro-blue"></span>
            South Carolina
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {southCarolinaLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
