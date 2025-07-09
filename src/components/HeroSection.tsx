import { Star, Phone, Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
              <button className="hero-button flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Agende Sua Consulta
              </button>
              <button className="secondary-button">
                Conheça Nossos Serviços
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Atendimento em consultório próprio</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="stats-card">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="stats-card">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfação garantida</div>
                </div>
                <div className="stats-card">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Tipos de tratamentos</div>
                </div>
                <div className="stats-card">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Atendimentos realizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;