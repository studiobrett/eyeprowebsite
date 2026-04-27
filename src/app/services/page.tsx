import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export const metadata = {
  title: 'Eye Care Services | Eyepro',
  description: 'Comprehensive eye care services including eye exams, contact lenses, LASIK co-management, and treatment for eye diseases.',
};

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From routine eye exams to specialized care for complex eye conditions, 
            Eyepro offers comprehensive services to keep your vision healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h2 className="text-xl font-semibold mb-3 group-hover:text-eyepro-blue transition-colors">
                {service.name}
              </h2>
              <p className="text-slate-600 mb-4">{service.shortDescription}</p>
              <span className="text-eyepro-blue font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
