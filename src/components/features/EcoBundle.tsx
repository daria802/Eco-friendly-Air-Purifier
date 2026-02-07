import { Clock, TrendingDown, Package, Sparkles } from 'lucide-react';

export function EcoBundle() {
  return (
    <section className="py-16 md:py-[120px] bg-secondary/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[16px] overflow-hidden shadow-2xl border border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/30"></div>

            <div className="relative p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold">Eco-Bundle Offer</h2>

                  <p className="text-base md:text-lg text-muted-foreground">
                    Get our complete air purification system with 3 replacement filters
                    and save while reducing your environmental footprint.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingDown className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">30% Energy Savings</p>
                        <p className="text-sm text-muted-foreground">vs standard models</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Zero-Waste Packaging</p>
                        <p className="text-sm text-muted-foreground">100% recyclable</p>
                      </div>
                    </div>
                  </div>

                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-[30px] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                    Claim Your Bundle
                  </button>
                </div>

                {/* Right Pricing */}
                <div className="bg-white rounded-[16px] p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">$599</span>
                      <span className="text-2xl text-muted-foreground line-through">$799</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <span className="text-sm">AirFlow Pro Unit</span>
                        <span className="text-sm font-semibold">$449</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <span className="text-sm">3x Bio-Filters</span>
                        <span className="text-sm font-semibold">$180</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <span className="text-sm">Premium Support</span>
                        <span className="text-sm font-semibold">$170</span>
                      </div>
                      <div className="flex items-center justify-between pt-3">
                        <span className="font-semibold">You Save</span>
                        <span className="text-xl font-bold text-primary">$200</span>
                      </div>
                    </div>

                    {/* Urgency Timer */}
                    <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-[16px]">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Offer ends in:</p>
                        <p className="text-xs text-muted-foreground">23h 45m 12s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
