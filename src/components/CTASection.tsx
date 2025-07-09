import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { createWhatsAppLink, whatsAppMessages } from '@/lib/whatsapp';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não deixe os problemas nos seus <span className="gradient-text">pés</span> esperarem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quanto mais cedo você cuidar, mais rápido terá alívio e conforto. Agende sua consulta agora mesmo.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Agende sua consulta <span className="gradient-text">hoje</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Atendimento personalizado com podóloga especializada. Cuidamos de você com carinho e profissionalismo.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Ligue ou mande WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Resposta rápida e agendamento fácil</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Horários flexíveis</div>
                    <div className="text-sm text-muted-foreground">Segunda a sábado com horários disponíveis</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Consultório próprio</div>
                    <div className="text-sm text-muted-foreground">Ambiente seguro e higienizado</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">⚡ Atendimento Urgente</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Para casos de dor intensa ou inflamação, priorizamos seu atendimento
                </p>
                <div className="text-2xl font-bold text-primary">22 99852-7632</div>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href={createWhatsAppLink(whatsAppMessages.cta)} target="_blank" rel="noopener noreferrer" className="hero-button w-full flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
                <a href="tel:22998527632" className="secondary-button w-full flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação garantida</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">4+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;