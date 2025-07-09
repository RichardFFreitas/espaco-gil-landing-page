import { Heart, Shield, Users, Award, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Cuidado Especializado",
      description: "Tratamento focado em alívio, conforto e bem-estar, especialmente para diabéticos e oncológicos.",
      stats: "90% dos pacientes relatam alívio imediato"
    },
    {
      icon: Shield,
      title: "Segurança e Higiene",
      description: "Protocolos rigorosos de esterilização e materiais descartáveis para sua total segurança.",
      stats: "100% dos equipamentos esterilizados"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada paciente recebe cuidado individual, desde crianças até idosos, com atenção às necessidades específicas.",
      stats: "Atendimento adaptado para cada idade"
    },
    {
      icon: Award,
      title: "Profissional Qualificada",
      description: "Podóloga formada com anos de experiência em tratamentos de patologias dos pés.",
      stats: "4+ anos de experiência comprovada"
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Tratamentos eficazes que proporcionam alívio e melhora já nas primeiras sessões.",
      stats: "Resultados visíveis em 1-2 sessões"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nossos <span className="gradient-text">serviços</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais do que estética, oferecemos cuidado profissional que transforma a saúde dos seus pés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              <div className="text-sm font-medium text-secondary">{benefit.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;