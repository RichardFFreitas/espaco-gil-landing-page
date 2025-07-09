import { Star, Phone, Clock, MapPin } from 'lucide-react';
import { createWhatsAppLink, whatsAppMessages } from '@/lib/whatsapp';

const HeroSection = () => {
  return (
    <section className="hero-section p-4">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
              Seus <span className="gradient-text">Pés</span> Merecem
              <br />
              Cuidado <span className="gradient-text">Profissional</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Podologia especializada que vai além da estética. Trago alívio, conforto e bem-estar para seus pés com tratamentos personalizados para cada necessidade.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">+50 clientes satisfeitos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Atendimento personalizado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={createWhatsAppLink(whatsAppMessages.hero)} target="_blank" rel="noopener noreferrer" className="hero-button flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Agende Sua Consulta
              </a>
              <a href="#services" className='secondary-button flex items-center gap-2'>
                Conheça Nossos Serviços
              </a>

            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Atendimento em consultório próprio</span>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white/30 dark:bg-black/30 rounded-2xl p-6 backdrop-blur-md shadow-xl">

              <img
                src="/imagem-hero.jpg"
                alt="Profissional de podologia atendendo paciente"
                className="rounded-2xl w-96 md:w-60 object-cover shadow-lg"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  { number: "4+", label: "Anos de experiência", color: "text-primary" },
                  { number: "100%", label: "Satisfação garantida", color: "text-secondary" },
                  { number: "15+", label: "Tipos de tratamentos", color: "text-primary" },
                  { number: "500+", label: "Atendimentos realizados", color: "text-secondary" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 bg-white/60 dark:bg-black/40 rounded-xl text-center shadow"
                  >
                    <div className={`text-3xl md:text-4xl font-extrabold ${item.color}`}>{item.number}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;