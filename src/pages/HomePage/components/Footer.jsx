import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Women\'s Fashion", href: "/women-s-category" },
        { name: "Men\'s Collection", href: "/men-s-category" },
        { name: "New Arrivals", href: "/homepage" },
        { name: "Sale Items", href: "/search-results" },
        { name: "Gift Cards", href: "#" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { name: "Size Guide", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns & Exchanges", href: "#" },
        { name: "Track Your Order", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    },
    {
      title: "About Trendify",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Affiliate Program", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Style Blog", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Pinterest", href: "#" }
      ]
    }
  ];

  const paymentMethods = [
    { name: "Visa", icon: "CreditCard" },
    { name: "Mastercard", icon: "CreditCard" },
    { name: "American Express", icon: "CreditCard" },
    { name: "PayPal", icon: "Wallet" },
    { name: "Apple Pay", icon: "Smartphone" },
    { name: "Google Pay", icon: "Smartphone" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/homepage" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" fill="none" />
                    <path
                      d="M10 12h12M10 16h8M10 20h10"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-serif font-medium tracking-tight">
                  Trendify
                </span>
              </Link>
              
              <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
                Your style, your story. Discover fashion-forward pieces that speak to your authentic self at wallet-friendly prices.
              </p>
              
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label="Follow us on Pinterest"
                >
                  <Icon name="Heart" size={20} />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section) => (
              <div key={section?.title}>
                <h3 className="font-semibold text-white mb-4">
                  {section?.title}
                </h3>
                <ul className="space-y-3">
                  {section?.links?.map((link) => (
                    <li key={link?.name}>
                      {link?.href?.startsWith('/') ? (
                        <Link
                          to={link?.href}
                          className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                        >
                          {link?.name}
                        </Link>
                      ) : (
                        <a
                          href={link?.href}
                          className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                        >
                          {link?.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Trendify. All rights reserved. | 
              <a href="#" className="hover:text-accent transition-colors duration-200 ml-1">
                Privacy Policy
              </a> | 
              <a href="#" className="hover:text-accent transition-colors duration-200 ml-1">
                Terms of Service
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">
                We accept:
              </span>
              <div className="flex items-center space-x-2">
                {paymentMethods?.map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-white/10 rounded flex items-center justify-center"
                    title={method?.name}
                  >
                    <Icon
                      name={method?.icon}
                      size={16}
                      className="text-primary-foreground/60"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-primary-foreground/60">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={14} />
                <span>Secure Shopping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={14} />
                <span>Free Shipping Over $75</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="RotateCcw" size={14} />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={14} />
                <span>Trusted by 50K+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;