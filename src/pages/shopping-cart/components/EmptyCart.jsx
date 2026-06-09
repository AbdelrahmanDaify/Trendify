import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        {/* Empty Cart Icon */}
        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <Icon name="ShoppingCart" size={48} className="text-text-secondary" />
        </div>

        {/* Empty State Content */}
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Your cart is empty
        </h2>
        
        <p className="text-text-secondary mb-8 leading-relaxed">
          Looks like you haven't added anything to your cart yet.\nStart shopping to fill it up with amazing finds!
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link to="/homepage">
            <Button variant="default" size="lg" fullWidth>
              <Icon name="Home" size={18} className="mr-2" />
              Continue Shopping
            </Button>
          </Link>
          
          <div className="flex gap-3">
            <Link to="/women-s-category" className="flex-1">
              <Button variant="outline" size="default" fullWidth>
                Shop Women
              </Button>
            </Link>
            <Link to="/men-s-category" className="flex-1">
              <Button variant="outline" size="default" fullWidth>
                Shop Men
              </Button>
            </Link>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-medium text-primary mb-4">Popular Categories</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link to="/search-results?category=dresses" className="text-accent hover:text-accent/80 transition-colors">
              Dresses
            </Link>
            <Link to="/search-results?category=tops" className="text-accent hover:text-accent/80 transition-colors">
              Tops & Blouses
            </Link>
            <Link to="/search-results?category=jeans" className="text-accent hover:text-accent/80 transition-colors">
              Jeans & Denim
            </Link>
            <Link to="/search-results?category=shoes" className="text-accent hover:text-accent/80 transition-colors">
              Shoes & Boots
            </Link>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-xs text-text-secondary">
            <div className="flex flex-col items-center gap-1">
              <Icon name="Truck" size={20} className="text-accent" />
              <span>Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon name="RotateCcw" size={20} className="text-accent" />
              <span>Easy Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon name="Shield" size={20} className="text-accent" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;