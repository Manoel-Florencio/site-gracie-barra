import React from 'react';
import { Star, Quote, Trophy, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      belt: 'Faixa Azul',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'A Grace Barra mudou minha vida completamente. Além de aprender autodefesa, ganhei confiança, disciplina e uma família. Os professores são excepcionais e sempre dispostos a ajudar.',
      timeTraining: '2 anos',
      achievement: 'Campeã Regional'
    },
    {
      name: 'Carlos Mendes',
      belt: 'Faixa Roxa',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'Como pai, procurava uma atividade para meu filho que ensinasse valores. Na Grace Barra encontramos muito mais: uma filosofia de vida. Hoje praticamos juntos e é nosso momento especial.',
      timeTraining: '4 anos',
      achievement: 'Família GB'
    },
    {
      name: 'Marina Costa',
      belt: 'Faixa Branca',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'Comecei há 6 meses sem nenhuma experiência em artes marciais. O acolhimento foi incrível! Me sinto mais forte, confiante e fiz amizades verdadeiras. Recomendo para todas as mulheres.',
      timeTraining: '6 meses',
      achievement: 'Primeira Competição'
    },
    {
      name: 'Pedro Oliveira',
      belt: 'Faixa Azul',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'O Jiu-Jitsu me ensinou que não importa o tamanho do obstáculo, sempre há uma técnica para superá-lo. A Grace Barra não apenas me ensinou a lutar, mas me ensinou a viver melhor.',
      timeTraining: '3 anos',
      achievement: '2x Medalhista Estadual'
    },
    {
      name: 'Julia Santos',
      belt: 'Faixa Branca',
      image: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'Minha filha de 8 anos treina há 1 ano e a transformação é impressionante. Mais disciplinada, respeitosa e confiante. A Grace Barra faz um trabalho excepcional com as crianças.',
      timeTraining: '1 ano (filha)',
      achievement: 'Mãe Orgulhosa'
    },
    {
      name: 'Ricardo Lima',
      belt: 'Faixa Roxa',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      quote: 'Depois dos 40, pensei que era tarde para começar. Que engano! Na Grace Barra descobri que nunca é tarde para evoluir. Melhorei minha saúde física e mental significativamente.',
      timeTraining: '5 anos',
      achievement: 'Master Champion'
    }
  ];

  const getBeltColor = (belt: string) => {
    if (belt.includes('Branca')) return 'bg-gray-100 text-gray-800';
    if (belt.includes('Azul')) return 'bg-red-100 text-red-800';
    if (belt.includes('Roxa')) return 'bg-red-200 text-red-800';
    if (belt.includes('Marrom')) return 'bg-red-300 text-red-800';
    if (belt.includes('Preta')) return 'bg-black text-white';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Histórias Reais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Depoimentos</span> dos Nossos Alunos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça as histórias de transformação e conquistas dos nossos alunos. 
              Cada depoimento é uma prova do poder transformador do Jiu-Jitsu.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Alunos Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">80%</div>
              <div className="text-gray-600">Permanência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">4.9</div>
              <div className="text-gray-600">Nota Média</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-8 hover:-translate-y-2 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBeltColor(testimonial.belt)}`}>
                        {testimonial.belt}
                      </span>
                      <span className="text-xs text-gray-500">{testimonial.timeTraining}</span>
                    </div>
                  </div>
                </div>

                {/* Achievement */}
                <div className="mt-4 flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-700">{testimonial.achievement}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Você também pode fazer parte desta família!
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Venha conhecer nossa academia e descobrir como o Jiu-Jitsu pode transformar sua vida. 
                Agende sua primeira aula gratuita e comece sua jornada de evolução.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Agendar Aula Grátis
                </button>
                <button className="border-2 border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Conhecer Academia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;