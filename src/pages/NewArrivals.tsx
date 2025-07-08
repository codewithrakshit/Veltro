
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const NewArrivals = () => {
  const newProducts = products.filter(product => product.isNew);

  useEffect(() => {
    const elements = document.querySelectorAll('.luxury-scroll-reveal');
    elements.forEach(element => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-background via-luxury-surface to-luxury-primary/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-hero-title text-luxury-accent mb-8 animate-luxury-fade-in">
            New Arrivals
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light text-luxury-muted tracking-wide animate-luxury-fade-in">
            The latest in performance luxury
          </p>
          <div className="w-24 h-1 bg-luxury-primary mx-auto animate-luxury-scale"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="luxury-section-title text-luxury-accent mb-4 luxury-scroll-reveal">
              Fresh Drops
            </h2>
            <p className="text-xl text-luxury-muted luxury-scroll-reveal">
              {newProducts.length} new styles to elevate your game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group luxury-card-hover glass-card border-0 cursor-pointer luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
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
                      <Badge className="absolute top-6 right-6 bg-luxury-secondary/90 text-luxury-accent rounded-lg px-4 py-2 animate-pulse">
                        NEW
                      </Badge>
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

          {/* Call to Action */}
          <div className="text-center mt-16 luxury-scroll-reveal">
            <h3 className="text-2xl font-semibold text-luxury-accent mb-4">
              Looking for something else?
            </h3>
            <p className="text-luxury-muted mb-8">
              Explore our complete collection of performance luxury footwear
            </p>
            <Link to="/shop">
              <Button className="btn-luxury-primary text-lg px-10 py-6 rounded-xl">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
