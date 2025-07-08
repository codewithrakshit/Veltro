
import { useState, useEffect } from 'react';
import { ChevronRight, ShoppingCart, User, Search, Star, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
}

interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      name: 'VELTRO APEX',
      price: 295,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
      category: 'Performance',
      rating: 4.9,
      colors: ['Black', 'White', 'Navy'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      description: 'Revolutionary performance footwear engineered for speed and comfort.',
      highlights: ['Carbon fiber sole', 'Breathable mesh upper', 'Advanced cushioning system']
    },
    {
      id: '2',
      name: 'VELTRO FLUX',
      price: 345,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
      category: 'Luxury',
      rating: 4.8,
      colors: ['Black', 'Bronze', 'Silver'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      description: 'Luxury meets innovation in this premium athletic silhouette.',
      highlights: ['Premium leather construction', 'Titanium accents', 'Ultra-responsive foam']
    },
    {
      id: '3',
      name: 'VELTRO STORM',
      price: 265,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop',
      category: 'Training',
      rating: 4.7,
      colors: ['Gray', 'Blue', 'Black'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      description: 'Built for intensity with uncompromising durability.',
      highlights: ['All-weather grip', 'Reinforced heel support', 'Moisture-wicking interior']
    },
    {
      id: '4',
      name: 'VELTRO RISE',
      price: 395,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
      category: 'Elite',
      rating: 5.0,
      colors: ['White', 'Gold', 'Black'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      description: 'The pinnacle of athletic luxury and performance engineering.',
      highlights: ['24k gold details', 'Handcrafted construction', 'Limited edition design']
    }
  ];

  const addToCart = (product: Product, color: string, size: string) => {
    const existingItem = cart.find(item => 
      item.id === product.id && item.selectedColor === color && item.selectedSize === size
    );

    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, selectedColor: color, selectedSize: size }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, color: string, size: string) => {
    setCart(cart.filter(item => !(item.id === id && item.selectedColor === color && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, color: string, size: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id, color, size);
    } else {
      setCart(cart.map(item => 
        item.id === id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('.luxury-scroll-reveal');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Glassmorphism Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="brand-text text-3xl tracking-wider text-foreground">
              VELTRO
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Shop', 'New Arrivals', 'Collections', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="luxury-nav-link"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <Search className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
              <User className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-accent/10 rounded-full transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-luxury-scale">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden luxury-hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 animate-luxury-fade-in">
          <h1 className="luxury-hero-title text-foreground mb-8 brand-text">
            VELTRO
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light text-muted-foreground tracking-wide">
            Designed for movement. Built for speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={scrollToProducts}
              className="btn-luxury-primary text-lg px-10 py-6 rounded-xl"
            >
              SHOP NOW
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="btn-luxury-secondary text-lg px-10 py-6 rounded-xl"
            >
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-primary/50 rounded-full"></div>
        </div>
      </section>

      {/* Premium Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="luxury-section-title text-center mb-16 text-foreground luxury-scroll-reveal">
            You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group luxury-card-hover glass-card border-0 cursor-pointer luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="luxury-card-overlay rounded-t-xl">
                      <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-lg px-6 py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        Quick View
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground rounded-lg px-3 py-1">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="luxury-product-title text-foreground mb-3">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Main Products Section */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="luxury-section-title text-center mb-16 text-foreground luxury-scroll-reveal">
            Our Collection
          </h2>
          <div className="luxury-product-grid">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group luxury-card-hover glass-card border-0 cursor-pointer luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="luxury-card-overlay rounded-t-xl">
                      <Button className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-lg px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        Quick View
                      </Button>
                    </div>
                    <Badge className="absolute top-6 left-6 bg-primary/90 text-primary-foreground rounded-lg px-4 py-2">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-8">
                    <h3 className="luxury-product-title text-foreground mb-4">{product.name}</h3>
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-6">${product.price}</p>
                    <div className="flex space-x-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-border shadow-sm"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="brand-text text-3xl mb-6">VELTRO</h3>
              <p className="text-background/80 mb-6 text-lg">
                Designed for movement. Built for speed.
              </p>
              <p className="text-sm text-background/60">
                Revolutionary footwear that combines luxury with performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Shop</h4>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Men's</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Women's</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Collections</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors duration-300">Size Guide</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Returns</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Shipping</a></li>
                <li><a href="#" className="hover:text-background transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Stay Connected</h4>
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm">i</span>
                </div>
              </div>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/60 focus:outline-none focus:border-background/40 transition-colors duration-300"
                />
                <Button className="w-full bg-background text-foreground hover:bg-background/90 rounded-lg py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-16 pt-8 text-center text-background/60">
            <p>&copy; 2024 VELTRO. All rights reserved.</p>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="#" className="hover:text-background transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors duration-300">Returns Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="glass-modal rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background/95 backdrop-blur-md p-6 border-b border-border/50 flex justify-between items-center rounded-t-2xl">
              <h2 className="luxury-product-title text-foreground">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-muted/50 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <div>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({selectedProduct.rating})</span>
                    </div>
                    <p className="text-4xl font-bold mb-6 text-foreground">${selectedProduct.price}</p>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-lg">Colors</h4>
                    <div className="flex space-x-3">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          className="w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-colors duration-300 shadow-sm"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-lg">Size</h4>
                    <div className="grid grid-cols-6 gap-3">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className="py-3 px-4 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => addToCart(selectedProduct, selectedProduct.colors[0], selectedProduct.sizes[0])}
                    className="w-full btn-luxury-primary text-lg py-6 rounded-xl mb-8"
                  >
                    ADD TO CART
                  </Button>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Highlights</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      {selectedProduct.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-96 glass-modal shadow-2xl transform transition-all duration-400 z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-border/50">
          <div className="flex justify-between items-center">
            <h2 className="luxury-product-title text-foreground">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-muted/50 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center space-x-4 p-4 border border-border/50 rounded-xl bg-background/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.selectedColor} • {item.selectedSize}</p>
                    <p className="font-bold text-foreground">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t border-border/50 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-foreground">Total:</span>
              <span className="text-3xl font-bold text-foreground">${getTotalPrice()}</span>
            </div>
            <Button className="w-full btn-luxury-primary text-lg py-6 rounded-xl mb-4">
              CHECKOUT
            </Button>
            <Button
              variant="outline"
              className="w-full btn-luxury-secondary py-4 rounded-xl"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>

      {/* Premium Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
