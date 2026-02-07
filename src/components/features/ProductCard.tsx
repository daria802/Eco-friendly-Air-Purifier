import { useState } from 'react';
import { ShoppingCart, Wind } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  colors: Array<{ name: string; value: string }>;
}

export function ProductCard({ name, price, image, colors }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover State - HEPA Layer Visualization */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary/95 flex items-center justify-center transition-opacity duration-500">
            <div className="text-center text-white p-8">
              <Wind className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">5-Layer HEPA Filtration</p>
              <p className="text-sm opacity-90">Captures 99.97% of particles</p>
            </div>
          </div>
        )}

        {/* Live Air Quality Display */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold">Live AQ: 95</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">Sustainable Air Purifier</p>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Colors:</span>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor.name === color.name
                  ? 'border-primary scale-110'
                  : 'border-transparent hover:border-primary/50'
                  }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-primary">${price}</p>
            <p className="text-xs text-muted-foreground">Free shipping</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[30px] hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            Add to Eco-Cart
          </button>
        </div>
      </div>
    </div>
  );
}
