
import { useState, useEffect } from 'react';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, collections } from '@/data/products';
import { CartSidebar } from '@/components/CartSidebar';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get featured products (top-rated and new arrivals)
  const featuredProducts = products
    .filter(product => product.rating >= 4.8 || product.isNew)
    .slice(0, 8);

  const topSellingProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

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
    <div className="min-h-screen bg-luxury-background">
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden luxury-hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-background via-luxury-background/80 to-luxury-primary/5"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 animate-luxury-fade-in">
          <h1 className="luxury-hero-title text-luxury-accent mb-8 brand-text">
            Step Into the Future
          </h1>
          <p className="text-3xl md:text-4xl mb-12 font-light text-luxury-muted tracking-wide">
            Luxury performance footwear engineered for movement
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={scrollToProducts}
              className="btn-luxury-primary text-lg px-12 py-6 rounded-xl group"
            >
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Link to="/collections">
              <Button
                variant="outline"
                className="btn-luxury-secondary text-lg px-12 py-6 rounded-xl"
              >
                Explore Collections
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-luxury-primary/50 rounded-full"></div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section id="products" className="py-24 bg-luxury-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="luxury-section-title text-center mb-4 text-luxury-accent luxury-scroll-reveal">
            Top Sellers
          </h2>
          <p className="text-center text-xl text-luxury-muted mb-16 luxury-scroll-reveal">
            The most coveted styles in our collection
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSellingProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group luxury-card-hover glass-card border-0 cursor-pointer luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 relative">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="luxury-card-overlay rounded-t-xl">
                        <Button className="bg-luxury-primary/90 text-luxury-surface hover:bg-luxury-primary rounded-lg px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          Quick View
                        </Button>
                      </div>
                      <Badge className="absolute top-6 left-6 bg-luxury-primary/90 text-luxury-surface rounded-lg px-4 py-2">
                        {product.collection}
                      </Badge>
                      {product.isNew && (
                        <Badge className="absolute top-6 right-6 bg-luxury-secondary/90 text-luxury-accent rounded-lg px-4 py-2 animate-luxury-scale">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="luxury-product-title text-luxury-accent mb-2">{product.name}</h3>
                      <p className="text-sm text-luxury-muted mb-4">{product.colorway}</p>
                      <div className="flex items-center mb-6">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-luxury-muted ml-2">({product.rating})</span>
                      </div>
                      <p className="text-3xl font-bold text-luxury-accent mb-6">${product.price}</p>
                      <div className="flex space-x-2">
                        {product.colors.slice(0, 3).map((color) => (
                          <div
                            key={color}
                            className="w-8 h-8 rounded-full border-2 border-luxury-border shadow-sm"
                            style={{ backgroundColor: color.toLowerCase() }}
                          ></div>
                        ))}
                        {product.colors.length > 3 && (
                          <div className="w-8 h-8 rounded-full border-2 border-luxury-border bg-luxury-muted flex items-center justify-center">
                            <span className="text-xs text-luxury-surface">+{product.colors.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 luxury-scroll-reveal">
            <Link to="/shop">
              <Button className="btn-luxury-primary text-lg px-10 py-6 rounded-xl">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-luxury-muted">
              Discover styles that define movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 3).map((collection, index) => (
              <Card
                key={collection.id}
                className="group luxury-card-hover glass-card border-0 overflow-hidden luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0 relative">
                  <Link to="/collections">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 luxury-card-overlay bg-luxury-primary/20">
                        <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                          <Button className="bg-luxury-surface/90 text-luxury-accent hover:bg-luxury-surface rounded-xl px-8 py-4 font-semibold tracking-wider">
                            Explore Collection
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2 brand-text">{collection.name}</h3>
                      <p className="text-lg mb-2 opacity-90">{collection.tagline}</p>
                      <p className="text-sm opacity-75">{collection.description}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why VELTRO Section */}
      <section className="py-24 bg-luxury-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">
              Why VELTRO
            </h2>
            <p className="text-xl text-luxury-muted">
              Performance luxury redefined
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Engineered Comfort",
                description: "Advanced cushioning and ergonomic design work with your body's natural movement patterns.",
                icon: "⚡"
              },
              {
                title: "Design-Driven",
                description: "Fashion-forward aesthetics meet functional innovation in every silhouette.",
                icon: "✨"
              },
              {
                title: "Sustainably Made",
                description: "Conscious materials and responsible manufacturing for the future of footwear.",
                icon: "🌱"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass-card border-0 text-center luxury-scroll-reveal hover:shadow-luxury-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-luxury-accent mb-4">{feature.title}</h3>
                  <p className="text-luxury-muted leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">
              #VELTROMOVEMENT
            </h2>
            <p className="text-xl text-luxury-muted">
              Join the community that's always moving forward
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl luxury-scroll-reveal hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={`https://images.unsplash.com/photo-${1549298916 + index * 123456}-b41d501d3772?w=400&h=400&fit=crop`}
                  alt={`VELTRO community ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-luxury-background luxury-scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-luxury-accent mb-4">
                Stay In Motion
              </h2>
              <p className="text-xl text-luxury-muted mb-8">
                Be the first to know about new drops, exclusive access, and movement insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 border border-luxury-border rounded-xl focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface"
                />
                <Button className="btn-luxury-primary px-8 py-4 rounded-xl">
                  Join Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CartSidebar />
    </div>
  );
};

export default Index;
