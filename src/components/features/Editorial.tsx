import { Leaf } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const features = [
  {
    title: 'Biodegradable Filters',
    description: 'Our revolutionary filters break down naturally within 90 days, eliminating landfill waste while maintaining peak performance.',
    bullets: [
      'Made from plant-based materials',
      'Compostable at end-of-life',
      'Maintains 99.97% filtration efficiency',
      'Chemical-free production process',
    ],
    image: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3Njk2OTU5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imagePosition: 'left',
  },
  {
    title: 'Plastic-Free Supply Chain',
    description: 'From manufacturing to your doorstep, we have eliminated single-use plastics entirely. Our commitment extends to every touchpoint.',
    bullets: [
      'Recycled aluminum housing',
      'Bamboo packaging materials',
      'Carbon-neutral shipping',
      'Zero-waste manufacturing facilities',
    ],
    image: 'https://images.unsplash.com/photo-1694663150234-2d0a7446430f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxpdmluZyUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2OTY4MTg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imagePosition: 'right',
  },
];

export function Editorial() {
  return (
    <section className="py-16 md:py-[120px] bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose PureAir</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We are redefining what it means to be environmentally responsible.
            Every decision we make considers both your health and our planet's future.
          </p>
        </div>

        {/* Alternating Image + Text Blocks */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
                }`}
            >
              {/* Image */}
              <div
                className={`${feature.imagePosition === 'right' ? 'lg:col-start-2' : ''
                  }`}
              >
                <div className="aspect-[4/3] rounded-[16px] overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${feature.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
              >
                <h3 className="text-4xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Leaf Bullet Points */}
                <ul className="space-y-4 pt-4">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Leaf className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
