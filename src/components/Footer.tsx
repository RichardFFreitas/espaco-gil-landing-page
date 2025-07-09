import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Gilcilene Pereira</h3>
            <p className="text-muted-foreground mb-4">
              Podóloga especializada em cuidados personalizados para seus pés
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">22 99852-7632</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-primary" />
                <span className="text-sm">@espaco_gil</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Consultório próprio</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horários</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span>8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>8h às 14h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Emergências: 24h</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>• Podologia completa</li>
              <li>• Unha encravada</li>
              <li>• Calos e calosidades</li>
              <li>• Fissuras (rachaduras)</li>
              <li>• Órtese de correção</li>
              <li>• Reflexologia</li>
              <li>• Atendimento especializado</li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-xl font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-sm">
              <li>• Diabéticos</li>
              <li>• Oncológicos</li>
              <li>• Idosos</li>
              <li>• Crianças</li>
              <li>• Prevenção</li>
              <li>• Tratamento de patologias</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Agende sua consulta <span className="gradient-text">agora</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Não deixe problemas nos pés afetarem sua qualidade de vida
              </p>
            </div>
            <div className="flex gap-4">
              <button className="hero-button flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              <button className="secondary-button flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Ligar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Gilcilene Pereira - Podologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;