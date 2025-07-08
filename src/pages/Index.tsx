
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl tracking-wider">VELTRO</div>
            
            <div className="hidden md:flex space-x-8">
              {['Shop', 'New Arrivals', 'Collections', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-black transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            VELTRO
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Designed for movement. Built for speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProducts}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-none font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            >
              SHOP NOW
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-none font-semibold tracking-wide transition-all duration-300"
            >
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-1 h-16 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-wide animate-on-scroll">
            You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll"
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-white text-black">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                    </div>
                    <p className="text-2xl font-bold">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-wide animate-on-scroll">
            Our Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll"
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100">
                        Quick View
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white text-black">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                    </div>
                    <p className="text-2xl font-bold mb-4">${product.price}</p>
                    <div className="flex space-x-2 mb-4">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
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

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VELTRO</h3>
              <p className="text-gray-400 mb-4">
                Designed for movement. Built for speed.
              </p>
              <p className="text-sm text-gray-500">
                Revolutionary footwear that combines luxury with performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Men's</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women's</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">i</span>
                </div>
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VELTRO. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Returns Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({selectedProduct.rating})</span>
                    </div>
                    <p className="text-3xl font-bold mb-4">${selectedProduct.price}</p>
                    <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Colors</h4>
                    <div className="flex space-x-2">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-black transition-colors"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Size</h4>
                    <div className="grid grid-cols-6 gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className="py-2 px-3 border border-gray-300 hover:border-black transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => addToCart(selectedProduct, selectedProduct.colors[0], selectedProduct.sizes[0])}
                    className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6 rounded-none mb-6"
                  >
                    ADD TO CART
                  </Button>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <ul className="space-y-1 text-gray-600">
                      {selectedProduct.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
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

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.selectedColor} • {item.selectedSize}</p>
                    <p className="font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
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
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold">${getTotalPrice()}</span>
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6 rounded-none mb-2">
              CHECKOUT
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
