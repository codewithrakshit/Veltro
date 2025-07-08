
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { collections } from '@/data/products';

const Collections = () => {
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-background via-luxury-surface to-luxury-primary/5"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-hero-title text-luxury-accent mb-8 animate-luxury-fade-in">
            Collections That Define Motion
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light text-luxury-muted tracking-wide animate-luxury-fade-in">
            Curated performance luxury for every journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-primary to-luxury-secondary mx-auto animate-luxury-scale"></div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <Card
                key={collection.id}
                className="group luxury-card-hover glass-card border-0 overflow-hidden luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 luxury-card-overlay bg-luxury-primary/20">
                      <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                        <Link to="/shop">
                          <Button className="bg-luxury-surface/90 text-luxury-accent hover:bg-luxury-surface rounded-xl px-8 py-4 font-semibold tracking-wider transition-all duration-300 transform hover:scale-105">
                            Shop Collection
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2 brand-text">{collection.name}</h3>
                    <p className="text-lg mb-4 opacity-90">{collection.tagline}</p>
                    <p className="text-sm opacity-75">{collection.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Spotlight */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">
              Collection Spotlight
            </h2>
            <p className="text-xl text-luxury-muted">
              Discover what makes each collection unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Philosophy",
                description: "Each collection embodies a unique design language, from urban streetwear to minimal luxury aesthetics.",
                icon: "🎨"
              },
              {
                title: "Performance Technology",
                description: "Advanced materials and engineering techniques deliver superior comfort and durability across all collections.",
                icon: "⚡"
              },
              {
                title: "Sustainable Innovation",
                description: "Our commitment to environmental responsibility drives innovation in materials and manufacturing processes.",
                icon: "🌱"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass-card border-0 luxury-scroll-reveal hover:shadow-luxury-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-luxury-accent mb-4">{feature.title}</h3>
                  <p className="text-luxury-muted leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 luxury-scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-luxury-accent mb-6">
            Ready to Find Your Perfect Pair?
          </h2>
          <p className="text-xl text-luxury-muted mb-12 leading-relaxed">
            Explore our complete range and discover the collection that speaks to your style and performance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/shop">
              <Button className="btn-luxury-primary text-lg px-10 py-6 rounded-xl">
                Shop All Collections
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button variant="outline" className="btn-luxury-secondary text-lg px-10 py-6 rounded-xl">
                View New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
