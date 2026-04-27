export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image?: string;
  specialties?: string[];
}

export const team: TeamMember[] = [
  {
    id: 'dr-daniel-goerl',
    name: 'Dr. Daniel Goerl',
    title: 'Optometrist',
    credentials: 'O.D.',
    bio: 'Dr. Goerl is a board-certified optometrist and a trusted name in Northern Virginia eye care. With a strong background in LASIK co-management and over 25 years of experience, he combines medical precision with compassionate care.',
    image: '/images/DanielGoerl.webp',
    specialties: [
      'LASIK Co-Management',
      'Comprehensive Eye Exams',
      'Contact Lens Fittings',
      'Ocular Disease Management',
    ],
  },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return team.find(member => member.id === id);
}
