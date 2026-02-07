import { Recycle, Award, Leaf } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Pure Air,<br />
              Crafted by Nature.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Experience the perfect harmony of cutting-edge technology and sustainable design.
              Our air purifiers don't just clean your air—they care for our planet.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-[30px] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-[30px] hover:bg-secondary/80 transition-all">
                Learn More
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">100% Recyclable</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Energy Star Rated</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Carbon Neutral</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-[16px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758656911433-6e5919c37639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFpciUyMG5hdHVyZSUyMGZvcmVzdHxlbnwxfHx8fDE3Njk3MTA5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clean air and nature"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-[16px] shadow-2xl p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">98</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Air Quality</p>
                  <p className="text-xs text-muted-foreground">Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
