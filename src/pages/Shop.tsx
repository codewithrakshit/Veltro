
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { products, collections } from '@/data/products';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let filtered = [...products];

    // Filter by collection
    if (selectedCollection) {
      filtered = filtered.filter(product => product.collection === selectedCollection);
    }

    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCollection, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCollection('');
    setSelectedPriceRange('');
    setSortBy('newest');
  };

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
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-luxury-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="luxury-section-title text-luxury-accent mb-4">Shop All</h1>
          <p className="text-xl text-luxury-muted">Discover the complete VELTRO collection</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 mb-6"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="glass-card p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-luxury-accent">Filters</h3>
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-luxury-primary hover:text-luxury-accent"
                >
                  Clear All
                </Button>
              </div>

              {/* Collections Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-luxury-accent">Collections</h4>
                <div className="space-y-2">
                  {collections.map((collection) => (
                    <label key={collection.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        value={collection.name}
                        checked={selectedCollection === collection.name}
                        onChange={(e) => setSelectedCollection(e.target.value)}
                        className="mr-3 text-luxury-primary"
                      />
                      <span className="text-luxury-muted hover:text-luxury-accent transition-colors">
                        {collection.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-luxury-accent">Price Range</h4>
                <div className="space-y-2">
                  {['0-150', '150-200', '200-250', '250'].map((range) => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range}
                        checked={selectedPriceRange === range}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="mr-3 text-luxury-primary"
                      />
                      <span className="text-luxury-muted hover:text-luxury-accent transition-colors">
                        ${range === '250' ? '250+' : range.replace('-', ' - $')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-luxury-muted">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-luxury-muted">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-luxury-surface border border-luxury-border rounded-lg px-3 py-2 text-luxury-accent focus:outline-none focus:border-luxury-primary"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
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
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-luxury-muted ml-2">({product.rating})</span>
                        </div>
                        <p className="text-2xl font-bold text-luxury-accent mb-6">${product.price}</p>
                        <div className="flex space-x-2">
                          {product.colors.slice(0, 3).map((color) => (
                            <div
                              key={color}
                              className="w-6 h-6 rounded-full border-2 border-luxury-border shadow-sm"
                              style={{ backgroundColor: color.toLowerCase() }}
                            ></div>
                          ))}
                          {product.colors.length > 3 && (
                            <div className="w-6 h-6 rounded-full border-2 border-luxury-border bg-luxury-muted flex items-center justify-center">
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-luxury-muted mb-4">No products found</p>
                <Button onClick={clearFilters} className="btn-luxury-primary">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
