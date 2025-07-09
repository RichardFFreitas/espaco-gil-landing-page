import { createWhatsAppLink, whatsAppMessages } from '@/lib/whatsapp';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thamara Bastos",
      time: "Há 40 semanas",
      rating: 5,
      content: "Atendimento MARAVILHOSO, meu dedo estava muito inflamado a duas semanas, me indicaram ela, fui com medo pq não sabia oq aconteceria com meu dedo, mas a Gil é maravilhosa, me deixou calma e as mãos dela é muito leve, não senti nada. Obrigada!",
      avatar: "T"
    },
    {
      name: "Noemia Melo",
      time: "Há 2 semanas",
      rating: 5,
      content: "Pra quem não conhece, Eu, recomendo a podóloga,Gil, pós tanta tentativas, graças a Deus meus pés, finalmente estão saudáveis!!! Gratidão Gil !!! Além da podologia ainda conto da terapia de reflexologia, que mexe com todo nosso corpo nos deixando mais feliz!!!",
      avatar: "N",
      badge: "NOVO"
    },
    {
      name: "Robson Rodrigues",
      time: "Há 6 semanas",
      rating: 5,
      content: "Super indico a podóloga Gil muito atenciosa super profissional",
      avatar: "R"
    },
    {
      name: "Dinalva Gomes",
      time: "Há 3 semanas",
      rating: 5,
      content: "Gostei muito do atendimento, estava com a unha infeccionada, mão leve e não senti dor! Obrigado podóloga Gil pela sua atenção e dedicação!",
      avatar: "D",
      badge: "NOVO"
    },
    {
      name: "Luciana Lima",
      time: "Há 15 semanas",
      rating: 5,
      content: "Sou paciente dela há mais de 4 anos. Sempre profissional,atendendo com cuidados que nosso pé precisa. Tenho diabetes e sempre me tratei com ela. Pode confiar. Indico e recomendo.",
      avatar: "L"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">pacientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem já experimentou nossos cuidados especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.time}</div>
                  </div>
                </div>
                {testimonial.badge && (
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full font-medium">
                    {testimonial.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-muted-foreground/30 mb-2" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a mais de <span className="gradient-text">500 pacientes</span> satisfeitos
            </h3>
            <p className="text-muted-foreground mb-6">
              Não deixe problemas nos pés afetarem sua qualidade de vida. Agende sua consulta hoje mesmo.
            </p>
            <a
              href={createWhatsAppLink(whatsAppMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button flex items-center justify-center gap-2"
            >
              Quero Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;