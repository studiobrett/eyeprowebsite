export interface TeamMember {
  id: string;
  name: string;
  title: string;
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
    credentials: 'O.D.',
    bio: 'Dr. Goerl is a board-certified optometrist with over 25 years of experience. After building a trusted practice in Northern Virginia, he relocated to the South Carolina coast and now serves the Georgetown and Horry County communities. He brings the same commitment to medical precision and compassionate, patient-centered care that has defined his practice from the beginning.',
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
    bio: `Tyler Goerl brings both a personal and professional commitment to Eyepro's mission. As Dr. Goerl's son and the practice's Director of Operations, he grew up watching his father build a practice around people rather than products — and made it his life's work to help that vision grow.

A graduate of James Madison University with a degree in Psychology, Tyler's background in leadership, community outreach, and human development shapes the way he thinks about patient experience and team culture. Before joining Eyepro, he served as a missionary with Christ in the City in Colorado, providing outreach to the chronically homeless, and spent time teaching and coaching at Saint John Paul the Great Catholic High School in Northern Virginia.

Since joining Eyepro in 2021, Tyler has led the expansion of the practice to multiple locations across Virginia and South Carolina, with a focus on building teams that reflect the same warmth and care patients experience in the exam room. He oversees operations, insurance processes, staff development, and the day-to-day systems that keep each location running so the doctors can focus entirely on patient care.

For Tyler, Eyepro isn't just a family business — it's a continuation of a shared calling to serve communities with integrity, accessibility, and genuine human care.`,
    image: '/images/tyler-goerl.jpeg',
  },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return team.find(member => member.id === id);
}
