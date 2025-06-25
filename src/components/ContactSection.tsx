import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Flores, 123 - Centro',
      info2: 'São Paulo, SP - CEP: 01234-567',
      color: 'bg-red-600'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      info2: '(11) 3333-3333',
      color: 'bg-red-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@gracearrra.com.br',
      info2: 'info@gracebarra.com.br',
      color: 'bg-red-600'
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      info: 'Segunda a Sexta: 6h às 22h',
      info2: 'Sábado: 8h às 17h',
      color: 'bg-red-600'
    }
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Entre em Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Contato</span> e Localização
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para recebê-lo! Entre em contato conosco e agende sua primeira aula. 
              Nossa equipe está aqui para esclarecer todas as suas dúvidas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agende sua Aula Grátis</h3>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato para agendar sua primeira aula gratuita.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none"
                  >
                    <option value="">Selecione sua modalidade de interesse</option>
                    <option value="jiu-jitsu-kids">Jiu-Jitsu Kids</option>
                    <option value="jiu-jitsu-adulto">Jiu-Jitsu Adulto</option>
                    <option value="defesa-pessoal-feminina">Defesa Pessoal Feminina</option>
                    <option value="no-gi">No-Gi</option>
                    <option value="preparacao-fisica">Preparação Física</option>
                    <option value="personal">Aulas Particulares</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 outline-none resize-none"
                    placeholder="Conte-nos um pouco sobre seus objetivos e experiência..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Mensagem Enviada!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-700">{info.info}</p>
                          <p className="text-gray-600 text-sm">{info.info2}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500 p-6 rounded-2xl text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">WhatsApp Direto</h3>
                    <p className="text-green-100 text-sm">Resposta rápida e atendimento personalizado</p>
                  </div>
                  <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200">
                    Conversar
                  </button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Mapa Interativo</p>
                  <p className="text-gray-500 text-sm">Rua das Flores, 123 - Centro</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                    Ver no Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-16 text-center">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primeira Aula Sempre Grátis!</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Conheça nossa metodologia, instrutores e estrutura sem nenhum custo. 
                Venha experimentar e descobrir por que somos referência em Jiu-Jitsu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Agendar Visita
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  (11) 99999-9999
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;