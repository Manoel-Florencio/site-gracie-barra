import React from 'react';
import { Award, Heart, Shield, Target, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Disciplina',
      description: 'Desenvolvemos autocontrole e determinação através da prática constante.',
    },
    {
      icon: Heart,
      title: 'Respeito',
      description: 'Cultivamos respeito mútuo, humildade e cortesia dentro e fora dos tatames.',
    },
    {
      icon: Target,
      title: 'Evolução',
      description: 'Busca contínua pela melhoria pessoal e técnica em todos os aspectos da vida.',
    },
    {
      icon: Users,
      title: 'Inclusão',
      description: 'Acolhemos pessoas de todas as idades, gêneros e níveis de experiência.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">Tradição Mundial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-red-600">Grace Barra</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fundada por <strong>Carlos Gracie Jr.</strong>, a Grace Barra é mais que uma academia de Jiu-Jitsu.
              É uma família global comprometida com a excelência e o desenvolvimento humano.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">História e Tradição</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Com mais de 40 anos de história, a Grace Barra se tornou a maior organização de Jiu-Jitsu do mundo, 
                      com mais de 800 academias em todos os continentes, mantendo viva a tradição e filosofia dos Gracie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Missão e Filosofia</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nossa missão é desenvolver o potencial humano através do Jiu-Jitsu, promovendo saúde física, 
                      mental e espiritual, formando cidadãos melhores e defensores de uma sociedade mais justa.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <blockquote className="text-lg italic text-gray-800 leading-relaxed">
                    "O Jiu-Jitsu é mais que uma arte marcial, é uma ferramenta de transformação pessoal 
                    que nos ensina que através da disciplina e perseverança, podemos superar qualquer desafio."
                  </blockquote>
                  <cite className="block mt-4 text-red-600 font-semibold">
                    — Carlos Gracie Jr., Fundador da Grace Barra
                  </cite>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4no-J9wwds3lkq1pxnwkIKxlM6TTqYrEYu6yAmhqHN6jd8eYDiEU3xqTql3Nd7Dp8NMYia7zpFobRKp7qPw4Q0qhWCu8TmPNvTO6Ku3oIt8IyH_IKoAL8rofvP7xgiVwp4jT5QC-yw=s680-w680-h510-rw"
                  alt="Academia Grace Barra"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">800+</div>
                  <div className="text-sm text-gray-600">Academias</div>
                  <div className="text-sm text-gray-600">Mundialmente</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">40+</div>
                  <div className="text-sm text-gray-600">Anos de</div>
                  <div className="text-sm text-gray-600">Tradição</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;