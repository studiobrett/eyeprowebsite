import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { services, getService } from '@/data/services';
import { locations } from '@/data/locations';

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const service = getService(params.id);
  if (!service) return {};
  
  return {
    title: `${service.name} | Eyepro`,
    description: service.shortDescription,
  };
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = getService(params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-narrow">
        <div className="mb-8">
          <Link href="/services" className="text-eyepro-blue hover:underline">
            ← All Services
          </Link>
        </div>

        <article className="bg-white border rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-slate-600 mb-8">{service.shortDescription}</p>
          
          <div className="prose prose-slate max-w-none">
            {service.description.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Schedule an Appointment</h3>
              <p className="text-slate-600 mb-4">
                Contact any of our locations to learn more about {service.name.toLowerCase()} or schedule your visit.
              </p>
              <div className="flex flex-wrap gap-3">
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
        </article>
      </div>
    </div>
  );
}
