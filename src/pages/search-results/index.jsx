import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import SearchHeader from './components/SearchHeader';
import FilterSidebar from './components/FilterSidebar';
import SortControls from './components/SortControls';
import ProductGrid from './components/ProductGrid';
import QuickViewModal from './components/QuickViewModal';
import ActiveFilters from './components/ActiveFilters';


const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get search query from URL params
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams?.get('q') || '';

  // State management
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
    sizes: [],
    colors: [],
    brands: [],
    ratings: []
  });

  // Mock products data
  const mockProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    brand: "Trendify",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1636544216792-54cefa469c46",
    hoverImage: "https://images.unsplash.com/photo-1636544216792-54cefa469c46",
    imageAlt: "Woman wearing white cotton t-shirt in casual pose against neutral background",
    description: "Soft, breathable cotton t-shirt perfect for everyday wear. Features a relaxed fit and classic crew neckline.",
    isNew: true,
    isWishlisted: false,
    stock: 15,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'gray', name: 'Gray', hex: '#6B7280' }],

    category: 'women',
    priceRange: '25-50'
  },
  {
    id: 2,
    name: "Denim Jacket Vintage Wash",
    brand: "Urban Chic",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1572122936109-ce84b9cd5439",
    hoverImage: "https://images.unsplash.com/photo-1572122936109-ce84b9cd5439",
    imageAlt: "Classic blue denim jacket with vintage wash and button closure displayed on model",
    description: "Timeless denim jacket with vintage wash finish. Perfect layering piece for any season.",
    isNew: false,
    isWishlisted: true,
    stock: 8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
    { id: 'blue', name: 'Denim Blue', hex: '#2563EB' },
    { id: 'black', name: 'Black Denim', hex: '#000000' }],

    category: 'women',
    priceRange: '50-100'
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    brand: "Style & Co",
    price: 65.00,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1678536517173-505b75923f68",
    hoverImage: "https://images.unsplash.com/photo-1678536517173-505b75923f68",
    imageAlt: "Elegant floral print summer dress in flowing fabric with feminine silhouette",
    description: "Lightweight floral dress perfect for summer occasions. Features a flattering A-line silhouette.",
    isNew: false,
    isWishlisted: false,
    stock: 12,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
    { id: 'pink', name: 'Floral Pink', hex: '#EC4899' },
    { id: 'blue', name: 'Floral Blue', hex: '#2563EB' }],

    category: 'women',
    priceRange: '50-100'
  },
  {
    id: 4,
    name: "Men\'s Casual Polo Shirt",
    brand: "Classic Wear",
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.4,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1665114100016-5adb0d036176",
    hoverImage: "https://images.unsplash.com/photo-1665114100016-5adb0d036176",
    imageAlt: "Man wearing navy blue polo shirt with collar and button placket in casual setting",
    description: "Premium cotton polo shirt with classic fit. Perfect for casual and semi-formal occasions.",
    isNew: false,
    isWishlisted: false,
    stock: 20,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
    { id: 'blue', name: 'Navy Blue', hex: '#2563EB' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'black', name: 'Black', hex: '#000000' }],

    category: 'men',
    priceRange: '25-50'
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    brand: "Modern Fit",
    price: 125.00,
    originalPrice: 150.00,
    rating: 4.8,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    hoverImage: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    imageAlt: "Brown leather crossbody bag with adjustable strap and gold hardware details",
    description: "Genuine leather crossbody bag with adjustable strap. Features multiple compartments for organization.",
    isNew: true,
    isWishlisted: true,
    stock: 5,
    isLowStock: true,
    sizes: ['One Size'],
    colors: [
    { id: 'brown', name: 'Cognac Brown', hex: '#A16207' },
    { id: 'black', name: 'Black', hex: '#000000' }],

    category: 'accessories',
    priceRange: '100-200'
  },
  {
    id: 6,
    name: "Sneakers White Leather",
    brand: "Trendify",
    price: 95.00,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1563741055429-b6aad478d454",
    hoverImage: "https://images.unsplash.com/photo-1563741055429-b6aad478d454",
    imageAlt: "Clean white leather sneakers with minimal design and comfortable sole",
    description: "Premium white leather sneakers with comfortable cushioning. Perfect for everyday casual wear.",
    isNew: false,
    isWishlisted: false,
    stock: 18,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: [
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'black', name: 'Black', hex: '#000000' }],

    category: 'shoes',
    priceRange: '50-100'
  },
  {
    id: 7,
    name: "Wool Blend Sweater",
    brand: "Style & Co",
    price: 78.00,
    originalPrice: 98.00,
    rating: 4.2,
    reviewCount: 94,
    image: "https://images.unsplash.com/photo-1670080589800-6416c8ce8a14",
    hoverImage: "https://images.unsplash.com/photo-1670080589800-6416c8ce8a14",
    imageAlt: "Cozy beige wool blend sweater with ribbed texture and comfortable fit",
    description: "Soft wool blend sweater with ribbed detailing. Provides warmth and style for cooler weather.",
    isNew: false,
    isWishlisted: false,
    stock: 14,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
    { id: 'beige', name: 'Beige', hex: '#F5F5DC' },
    { id: 'gray', name: 'Gray', hex: '#6B7280' },
    { id: 'black', name: 'Black', hex: '#000000' }],

    category: 'women',
    priceRange: '50-100'
  },
  {
    id: 8,
    name: "Chino Pants Slim Fit",
    brand: "Classic Wear",
    price: 55.00,
    originalPrice: 70.00,
    rating: 4.5,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1542225800-1791fde785ab",
    hoverImage: "https://images.unsplash.com/photo-1542225800-1791fde785ab",
    imageAlt: "Khaki chino pants with slim fit tailoring and clean pressed appearance",
    description: "Classic chino pants with slim fit tailoring. Versatile piece suitable for both casual and business casual looks.",
    isNew: false,
    isWishlisted: false,
    stock: 22,
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
    { id: 'khaki', name: 'Khaki', hex: '#F0E68C' },
    { id: 'navy', name: 'Navy', hex: '#2563EB' },
    { id: 'black', name: 'Black', hex: '#000000' }],

    category: 'men',
    priceRange: '50-100'
  }];


  // Filter products based on current filters and search query
  const filteredProducts = mockProducts?.filter((product) => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      const matchesSearch =
      product?.name?.toLowerCase()?.includes(query) ||
      product?.brand?.toLowerCase()?.includes(query) ||
      product?.description?.toLowerCase()?.includes(query);

      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters?.categories?.length > 0) {
      if (!filters?.categories?.includes(product?.category)) return false;
    }

    // Price range filter
    if (filters?.priceRanges?.length > 0) {
      if (!filters?.priceRanges?.includes(product?.priceRange)) return false;
    }

    // Size filter
    if (filters?.sizes?.length > 0) {
      const hasMatchingSize = filters?.sizes?.some((size) =>
      product?.sizes?.includes(size?.toUpperCase())
      );
      if (!hasMatchingSize) return false;
    }

    // Color filter
    if (filters?.colors?.length > 0) {
      const hasMatchingColor = filters?.colors?.some((color) =>
      product?.colors?.some((productColor) => productColor?.id === color)
      );
      if (!hasMatchingColor) return false;
    }

    // Brand filter
    if (filters?.brands?.length > 0) {
      const brandId = product?.brand?.toLowerCase()?.replace(/\s+/g, '-')?.replace(/&/g, '');
      if (!filters?.brands?.includes(brandId)) return false;
    }

    // Rating filter
    if (filters?.ratings?.length > 0) {
      const hasMatchingRating = filters?.ratings?.some((rating) => {
        const minRating = parseInt(rating?.split('-')?.[0]);
        return product?.rating >= minRating;
      });
      if (!hasMatchingRating) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'rating':
        return b?.rating - a?.rating;
      case 'newest':
        return b?.isNew - a?.isNew;
      case 'popularity':
        return b?.reviewCount - a?.reviewCount;
      case 'discount':
        const aDiscount = a?.originalPrice ? (a?.originalPrice - a?.price) / a?.originalPrice : 0;
        const bDiscount = b?.originalPrice ? (b?.originalPrice - b?.price) / b?.originalPrice : 0;
        return bDiscount - aDiscount;
      default:
        return 0;
    }
  });

  // Handle search
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    // Update URL without page reload
    const newSearchParams = new URLSearchParams(location.search);
    if (query) {
      newSearchParams?.set('q', query);
    } else {
      newSearchParams?.delete('q');
    }
    navigate(`${location?.pathname}?${newSearchParams?.toString()}`, { replace: true });
  };

  // Handle voice search
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsVoiceActive(true);
      };

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        handleSearchChange(transcript);
      };

      recognition.onend = () => {
        setIsVoiceActive(false);
      };

      recognition.onerror = () => {
        setIsVoiceActive(false);
        alert('Voice search is not supported or microphone access was denied.');
      };

      recognition?.start();
    } else {
      alert('Voice search is not supported in your browser.');
    }
  };

  // Handle image search
  const handleImageSearch = (file) => {
    // Mock image search functionality
    console.log('Image search with file:', file);
    // In a real app, this would upload the image and search for similar products
    handleSearchChange('similar products');
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: isChecked ?
      [...(prev?.[filterType] || []), value] :
      (prev?.[filterType] || [])?.filter((item) => item !== value)
    }));
  };

  // Handle filter removal
  const handleRemoveFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: (prev?.[filterType] || [])?.filter((item) => item !== value)
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      sizes: [],
      colors: [],
      brands: [],
      ratings: []
    });
  };

  // Save filters (mock functionality)
  const handleSaveFilters = () => {
    localStorage.setItem('savedFilters', JSON.stringify(filters));
    alert('Filters saved successfully!');
  };

  // Wishlist toggle
  const handleWishlistToggle = (productId) => {
    console.log('Toggle wishlist for product:', productId);
    // In a real app, this would update the wishlist state
  };

  // Quick view
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  // Add to cart
  const handleAddToCart = (productData) => {
    console.log('Add to cart:', productData);
    // In a real app, this would add the product to cart
  };

  // Get active filters count
  const getActiveFiltersCount = () => {
    return Object.values(filters)?.reduce((count, filterArray) => count + filterArray?.length, 0);
  };

  // Close mobile filter sidebar when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onVoiceSearch={handleVoiceSearch}
        onImageSearch={handleImageSearch}
        isVoiceActive={isVoiceActive}
        totalResults={sortedProducts?.length} />

      <ActiveFilters
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearAll={handleClearFilters} />

      <SortControls
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onToggleFilters={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
        activeFiltersCount={getActiveFiltersCount()} />

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            onSaveFilters={handleSaveFilters}
            isOpen={isFilterSidebarOpen}
            onToggle={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)} />


          <ProductGrid
            products={sortedProducts}
            viewMode={viewMode}
            onWishlistToggle={handleWishlistToggle}
            onQuickView={handleQuickView} />

        </div>
      </div>
      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle} />

    </div>);

};

export default SearchResults;