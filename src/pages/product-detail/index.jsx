import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import ReviewsSection from './components/ReviewsSection';
import StylingSection from './components/StylingSection';
import RecommendationsSection from './components/RecommendationsSection';

const ProductDetail = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    name: "Elegant Midi Dress",
    price: 89,
    originalPrice: 120,
    discount: 26,
    rating: 4.7,
    reviewCount: 234,
    description: `This elegant midi dress combines timeless sophistication with modern comfort. Crafted from premium fabric blend, it features a flattering silhouette that works for both professional and casual occasions. The versatile design makes it a perfect addition to any wardrobe.`,
    detailedDescription: `Experience the perfect blend of style and comfort with our Elegant Midi Dress. This versatile piece features a carefully tailored fit that flatters all body types, with thoughtful design details that elevate your everyday look.\n\nThe dress is constructed with premium materials and finished with meticulous attention to detail. From the perfectly placed seams to the comfortable lining, every element has been designed with the modern woman in mind.`,
    colors: [
    { value: "navy", name: "Navy Blue", hex: "#000080" },
    { value: "black", name: "Classic Black", hex: "#000000" },
    { value: "emerald", name: "Emerald Green", hex: "#50C878" },
    { value: "burgundy", name: "Burgundy", hex: "#800020" }],

    sizes: [
    { value: "xs", label: "XS", available: true },
    { value: "s", label: "S", available: true },
    { value: "m", label: "M", available: true },
    { value: "l", label: "L", available: true },
    { value: "xl", label: "XL", available: false },
    { value: "xxl", label: "XXL", available: true }],

    images: [
    {
      url: "https://images.unsplash.com/photo-1670914808941-0c133c6a25aa",
      alt: "Front view of elegant navy midi dress on model in natural lighting"
    },
    {
      url: "https://images.unsplash.com/photo-1585664414915-4ef2ab0ef7d5",
      alt: "Side profile view showing dress silhouette and fit details"
    },
    {
      url: "https://images.unsplash.com/photo-1600287792237-3f66db635a73",
      alt: "Back view of dress showing zipper closure and design details"
    },
    {
      url: "https://images.unsplash.com/photo-1545150207-443b3622213f",
      alt: "Close-up detail shot of fabric texture and stitching quality"
    },
    {
      url: "https://images.unsplash.com/photo-1700493374678-df32e712c090",
      alt: "Lifestyle shot of dress styled for evening occasion"
    }],

    fabricComposition: [
    { material: "Polyester", percentage: 65 },
    { material: "Viscose", percentage: 30 },
    { material: "Elastane", percentage: 5 }],

    features: [
    "Machine washable",
    "Wrinkle resistant",
    "Breathable fabric",
    "Hidden back zipper",
    "Fully lined",
    "Professional dry clean recommended"],

    modelInfo: {
      height: "5\'8\"",
      size: "M",
      measurements: {
        bust: "34",
        waist: "26",
        hips: "36"
      }
    },
    sizeChart: [
    { size: "XS", bust: "32", waist: "24", hips: "34" },
    { size: "S", bust: "34", waist: "26", hips: "36" },
    { size: "M", bust: "36", waist: "28", hips: "38" },
    { size: "L", bust: "38", waist: "30", hips: "40" },
    { size: "XL", bust: "40", waist: "32", hips: "42" },
    { size: "XXL", bust: "42", waist: "34", hips: "44" }],

    fitGuide: {
      fit: "True to size with a relaxed fit through the body",
      length: "Midi length, hits mid-calf on most body types",
      stretch: "Slight stretch for comfortable movement"
    },
    careInstructions: [
    { icon: "Droplets", text: "Machine wash cold" },
    { icon: "Sun", text: "Hang dry or tumble dry low" },
    { icon: "Zap", text: "Iron on low heat if needed" },
    { icon: "X", text: "Do not bleach" }],

    careTips: [
    "Wash with similar colors to prevent color bleeding",
    "Turn inside out before washing to protect the fabric",
    "Use a gentle detergent to maintain fabric quality",
    "Store on a hanger to prevent wrinkles"],

    shippingOptions: [
    {
      name: "Standard Shipping",
      description: "5-7 business days",
      price: "Free"
    },
    {
      name: "Express Shipping",
      description: "2-3 business days",
      price: "$9.99"
    },
    {
      name: "Next Day Delivery",
      description: "Order by 2 PM",
      price: "$19.99"
    }]

  };

  const breadcrumbs = [
  { name: "Home", path: "/homepage" },
  { name: "Women", path: "/women-s-category" },
  { name: "Dresses", path: "/women-s-category" },
  { name: "Midi Dresses", path: "/women-s-category" },
  { name: product?.name, path: "/product-detail" }];


  const handleAddToCart = (options) => {
    console.log('Adding to cart:', { product, ...options });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Notification */}
      {showNotification &&
      <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-4 py-3 rounded-lg shadow-elevated animate-slide-up">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} />
            <span className="text-sm font-medium">
              {isWishlisted ? 'Added to wishlist!' : 'Added to cart!'}
            </span>
          </div>
        </div>
      }
      <main className="pt-16">
        {/* Breadcrumb Navigation */}
        <div className="bg-muted border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm overflow-x-auto">
              {breadcrumbs?.map((crumb, index) =>
              <React.Fragment key={crumb?.name}>
                  {index === breadcrumbs?.length - 1 ?
                <span className="text-text-secondary font-medium truncate">
                      {crumb?.name}
                    </span> :

                <>
                      <Link
                    to={crumb?.path}
                    className="text-accent hover:text-primary transition-colors whitespace-nowrap">

                        {crumb?.name}
                      </Link>
                      <Icon name="ChevronRight" size={14} className="text-text-secondary flex-shrink-0" />
                    </>
                }
                </React.Fragment>
              )}
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Images */}
            <div className="order-1">
              <ProductImageGallery images={product?.images} productName={product?.name} />
            </div>

            {/* Product Information */}
            <div className="order-2">
              <ProductInfo
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist} />

            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12">
            <ProductTabs product={product} />
          </div>

          {/* Styling Section */}
          <div className="mb-12">
            <StylingSection product={product} />
          </div>

          {/* Reviews Section */}
          <div className="mb-12">
            <ReviewsSection
              reviews={[]}
              averageRating={product?.rating}
              totalReviews={product?.reviewCount} />

          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <RecommendationsSection />
          </div>
        </div>

        {/* Sticky Add to Cart Bar (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <p className="font-medium text-primary">{product?.name}</p>
              <p className="text-accent font-semibold">${product?.price}</p>
            </div>
            <button
              onClick={handleAddToWishlist}
              className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">

              <Icon name="Heart" size={20} className={isWishlisted ? 'text-cta fill-current' : ''} />
            </button>
            <button
              onClick={() => handleAddToCart({ size: 'M', color: product?.colors?.[0], quantity: 1 })}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">

              Add to Cart
            </button>
          </div>
        </div>
      </main>
      {/* Footer Spacer for Mobile Sticky Bar */}
      <div className="lg:hidden h-20" />
    </div>);

};

export default ProductDetail;