import { Scissors, Droplets, Wrench, Heart, Shield, Activity } from 'lucide-react';
import { createWhatsAppLink, whatsAppMessages } from '@/lib/whatsapp';

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Podologia Completa",
      description: "Cuidados completos para seus pés com técnicas profissionais",
      features: ["Corte de unhas", "Remoção de calos", "Limpeza profunda", "Hidratação"]
    },
    {
      icon: Droplets,
      title: "Unha Encravada",
      description: "Tratamento especializado para unhas encravadas",
      features: ["Remoção segura", "Alívio imediato", "Prevenção", "Cuidados pós-procedimento"]
    },
    {
      icon: Wrench,
      title: "Calos e Calosidades",
      description: "Remoção profissional de calos e calosidades",
      features: ["Técnicas modernas", "Sem dor", "Resultados duradouros", "Prevenção"]
    },
    {
      icon: Heart,
      title: "Fissuras (Rachaduras)",
      description: "Tratamento para fissuras e rachaduras nos pés",
      features: ["Cicatrização rápida", "Hidratação profunda", "Prevenção", "Cuidados especiais"]
    },
    {
      icon: Shield,
      title: "Órtese de Correção",
      description: "Dispositivos para correção de deformidades",
      features: ["Personalizado", "Confortável", "Eficaz", "Duradouro"]
    },
    {
      icon: Activity,
      title: "Reflexologia",
      description: "Terapia que atua em todo o corpo através dos pés",
      features: ["Relaxamento", "Bem-estar", "Equilíbrio", "Terapia holística"]
    }
  ];

  const specialCare = [
    {
      title: "Diabéticos",
      description: "Cuidados especializados para pacientes diabéticos",
      icon: "🩺"
    },
    {
      title: "Oncológicos",
      description: "Tratamento adaptado para pacientes oncológicos",
      icon: "💙"
    },
    {
      title: "Idosos",
      description: "Cuidados específicos para a terceira idade",
      icon: "👴"
    },
    {
      title: "Crianças",
      description: "Atendimento carinhoso para os pequenos",
      icon: "👶"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span> Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tratamentos completos para todas as necessidades dos seus pés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Atendimento <span className="gradient-text">Especializado</span> para
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialCare.map((care, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-4xl mb-3">{care.icon}</div>
                  <h4 className="font-semibold mb-2">{care.title}</h4>
                  <p className="text-sm text-muted-foreground">{care.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de um tratamento específico?
          </h3>
          <p className="text-muted-foreground mb-6">
            Cada paciente é único. Entre em contato para descobrir qual tratamento é ideal para você.
          </p>
          <a href={createWhatsAppLink(whatsAppMessages.services)} target="_blank" rel="noopener noreferrer" className="hero-button">
            Consultar Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;