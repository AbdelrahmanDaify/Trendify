import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustFeatures = [
  {
    id: 1,
    icon: "Shield",
    title: "Secure Shopping",
    description: "SSL encrypted checkout with multiple payment options"
  },
  {
    id: 2,
    icon: "Truck",
    title: "Free Shipping",
    description: "Free delivery on orders over $75 worldwide"
  },
  {
    id: 3,
    icon: "RotateCcw",
    title: "Easy Returns",
    description: "30-day hassle-free returns and exchanges"
  },
  {
    id: 4,
    icon: "Headphones",
    title: "24/7 Support",
    description: "Customer service available around the clock"
  }];


  const testimonials = [
  {
    id: 1,
    name: "Jessica Chen",
    location: "New York, NY",
    rating: 5,
    comment: "Amazing quality and fast shipping! The clothes fit perfectly and the customer service is outstanding.",
    avatar: "https://images.unsplash.com/photo-1657830582172-b1eb2880f497",
    avatarAlt: "Smiling Asian woman with long dark hair in professional headshot"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Los Angeles, CA",
    rating: 5,
    comment: "Love the style and quality. Trendify has become my go-to for all fashion needs. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1695830209166-161b6297541d",
    avatarAlt: "Professional headshot of Hispanic man with short dark hair and confident smile"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Chicago, IL",
    rating: 5,
    comment: "The return process was so easy when I needed a different size. Great customer experience overall!",
    avatar: "https://images.unsplash.com/photo-1633600317049-0aea268b8aa2",
    avatarAlt: "Friendly blonde woman with warm smile in casual professional setting"
  }];


  const stats = [
  { label: "Happy Customers", value: "50K+" },
  { label: "Products Sold", value: "200K+" },
  { label: "Countries Served", value: "25+" },
  { label: "Customer Rating", value: "4.9/5" }];


  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Trust Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures?.map((feature) =>
          <div
            key={feature?.id}
            className="text-center group">

              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-200">
                <Icon
                name={feature?.icon}
                size={32}
                className="text-accent" />

              </div>
              <h3 className="font-semibold text-primary mb-2">
                {feature?.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature?.description}
              </p>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="bg-background rounded-lg shadow-soft p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat?.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-secondary">
            Real reviews from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-background rounded-lg shadow-soft p-6 hover:shadow-elevated transition-shadow duration-300">

              <div className="flex items-center mb-4">
                <img
                src={testimonial?.avatar}
                alt={testimonial?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover mr-4" />

                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {testimonial?.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial?.rating)]?.map((_, index) =>
              <Icon
                key={index}
                name="Star"
                size={16}
                className="text-yellow-400 fill-current" />

              )}
              </div>
              
              <p className="text-text-secondary italic">
                "{testimonial?.comment}"
              </p>
            </div>
          )}
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="Shield" size={20} className="text-green-600" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="CreditCard" size={20} className="text-blue-600" />
            <span className="text-sm font-medium">Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="Award" size={20} className="text-purple-600" />
            <span className="text-sm font-medium">Trusted by 50K+</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="CheckCircle" size={20} className="text-green-600" />
            <span className="text-sm font-medium">Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSignals;