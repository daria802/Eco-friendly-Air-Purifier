import { Search, ShoppingCart, User, Leaf, Menu } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Leaf className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="text-xl font-semibold text-primary">PureAir</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">
              Shop
            </a>
            <a href="#science" className="text-foreground hover:text-primary transition-colors font-medium">
              Science
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium">
              Impact
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden sm:block text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Eco Score</span>
              <Switch />
            </div>

            <button className="hidden sm:block text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>

            <button className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <Badge
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-[10px]"
                variant="default"
              >
                2
              </Badge>
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle className="flex items-center gap-2">
                      <Leaf className="w-6 h-6 text-primary" />
                      <span>PureAir</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col p-6 gap-6">
                    <nav className="flex flex-col gap-4">
                      <a href="#shop" className="text-lg font-medium hover:text-primary transition-colors">Shop</a>
                      <a href="#science" className="text-lg font-medium hover:text-primary transition-colors">Science</a>
                      <a href="#impact" className="text-lg font-medium hover:text-primary transition-colors">Impact</a>
                      <a href="#blog" className="text-lg font-medium hover:text-primary transition-colors">Blog</a>
                    </nav>
                    <div className="border-t pt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Eco Score</span>
                        <Switch />
                      </div>
                      <Button className="w-full justify-start gap-3" variant="ghost">
                        <User className="w-5 h-5" />
                        Account
                      </Button>
                      <Button className="w-full justify-start gap-3" variant="ghost">
                        <Search className="w-5 h-5" />
                        Search
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
