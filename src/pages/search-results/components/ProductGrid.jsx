import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ products, viewMode, onWishlistToggle, onQuickView }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const ProductCard = ({ product }) => {
    const isHovered = hoveredProduct === product?.id;
    const discountPercentage = product?.originalPrice 
      ? Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100)
      : 0;

    return (
      <div
        className="group relative bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-elevated"
        onMouseEnter={() => setHoveredProduct(product?.id)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Link to={`/product-detail?id=${product?.id}`}>
            <Image
              src={isHovered && product?.hoverImage ? product?.hoverImage : product?.image}
              alt={product?.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product?.isNew && (
              <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded">
                New
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-cta text-cta-foreground text-xs font-medium px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {product?.isLowStock && (
              <span className="bg-warning text-warning-foreground text-xs font-medium px-2 py-1 rounded">
                Low Stock
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`
            absolute top-2 right-2 flex flex-col space-y-1 transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onWishlistToggle(product?.id)}
              className="w-8 h-8 p-0 rounded-full shadow-soft"
            >
              <Icon 
                name="Heart" 
                size={14} 
                className={product?.isWishlisted ? 'fill-current text-cta' : ''} 
              />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onQuickView(product)}
              className="w-8 h-8 p-0 rounded-full shadow-soft"
            >
              <Icon name="Eye" size={14} />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className={`
            absolute bottom-2 left-2 right-2 transition-all duration-300
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <Button
              variant="default"
              size="sm"
              className="w-full text-xs"
              onClick={() => console.log('Add to cart:', product?.id)}
            >
              <Icon name="ShoppingBag" size={14} className="mr-1" />
              Quick Add
            </Button>
          </div>
        </div>
        {/* Product Info */}
        <div className="p-3">
          <div className="mb-1">
            <p className="text-xs text-text-secondary uppercase tracking-wide">
              {product?.brand}
            </p>
          </div>
          
          <Link to={`/product-detail?id=${product?.id}`}>
            <h3 className="font-medium text-sm text-primary mb-2 line-clamp-2 hover:text-accent transition-colors">
              {product?.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={
                    i < Math.floor(product?.rating)
                      ? 'text-yellow-400 fill-current' :'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="text-xs text-text-secondary">
              ({product?.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-primary">
              ${product?.price}
            </span>
            {product?.originalPrice && product?.originalPrice > product?.price && (
              <span className="text-sm text-text-secondary line-through">
                ${product?.originalPrice}
              </span>
            )}
          </div>

          {/* Available Colors */}
          {product?.colors && product?.colors?.length > 0 && (
            <div className="flex items-center space-x-1 mt-2">
              {product?.colors?.slice(0, 4)?.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color?.hex }}
                  title={color?.name}
                />
              ))}
              {product?.colors?.length > 4 && (
                <span className="text-xs text-text-secondary ml-1">
                  +{product?.colors?.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const ProductListItem = ({ product }) => {
    const discountPercentage = product?.originalPrice 
      ? Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100)
      : 0;

    return (
      <div className="flex bg-card border border-border rounded-lg overflow-hidden hover:shadow-soft transition-shadow">
        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0 bg-muted">
          <Link to={`/product-detail?id=${product?.id}`}>
            <Image
              src={product?.image}
              alt={product?.imageAlt}
              className="w-full h-full object-cover"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-1 left-1 flex flex-col space-y-1">
            {product?.isNew && (
              <span className="bg-success text-success-foreground text-xs font-medium px-1 py-0.5 rounded">
                New
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-cta text-cta-foreground text-xs font-medium px-1 py-0.5 rounded">
                -{discountPercentage}%
              </span>
            )}
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-1">
              <p className="text-xs text-text-secondary uppercase tracking-wide">
                {product?.brand}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onWishlistToggle(product?.id)}
                className="p-1"
              >
                <Icon 
                  name="Heart" 
                  size={16} 
                  className={product?.isWishlisted ? 'fill-current text-cta' : ''} 
                />
              </Button>
            </div>
            
            <Link to={`/product-detail?id=${product?.id}`}>
              <h3 className="font-medium text-primary mb-2 hover:text-accent transition-colors">
                {product?.name}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={
                      i < Math.floor(product?.rating)
                        ? 'text-yellow-400 fill-current' :'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-text-secondary">
                {product?.rating} ({product?.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary line-clamp-2 mb-3">
              {product?.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-lg text-primary">
                ${product?.price}
              </span>
              {product?.originalPrice && product?.originalPrice > product?.price && (
                <span className="text-sm text-text-secondary line-through">
                  ${product?.originalPrice}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onQuickView(product)}
              >
                <Icon name="Eye" size={14} className="mr-1" />
                Quick View
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => console.log('Add to cart:', product?.id)}
              >
                <Icon name="ShoppingBag" size={14} className="mr-1" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (products?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Icon name="Search" size={48} className="text-text-secondary mb-4" />
        <h3 className="text-lg font-medium text-primary mb-2">No products found</h3>
        <p className="text-text-secondary mb-4 max-w-md">
          Try adjusting your search terms or filters to find what you're looking for.
        </p>
        <Button variant="outline">
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products?.map((product) => (
            <ProductListItem key={product?.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;