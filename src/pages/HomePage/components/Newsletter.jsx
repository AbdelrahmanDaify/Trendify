import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email?.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: "Zap",
      text: "First access to new arrivals"
    },
    {
      icon: "Percent",
      text: "Exclusive subscriber discounts"
    },
    {
      icon: "TrendingUp",
      text: "Weekly style trends & tips"
    },
    {
      icon: "Gift",
      text: "Special birthday offers"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
              Welcome to the Trendify Family!
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              Thank you for subscribing! Check your inbox for a special welcome offer.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
                Stay in Style
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Join our newsletter for exclusive access to new collections, styling tips, and special offers delivered straight to your inbox.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={benefit?.icon}
                        size={16}
                        className="text-accent"
                      />
                    </div>
                    <span className="text-sm text-text-secondary">
                      {benefit?.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="bg-background rounded-lg shadow-soft p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                Get 10% Off Your First Order
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="mb-4"
                />
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  disabled={!email?.trim() || isLoading}
                  iconName="Mail"
                  iconPosition="left"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe & Save'}
                </Button>
              </form>
              
              <p className="text-xs text-text-secondary text-center mt-4">
                By subscribing, you agree to our{' '}
                <a href="#" className="text-accent hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-accent hover:underline">
                  Terms of Service
                </a>
                . Unsubscribe anytime.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-border">
                <span className="text-xs text-text-secondary">Follow us:</span>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <Icon name="Instagram" size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    aria-label="Follow us on Twitter"
                  >
                    <Icon name="Twitter" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;