import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import RecentlyViewed from './components/RecentlyViewed';
import RecommendedItems from './components/RecommendedItems';
import SavedForLater from './components/SavedForLater';
import EmptyCart from './components/EmptyCart';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Mock data
  useEffect(() => {
    const mockCartItems = [
    {
      id: 1,
      name: "Elegant Silk Blouse with Pearl Buttons",
      brand: "Trendify Collection",
      price: 89.99,
      originalPrice: 129.99,
      quantity: 1,
      size: "M",
      color: "Ivory",
      stock: 8,
      image: "https://images.unsplash.com/photo-1564139790346-9f4e49c82506",
      imageAlt: "Elegant ivory silk blouse with pearl buttons on white background"
    },
    {
      id: 2,
      name: "High-Waisted Denim Jeans - Vintage Wash",
      brand: "Urban Essentials",
      price: 79.99,
      originalPrice: null,
      quantity: 2,
      size: "30",
      color: "Medium Blue",
      stock: 3,
      image: "https://images.unsplash.com/photo-1721637245920-4073818252b2",
      imageAlt: "High-waisted medium blue denim jeans with vintage wash finish"
    },
    {
      id: 3,
      name: "Cashmere Blend Cardigan - Oversized Fit",
      brand: "Luxury Knits",
      price: 149.99,
      originalPrice: 199.99,
      quantity: 1,
      size: "L",
      color: "Camel",
      stock: 0,
      image: "https://images.unsplash.com/photo-1639194418909-21eb200e483e",
      imageAlt: "Oversized camel-colored cashmere blend cardigan on model"
    }];


    const mockSavedItems = [
    {
      id: 4,
      name: "Floral Print Midi Dress",
      brand: "Summer Collection",
      price: 69.99,
      originalPrice: 89.99,
      size: "S",
      color: "Navy Floral",
      stock: 12,
      image: "https://images.unsplash.com/photo-1691167811863-8a2fab439ff1",
      imageAlt: "Navy blue midi dress with delicate floral print pattern"
    },
    {
      id: 5,
      name: "Leather Ankle Boots",
      brand: "Classic Footwear",
      price: 129.99,
      originalPrice: null,
      size: "8",
      color: "Black",
      stock: 5,
      image: "https://images.unsplash.com/photo-1672856398900-6057a5b3842d",
      imageAlt: "Black leather ankle boots with side zipper and block heel"
    }];


    const mockRecentlyViewed = [
    {
      id: 6,
      name: "Striped Cotton T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1666358070734-b9d6590278c9",
      imageAlt: "White cotton t-shirt with navy blue horizontal stripes"
    },
    {
      id: 7,
      name: "Wool Blend Blazer",
      price: 159.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1663624027823-14726a5777ad",
      imageAlt: "Tailored navy wool blend blazer with notched lapels"
    },
    {
      id: 8,
      name: "Pleated Midi Skirt",
      price: 54.99,
      originalPrice: 74.99,
      image: "https://images.unsplash.com/photo-1596606693009-e5770165834a",
      imageAlt: "Black pleated midi skirt with elastic waistband"
    },
    {
      id: 9,
      name: "Knit Sweater Vest",
      price: 39.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1701052446662-d233087b9a00",
      imageAlt: "Cream colored knit sweater vest with V-neck design"
    }];


    const mockRecommendedItems = [
    {
      id: 10,
      name: "Satin Slip Dress - Bias Cut",
      brand: "Evening Elegance",
      price: 94.99,
      originalPrice: 139.99,
      rating: 4.5,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1675415285494-c27e28a8c7d2",
      imageAlt: "Emerald green satin slip dress with bias cut silhouette"
    },
    {
      id: 11,
      name: "Cropped Leather Jacket",
      brand: "Rebel Chic",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1681319556527-bd789534bab3",
      imageAlt: "Black cropped leather jacket with silver hardware details"
    },
    {
      id: 12,
      name: "Wide Leg Trousers",
      brand: "Modern Minimalist",
      price: 79.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1598300042105-5c63e1ea2d8d",
      imageAlt: "High-waisted wide leg trousers in charcoal gray fabric"
    }];


    setCartItems(mockCartItems);
    setSavedItems(mockSavedItems);
    setRecentlyViewed(mockRecentlyViewed);
    setRecommendedItems(mockRecommendedItems);
  }, []);

  // Calculate totals
  const subtotal = cartItems?.reduce((sum, item) => sum + item?.price * item?.quantity, 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - appliedDiscount;

  // Cart actions
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((items) =>
    items?.map((item) =>
    item?.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((items) => items?.filter((item) => item?.id !== itemId));
  };

  const handleSaveForLater = (itemId) => {
    const item = cartItems?.find((item) => item?.id === itemId);
    if (item) {
      setSavedItems((prev) => [...prev, { ...item, quantity: 1 }]);
      handleRemoveItem(itemId);
    }
  };

  const handleMoveToCart = (item) => {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    setSavedItems((prev) => prev?.filter((savedItem) => savedItem?.id !== item?.id));
  };

  const handleRemoveSaved = (itemId) => {
    setSavedItems((items) => items?.filter((item) => item?.id !== itemId));
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems?.find((cartItem) => cartItem?.id === item?.id);
    if (existingItem) {
      handleUpdateQuantity(item?.id, existingItem?.quantity + 1);
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1, size: 'M', color: 'Default' }]);
    }
  };

  const handleApplyPromoCode = (code, discountAmount) => {
    setAppliedDiscount(discountAmount);
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutLoading(true);

    // Simulate checkout process
    setTimeout(() => {
      setIsCheckoutLoading(false);
      // In a real app, this would navigate to checkout page
      alert('Proceeding to checkout... (Demo)');
    }, 2000);
  };

  const handleContinueShopping = () => {
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <button onClick={handleContinueShopping} className="hover:text-primary transition-colors">
              Home
            </button>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Shopping Cart</span>
          </nav>

          {cartItems?.length === 0 ?
          <EmptyCart /> :

          <>
              {/* Page Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    Shopping Cart
                  </h1>
                  <p className="text-text-secondary">
                    {cartItems?.length} {cartItems?.length === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
                
                <Button
                variant="outline"
                onClick={handleContinueShopping}
                className="sm:w-auto">

                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Continue Shopping
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cartItems?.map((item) =>
                  <CartItem
                    key={item?.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                    onSaveForLater={handleSaveForLater} />

                  )}
                  </div>

                  {/* Saved for Later */}
                  {savedItems?.length > 0 &&
                <SavedForLater
                  items={savedItems}
                  onMoveToCart={handleMoveToCart}
                  onRemove={handleRemoveSaved} />

                }

                  {/* Recently Viewed */}
                  <RecentlyViewed
                  items={recentlyViewed}
                  onAddToCart={handleAddToCart} />

                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <OrderSummary
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                  discount={appliedDiscount}
                  total={total}
                  onApplyPromoCode={handleApplyPromoCode}
                  onProceedToCheckout={handleProceedToCheckout}
                  isCheckoutLoading={isCheckoutLoading} />

                </div>
              </div>

              {/* Recommended Items */}
              <div className="mt-12">
                <RecommendedItems
                items={recommendedItems}
                onAddToCart={handleAddToCart} />

              </div>
            </>
          }
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Icon name="Truck" size={24} className="text-accent" />
              <h3 className="font-medium text-primary">Free Shipping</h3>
              <p className="text-sm text-text-secondary">On orders over $75</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <Icon name="RotateCcw" size={24} className="text-accent" />
              <h3 className="font-medium text-primary">Easy Returns</h3>
              <p className="text-sm text-text-secondary">30-day return policy</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <Icon name="Shield" size={24} className="text-accent" />
              <h3 className="font-medium text-primary">Secure Payment</h3>
              <p className="text-sm text-text-secondary">SSL encrypted checkout</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <Icon name="Headphones" size={24} className="text-accent" />
              <h3 className="font-medium text-primary">24/7 Support</h3>
              <p className="text-sm text-text-secondary">Customer service</p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-text-secondary">
            <p>&copy; {new Date()?.getFullYear()} Trendify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default ShoppingCart;