import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'sizing', label: 'Size & Fit', icon: 'Ruler' },
    { id: 'care', label: 'Care Instructions', icon: 'Heart' },
    { id: 'shipping', label: 'Shipping & Returns', icon: 'Truck' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Product Details</h4>
              <p className="text-text-secondary leading-relaxed">
                {product?.detailedDescription}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fabric Composition</h4>
              <ul className="space-y-1 text-text-secondary">
                {product?.fabricComposition?.map((fabric, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{fabric?.material}</span>
                    <span>{fabric?.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Features</h4>
              <ul className="space-y-1">
                {product?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Check" size={14} className="text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Model Information</h4>
              <div className="text-text-secondary space-y-1">
                <p>Model is {product?.modelInfo?.height} tall and wearing size {product?.modelInfo?.size}</p>
                <p>Measurements: Bust {product?.modelInfo?.measurements?.bust}", Waist {product?.modelInfo?.measurements?.waist}", Hips {product?.modelInfo?.measurements?.hips}"</p>
              </div>
            </div>
          </div>
        );

      case 'sizing':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Size Chart</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2">Size</th>
                      <th className="text-left py-2">Bust</th>
                      <th className="text-left py-2">Waist</th>
                      <th className="text-left py-2">Hips</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product?.sizeChart?.map((size, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="py-2 font-medium">{size?.size}</td>
                        <td className="py-2 text-text-secondary">{size?.bust}"</td>
                        <td className="py-2 text-text-secondary">{size?.waist}"</td>
                        <td className="py-2 text-text-secondary">{size?.hips}"</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fit Guide</h4>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Fit:</strong> {product?.fitGuide?.fit}</p>
                <p><strong>Length:</strong> {product?.fitGuide?.length}</p>
                <p><strong>Stretch:</strong> {product?.fitGuide?.stretch}</p>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="HelpCircle" size={16} className="text-accent" />
                <span className="font-medium">Need help with sizing?</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Our size guide is based on body measurements. For the best fit, measure yourself and compare to our size chart.
              </p>
              <button className="text-sm text-accent hover:underline">
                Contact our fit experts
              </button>
            </div>
          </div>
        );

      case 'care':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Care Instructions</h4>
              <div className="grid grid-cols-2 gap-4">
                {product?.careInstructions?.map((instruction, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name={instruction?.icon} size={20} className="text-accent" />
                    <span className="text-sm">{instruction?.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fabric Care Tips</h4>
              <ul className="space-y-2">
                {product?.careTips?.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2 text-text-secondary">
                    <Icon name="Lightbulb" size={14} className="text-accent mt-0.5" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="font-medium">Quality Guarantee</span>
              </div>
              <p className="text-sm text-text-secondary">
                We stand behind the quality of our products. If you're not satisfied with the durability or quality, contact us within 30 days.
              </p>
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Shipping Options</h4>
              <div className="space-y-3">
                {product?.shippingOptions?.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Truck" size={16} className="text-accent" />
                      <div>
                        <p className="font-medium">{option?.name}</p>
                        <p className="text-sm text-text-secondary">{option?.description}</p>
                      </div>
                    </div>
                    <span className="font-medium">{option?.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Return Policy</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="RotateCcw" size={16} className="text-success mt-0.5" />
                  <div>
                    <p className="font-medium">30-Day Returns</p>
                    <p className="text-sm text-text-secondary">
                      Return items within 30 days of delivery for a full refund
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" size={16} className="text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Free Return Shipping</p>
                    <p className="text-sm text-text-secondary">
                      We'll email you a prepaid return label
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CreditCard" size={16} className="text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Quick Refunds</p>
                    <p className="text-sm text-text-secondary">
                      Refunds processed within 3-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="MessageCircle" size={16} className="text-accent" />
                <span className="font-medium">Questions about shipping?</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Our customer service team is here to help with any shipping or return questions.
              </p>
              <button className="text-sm text-accent hover:underline">
                Contact customer service
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 py-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;