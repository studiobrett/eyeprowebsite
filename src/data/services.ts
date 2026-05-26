export interface ServicePartner {
  region: string;
  description: string;
  url: string;
  linkText: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon?: string;
  partners?: ServicePartner[];
}

export const services: Service[] = [
  {
    id: 'comprehensive-eye-exams',
    name: 'Comprehensive Eye Exams',
    shortDescription: 'From routine adult vision checks to gentle, kid-friendly eye exams, we ensure every member of your family receives thorough care.',
    description: `Our comprehensive eye exams go beyond checking your vision. We evaluate the overall health of your eyes, screen for common eye diseases, and assess how your eyes work together.

Whether you're due for a routine checkup or experiencing vision changes, our thorough exams help detect issues early when they're most treatable.

We offer exams for patients of all ages, from pediatric eye exams for children to specialized care for seniors.`,
  },
  {
    id: 'pediatric-eye-exams',
    name: 'Pediatric Eye Exams',
    shortDescription: 'Gentle, thorough eye exams designed for children of all ages.',
    description: `Children's vision is critical to their development and learning. Our pediatric eye exams are designed to be comfortable and engaging for young patients while thoroughly evaluating their visual health.

We check for common childhood vision problems including amblyopia (lazy eye), strabismus (crossed eyes), and refractive errors that can impact learning.

The American Optometric Association recommends children have their first eye exam at 6 months, again at 3 years, and before starting school.`,
  },
  {
    id: 'ocular-disease-management',
    name: 'Management of Ocular Diseases',
    shortDescription: 'Diagnosis and treatment plans for glaucoma, diabetic eye disease, macular degeneration, and more.',
    description: `Our optometrists are experienced in diagnosing and managing a wide range of eye diseases and conditions. Using advanced diagnostic technology, we can detect problems early and develop personalized treatment plans.

Conditions we manage include:
- Glaucoma
- Diabetic retinopathy
- Macular degeneration
- Cataracts
- Dry eye syndrome
- Conjunctivitis and eye infections

Early detection is key to preserving your vision. Regular eye exams allow us to monitor changes and adjust treatment as needed.`,
  },
  {
    id: 'contact-lenses',
    name: 'Contact Lenses',
    shortDescription: 'Including hard-to-fit, bifocal, multifocal, and specialty lenses for all prescriptions.',
    description: `We offer comprehensive contact lens services, from initial fittings to ongoing care. Our team has experience fitting all types of contact lenses, including specialty lenses for challenging prescriptions.

Contact lens options include:
- Daily disposables
- Extended wear lenses
- Bifocal and multifocal contacts
- Toric lenses for astigmatism
- Rigid gas permeable (RGP) lenses
- Scleral lenses for irregular corneas

Every contact lens fitting includes training on proper insertion, removal, and care to ensure your comfort and eye health.`,
  },
  {
    id: 'lasik-co-management',
    name: 'LASIK Co-Management',
    shortDescription: 'Complete LASIK and refractive surgery co-management from consultation through post-op care.',
    description: `Considering LASIK or another vision correction procedure? At Eyepro, we provide complete co-management services, guiding you through every stage from initial consultation to post-operative care.

Dr. Daniel Goerl brings over two decades of experience to each evaluation, helping determine if you're a good candidate for LASIK, PRK, or other vision correction procedures.

Our LASIK co-management includes:
- Pre-operative evaluation and candidacy assessment
- Five post-operative checkups
- Ongoing monitoring of your results

Save up to $1600 on LASIK with our co-management program.`,
    partners: [
      {
        region: 'Virginia — Haymarket & Winchester',
        description: 'We partner with Dr. Andrew Holzman of TLC Laser Eye Centers, one of the most trusted and experienced LASIK surgeons in the Washington DC area.',
        url: 'https://www.drholzman.com',
        linkText: 'drholzman.com',
      },
      {
        region: 'South Carolina — Georgetown',
        description: 'We partner with Carolina Eyecare Physicians, a leading ophthalmology group serving communities across South Carolina.',
        url: 'https://www.carolinaeyecare.com',
        linkText: 'carolinaeyecare.com',
      },
    ],
  },
  {
    id: 'eye-emergencies',
    name: 'Eye Emergencies',
    shortDescription: 'Same-day care for sudden vision changes, eye pain, trauma, or foreign objects.',
    description: `Eye emergencies require prompt attention. If you're experiencing sudden vision changes, eye pain, trauma, or something stuck in your eye, don't wait.

Eyepro offers same-day emergency eye care at all three locations. Our optometrists are trained to treat most urgent eye issues safely and effectively, often faster and more affordably than a trip to the ER.

Common eye emergencies we treat:
- Foreign objects in the eye
- Chemical exposure
- Eye infections
- Sudden vision loss or changes
- Eye pain or severe discomfort
- Flashes of light or sudden floaters
- Eye trauma or injury

Not sure if it's an emergency? Call us first. We're here to help.`,
  },
];

export function getService(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
