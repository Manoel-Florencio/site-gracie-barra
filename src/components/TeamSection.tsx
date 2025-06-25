import React from 'react';
import { Award, Star, Users, Trophy } from 'lucide-react';

const TeamSection = () => {
  const instructors = [
    {
      name: 'Professor Carlos Silva',
      belt: 'Faixa Preta 6º Dan',
      experience: '25 anos',
      image: 'https://images.pexels.com/photos/6192327/pexels-photo-6192327.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Formado diretamente por Carlos Gracie Jr., especialista em competições e desenvolvimento de atletas.',
      certifications: ['CBJJ', 'IBJJF', 'Grace Barra'],
      achievements: ['Campeão Mundial Master', '3x Campeão Pan-Americano']
    },
    {
      name: 'Professora Maria Santos',
      belt: 'Faixa Preta 3º Dan',
      experience: '15 anos',
      image: 'https://images.pexels.com/photos/6192288/pexels-photo-6192288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Especialista em Jiu-Jitsu feminino e defesa pessoal, pioneira no desenvolvimento de mulheres na arte.',
      certifications: ['CBJJ', 'Grace Barra', 'Women\'s Self Defense'],
      achievements: ['Campeã Brasileira', 'Instrutora Certificada GB']
    },
    {
      name: 'Professor João Oliveira',
      belt: 'Faixa Preta 4º Dan',
      experience: '18 anos',
      image: 'https://images.pexels.com/photos/6192283/pexels-photo-6192283.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Especialista em preparação física e condicionamento para atletas de alto rendimento.',
      certifications: ['CBJJ', 'CREF', 'Grace Barra'],
      achievements: ['Preparador Físico Seleção Brasileira', 'Mestrado em Educação Física']
    },
    {
      name: 'Professora Ana Costa',
      belt: 'Faixa Preta 2º Dan',
      experience: '12 anos',
      image: 'https://images.pexels.com/photos/6192304/pexels-photo-6192304.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Dedicada ao ensino infantil, desenvolvendo metodologias específicas para crianças.',
      certifications: ['CBJJ', 'Grace Barra', 'Psicopedagogia'],
      achievements: ['Especialista em Jiu-Jitsu Kids', 'Pós-graduação em Psicopedagogia']
    },
    {
      name: 'Professor Lucas Ferreira',
      belt: 'Faixa Preta 3º Dan',
      experience: '14 anos',
      image: 'https://images.pexels.com/photos/6192285/pexels-photo-6192285.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Especialista em No-Gi e grappling, com extensa experiência em competições internacionais.',
      certifications: ['CBJJ', 'ADCC', 'Grace Barra'],
      achievements: ['Medalhista ADCC', 'Campeão No-Gi World']
    },
    {
      name: 'Professora Sofia Lima',
      belt: 'Faixa Preta 2º Dan',
      experience: '10 anos',
      image: 'https://images.pexels.com/photos/6192295/pexels-photo-6192295.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Focada na defesa pessoal feminina e empoderamento através das artes marciais.',
      certifications: ['CBJJ', 'Grace Barra', 'Krav Maga'],
      achievements: ['Instrutora Defesa Pessoal', 'Psicóloga Esportiva']
    },
  ];

  const getBeltColor = (belt: string) => {
    if (belt.includes('6º')) return 'bg-red-600 text-white';
    if (belt.includes('4º') || belt.includes('3º')) return 'bg-red-500 text-white';
    if (belt.includes('2º')) return 'bg-red-400 text-white';
    return 'bg-gray-600 text-white';
  };

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Instrutores Qualificados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-red-600">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Instrutores certificados e experientes, dedicados ao seu desenvolvimento 
              e evolução no Jiu-Jitsu.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div className="text-gray-600">Faixas Pretas</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Títulos</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Alunos Formados</div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Belt Badge */}
                  <div className={`absolute top-4 right-4 ${getBeltColor(instructor.belt)} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {instructor.belt.split(' ')[1]} {instructor.belt.split(' ')[2]}
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{instructor.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {instructor.name}
                  </h3>
                  
                  <div className="text-gray-600 mb-4">
                    <div className="font-semibold text-red-600">{instructor.belt}</div>
                    <div className="text-sm">{instructor.experience} de experiência</div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {instructor.bio}
                  </p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Certificações:</div>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Conquistas:</div>
                    <div className="space-y-1">
                      {instructor.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 text-red-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conheça Pessoalmente Nossa Equipe
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Venha conhecer nossos instrutores e descubra como eles podem te ajudar 
                a alcançar seus objetivos no Jiu-Jitsu.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Agende uma Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;