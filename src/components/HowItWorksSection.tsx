import { Phone, Calendar, Stethoscope, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "Entre em Contato",
      description: "Ligue ou mande mensagem pelo WhatsApp para agendar sua consulta. Atendimento rápido e personalizado.",
      details: "Resposta em até 30 minutos durante horário comercial"
    },
    {
      icon: Calendar,
      title: "Agende sua Consulta",
      description: "Escolha o melhor horário para você. Flexibilidade de horários para atender sua rotina.",
      details: "Horários disponíveis de segunda a sábado"
    },
    {
      icon: Stethoscope,
      title: "Avaliação Completa",
      description: "Realizamos uma avaliação detalhada dos seus pés para identificar necessidades específicas.",
      details: "Avaliação personalizada para cada tipo de pé"
    },
    {
      icon: CheckCircle,
      title: "Tratamento Eficaz",
      description: "Aplicamos os tratamentos mais adequados com técnicas modernas e cuidado profissional.",
      details: "Resultados visíveis já na primeira sessão"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span> nosso atendimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e eficiente para cuidar da saúde dos seus pés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="feature-card text-center">
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="text-sm font-medium text-primary">{step.details}</div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ter <span className="gradient-text">pés saudáveis</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              O processo é simples e rápido. Em poucos minutos você já terá sua consulta agendada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hero-button">
                Agendar por WhatsApp
              </button>
              <button className="secondary-button">
                Conhecer Todos os Serviços
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;