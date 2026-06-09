import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendationsSection = () => {
  const recommendedProducts = [
  {
    id: 1,
    name: "Floral Midi Dress",
    price: "$89",
    originalPrice: "$120",
    image: "https://images.unsplash.com/photo-1564027695807-3721870e7ac8",
    imageAlt: "Elegant floral midi dress in soft pink and white pattern on model",
    rating: 4.7,
    reviews: 89,
    badge: "Best Seller",
    colors: ["#FFB6C1", "#FFFFFF", "#98FB98"]
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: "$65",
    image: "https://images.unsplash.com/photo-1717664104829-f7db99e9bff4",
    imageAlt: "Crisp white button-down shirt with classic collar and cuffs",
    rating: 4.8,
    reviews: 156,
    badge: "Staff Pick",
    colors: ["#FFFFFF", "#F0F8FF", "#E6E6FA"]
  },
  {
    id: 3,
    name: "Pleated Midi Skirt",
    price: "$75",
    originalPrice: "$95",
    image: "https://images.unsplash.com/photo-1733026023410-8436131da4e8",
    imageAlt: "Navy blue pleated midi skirt with elastic waistband",
    rating: 4.6,
    reviews: 203,
    badge: "New Arrival",
    colors: ["#000080", "#8B0000", "#2F4F4F"]
  },
  {
    id: 4,
    name: "Knit Cardigan",
    price: "$95",
    image: "https://images.unsplash.com/photo-1633943927975-391a217c7c44",
    imageAlt: "Soft beige knit cardigan with button closure and pockets",
    rating: 4.5,
    reviews: 124,
    colors: ["#F5F5DC", "#D2B48C", "#DDA0DD"]
  },
  {
    id: 5,
    name: "High-Waisted Jeans",
    price: "$85",
    originalPrice: "$110",
    image: "https://images.unsplash.com/photo-1717820564345-69f293584a2e",
    imageAlt: "Dark wash high-waisted straight leg jeans on model",
    rating: 4.9,
    reviews: 312,
    badge: "Customer Favorite",
    colors: ["#4169E1", "#000000", "#696969"]
  },
  {
    id: 6,
    name: "Silk Blouse",
    price: "$125",
    image: "https://images.unsplash.com/photo-1612744376369-3c4b0d8238bf",
    imageAlt: "Luxurious cream silk blouse with subtle sheen and flowing fit",
    rating: 4.4,
    reviews: 67,
    colors: ["#FFF8DC", "#FFE4E1", "#F0E68C"]
  }];


  const recentlyViewed = [
  {
    id: 1,
    name: "Summer Maxi Dress",
    price: "$95",
    image: "https://images.unsplash.com/photo-1678536517173-505b75923f68",
    imageAlt: "Flowing summer maxi dress in tropical print with adjustable straps",
    rating: 4.6
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$78",
    image: "https://images.unsplash.com/photo-1572122936109-ce84b9cd5439",
    imageAlt: "Classic light blue denim jacket with vintage wash and button closure",
    rating: 4.7
  },
  {
    id: 3,
    name: "Ankle Boots",
    price: "$135",
    image: "https://images.unsplash.com/photo-1672856398900-6057a5b3842d",
    imageAlt: "Black leather ankle boots with low heel and side zipper",
    rating: 4.8
  },
  {
    id: 4,
    name: "Crossbody Bag",
    price: "$65",
    image: "https://images.unsplash.com/photo-1620786514663-8c3f57ffe17c",
    imageAlt: "Tan leather crossbody bag with adjustable strap and gold hardware",
    rating: 4.5
  }];


  return (
    <div className="space-y-12">
      {/* You May Also Like */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-primary">
            You May Also Like
          </h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProducts?.map((product) =>
          <div key={product?.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-4">
                <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                
                {/* Badge */}
                {product?.badge &&
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {product?.badge}
                  </div>
              }
                
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <Icon name="Heart" size={16} />
                  </button>
                  <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <Icon name="Eye" size={16} />
                  </button>
                </div>
                
                {/* Quick Add */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="w-full" iconName="Plus" iconPosition="left">
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-primary line-clamp-2 group-hover:text-accent transition-colors">
                  {product?.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-primary">{product?.price}</span>
                  {product?.originalPrice &&
                <span className="text-sm text-text-secondary line-through">
                      {product?.originalPrice}
                    </span>
                }
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)]?.map((_, i) =>
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < Math.floor(product?.rating) ? 'text-accent fill-current' : 'text-border'} />

                    )}
                    </div>
                    <span className="text-xs text-text-secondary">
                      ({product?.reviews})
                    </span>
                  </div>
                  
                  {/* Color Options */}
                  <div className="flex items-center space-x-1">
                    {product?.colors?.slice(0, 3)?.map((color, index) =>
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: color }} />

                  )}
                    {product?.colors?.length > 3 &&
                  <span className="text-xs text-text-secondary">
                        +{product?.colors?.length - 3}
                      </span>
                  }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Recently Viewed */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-primary">
            Recently Viewed
          </h2>
          <button className="text-accent hover:underline text-sm font-medium">
            Clear History
          </button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyViewed?.map((product) =>
          <div key={product?.id} className="group cursor-pointer">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3 relative">
                <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <button className="absolute top-2 right-2 p-2 bg-background/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="X" size={14} />
                </button>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-accent transition-colors">
                  {product?.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{product?.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) =>
                  <Icon
                    key={i}
                    name="Star"
                    size={10}
                    className={i < Math.floor(product?.rating) ? 'text-accent fill-current' : 'text-border'} />

                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Personalized Recommendations */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Sparkles" size={24} className="text-accent" />
            <h2 className="text-2xl font-medium text-primary">
              Personalized for You
            </h2>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Based on your browsing history and preferences, we think you'll love these handpicked items. 
            Sign in to get even more personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button iconName="User" iconPosition="left">
              Sign In for Better Recommendations
            </Button>
            <Button variant="outline" iconName="RefreshCw" iconPosition="left">
              Refresh Recommendations
            </Button>
          </div>
        </div>
      </div>
      {/* Trending Now */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={24} className="text-accent" />
            <h2 className="text-2xl font-medium text-primary">
              Trending Now
            </h2>
          </div>
          <Button variant="outline" size="sm">
            View Trends
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
          { trend: "Midi Dresses", growth: "+45%", items: "2,340 items" },
          { trend: "Oversized Blazers", growth: "+32%", items: "1,890 items" },
          { trend: "Wide-Leg Pants", growth: "+28%", items: "1,567 items" }]?.
          map((trend, index) =>
          <div key={index} className="bg-muted p-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-primary">{trend?.trend}</h3>
                  <p className="text-sm text-text-secondary">{trend?.items}</p>
                </div>
                <div className="text-right">
                  <span className="text-success font-medium">{trend?.growth}</span>
                  <Icon name="TrendingUp" size={16} className="text-success ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default RecommendationsSection;