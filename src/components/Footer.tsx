import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Aulas', href: '#aulas' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Planos', href: '#planos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  GB
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Grace Barra</h3>
                  <p className="text-gray-300">Jiu-Jitsu Academy</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Mais que uma academia de Jiu-Jitsu, somos uma família global comprometida 
                com a excelência, disciplina e desenvolvimento humano através da arte suave.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">Rua das Flores, 123 - Centro, São Paulo, SP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">contato@gracebarra.com.br</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Horários & Redes Sociais */}
            <div>
              <h4 className="text-xl font-bold mb-6">Funcionamento</h4>
              <div className="space-y-3 mb-8">
                <div>
                  <div className="text-white font-semibold">Segunda a Sexta</div>
                  <div className="text-gray-300">6h às 22h</div>
                </div>
                <div>
                  <div className="text-white font-semibold">Sábado</div>
                  <div className="text-gray-300">8h às 17h</div>
                </div>
                <div>
                  <div className="text-white font-semibold">Domingo</div>
                  <div className="text-gray-300">Fechado</div>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-6">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
                <span>&copy; 2024 Grace Barra. Todos os direitos reservados.</span>
                <div className="flex space-x-4">
                  <button className="hover:text-white transition-colors">Política de Privacidade</button>
                  <button className="hover:text-white transition-colors">Termos de Uso</button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Desenvolvido com</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-sm">para a comunidade GB</span>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <div className="bg-red-900/30 rounded-2xl p-6 border border-gray-600">
              <h5 className="text-2xl font-bold mb-2 text-red-400">
                Grace Barra - Jiu-Jitsu para todos.
              </h5>
              <p className="text-gray-300">
                "Através da disciplina, do respeito e da evolução constante, transformamos vidas e construímos campeões dentro e fora dos tatames."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;