import React from 'react';
import { Users, Clock, Trophy, Shield, Heart, Zap } from 'lucide-react';

const ClassesSection = () => {
  const classes = [
    {
      icon: Heart,
      title: 'Jiu-Jitsu Kids',
      age: '4-12 anos',
      description: 'Desenvolvimento de coordenação, disciplina e autoconfiança através de atividades lúdicas e técnicas adaptadas.',
      benefits: ['Disciplina e Respeito', 'Coordenação Motora', 'Autoconfiança', 'Defesa Pessoal'],
      image: 'https://images.pexels.com/photos/7045649/pexels-photo-7045649.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
    {
      icon: Users,
      title: 'Jiu-Jitsu Adulto Iniciante',
      age: '16+ anos',
      description: 'Introdução completa ao Jiu-Jitsu para iniciantes, focando em fundamentos, condicionamento físico e filosofia.',
      benefits: ['Fundamentos Sólidos', 'Condicionamento', 'Defesa Pessoal', 'Redução do Stress'],
      image: 'https://images.pexels.com/photos/7045688/pexels-photo-7045688.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
    {
      icon: Trophy,
      title: 'Jiu-Jitsu Adulto Avançado',
      age: '16+ anos',
      description: 'Treinamento intensivo para praticantes experientes, com foco em competições e aperfeiçoamento técnico.',
      benefits: ['Técnicas Avançadas', 'Preparação Competitiva', 'Sparring Intenso', 'Estratégias de Luta'],
      image: 'https://images.pexels.com/photos/7045595/pexels-photo-7045595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
    {
      icon: Shield,
      title: 'Defesa Pessoal Feminina',
      age: '14+ anos',
      description: 'Programa específico para mulheres, focando em autodefesa, empoderamento e segurança pessoal.',
      benefits: ['Empoderamento', 'Autodefesa Prática', 'Confiança', 'Condicionamento'],
      image: 'https://images.pexels.com/photos/7045481/pexels-photo-7045481.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
    {
      icon: Zap,
      title: 'No-Gi (Sem Kimono)',
      age: '16+ anos',
      description: 'Modalidade sem kimono, focando em agilidade, transições rápidas e técnicas adaptadas.',
      benefits: ['Maior Agilidade', 'Transições Rápidas', 'Preparação MMA', 'Versatilidade'],
      image: 'https://images.pexels.com/photos/7045714/pexels-photo-7045714.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
    {
      icon: Clock,
      title: 'Preparação Física',
      age: '14+ anos',
      description: 'Condicionamento físico específico para Jiu-Jitsu, melhorando força, resistência e flexibilidade.',
      benefits: ['Força Funcional', 'Resistência', 'Flexibilidade', 'Prevenção de Lesões'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      color: 'bg-red-600'
    },
  ];

  return (
    <section id="aulas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Para Todos os Níveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossas <span className="text-red-600">Modalidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos programas especializados para todas as idades e níveis, 
              desde iniciantes até competidores avançados.
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => {
              const Icon = classItem.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${classItem.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{classItem.age}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {classItem.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {classItem.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {classItem.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não sabe qual modalidade escolher?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossa equipe especializada te ajudará a encontrar a modalidade perfeita 
                para seus objetivos e nível de experiência.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Fale com um Instrutor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;