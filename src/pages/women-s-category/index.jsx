import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import SortDropdown from './components/SortDropdown';
import ViewModeToggle from './components/ViewModeToggle';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import CategoryHero from './components/CategoryHero';
import TrendingSection from './components/TrendingSection';
import QuickViewModal from './components/QuickViewModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const WomensCategoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid-large');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    price: [],
    brand: [],
    style: [],
    occasion: []
  });

  // Mock products data
  const mockProducts = [
  {
    id: 1,
    name: "Elegant Midi Dress",
    brand: "Trendify",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.5,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1624821377451-3a8ce189c3d6",
    imageAlt: "Woman in elegant navy midi dress with three-quarter sleeves standing in natural lighting",
    hoverImage: "https://images.unsplash.com/photo-1666112512820-55a44b25c7f6",
    colors: ["#1E3A8A", "#000000", "#DC2626"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isWishlisted: false,
    description: "A sophisticated midi dress perfect for both office and evening occasions. Features a flattering A-line silhouette with elegant draping."
  },
  {
    id: 2,
    name: "Casual Cotton Blouse",
    brand: "Urban Chic",
    price: 45.99,
    rating: 4.2,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1633943927975-391a217c7c44",
    imageAlt: "Woman wearing white cotton blouse with rolled sleeves in casual outdoor setting",
    hoverImage: "https://images.unsplash.com/photo-1642607144319-a9570cc28dfb",
    colors: ["#FFFFFF", "#F5F5DC", "#FFB6C1"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isWishlisted: true,
    description: "Comfortable and versatile cotton blouse with a relaxed fit. Perfect for everyday wear with jeans or dress pants."
  },
  {
    id: 3,
    name: "High-Waisted Skinny Jeans",
    brand: "Modern Muse",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1623671981116-9952f48ca803",
    imageAlt: "Model wearing high-waisted dark blue skinny jeans with white top in studio setting",
    hoverImage: "https://images.unsplash.com/photo-1717820573262-5c85c59d3de1",
    colors: ["#1E3A8A", "#000000", "#4B5563"],
    sizes: ["24", "26", "28", "30", "32"],
    isNew: false,
    isWishlisted: false,
    description: "Premium denim with stretch for comfort and style. Features a flattering high-waisted cut that pairs well with any top."
  },
  {
    id: 4,
    name: "Floral Print Maxi Dress",
    brand: "Style Studio",
    price: 129.99,
    rating: 4.4,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1630579588100-af5d652c7e07",
    imageAlt: "Woman in flowing floral maxi dress with pink and white flowers walking in garden setting",
    hoverImage: "https://images.unsplash.com/photo-1678536517173-505b75923f68",
    colors: ["#FFB6C1", "#FFFFFF", "#32CD32"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    isWishlisted: false,
    description: "Romantic floral maxi dress with a flowing silhouette. Perfect for summer events and special occasions."
  },
  {
    id: 5,
    name: "Structured Blazer",
    brand: "Classic & Co",
    price: 159.99,
    originalPrice: 199.99,
    discount: 20,
    rating: 4.6,
    reviewCount: 94,
    image: "https://images.unsplash.com/photo-1681842234063-47ddda844ec1",
    imageAlt: "Professional woman in tailored black blazer with white shirt in modern office environment",
    hoverImage: "https://images.unsplash.com/photo-1649664623072-33f4b4dc932c",
    colors: ["#000000", "#1E3A8A", "#8B4513"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    isWishlisted: true,
    description: "Perfectly tailored blazer that adds sophistication to any outfit. Features structured shoulders and a flattering fit."
  },
  {
    id: 6,
    name: "Knit Sweater",
    brand: "Trendify",
    price: 69.99,
    rating: 4.3,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1700814860868-fa621bee9735",
    imageAlt: "Woman wearing cozy cream knit sweater with turtleneck in autumn outdoor setting",
    hoverImage: "https://images.unsplash.com/photo-1517221741647-c5ff88dc5577",
    colors: ["#F5F5DC", "#8B4513", "#000000"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isWishlisted: false,
    description: "Soft and cozy knit sweater perfect for layering. Features a comfortable fit and timeless design."
  },
  {
    id: 7,
    name: "Pleated Midi Skirt",
    brand: "Urban Chic",
    price: 55.99,
    rating: 4.1,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1549816198-823d5a1411c8",
    imageAlt: "Woman in navy pleated midi skirt with white blouse standing in minimalist indoor setting",
    hoverImage: "https://images.unsplash.com/photo-1677594333284-68463516a828",
    colors: ["#1E3A8A", "#000000", "#8B4513"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    isWishlisted: false,
    description: "Elegant pleated midi skirt that moves beautifully. Perfect for both casual and dressy occasions."
  },
  {
    id: 8,
    name: "Silk Camisole",
    brand: "Modern Muse",
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    rating: 4.8,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1621342356472-d785a7ccbbc2",
    imageAlt: "Woman wearing champagne silk camisole with delicate straps in soft natural lighting",
    hoverImage: "https://images.unsplash.com/photo-1639738078397-eee161d075ce",
    colors: ["#F5F5DC", "#FFB6C1", "#000000"],
    sizes: ["XS", "S", "M", "L"],
    isNew: false,
    isWishlisted: true,
    description: "Luxurious silk camisole with adjustable straps. A versatile piece that can be dressed up or down."
  }];


  const breadcrumbItems = [
  { label: "Women\'s Fashion" }];


  const productsPerPage = 12;
  const totalProducts = mockProducts?.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    const page = parseInt(searchParams?.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleFilterChange = (filterType, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: checked ?
      [...prev?.[filterType], value] :
      prev?.[filterType]?.filter((item) => item !== value)
    }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      size: [],
      color: [],
      price: [],
      brand: [],
      style: [],
      occasion: []
    });
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToWishlist = (productId) => {
    console.log('Added to wishlist:', productId);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page?.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFilteredProducts = () => {
    let filtered = [...mockProducts];

    // Apply filters
    Object.keys(filters)?.forEach((filterType) => {
      if (filters?.[filterType]?.length > 0) {
        filtered = filtered?.filter((product) => {
          // Add filtering logic based on filter type
          return true; // Simplified for demo
        });
      }
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-high':
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'newest':
        filtered?.sort((a, b) => b?.isNew - a?.isNew);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts?.slice(startIndex, startIndex + productsPerPage);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages?.push(i);
    }

    return (
      <div className="flex items-center justify-center space-x-2 mt-12">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>

          <Icon name="ChevronLeft" size={16} />
        </Button>
        {startPage > 1 &&
        <>
            <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(1)}>

              1
            </Button>
            {startPage > 2 && <span className="text-text-secondary">...</span>}
          </>
        }
        {pages?.map((page) =>
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(page)}>

            {page}
          </Button>
        )}
        {endPage < totalPages &&
        <>
            {endPage < totalPages - 1 && <span className="text-text-secondary">...</span>}
            <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(totalPages)}>

              {totalPages}
            </Button>
          </>
        }
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>

          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>);

  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Category Hero */}
          <CategoryHero />

          {/* Trending Section */}
          <TrendingSection />

          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters} />


            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden">

                    <Icon name="Filter" size={16} className="mr-2" />
                    Filters
                  </Button>
                  
                  <div className="text-sm text-text-secondary">
                    Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts?.length)} of {filteredProducts?.length} products
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <ViewModeToggle
                    currentView={viewMode}
                    onViewChange={handleViewModeChange} />

                  <SortDropdown
                    currentSort={sortBy}
                    onSortChange={handleSortChange} />

                </div>
              </div>

              {/* Products Grid */}
              {currentProducts?.length > 0 ?
              <ProductGrid
                products={currentProducts}
                viewMode={viewMode}
                onQuickView={handleQuickView}
                onAddToWishlist={handleAddToWishlist}
                onAddToCart={handleAddToCart} /> :


              <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
                  <h3 className="text-lg font-medium text-primary mb-2">No products found</h3>
                  <p className="text-text-secondary mb-4">
                    Try adjusting your filters or search terms
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Clear All Filters
                  </Button>
                </div>
              }

              {/* Pagination */}
              {renderPagination()}
            </div>
          </div>
        </div>
      </main>
      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist} />

    </div>);

};

export default WomensCategoryPage;