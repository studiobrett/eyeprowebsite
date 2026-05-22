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
    bio: 'Dr. Goerl is a board-certified optometrist with over 25 years of experience. After building a trusted practice in Northern Virginia, he relocated to the South Carolina coast and now serves the Georgetown and Horry County communities. He brings the same commitment to medical precision and compassionate, patient-centered care that has defined his practice from the beginning.',
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
