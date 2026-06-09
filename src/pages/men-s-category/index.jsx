import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import CategoryHero from './components/CategoryHero';
import CategoryNavigation from './components/CategoryNavigation';
import FilterSidebar from './components/FilterSidebar';
import SortingControls from './components/SortingControls';
import ProductGrid from './components/ProductGrid';
import StyleGuideSection from './components/StyleGuideSection';
import Pagination from './components/Pagination';
import Icon from '../../components/AppIcon';

const MensCategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    price: [],
    brand: [],
    style: []
  });

  const itemsPerPage = 20;

  // Mock products data
  const allProducts = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    brand: "Trendify",
    price: 89,
    originalPrice: 120,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1628019672181-2d3f62401f2f",
    imageAlt: "Professional white oxford shirt on wooden hanger with clean pressed finish",
    colors: ["#FFFFFF", "#87CEEB", "#FFB6C1"],
    isNew: true,
    category: 'shirts',
    description: "Timeless oxford shirt crafted from premium cotton with a tailored fit perfect for business and casual occasions."
  },
  {
    id: 2,
    name: "Slim Fit Chinos",
    brand: "Urban Style",
    price: 75,
    rating: 4.3,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1732104568266-08499f235c3e",
    imageAlt: "Navy blue slim fit chino pants displayed on modern clothing rack",
    colors: ["#1E3A8A", "#6B7280", "#A16207"],
    isNew: false,
    category: 'pants',
    description: "Versatile slim-fit chinos made from stretch cotton twill for comfort and style in any setting."
  },
  {
    id: 3,
    name: "Wool Blend Blazer",
    brand: "Classic Fit",
    price: 245,
    originalPrice: 320,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1701357418240-7fbf9926eae4",
    imageAlt: "Charcoal gray wool blazer hanging on elegant wooden hanger in boutique setting",
    colors: ["#374151", "#1F2937", "#6B7280"],
    isNew: false,
    category: 'jackets',
    description: "Sophisticated wool blend blazer with modern tailoring and versatile styling for professional and social occasions."
  },
  {
    id: 4,
    name: "Premium Denim Jeans",
    brand: "Modern Man",
    price: 125,
    rating: 4.4,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1718681501213-092d387b57f0",
    imageAlt: "Dark wash premium denim jeans with subtle fading and modern straight cut",
    colors: ["#1F2937", "#374151", "#4B5563"],
    isNew: true,
    category: 'pants',
    description: "Premium selvedge denim with perfect fade and comfortable stretch for everyday wear and weekend adventures."
  },
  {
    id: 5,
    name: "Leather Dress Shoes",
    brand: "Trendify",
    price: 189,
    originalPrice: 250,
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1603796847227-9183fd69e884",
    imageAlt: "Polished black leather oxford dress shoes with classic brogue detailing",
    colors: ["#000000", "#A16207", "#8B4513"],
    isNew: false,
    category: 'shoes',
    description: "Handcrafted leather dress shoes with traditional construction and modern comfort technology."
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    brand: "Urban Style",
    price: 165,
    rating: 4.8,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1670080622713-0309c2815470",
    imageAlt: "Luxurious navy cashmere crew neck sweater folded on marble surface",
    colors: ["#1E3A8A", "#6B7280", "#000000"],
    isNew: true,
    category: 'shirts',
    description: "Luxurious 100% cashmere sweater with ribbed trim and relaxed fit for ultimate comfort and sophistication."
  },
  {
    id: 7,
    name: "Leather Watch",
    brand: "Classic Fit",
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1690392377019-be8ba510b5b9",
    imageAlt: "Elegant silver watch with brown leather strap and classic white dial face",
    colors: ["#A16207", "#000000", "#8B4513"],
    isNew: false,
    category: 'accessories',
    description: "Sophisticated timepiece with Swiss movement and genuine leather strap for the discerning gentleman."
  },
  {
    id: 8,
    name: "Athletic Joggers",
    brand: "Modern Man",
    price: 65,
    rating: 4.2,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1719473442915-016f3ebda79a",
    imageAlt: "Comfortable gray athletic joggers with tapered fit and drawstring waist",
    colors: ["#6B7280", "#000000", "#1F2937"],
    isNew: true,
    category: 'activewear',
    description: "Performance joggers with moisture-wicking fabric and ergonomic design for active lifestyle and casual comfort."
  }];


  // Filter products based on active category and filters
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered?.filter((product) => product?.category === activeCategory);
    }

    // Apply other filters
    Object.keys(filters)?.forEach((filterType) => {
      if (filters?.[filterType]?.length > 0) {


        // Add filter logic here based on filter type
        // For demo purposes, we'll keep all products
      }});
    // Sort products
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
  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleFilterChange = (sectionId, optionId, checked) => {
    if (sectionId === 'clear-all') {
      setFilters({
        size: [],
        color: [],
        price: [],
        brand: [],
        style: []
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [sectionId]: checked ?
        [...prev?.[sectionId], optionId] :
        prev?.[sectionId]?.filter((id) => id !== optionId)
      }));
    }
    setCurrentPage(1);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile filter on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <CategoryHero />
        
        {/* Category Navigation */}
        <CategoryNavigation
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange} />

        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex">
            {/* Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onFilterChange={handleFilterChange} />

            
            {/* Products Section */}
            <div className="flex-1 lg:ml-6">
              {/* Sorting Controls */}
              <SortingControls
                totalProducts={filteredProducts?.length}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                onFilterToggle={() => setIsFilterOpen(true)} />

              
              {/* Products Grid */}
              <div className="py-6">
                {currentProducts?.length > 0 ?
                <ProductGrid
                  products={currentProducts}
                  viewMode={viewMode} /> :


                <div className="text-center py-16">
                    <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">No products found</h3>
                    <p className="text-text-secondary mb-6">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                    onClick={() => handleFilterChange('clear-all')}
                    className="text-accent hover:text-accent/80 font-medium">

                      Clear all filters
                    </button>
                  </div>
                }
              </div>
              
              {/* Pagination */}
              {totalPages > 1 &&
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />

              }
            </div>
          </div>
        </div>
        
        {/* Style Guide Section */}
        <StyleGuideSection />
      </main>
    </div>);

};

export default MensCategoryPage;