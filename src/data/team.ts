export interface TeamMember {
  id: string;
  name: string;
  title: string;
  location?: string;
  locationHref?: string;
  credentials?: string;
  bio: string;
  image?: string;
  specialties?: string[];
}

export const team: TeamMember[] = [
  {
    id: 'dr-daniel-goerl',
    name: 'Dr. Daniel Goerl',
    title: 'Owner & Chief Optometrist',
    location: 'Eyepro Georgetown',
    locationHref: '/locations/georgetown',
    credentials: 'O.D.',
    bio: `Dr. Daniel Goerl is a board-certified optometrist licensed in both Virginia and South Carolina with more than 30 years of experience in medical eye care. After building a trusted practice in Northern Virginia, he relocated to the South Carolina coast, where he now serves the Georgetown and Horry County communities with the same commitment to clinical excellence and compassionate, patient-centered care that has defined his career from the beginning.

Originally from Nebraska, Dr. Goerl earned his undergraduate degree from the University of Nebraska at Kearney and his Doctor of Optometry degree from the University of Houston. Throughout his career, he has worked closely alongside ophthalmology and refractive surgery specialists, gaining extensive experience in advanced medical and surgical eye care.

From 1998 to 2010, Dr. Goerl worked with Whitten Laser Eye and TLC Laser Eye, helping manage thousands of patients through refractive surgery and the transition to greater freedom from glasses and contact lenses. In 2011, he set out to begin the project of building his own business in Haymarket, Virginia, where he and his wife raised their family. Since then, Dr. Goerl and the Eyepro team have been faithfully serving the communities around them, seeing everyone, young and elder, with insurance and without, promising clearer vision that all may live more fully.`,
    image: '/images/DanielGoerl.webp',
    specialties: [
      'LASIK Co-Management',
      'Comprehensive Eye Exams',
      'Contact Lens Fittings',
      'Ocular Disease Management',
    ],
  },
  {
    id: 'tyler-goerl',
    name: 'Tyler Goerl',
    title: 'Director of Operations',
    location: 'All Locations',
    bio: `Tyler Goerl brings both personal investment and professional leadership to Eyepro's mission. As the son of Dr. Goerl and the practice's Director of Operations, he grew up watching Eyepro develop into a practice centered on people, relationships, and quality care. Today, he helps carry that vision forward across every aspect of the organization.

Tyler graduated from James Madison University with a degree in Psychology. His background in leadership, education, and community outreach continues to shape his approach to patient experience, team development, and practice culture. Before joining Eyepro, he served as a missionary with Christ in the City in Colorado, working closely with the chronically homeless community. He also spent time teaching and coaching at Saint John Paul the Great Catholic High School in Northern Virginia.

Since joining Eyepro in 2021, Tyler has helped lead the practice's expansion across Virginia and South Carolina. He oversees operations, insurance systems, staff development, and the daily coordination that allows each office to provide a smooth and patient-focused experience. His goal is to build teams that reflect the same warmth, attentiveness, and care patients receive from their doctors.`,
    image: '/images/tyler-goerl.jpeg',
  },
  {
    id: 'dr-kayla-norton',
    name: 'Dr. Kayla Norton',
    title: 'Optometrist',
    location: 'Eyepro Haymarket',
    locationHref: '/locations/haymarket',
    credentials: 'O.D.',
    bio: `Dr. Kayla Norton earned her Bachelor's degree in Biology from Shippensburg University and her Doctor of Optometry degree from the Pennsylvania College of Optometry at Salus University. As a primary care medical optometrist at Eyepro Haymarket, she provides comprehensive eye exams, contact lens fittings, refractive surgery co-management, and ocular health evaluations for patients of all ages.

Dr. Norton believes that excellent eye care begins with strong patient relationships. She takes time to listen carefully, answer questions thoroughly, and ensure each patient feels comfortable and cared for throughout their visit. Her approach combines attentive medical care with a genuine commitment to helping patients maintain lifelong eye health. Outside the office, she enjoys reading, playing tennis, spending time with family, and volunteering at her church.`,
    image: '/images/KaylaNortonOD.jpeg',
    specialties: [
      'Comprehensive Eye Exams',
      'Contact Lens Fittings',
      'Refractive Surgery Co-Management',
      'Ocular Health Evaluations',
    ],
  },
  {
    id: 'dr-linda-hammer',
    name: 'Dr. Linda Hammer',
    title: 'Optometrist',
    location: 'Eyepro Winchester',
    locationHref: '/locations/winchester',
    credentials: 'O.D.',
    bio: `Dr. Linda Hammer brings more than 30 years of optometric experience to her patients at Eyepro Winchester, along with a compassionate and welcoming approach that immediately puts people at ease. A graduate of Marshall B. Ketchum University and licensed in Virginia, she has practiced throughout Southern California and the greater Washington, DC area, giving her a wide range of clinical experience caring for patients from many different backgrounds.

For Dr. Hammer, excellent eye care is about more than providing the right prescription. She believes every patient deserves to feel heard, respected, and genuinely cared for at every visit. Her calm presence, attentiveness, and personal approach have made her a trusted provider to generations of patients over the course of her career. As one former colleague described her, "She has an exceptional way of making patients feel right at home, as if they are being cared for by a family member."`,
    image: '/images/LindaHammerOD.jpeg',
    specialties: [
      'Comprehensive Eye Exams',
      'Contact Lens Fittings',
      'Ocular Disease Management',
      'Primary Care Optometry',
    ],
  },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return team.find(member => member.id === id);
}
