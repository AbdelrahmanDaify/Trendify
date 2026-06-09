import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StyleInspiration = () => {
  const [activeTab, setActiveTab] = useState('all');

  const styleCategories = [
  { id: 'all', name: 'All Styles', count: 12 },
  { id: 'casual', name: 'Casual', count: 5 },
  { id: 'formal', name: 'Formal', count: 4 },
  { id: 'street', name: 'Street Style', count: 3 }];


  const styleInspirations = [
  {
    id: 1,
    title: "Effortless Weekend Look",
    category: "casual",
    image: "https://images.unsplash.com/photo-1607102972722-023df06ba8ba",
    imageAlt: "Young woman in casual denim jacket and white t-shirt with relaxed smile",
    products: ["Denim Jacket", "White Tee", "Black Jeans"],
    likes: 234,
    user: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1630473147136-fedd85b45f25",
      avatarAlt: "Professional headshot of young woman with brown hair and friendly smile"
    }
  },
  {
    id: 2,
    title: "Office Ready Chic",
    category: "formal",
    image: "https://images.unsplash.com/photo-1613186145425-5bb4eca455d7",
    imageAlt: "Professional woman in navy blazer and white blouse in modern office setting",
    products: ["Tailored Blazer", "Silk Blouse", "Pencil Skirt"],
    likes: 189,
    user: {
      name: "Emma K.",
      avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
      avatarAlt: "Business professional headshot of blonde woman in corporate attire"
    }
  },
  {
    id: 3,
    title: "Urban Explorer",
    category: "street",
    image: "https://images.unsplash.com/photo-1661111014018-8f9b8fd11952",
    imageAlt: "Trendy young person in colorful streetwear outfit with urban background",
    products: ["Oversized Hoodie", "Cargo Pants", "Chunky Sneakers"],
    likes: 312,
    user: {
      name: "Alex R.",
      avatar: "https://images.unsplash.com/photo-1709621404595-9b3dda23b728",
      avatarAlt: "Casual headshot of young man with dark hair and confident expression"
    }
  },
  {
    id: 4,
    title: "Minimalist Elegance",
    category: "formal",
    image: "https://images.unsplash.com/photo-1502078889459-923ef351c722",
    imageAlt: "Elegant woman in minimalist white dress with clean lines and sophisticated styling",
    products: ["Midi Dress", "Statement Earrings", "Block Heels"],
    likes: 267,
    user: {
      name: "Olivia T.",
      avatar: "https://images.unsplash.com/photo-1578875249434-204d82d2356c",
      avatarAlt: "Sophisticated headshot of woman with auburn hair and professional makeup"
    }
  },
  {
    id: 5,
    title: "Cozy Autumn Vibes",
    category: "casual",
    image: "https://images.unsplash.com/photo-1700814860868-fa621bee9735",
    imageAlt: "Person in cozy cream sweater and warm autumn colors in natural outdoor setting",
    products: ["Knit Sweater", "High-Waist Jeans", "Ankle Boots"],
    likes: 198,
    user: {
      name: "Maya L.",
      avatar: "https://images.unsplash.com/photo-1678935903557-98ae7d37e1ca",
      avatarAlt: "Warm headshot of woman with curly hair and genuine smile"
    }
  },
  {
    id: 6,
    title: "Bold Street Statement",
    category: "street",
    image: "https://images.unsplash.com/photo-1647671676805-621cfc2df4b2",
    imageAlt: "Fashion-forward individual in bold patterned outfit with confident urban pose",
    products: ["Graphic Tee", "Leather Jacket", "Platform Boots"],
    likes: 445,
    user: {
      name: "Jordan P.",
      avatar: "https://images.unsplash.com/photo-1697214129338-2d4bcf91f23b",
      avatarAlt: "Creative headshot of young person with artistic styling and confident gaze"
    }
  }];


  const filteredInspirations = activeTab === 'all' ?
  styleInspirations :
  styleInspirations?.filter((item) => item?.category === activeTab);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
            Style Inspiration
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get inspired by real customers styling our pieces their way
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {styleCategories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveTab(category?.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeTab === category?.id ?
            'bg-primary text-primary-foreground' :
            'bg-muted text-text-secondary hover:bg-secondary'}`
            }>

              {category?.name} ({category?.count})
            </button>
          )}
        </div>

        {/* Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredInspirations?.map((inspiration) =>
          <div
            key={inspiration?.id}
            className="group bg-card rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden">

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                src={inspiration?.image}
                alt={inspiration?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-medium mb-2">{inspiration?.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {inspiration?.products?.map((product, index) =>
                  <span
                    key={index}
                    className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">

                        {product}
                      </span>
                  )}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Image
                    src={inspiration?.user?.avatar}
                    alt={inspiration?.user?.avatarAlt}
                    className="w-8 h-8 rounded-full object-cover" />

                    <span className="text-sm font-medium text-primary">
                      {inspiration?.user?.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">{inspiration?.likes}</span>
                  </div>
                </div>
                
                <h3 className="font-medium text-primary mb-2">
                  {inspiration?.title}
                </h3>
                
                <Button
                variant="outline"
                size="sm"
                className="w-full"
                iconName="ShoppingBag"
                iconPosition="left"
                iconSize={16}>

                  Shop This Look
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/search-results">
            <Button variant="outline" size="lg">
              View More Inspiration
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default StyleInspiration;