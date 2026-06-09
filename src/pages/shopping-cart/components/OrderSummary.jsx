import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OrderSummary = ({ 
  subtotal, 
  shipping, 
  tax, 
  discount, 
  total, 
  onApplyPromoCode, 
  onProceedToCheckout,
  isCheckoutLoading 
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  const handleApplyPromo = async () => {
    if (!promoCode?.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }

    setIsApplyingPromo(true);
    setPromoError('');
    setPromoSuccess('');

    // Simulate API call
    setTimeout(() => {
      const validCodes = ['SAVE10', 'WELCOME15', 'FASHION20'];
      
      if (validCodes?.includes(promoCode?.toUpperCase())) {
        const discountAmount = promoCode?.toUpperCase() === 'SAVE10' ? 10 : 
                              promoCode?.toUpperCase() === 'WELCOME15' ? 15 : 20;
        setPromoSuccess(`Promo code applied! You saved $${discountAmount}`);
        onApplyPromoCode(promoCode, discountAmount);
      } else {
        setPromoError('Invalid promo code. Please try again.');
      }
      
      setIsApplyingPromo(false);
    }, 1000);
  };

  const estimatedDelivery = new Date();
  estimatedDelivery?.setDate(estimatedDelivery?.getDate() + 5);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft sticky top-24">
      <h2 className="text-lg font-semibold text-primary mb-4">Order Summary</h2>
      {/* Promo Code Section */}
      <div className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e?.target?.value?.toUpperCase())}
            error={promoError}
            className="flex-1"
          />
          <Button
            variant="outline"
            onClick={handleApplyPromo}
            disabled={isApplyingPromo}
            loading={isApplyingPromo}
            className="whitespace-nowrap"
          >
            Apply
          </Button>
        </div>
        
        {promoSuccess && (
          <p className="text-success text-sm mt-2 flex items-center gap-1">
            <Icon name="CheckCircle" size={14} />
            {promoSuccess}
          </p>
        )}
      </div>
      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Subtotal</span>
          <span className="text-primary font-medium">${subtotal?.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Shipping</span>
          <span className="text-primary font-medium">
            {shipping === 0 ? 'Free' : `$${shipping?.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Tax</span>
          <span className="text-primary font-medium">${tax?.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Discount</span>
            <span className="text-success font-medium">-${discount?.toFixed(2)}</span>
          </div>
        )}
        
        <div className="border-t border-border pt-3">
          <div className="flex justify-between">
            <span className="font-semibold text-primary">Total</span>
            <span className="font-bold text-primary text-lg">${total?.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/* Shipping Info */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Truck" size={16} className="text-accent" />
          <span className="text-sm font-medium text-primary">Free Shipping</span>
        </div>
        <p className="text-sm text-text-secondary">
          Estimated delivery: {estimatedDelivery?.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })}
        </p>
      </div>
      {/* Security Badges */}
      <div className="flex items-center justify-center gap-4 mb-6 py-3 bg-muted rounded-lg">
        <div className="flex items-center gap-1">
          <Icon name="Shield" size={16} className="text-success" />
          <span className="text-xs text-text-secondary">Secure</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="Lock" size={16} className="text-success" />
          <span className="text-xs text-text-secondary">SSL Protected</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="CreditCard" size={16} className="text-success" />
          <span className="text-xs text-text-secondary">Safe Payment</span>
        </div>
      </div>
      {/* Checkout Button */}
      <Button
        variant="default"
        size="lg"
        fullWidth
        onClick={onProceedToCheckout}
        loading={isCheckoutLoading}
        className="mb-4"
      >
        Proceed to Checkout
      </Button>
      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-xs text-text-secondary mb-2">We accept</p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
            V
          </div>
          <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-400 rounded text-white text-xs flex items-center justify-center font-bold">
            M
          </div>
          <div className="w-8 h-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
            A
          </div>
          <div className="w-8 h-5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded text-white text-xs flex items-center justify-center font-bold">
            P
          </div>
        </div>
      </div>
      {/* Return Policy */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Icon name="RotateCcw" size={14} />
          <span>30-day free returns</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;