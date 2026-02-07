import { ProductCard } from './ProductCard';

const products = [
  {
    name: 'AirFlow Stone',
    price: 399,
    image: 'https://images.unsplash.com/photo-1743357424988-281180fab1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBwdXJpZmllciUyMGNsZWFuJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3Njk3MTA5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: [
      { name: 'Stone', value: '#C5C3BE' },
      { name: 'Moss', value: '#5F7161' },
      { name: 'Sand', value: '#E8DCC4' },
    ],
  },
  {
    name: 'PurePro Moss',
    price: 449,
    image: 'https://images.unsplash.com/photo-1656740840031-41cb3bc73c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50JTIwaW5kb29yfGVufDF8fHx8MTc2OTcxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: [
      { name: 'Moss', value: '#5F7161' },
      { name: 'Stone', value: '#C5C3BE' },
      { name: 'Sand', value: '#E8DCC4' },
    ],
  },
  {
    name: 'EcoBreeze Sand',
    price: 379,
    image: 'https://images.unsplash.com/photo-1731290676610-f774de6be82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBxdWFsaXR5JTIwc2Vuc29yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk3MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    colors: [
      { name: 'Sand', value: '#E8DCC4' },
      { name: 'Stone', value: '#C5C3BE' },
      { name: 'Moss', value: '#5F7161' },
    ],
  },
];

export function NewArrivals() {
  return (
    <section className="py-16 md:py-[120px] bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Fresh Collection.</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest innovations in sustainable air purification.
            Each product designed with nature and your wellbeing in mind.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
