
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav shadow-luxury' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="brand-text text-3xl tracking-wider text-luxury-accent hover:text-luxury-primary transition-colors duration-300">
              VELTRO
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`luxury-nav-link ${
                    location.pathname === item.path ? 'text-luxury-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-5 h-5 text-luxury-muted hover:text-luxury-primary cursor-pointer transition-colors duration-300" />
              <User className="w-5 h-5 text-luxury-muted hover:text-luxury-primary cursor-pointer transition-colors duration-300" />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-luxury-accent/10 rounded-full transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 text-luxury-muted group-hover:text-luxury-primary transition-colors duration-300" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-luxury-scale">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-luxury-accent/10 rounded-full transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-luxury-accent" />
              ) : (
                <Menu className="w-6 h-6 text-luxury-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden glass-nav border-t border-luxury-border`}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-lg luxury-nav-link ${
                  location.pathname === item.path ? 'text-luxury-primary' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-6 pt-4 border-t border-luxury-border">
              <Search className="w-5 h-5 text-luxury-muted" />
              <User className="w-5 h-5 text-luxury-muted" />
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="relative p-2"
              >
                <ShoppingCart className="w-5 h-5 text-luxury-muted" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
