
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      category: "Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and next-day delivery are also available at checkout."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on your location."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website."
        }
      ]
    },
    {
      category: "Returns",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unworn items in original packaging. Returns are free for domestic orders over $100."
        },
        {
          q: "How do I start a return?",
          a: "Log into your account and select 'Returns' from your order history, or contact our support team for assistance."
        },
        {
          q: "Can I exchange for a different size?",
          a: "Yes! Size exchanges are processed as returns and new orders to ensure the fastest delivery of your correct size."
        }
      ]
    },
    {
      category: "Sizing",
      questions: [
        {
          q: "How do VELTRO shoes fit?",
          a: "Our shoes generally run true to size. We recommend checking our detailed size guide which includes foot measurements and fit notes for each collection."
        },
        {
          q: "What if I'm between sizes?",
          a: "For most styles, we recommend sizing up if you're between sizes. Check the specific product page for collection-specific sizing recommendations."
        },
        {
          q: "Do you offer wide or narrow widths?",
          a: "Currently, our shoes are designed in medium width. Our engineered knit uppers provide some accommodation for different foot shapes."
        }
      ]
    },
    {
      category: "Product Care",
      questions: [
        {
          q: "How do I clean my VELTRO shoes?",
          a: "Use a soft brush and mild soap with water for most materials. Avoid submerging in water. Specific care instructions are included with each pair."
        },
        {
          q: "Are VELTRO shoes waterproof?",
          a: "Our shoes are water-resistant but not fully waterproof. The EarthTread collection features enhanced water resistance for outdoor activities."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-luxury-background pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-luxury-background to-luxury-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-section-title text-luxury-accent mb-8 animate-luxury-fade-in">
            How Can We Help You?
          </h1>
          <p className="text-xl text-luxury-muted mb-12 animate-luxury-fade-in">
            We're here to support your VELTRO journey every step of the way
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Get instant help from our support team",
                action: "Start Chat",
                availability: "24/7 Available"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "support@veltro.com",
                action: "Send Email",
                availability: "Response within 24h"
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "1-800-VELTRO",
                action: "Call Now",
                availability: "Mon-Fri 9AM-6PM EST"
              }
            ].map((contact, index) => (
              <Card
                key={index}
                className="glass-card border-0 luxury-scroll-reveal group hover:shadow-luxury-hover transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <contact.icon className="w-12 h-12 text-luxury-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-luxury-accent mb-2">{contact.title}</h3>
                  <p className="text-luxury-muted mb-4">{contact.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-luxury-primary mb-4">
                    <Clock className="w-4 h-4" />
                    {contact.availability}
                  </div>
                  <Button className="btn-luxury-primary w-full">
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-luxury-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 luxury-scroll-reveal">
            <h2 className="luxury-section-title text-luxury-accent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-luxury-muted">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="luxury-scroll-reveal">
                <h3 className="text-2xl font-semibold text-luxury-accent mb-6 border-b border-luxury-border pb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    return (
                      <Card
                        key={faqIndex}
                        className="glass-card border-0 overflow-hidden"
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-luxury-surface/20 transition-colors duration-300"
                          >
                            <span className="font-medium text-luxury-accent pr-4">{faq.q}</span>
                            {openFaq === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-luxury-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-luxury-primary flex-shrink-0" />
                            )}
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${
                            openFaq === globalIndex ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="px-6 pb-6">
                              <p className="text-luxury-muted leading-relaxed">{faq.a}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 luxury-scroll-reveal">
            <h2 className="text-3xl font-bold text-luxury-accent mb-4">
              Still Need Help?
            </h2>
            <p className="text-luxury-muted">
              Send us a message and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="glass-card border-0 luxury-scroll-reveal">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-luxury-accent mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-accent mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-accent mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-accent mb-2">
                    Order Number (if applicable)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface"
                    placeholder="VEL-123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-accent mb-2">
                    How can we help?
                  </label>
                  <select className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface">
                    <option>Select a topic</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Information</option>
                    <option>Sizing Help</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-accent mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-luxury-border rounded-lg focus:outline-none focus:border-luxury-primary transition-colors duration-300 bg-luxury-surface resize-none"
                    placeholder="Please describe your question or issue in detail..."
                  ></textarea>
                </div>

                <Button className="w-full btn-luxury-primary py-4 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Support;
