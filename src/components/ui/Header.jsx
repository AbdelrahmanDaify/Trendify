import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();

  const navigationItems = [
    { name: 'Women', path: '/women-s-category', isActive: location?.pathname === '/women-s-category' },
    { name: 'Men', path: '/men-s-category', isActive: location?.pathname === '/men-s-category' },
    { name: 'New Arrivals', path: '/homepage', isActive: location?.pathname === '/homepage' },
    { name: 'Sale', path: '/search-results', isActive: location?.pathname === '/search-results' }
  ];

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      window.location.href = `/search-results?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-brand border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-2 group">
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <circle cx="16" cy="16" r="15" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                <path
                  d="M10 12h12M10 16h8M10 20h10"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl font-serif font-medium text-primary tracking-tight">
              Trendify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  item?.isActive ? 'text-primary border-b-2 border-accent pb-1' : 'text-text-secondary'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    placeholder="Search products..."
                    className="w-64 px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSearch}
                    className="ml-2"
                  >
                    <Icon name="X" size={18} />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSearch}
                  className="hover:bg-muted"
                >
                  <Icon name="Search" size={20} />
                </Button>
              )}
            </div>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-muted"
            >
              <Icon name="Heart" size={20} />
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-muted"
            >
              <Icon name="User" size={20} />
            </Button>

            {/* Cart */}
            <Link to="/shopping-cart">
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-muted"
              >
                <Icon name="ShoppingBag" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cta text-cta-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-10 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <Icon
                    name="Search"
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="px-4 space-y-2">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.name}
                    to={item?.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-base font-medium transition-colors duration-200 ${
                      item?.isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {item?.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="px-4 pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Icon name="Heart" size={18} />
                    <span className="text-sm">Wishlist</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Icon name="User" size={18} />
                    <span className="text-sm">Account</span>
                  </Button>
                  
                  <Link to="/shopping-cart" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2 relative"
                    >
                      <Icon name="ShoppingBag" size={18} />
                      <span className="text-sm">Cart</span>
                      {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-cta text-cta-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                          {cartCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;