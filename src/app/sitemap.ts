import type { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eyeprova.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    '',
    '/locations',
    '/services',
    '/team',
    '/insurance',
    '/contact',
    '/privacy',
    '/accessibility',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.7,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${siteUrl}/locations/${loc.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${siteUrl}/services/${svc.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...locationEntries, ...serviceEntries];
}
