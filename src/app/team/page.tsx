import Image from 'next/image';
import { team } from '@/data/team';

export const metadata = {
  title: 'Our Team | Eyepro',
  description: 'Meet the experienced optometrists at Eyepro, providing quality eye care in Virginia and South Carolina.',
};

export default function TeamPage() {
  return (
    <div className="py-12">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet the experienced professionals dedicated to your eye health.
          </p>
        </div>

        <div className="space-y-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white border rounded-xl p-8 shadow-sm"
            >
              <div className="md:flex gap-8">
                {member.image && (
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-48 h-48 bg-slate-200 rounded-xl overflow-hidden relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="192px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {member.name}, {member.credentials}
                  </h2>
                  <p className="text-eyepro-blue font-medium mb-4">{member.title}</p>
                  <p className="text-slate-600 mb-6">{member.bio}</p>
                  
                  {member.specialties && member.specialties.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2">Specialties</h3>
                      <ul className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <li 
                            key={specialty}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
