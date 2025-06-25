import React from 'react';
import { Check, Star, Users, Crown, Zap } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: 'Plano Kids',
      icon: Users,
      price: 'R$ 120',
      period: '/mês',
      description: 'Ideal para crianças de 4 a 12 anos',
      popular: false,
      color: 'bg-red-600',
      features: [
        'Aulas específicas para crianças',
        '3x por semana',
        'Kimono Grace Barra incluso',
        'Material didático',
        'Participação em eventos',
        'Acompanhamento personalizado',
        'Certificados de evolução'
      ]
    },
    {
      name: 'Plano Adulto',
      icon: Star,
      price: 'R$ 180',
      period: '/mês',
      description: 'Perfeito para iniciantes e intermediários',
      popular: true,
      color: 'bg-red-600',
      features: [
        'Acesso a todas as aulas adulto',
        'Aulas ilimitadas',
        'Preparação física inclusa',
        'Defesa pessoal',
        'Acesso livre aos horários',
        'Participação em competições',
        'Desconto em seminários',
        'App de acompanhamento'
      ]
    },
    {
      name: 'Plano Família',
      icon: Crown,
      price: 'R$ 280',
      period: '/mês',
      description: 'Para toda a família treinar junta',
      popular: false,
      color: 'bg-red-600',
      features: [
        'Até 3 membros da família',
        'Acesso a todas as modalidades',
        'Aulas kids e adulto',
        'Preparação física inclusa',
        'Kimonos Grace Barra inclusos',
        'Desconto em equipamentos',
        'Aulas personalizadas',
        'Eventos familiares exclusivos'
      ]
    },
    {
      name: 'Plano Personal',
      icon: Zap,
      price: 'Consulte',
      period: '',
      description: 'Treinamento individualizado',
      popular: false,
      color: 'bg-red-600',
      features: [
        'Aulas particulares',
        'Horário flexível',
        'Professor dedicado',
        'Programa personalizado',
        'Evolução acelerada',
        'Preparação para competições',
        'Análise de vídeo',
        'Suporte nutricional'
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold">Planos Flexíveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-red-600">Planos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano que melhor se adapta aos seus objetivos e orçamento. 
              Todos incluem acesso completo à nossa metodologia Grace Barra.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-red-200 ring-4 ring-red-100' 
                      : 'border-gray-100 hover:border-red-200'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}>
                      {plan.price === 'Consulte' ? 'Consultar Preço' : 'Quero Este Plano'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sem Fidelidade</h3>
              <p className="text-gray-600">Cancele quando quiser, sem taxas ou multas.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Primeira Aula Grátis</h3>
              <p className="text-gray-600">Experimente antes de se matricular.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Benefícios Exclusivos</h3>
              <p className="text-gray-600">Descontos em equipamentos e eventos especiais.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas sobre qual plano escolher?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Fale conosco e te ajudaremos a encontrar o plano perfeito para seus objetivos e necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Fale Conosco
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Agendar Visita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;