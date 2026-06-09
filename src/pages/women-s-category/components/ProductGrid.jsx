import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ products, viewMode, onQuickView, onAddToWishlist, onAddToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const formatPrice = (price, originalPrice) => {
    const isOnSale = originalPrice && originalPrice > price;
    return (
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-primary">${price}</span>
        {isOnSale && (
          <span className="text-sm text-text-secondary line-through">${originalPrice}</span>
        )}
      </div>
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <Icon
            key={star}
            name="Star"
            size={12}
            className={star <= rating ? "text-accent fill-current" : "text-border"}
          />
        ))}
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="flex bg-card border border-border rounded-lg overflow-hidden hover:shadow-soft transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover"
              />
              {product?.isNew && (
                <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              {product?.discount && (
                <span className="absolute top-2 right-2 bg-cta text-cta-foreground text-xs px-2 py-1 rounded">
                  -{product?.discount}%
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-primary mb-1 hover:text-accent cursor-pointer transition-colors">
                      {product?.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">{product?.brand}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onAddToWishlist(product?.id)}
                    className="text-text-secondary hover:text-cta"
                  >
                    <Icon name={product?.isWishlisted ? "Heart" : "Heart"} size={18} />
                  </Button>
                </div>

                <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                  {product?.description}
                </p>

                <div className="flex items-center space-x-4 mb-3">
                  {renderStars(product?.rating)}
                  <span className="text-sm text-text-secondary">
                    ({product?.reviewCount} reviews)
                  </span>
                </div>

                {/* Available Colors */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-text-secondary">Colors:</span>
                  <div className="flex space-x-1">
                    {product?.colors?.slice(0, 4)?.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {product?.colors?.length > 4 && (
                      <span className="text-xs text-text-secondary">
                        +{product?.colors?.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Available Sizes */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">Sizes:</span>
                  <div className="flex space-x-1">
                    {product?.sizes?.map((size, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-muted rounded">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                {formatPrice(product?.price, product?.originalPrice)}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onQuickView(product)}
                  >
                    Quick View
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid View
  return (
    <div className={`grid gap-6 ${
      viewMode === 'grid-large' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    }`}>
      {products?.map((product) => (
        <div
          key={product?.id}
          className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-soft transition-all duration-200"
          onMouseEnter={() => setHoveredProduct(product?.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Product Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={hoveredProduct === product?.id && product?.hoverImage ? product?.hoverImage : product?.image}
              alt={product?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {product?.isNew && (
                <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              {product?.discount && (
                <span className="bg-cta text-cta-foreground text-xs px-2 py-1 rounded">
                  -{product?.discount}%
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAddToWishlist(product?.id)}
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-text-secondary hover:text-cta hover:bg-background"
            >
              <Icon name={product?.isWishlisted ? "Heart" : "Heart"} size={16} />
            </Button>

            {/* Quick Actions */}
            <div className={`absolute bottom-2 left-2 right-2 flex space-x-2 transition-all duration-200 ${
              hoveredProduct === product?.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onQuickView(product)}
                className="flex-1 bg-background/90 backdrop-blur-sm"
              >
                <Icon name="Eye" size={14} className="mr-1" />
                Quick View
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => onAddToCart(product)}
                className="flex-1"
              >
                <Icon name="ShoppingBag" size={14} className="mr-1" />
                Add
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-primary mb-1 truncate hover:text-accent cursor-pointer transition-colors">
                  {product?.name}
                </h3>
                <p className="text-sm text-text-secondary truncate">{product?.brand}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-2">
              {renderStars(product?.rating)}
              <span className="text-xs text-text-secondary">
                ({product?.reviewCount})
              </span>
            </div>

            {/* Available Colors */}
            <div className="flex items-center space-x-1 mb-3">
              {product?.colors?.slice(0, 3)?.map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product?.colors?.length > 3 && (
                <span className="text-xs text-text-secondary">
                  +{product?.colors?.length - 3}
                </span>
              )}
            </div>

            {formatPrice(product?.price, product?.originalPrice)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;