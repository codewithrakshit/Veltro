
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-hero-title text-luxury-accent mb-8 animate-luxury-fade-in">
            About VELTRO
          </h1>
          <p className="text-3xl font-light text-luxury-muted mb-12 leading-relaxed animate-luxury-fade-in">
            We design shoes for the rhythm of the city and the pace of innovation.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-primary to-luxury-secondary mx-auto animate-luxury-scale"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-12">Our Mission</h2>
            <blockquote className="text-2xl md:text-3xl font-light text-luxury-muted italic leading-relaxed mb-12">
              "To create footwear that doesn't just move with you, but moves you forward. Every step should feel like progress."
            </blockquote>
            <div className="w-24 h-1 bg-luxury-primary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">The VELTRO Philosophy</h2>
            <p className="text-xl text-luxury-muted">Three principles that guide everything we create</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design First",
                description: "Form and function unite in every silhouette. We believe beautiful design enhances performance, not the other way around.",
                icon: "✨",
                details: "Our design process begins with sketches that capture motion itself. Every line, every curve is intentional, serving both aesthetic beauty and functional purpose."
              },
              {
                title: "Sustainable Always",
                description: "Innovation means responsibility. We pioneer sustainable materials and processes without compromising on quality or performance.",
                icon: "🌍",
                details: "From recycled ocean plastics to carbon-neutral manufacturing, we're building the future of footwear with respect for our planet."
              },
              {
                title: "Engineered for Energy",
                description: "Every shoe is designed to amplify your natural movement, giving back energy with each step through advanced engineering.",
                icon: "⚡",
                details: "Our proprietary cushioning systems and ergonomic design work with your body's natural biomechanics to reduce fatigue and enhance performance."
              }
            ].map((principle, index) => (
              <Card
                key={index}
                className="glass-card border-0 luxury-scroll-reveal group hover:shadow-luxury-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{principle.icon}</div>
                  <h3 className="text-2xl font-semibold text-luxury-accent mb-4">{principle.title}</h3>
                  <p className="text-luxury-muted mb-6 leading-relaxed">{principle.description}</p>
                  <p className="text-sm text-luxury-muted/80 leading-relaxed">{principle.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Timeline */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">Our Journey</h2>
            <p className="text-xl text-luxury-muted">From vision to reality</p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2018",
                title: "The Vision",
                description: "Founded with a simple belief: footwear should enhance human potential, not limit it."
              },
              {
                year: "2020",
                title: "First Collection",
                description: "Launched our debut Urban Edge collection, introducing the world to performance luxury."
              },
              {
                year: "2022",
                title: "Sustainable Innovation",
                description: "Pioneered EarthTread technology, proving that sustainability and performance can coexist."
              },
              {
                year: "2024",
                title: "Global Movement",
                description: "Today, VELTRO represents a global community of individuals who demand more from their footwear."
              }
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 luxury-scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/4 text-center md:text-right">
                  <span className="text-4xl font-bold text-luxury-primary brand-text">{milestone.year}</span>
                </div>
                <div className="md:w-3/4">
                  <Card className="glass-card border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-luxury-accent mb-3">{milestone.title}</h3>
                      <p className="text-luxury-muted leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Innovation */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">Technology & Innovation</h2>
            <p className="text-xl text-luxury-muted">The science behind the comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Sole Technology",
                description: "Multi-layer construction with energy-return foam and strategic flex grooves for natural movement.",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
              },
              {
                title: "Engineered Knit Uppers",
                description: "Precision-knitted materials provide targeted support while maintaining breathability and comfort.",
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop"
              },
              {
                title: "Biomechanical Design",
                description: "Every component is designed to work with your body's natural movement patterns and energy transfer.",
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
              }
            ].map((tech, index) => (
              <Card
                key={index}
                className="glass-card border-0 luxury-scroll-reveal group hover:shadow-luxury-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-luxury-accent mb-3">{tech.title}</h3>
                    <p className="text-luxury-muted leading-relaxed">{tech.description}</p>
                  </div>
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
            Join the Movement
          </h2>
          <p className="text-xl text-luxury-muted mb-12 leading-relaxed">
            Experience the future of performance luxury. Every step forward is a step toward something greater.
          </p>
          <Link to="/shop">
            <Button className="btn-luxury-primary text-lg px-12 py-6 rounded-xl">
              Shop Our Latest Drop
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
