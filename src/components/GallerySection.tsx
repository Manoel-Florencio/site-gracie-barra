import React, { useState } from 'react';
import { Play, ExternalLink, Instagram, Camera, Video } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/7045636/pexels-photo-7045636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Treino Adulto',
      description: 'Sessão de treino focada em técnicas fundamentais'
    },
    {
      type: 'video',
      category: 'competition',
      src: 'https://images.pexels.com/photos/7045595/pexels-photo-7045595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Competição Regional',
      description: 'Nossos atletas em ação no campeonato estadual'
    },
    {
      type: 'image',
      category: 'kids',
      src: 'https://images.pexels.com/photos/7045649/pexels-photo-7045649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Jiu-Jitsu Kids',
      description: 'Crianças aprendendo disciplina e técnica'
    },
    {
      type: 'image',
      category: 'graduation',
      src: 'https://images.pexels.com/photos/7045522/pexels-photo-7045522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Cerimônia de Graduação',
      description: 'Momento especial de conquista dos alunos'
    },
    {
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/7045688/pexels-photo-7045688.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Treino Feminino',
      description: 'Aula de defesa pessoal feminina'
    },
    {
      type: 'video',
      category: 'seminar',
      src: 'https://images.pexels.com/photos/7045714/pexels-photo-7045714.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Seminário Especial',
      description: 'Workshop com faixa preta visitante'
    },
    {
      type: 'image',
      category: 'kids',
      src: 'https://images.pexels.com/photos/7045481/pexels-photo-7045481.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Diversão e Aprendizado',
      description: 'Atividades lúdicas para desenvolvimento infantil'
    },
    {
      type: 'image',
      category: 'competition',
      src: 'https://images.pexels.com/photos/6740735/pexels-photo-6740735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Pódio da Vitória',
      description: 'Alunos conquistando medalhas'
    },
    {
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/7045590/pexels-photo-7045590.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Treino No-Gi',
      description: 'Modalidade sem kimono em ação'
    }
  ];

  const categories = [
    { key: 'all', label: 'Todos', icon: Camera },
    { key: 'training', label: 'Treinos', icon: Play },
    { key: 'kids', label: 'Kids', icon: Camera },
    { key: 'competition', label: 'Competições', icon: Video },
    { key: 'graduation', label: 'Graduações', icon: Camera },
    { key: 'seminar', label: 'Seminários', icon: Video },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-semibold">Momentos Especiais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-red-600">Galeria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompanhe os momentos mais marcantes da nossa academia: treinos, competições, 
              graduações e a evolução dos nossos alunos.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    {item.type === 'video' ? (
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Play className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="bg-red-500 text-white p-2 rounded-full">
                        <Camera className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-colors duration-200">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media CTA */}
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900">Siga no Instagram</h3>
                  <p className="text-gray-600">@gracebarraacademia</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Acompanhe nosso dia a dia, veja mais fotos e vídeos dos treinos, 
                competições e eventos especiais da nossa academia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <span>Seguir no Instagram</span>
                </button>
                
                <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Ver Mais Fotos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;