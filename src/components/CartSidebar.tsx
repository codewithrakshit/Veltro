
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, getTotalPrice } = useCart();

  return (
    <>
      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-96 glass-modal shadow-2xl transform transition-all duration-400 z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-luxury-border/50">
          <div className="flex justify-between items-center">
            <h2 className="luxury-product-title text-luxury-accent">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-luxury-muted/20 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(100vh-200px)]">
          {cart.length === 0 ? (
            <div className="text-center mt-8">
              <p className="text-luxury-muted text-lg mb-6">Your cart is empty</p>
              <Button
                onClick={() => setIsCartOpen(false)}
                className="btn-luxury-primary"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center space-x-4 p-4 border border-luxury-border/50 rounded-xl bg-luxury-background/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-luxury-accent">{item.name}</h3>
                    <p className="text-sm text-luxury-muted">{item.selectedColor} • Size {item.selectedSize}</p>
                    <p className="font-bold text-luxury-accent">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                      className="p-2 hover:bg-luxury-muted/20 rounded-lg transition-colors duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                      className="p-2 hover:bg-luxury-muted/20 rounded-lg transition-colors duration-300"
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
          <div className="border-t border-luxury-border/50 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-luxury-accent">Total:</span>
              <span className="text-3xl font-bold text-luxury-accent">${getTotalPrice()}</span>
            </div>
            <Button className="w-full btn-luxury-primary text-lg py-6 rounded-xl mb-4">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full btn-luxury-secondary py-4 rounded-xl"
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
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};
