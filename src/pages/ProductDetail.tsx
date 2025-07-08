
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[4]); // Default to middle size
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-luxury-accent mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button className="btn-luxury-primary">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCart(product, selectedColor, selectedSize);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-luxury-muted hover:text-luxury-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-luxury-primary/10 text-luxury-primary mb-4">
                {product.collection}
              </Badge>
              {product.isNew && (
                <Badge className="bg-luxury-secondary/10 text-luxury-secondary ml-2">
                  NEW
                </Badge>
              )}
              <h1 className="text-4xl font-bold text-luxury-accent mb-2">{product.name}</h1>
              <p className="text-lg text-luxury-muted mb-4">{product.colorway}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-luxury-muted ml-2">({product.rating}) • 127 reviews</span>
              </div>

              <p className="text-4xl font-bold text-luxury-accent mb-8">${product.price}</p>
            </div>

            <div>
              <p className="text-luxury-muted text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-accent">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-luxury-primary shadow-lg scale-110'
                        : 'border-luxury-border hover:border-luxury-primary/50'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-accent">Size: {selectedSize}</h3>
              <div className="grid grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-luxury-primary bg-luxury-primary text-luxury-surface'
                        : 'border-luxury-border hover:border-luxury-primary hover:bg-luxury-primary/5'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-accent">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-luxury-border rounded-lg hover:border-luxury-primary transition-colors duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-medium text-luxury-accent w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-luxury-border rounded-lg hover:border-luxury-primary transition-colors duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedSize}
                className="w-full btn-luxury-primary text-lg py-6 rounded-xl"
              >
                Add to Cart • ${product.price * quantity}
              </Button>
              <Button
                variant="outline"
                className="w-full btn-luxury-secondary py-4 rounded-xl"
              >
                Add to Wishlist
              </Button>
            </div>

            {/* Product Highlights */}
            <div>
              <h3 className="font-semibold mb-4 text-luxury-accent">Key Features</h3>
              <ul className="space-y-3">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-luxury-muted">
                    <span className="w-2 h-2 bg-luxury-primary rounded-full mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-luxury-accent mb-12 text-center">
              More from {product.collection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group luxury-card-hover glass-card border-0 cursor-pointer"
                >
                  <CardContent className="p-0 relative">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="relative overflow-hidden rounded-t-xl">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="luxury-card-overlay rounded-t-xl">
                          <Button className="bg-luxury-primary/90 text-luxury-surface hover:bg-luxury-primary rounded-lg px-6 py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            Quick View
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-luxury-accent mb-2">{relatedProduct.name}</h3>
                        <p className="text-sm text-luxury-muted mb-3">{relatedProduct.colorway}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-luxury-muted ml-2">({relatedProduct.rating})</span>
                        </div>
                        <p className="text-xl font-bold text-luxury-accent">${relatedProduct.price}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
