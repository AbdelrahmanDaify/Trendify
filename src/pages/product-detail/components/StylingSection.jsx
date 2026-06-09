import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StylingSection = ({ product }) => {
  const stylingTips = [
  {
    id: 1,
    title: "Office Ready",
    description: "Pair with a blazer and heels for a professional look",
    image: "https://images.unsplash.com/photo-1690192078217-d0a48326a335",
    imageAlt: "Professional woman in navy dress with blazer and heels in modern office setting",
    items: [
    { name: "Classic Blazer", price: "$89", image: "https://images.unsplash.com/photo-1663624027823-14726a5777ad", imageAlt: "Navy blue tailored blazer on hanger" },
    { name: "Pointed Toe Heels", price: "$125", image: "https://images.unsplash.com/photo-1710916025782-18d93d00ec4d", imageAlt: "Black pointed toe high heel shoes" }]

  },
  {
    id: 2,
    title: "Weekend Casual",
    description: "Style with sneakers and a denim jacket for relaxed vibes",
    image: "https://images.unsplash.com/photo-1619283674968-526fd5a88a6f",
    imageAlt: "Young woman in casual dress with denim jacket and white sneakers walking outdoors",
    items: [
    { name: "Denim Jacket", price: "$65", image: "https://images.unsplash.com/photo-1708523842501-1619478cea1f", imageAlt: "Light blue denim jacket laid flat" },
    { name: "White Sneakers", price: "$95", image: "https://images.unsplash.com/photo-1561282109-3a8f490997cc", imageAlt: "Clean white leather sneakers on white background" }]

  },
  {
    id: 3,
    title: "Date Night",
    description: "Elevate with statement jewelry and strappy sandals",
    image: "https://images.unsplash.com/photo-1731603827045-75fea9c24e31",
    imageAlt: "Elegant woman in dress with statement necklace and heels at upscale restaurant",
    items: [
    { name: "Statement Necklace", price: "$45", image: "https://images.unsplash.com/photo-1733318860375-1e5570ed548e", imageAlt: "Gold statement necklace with geometric design" },
    { name: "Strappy Heels", price: "$110", image: "https://images.unsplash.com/photo-1532106257431-74ddb1123c4e", imageAlt: "Black strappy high heel sandals" }]

  }];


  const completeTheLook = [
  {
    id: 1,
    name: "Leather Crossbody Bag",
    price: "$78",
    originalPrice: "$95",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    imageAlt: "Brown leather crossbody bag with gold hardware and adjustable strap",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 2,
    name: "Delicate Gold Bracelet",
    price: "$32",
    image: "https://images.unsplash.com/photo-1708220040968-1cd46e583f56",
    imageAlt: "Thin gold chain bracelet with small charm on white background",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 3,
    name: "Classic Trench Coat",
    price: "$145",
    originalPrice: "$180",
    image: "https://images.unsplash.com/photo-1632162451352-df77c3013f25",
    imageAlt: "Beige trench coat with belt and classic collar design",
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: "$89",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    imageAlt: "Rose gold minimalist watch with white face and leather strap",
    rating: 4.5,
    reviews: 124
  }];


  return (
    <div className="space-y-8">
      {/* Styling Tips */}
      <div>
        <h2 className="text-2xl font-medium text-primary mb-6">
          Styling Inspiration
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stylingTips?.map((tip) =>
          <div key={tip?.id} className="bg-muted rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                src={tip?.image}
                alt={tip?.imageAlt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-medium text-lg mb-1">{tip?.title}</h3>
                  <p className="text-sm opacity-90">{tip?.description}</p>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <h4 className="font-medium text-sm">Shop the Look</h4>
                <div className="space-y-2">
                  {tip?.items?.map((item, index) =>
                <div key={index} className="flex items-center space-x-3">
                      <Image
                    src={item?.image}
                    alt={item?.imageAlt}
                    className="w-10 h-10 object-cover rounded" />

                      <div className="flex-1">
                        <p className="text-sm font-medium">{item?.name}</p>
                        <p className="text-sm text-accent">{item?.price}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Complete the Look */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-primary">
            Complete the Look
          </h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {completeTheLook?.map((item) =>
          <div key={item?.id} className="group cursor-pointer">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3 relative">
                <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <button className="absolute top-2 right-2 p-2 bg-background/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Heart" size={16} />
                </button>
                <button className="absolute bottom-2 right-2 p-2 bg-primary text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Plus" size={16} />
                </button>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-sm line-clamp-2">{item?.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-primary">{item?.price}</span>
                  {item?.originalPrice &&
                <span className="text-sm text-text-secondary line-through">
                      {item?.originalPrice}
                    </span>
                }
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) =>
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={i < Math.floor(item?.rating) ? 'text-accent fill-current' : 'text-border'} />

                  )}
                  </div>
                  <span className="text-xs text-text-secondary">
                    ({item?.reviews})
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Style Quiz CTA */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">
              Discover Your Style
            </h3>
            <p className="text-text-secondary">
              Take our style quiz to get personalized recommendations and styling tips tailored just for you.
            </p>
          </div>
          <Button iconName="Sparkles" iconPosition="left">
            Take Style Quiz
          </Button>
        </div>
      </div>
      {/* User Generated Content */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-primary">
            How Others Style It
          </h2>
          <button className="text-accent hover:underline text-sm font-medium">
            #TrendifyStyle
          </button>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
          {
            image: "https://images.unsplash.com/photo-1603805785279-da750208c094",
            alt: "Customer styling photo showing dress with denim jacket and boots",
            user: "@sarah_styles"
          },
          {
            image: "https://images.unsplash.com/photo-1601615820715-f506c3a193f7",
            alt: "Customer photo of dress styled for evening event with heels and clutch",
            user: "@fashionista_em"
          },
          {
            image: "https://images.unsplash.com/photo-1685374803546-24488c5ff529",
            alt: "Professional styling photo with blazer and statement accessories",
            user: "@workwear_chic"
          },
          {
            image: "https://images.unsplash.com/photo-1716835239738-5cb4b27341d0",
            alt: "Casual weekend styling with cardigan and sneakers",
            user: "@weekend_vibes"
          }]?.
          map((post, index) =>
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <Image
              src={post?.image}
              alt={post?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <Icon name="Instagram" size={24} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">{post?.user}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default StylingSection;