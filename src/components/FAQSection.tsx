import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { createWhatsAppLink, whatsAppMessages } from '@/lib/whatsapp';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O tratamento de podologia dói?",
      answer: "Não! Utilizamos técnicas profissionais que priorizam o seu conforto. Nossos instrumentos são apropriados e nosso toque é delicado. Muitos pacientes relatam não sentir dor alguma durante o procedimento, como você pode ver nos depoimentos."
    },
    {
      question: "É seguro para diabéticos e oncológicos?",
      answer: "Sim, somos especializados no atendimento de pacientes diabéticos e oncológicos. Utilizamos protocolos específicos, materiais descartáveis e técnicas adaptadas para cada condição. Temos experiência comprovada com esse público especial."
    },
    {
      question: "Quanto tempo demora uma sessão?",
      answer: "Uma sessão completa de podologia dura em média 45 minutos a 1 hora. O tempo pode variar dependendo da necessidade específica de cada paciente e dos tratamentos necessários."
    },
    {
      question: "Com que frequência preciso fazer podologia?",
      answer: "Para manutenção geral, recomendamos a cada 30-45 dias. Para tratamentos específicos como unha encravada ou calos, pode ser necessário um intervalo menor inicialmente. Personalizamos a frequência conforme sua necessidade."
    },
    {
      question: "Posso levar meu filho pequeno?",
      answer: "Claro! Atendemos crianças com muito carinho e paciência. Utilizamos abordagem lúdica e delicada, tornando a experiência agradável para os pequenos. Muitos pais ficam surpresos com a tranquilidade das crianças durante o atendimento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos suas principais dúvidas sobre nossos tratamentos
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem <span className="gradient-text">dúvidas</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco. Estamos sempre prontos para esclarecer qualquer questão sobre nossos tratamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={createWhatsAppLink(whatsAppMessages.footer)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button flex items-center justify-center gap-2"
              >
                Tirar Dúvida pelo WhatsApp
              </a>
              <a
                href={createWhatsAppLink(whatsAppMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button flex items-center justify-center gap-2"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;