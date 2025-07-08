import { useState, useEffect } from 'react';
import { ChevronRight, Star, ArrowRight, Instagram, Twitter, Facebook, Play, Zap, Leaf, Heart, ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();
  
  const featuredProducts = products.filter(p => p.category === 'Urban Edge').slice(0, 4);
  const topProducts = products.slice(0, 8);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const collections = [
    {
      name: "Urban Edge",
      tagline: "Streetwear-forward silhouettes with bold soles",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      products: products.filter(p => p.category === 'Urban Edge').length
    },
    {
      name: "Performance Prime",
      tagline: "Running-inspired, tech knit uppers",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
      products: products.filter(p => p.category === 'Performance Prime').length
    },
    {
      name: "Monochrome Series",
      tagline: "Clean all-white and all-black designs",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop",
      products: products.filter(p => p.category === 'Monochrome Series').length
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-accent/20 via-luxury-background to-luxury-primary/10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Step Into the Future
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-luxury-muted mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Luxury performance footwear engineered for movement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToProducts}
              className="btn-luxury-primary text-lg px-8 py-6 rounded-xl group"
            >
              Shop Now
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-luxury-secondary text-lg px-8 py-6 rounded-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-luxury-muted rotate-90" />
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="luxury-section-title text-4xl md:text-5xl font-bold mb-4">
              Top Performers
            </h2>
            <p className="text-luxury-muted text-lg max-w-2xl mx-auto">
              Discover our most loved designs, engineered for those who demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="luxury-product-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      onClick={() => addToCart(product, product.colors[0], product.sizes[0])}
                      className="btn-luxury-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="luxury-product-title font-semibold text-luxury-accent">{product.name}</h3>
                  <p className="text-luxury-muted text-sm">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="luxury-price font-bold text-luxury-accent">${product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-luxury-muted">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button className="btn-luxury-secondary text-lg px-8 py-4 rounded-xl">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="luxury-section-title text-4xl md:text-5xl font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-luxury-muted text-lg max-w-2xl mx-auto">
              Curated lines that define modern performance and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.name} 
                className="luxury-collection-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl h-80 mb-6">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">{collection.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{collection.tagline}</p>
                    <p className="text-white/60 text-xs">{collection.products} products</p>
                  </div>
                </div>
                
                <Link to="/collections">
                  <Button className="w-full btn-luxury-secondary rounded-xl">
                    Shop Collection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VELTRO */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="luxury-section-title text-4xl md:text-5xl font-bold mb-4">
              Why VELTRO
            </h2>
            <p className="text-luxury-muted text-lg max-w-2xl mx-auto">
              Three pillars that define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 luxury-feature-card">
              <div className="w-16 h-16 bg-luxury-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-luxury-primary" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-accent">Engineered Comfort</h3>
              <p className="text-luxury-muted leading-relaxed">
                Advanced cushioning technology meets responsive design for all-day comfort that adapts to your movement.
              </p>
            </div>

            <div className="text-center space-y-6 luxury-feature-card">
              <div className="w-16 h-16 bg-luxury-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-luxury-primary" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-accent">Design-Driven</h3>
              <p className="text-luxury-muted leading-relaxed">
                Every silhouette is crafted with attention to detail, balancing aesthetic appeal with functional performance.
              </p>
            </div>

            <div className="text-center space-y-6 luxury-feature-card">
              <div className="w-16 h-16 bg-luxury-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-luxury-primary" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-accent">Sustainably Made</h3>
              <p className="text-luxury-muted leading-relaxed">
                Responsibly sourced materials and eco-conscious manufacturing for footwear that's kind to the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 px-4 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="luxury-section-title text-4xl md:text-5xl font-bold mb-4">
              @veltro_official
            </h2>
            <p className="text-luxury-muted text-lg max-w-2xl mx-auto">
              See how our community styles VELTRO
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-luxury-surface rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-${1540000000000 + i}?w=400&h=400&fit=crop`}
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-luxury-secondary text-lg px-8 py-4 rounded-xl">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @veltro_official
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="luxury-section-title text-4xl md:text-5xl font-bold mb-4">
              Stay Ahead
            </h2>
            <p className="text-luxury-muted text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about new drops, exclusive releases, and member-only events
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-luxury-border bg-luxury-surface/50 focus:outline-none focus:ring-2 focus:ring-luxury-primary/50 transition-all duration-300"
              />
              <Button className="btn-luxury-primary px-8 py-4 rounded-xl">
                Subscribe
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
