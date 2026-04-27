import type { Location } from '@/data/locations';
import type { TeamMember } from '@/data/team';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eyeprova.com';

function to24Hour(time: string): string | null {
  const m = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = m[2];
  const ampm = m[3].toUpperCase();
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${min}`;
}

function parseHoursRange(s: string): { opens: string; closes: string } | null {
  if (!s || s.toLowerCase().includes('closed')) return null;
  const parts = s.split(/\s*[-–]\s*/);
  if (parts.length !== 2) return null;
  const opens = to24Hour(parts[0]);
  const closes = to24Hour(parts[1]);
  if (!opens || !closes) return null;
  return { opens, closes };
}

function openingHoursSpec(hours: Location['hours']) {
  return Object.entries(hours)
    .map(([day, range]) => {
      const parsed = parseHoursRange(range);
      if (!parsed) return null;
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: parsed.opens,
        closes: parsed.closes,
      };
    })
    .filter(Boolean);
}

export function locationSchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Optician'],
    '@id': `${SITE_URL}/locations/${location.id}#business`,
    name: `Eyepro - ${location.name}`,
    url: `${SITE_URL}/locations/${location.id}`,
    telephone: location.phone,
    medicalSpecialty: 'Optometric',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      postalCode: location.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: openingHoursSpec(location.hours),
    ...(location.googleMapsUrl && { hasMap: location.googleMapsUrl }),
    parentOrganization: {
      '@type': 'Organization',
      name: 'Eyepro',
      url: SITE_URL,
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'Eyepro',
    url: SITE_URL,
    logo: `${SITE_URL}/images/eyepro-logo.webp`,
  };
}

export function physicianSchema(member: TeamMember) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/team#${member.id}`,
    name: `${member.name}, ${member.credentials}`,
    jobTitle: member.title,
    medicalSpecialty: 'Optometric',
    description: member.bio,
    ...(member.image && { image: `${SITE_URL}${member.image}` }),
    worksFor: {
      '@type': 'Organization',
      name: 'Eyepro',
      url: SITE_URL,
    },
  };
}
