
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-luxury-accent text-luxury-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="brand-text text-3xl mb-6">VELTRO</h3>
            <p className="text-luxury-surface/80 mb-6 text-lg">
              Designed for movement. Built for speed.
            </p>
            <p className="text-sm text-luxury-surface/60">
              Revolutionary footwear that combines luxury with performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Shop</h4>
            <ul className="space-y-3 text-luxury-surface/80">
              <li><Link to="/new-arrivals" className="hover:text-luxury-surface transition-colors duration-300">New Arrivals</Link></li>
              <li><Link to="/collections" className="hover:text-luxury-surface transition-colors duration-300">Collections</Link></li>
              <li><Link to="/shop" className="hover:text-luxury-surface transition-colors duration-300">All Products</Link></li>
              <li><a href="#" className="hover:text-luxury-surface transition-colors duration-300">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-luxury-surface/80">
              <li><Link to="/support" className="hover:text-luxury-surface transition-colors duration-300">Help Center</Link></li>
              <li><a href="#" className="hover:text-luxury-surface transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="hover:text-luxury-surface transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="hover:text-luxury-surface transition-colors duration-300">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <div className="w-12 h-12 bg-luxury-surface/10 rounded-full flex items-center justify-center hover:bg-luxury-surface/20 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-12 h-12 bg-luxury-surface/10 rounded-full flex items-center justify-center hover:bg-luxury-surface/20 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-12 h-12 bg-luxury-surface/10 rounded-full flex items-center justify-center hover:bg-luxury-surface/20 transition-colors duration-300 cursor-pointer">
                <span className="text-sm">i</span>
              </div>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-luxury-surface/10 border border-luxury-surface/20 rounded-lg text-luxury-surface placeholder-luxury-surface/60 focus:outline-none focus:border-luxury-surface/40 transition-colors duration-300"
              />
              <Button className="w-full bg-luxury-surface text-luxury-accent hover:bg-luxury-surface/90 rounded-lg py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-luxury-surface/20 mt-16 pt-8 text-center text-luxury-surface/60">
          <p>&copy; 2024 VELTRO. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="#" className="hover:text-luxury-surface transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-surface transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-luxury-surface transition-colors duration-300">Returns Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
