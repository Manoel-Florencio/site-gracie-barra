import React from 'react';
import { ArrowRight, Play, Shield, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7045636/pexels-photo-7045636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-red-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-sm font-medium">Maior Equipe de Jiu-Jitsu do Mundo</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Disciplina.</span>
            <br />
            <span className="text-red-500">Respeito.</span>
            <br />
            <span className="text-white">Evolução.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Junte-se à maior equipe de Jiu-Jitsu do mundo: <strong className="text-white">Grace Barra</strong>.
            <br />
            Transforme sua vida através da arte suave.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-red-400" />
              <span>+800 Academias Mundialmente</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-400" />
              <span>40+ Anos de Tradição</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-white" />
              <span>Para Todas as Idades</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('#contato')}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Agende uma Aula Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('#sobre')}
              className="group border-2 border-white/30 hover:border-blue-400 text-white hover:bg-blue-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Conheça a Academia
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;