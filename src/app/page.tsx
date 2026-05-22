import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ArrowRight, Eye, Users, Stethoscope } from 'lucide-react';
import { locations, virginiaLocations, southCarolinaLocations } from '@/data/locations';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const primaryDoctor = team[0];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eyepro-blue to-slate-800 text-white">
        <div className="container-wide py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Eye Care You Can Trust
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Welcome to Eyepro, where we make healthy vision simple, accessible, and personalized. 
              With over 30 years of experience, our optometrists are proud to serve communities 
              across Virginia and South Carolina.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/locations" 
                className="inline-flex items-center gap-2 bg-white text-eyepro-blue px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Find a Location
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Bar */}
      <section className="bg-slate-100 border-b">
        <div className="container-wide py-8">
          {/* Virginia */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Virginia</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {virginiaLocations.map((location) => (
                <Link 
                  key={location.id}
                  href={`/locations/${location.id}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-eyepro-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-eyepro-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{location.name}</h3>
                    <p className="text-eyepro-blue font-medium">{location.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* South Carolina */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">South Carolina</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {southCarolinaLocations.map((location) => (
                <Link 
                  key={location.id}
                  href={`/locations/${location.id}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-eyepro-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-eyepro-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{location.name}</h3>
                    <p className="text-eyepro-blue font-medium">{location.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Eyepro?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-eyepro-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-eyepro-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Experienced Optometrists</h3>
              <p className="text-slate-600">Personal, attentive approach with decades of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-eyepro-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-eyepro-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Advanced Technology</h3>
              <p className="text-slate-600">State of the art equipment to detect and manage eye diseases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-eyepro-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-eyepro-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Convenient Locations</h3>
              <p className="text-slate-600">Three convenient locations across Virginia and South Carolina</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-eyepro-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-eyepro-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Comprehensive Care</h3>
              <p className="text-slate-600">From routine exams to complex eye disease management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you need a routine eye exam or care for a complex eye condition, 
              we're here to help you see clearly and comfortably.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                <span className="text-eyepro-blue font-medium inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-eyepro-blue font-semibold hover:underline"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Feature */}
      {primaryDoctor && (
        <section className="py-16">
          <div className="container-wide">
            <div className="bg-gradient-to-r from-eyepro-blue to-slate-700 rounded-2xl p-8 lg:p-12 text-white">
              <div className="md:flex items-center gap-10">
                {primaryDoctor.image && (
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden relative ring-4 ring-white/20">
                      <Image
                        src={primaryDoctor.image}
                        alt={primaryDoctor.name}
                        fill
                        sizes="(min-width: 1024px) 224px, 192px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="max-w-3xl">
                  <p className="text-slate-300 mb-2">Meet our founding Doctor</p>
                  <h2 className="text-3xl font-bold mb-4">
                    {primaryDoctor.name}, {primaryDoctor.credentials}
                  </h2>
                  <p className="text-lg text-slate-200 mb-6">
                    {primaryDoctor.bio}
                  </p>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 bg-white text-eyepro-blue px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Meet Our Team <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Testimonials />

      {/* LASIK CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Interested in LASIK?</h2>
            <p className="text-slate-600 mb-8">
              Clearer vision could be just one step away. At Eyepro, we provide complete 
              LASIK and refractive surgery co-management, guiding you through every stage 
              from your initial consultation to post-op care and follow-ups.
            </p>
            <Link 
              href="/services/lasik-co-management"
              className="inline-flex items-center gap-2 bg-eyepro-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-eyepro-blue/90 transition-colors"
            >
              Learn About LASIK <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-50 border-y border-red-100">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-red-900">Eye Emergency?</h3>
              <p className="text-red-700">
                Same-day care available for sudden vision changes, eye pain, or trauma.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <a 
                  key={location.id}
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {location.name}: {location.phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
