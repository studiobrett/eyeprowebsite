'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { locations } from '@/data/locations';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { 
    name: 'Locations', 
    href: '/locations',
    children: locations.map(loc => ({ name: `${loc.name}, ${loc.stateAbbr}`, href: `/locations/${loc.id}` }))
  },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top bar with phone numbers */}
      <div className="bg-eyepro-blue text-white text-sm">
        <div className="container-wide py-2">
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {locations.map((location) => (
              <a 
                key={location.id}
                href={`tel:${location.phone}`}
                className="inline-flex items-center gap-1 hover:text-eyepro-sky transition-colors"
              >
                <Phone className="w-3 h-3" />
                {location.name}: {location.phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/eyepro-logo.webp"
              alt="Eyepro"
              width={986}
              height={600}
              className="h-14 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-eyepro-blue font-medium transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white border rounded-card shadow-card-hover py-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-eyepro-blue transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-slate-700 hover:text-eyepro-blue font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-slate-600 hover:text-eyepro-blue transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
