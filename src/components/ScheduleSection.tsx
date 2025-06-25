import React, { useState } from 'react';
import { Clock, Download, Calendar, Users } from 'lucide-react';

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState('segunda');

  const schedule = {
    segunda: [
      { time: '06:00', class: 'Preparação Física', level: 'Todos', instructor: 'Prof. João' },
      { time: '07:00', class: 'Jiu-Jitsu Adulto', level: 'Iniciante', instructor: 'Prof. Maria' },
      { time: '18:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '19:00', class: 'Jiu-Jitsu Kids', level: '9-12 anos', instructor: 'Prof. Ana' },
      { time: '20:00', class: 'Jiu-Jitsu Adulto', level: 'Todos', instructor: 'Prof. Carlos' },
    ],
    terca: [
      { time: '06:00', class: 'No-Gi', level: 'Intermediário', instructor: 'Prof. Lucas' },
      { time: '07:00', class: 'Defesa Pessoal Feminina', level: 'Todos', instructor: 'Profa. Sofia' },
      { time: '18:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '19:00', class: 'Jiu-Jitsu Adulto', level: 'Avançado', instructor: 'Prof. Marcos' },
      { time: '20:00', class: 'Preparação Física', level: 'Todos', instructor: 'Prof. João' },
    ],
    quarta: [
      { time: '06:00', class: 'Jiu-Jitsu Adulto', level: 'Iniciante', instructor: 'Prof. Maria' },
      { time: '07:00', class: 'Preparação Física', level: 'Todos', instructor: 'Prof. João' },
      { time: '18:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '19:00', class: 'Jiu-Jitsu Kids', level: '9-12 anos', instructor: 'Prof. Ana' },
      { time: '20:00', class: 'Jiu-Jitsu Adulto', level: 'Todos', instructor: 'Prof. Carlos' },
    ],
    quinta: [
      { time: '06:00', class: 'No-Gi', level: 'Todos', instructor: 'Prof. Lucas' },
      { time: '07:00', class: 'Defesa Pessoal Feminina', level: 'Todos', instructor: 'Profa. Sofia' },
      { time: '18:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '19:00', class: 'Jiu-Jitsu Adulto', level: 'Avançado', instructor: 'Prof. Marcos' },
      { time: '20:00', class: 'Jiu-Jitsu Adulto', level: 'Todos', instructor: 'Prof. Carlos' },
    ],
    sexta: [
      { time: '06:00', class: 'Preparação Física', level: 'Todos', instructor: 'Prof. João' },
      { time: '07:00', class: 'Jiu-Jitsu Adulto', level: 'Iniciante', instructor: 'Prof. Maria' },
      { time: '18:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '19:00', class: 'No-Gi', level: 'Intermediário', instructor: 'Prof. Lucas' },
      { time: '20:00', class: 'Jiu-Jitsu Adulto', level: 'Todos', instructor: 'Prof. Carlos' },
    ],
    sabado: [
      { time: '08:00', class: 'Jiu-Jitsu Kids', level: '4-8 anos', instructor: 'Prof. Pedro' },
      { time: '09:00', class: 'Jiu-Jitsu Kids', level: '9-12 anos', instructor: 'Prof. Ana' },
      { time: '10:00', class: 'Defesa Pessoal Feminina', level: 'Todos', instructor: 'Profa. Sofia' },
      { time: '11:00', class: 'Jiu-Jitsu Adulto', level: 'Todos', instructor: 'Prof. Carlos' },
      { time: '14:00', class: 'Sparring Livre', level: 'Avançado', instructor: 'Professores' },
    ],
  };

  const days = [
    { key: 'segunda', label: 'Segunda' },
    { key: 'terca', label: 'Terça' },
    { key: 'quarta', label: 'Quarta' },
    { key: 'quinta', label: 'Quinta' },
    { key: 'sexta', label: 'Sexta' },
    { key: 'sabado', label: 'Sábado' },
  ];

  const getLevelColor = (level: string) => {
    if (level.includes('Kids') || level.includes('anos')) return 'bg-red-100 text-red-800';
    if (level === 'Iniciante') return 'bg-gray-100 text-gray-800';
    if (level === 'Intermediário') return 'bg-gray-200 text-gray-800';
    if (level === 'Avançado') return 'bg-gray-300 text-gray-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="horarios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Horários Flexíveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Horários</span> das Aulas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Temos horários que se adaptam à sua rotina, desde cedo pela manhã até à noite.
              Encontre o horário perfeito para sua prática.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Day Selector */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {days.map((day) => (
                  <button
                    key={day.key}
                    onClick={() => setSelectedDay(day.key)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedDay === day.key
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Table */}
            <div className="p-6">
              <div className="space-y-4">
                {schedule[selectedDay as keyof typeof schedule].map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-center justify-between p-6 bg-gray-50 hover:bg-red-50 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {item.time}
                        </div>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.class}</h3>
                        <p className="text-gray-600">{item.instructor}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5" />
                  <span>Agende sua Aula</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  <Download className="w-5 h-5" />
                  <span>Baixar Horários PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Turmas Pequenas</h3>
              <p className="text-gray-600">Máximo 20 alunos por aula para garantir atenção personalizada.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Horários Flexíveis</h3>
              <p className="text-gray-600">Das 6h às 21h para se adaptar à sua rotina diária.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aulas Extras</h3>
              <p className="text-gray-600">Workshops e seminários especiais aos finais de semana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;