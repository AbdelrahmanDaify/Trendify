import React from 'react';


/**
 * Placeholder TrendingProducts component for HomePage.
 * Displays a grid of mock trending items.
 */
export default function TrendingProducts({ items = [] }) {
  // If no items are passed, use a small mock list
  const mockItems = items.length
    ? items
    : [
        {
          id: 1,
          name: 'Silk Wrap Dress',
          brand: 'Trendify',
          price: 99.99,
          image: 'https://images.unsplash.com/photo-1623635909320-4bfac6d8f3d8',
          imageAlt: 'Elegant silk wrap dress',
        },
        {
          id: 2,
          name: 'Leather Moto Jacket',
          brand: 'Urban Essentials',
          price: 179.99,
          image: 'https://images.unsplash.com/photo-1669884137409-1d0e6c5a5e2c',
          imageAlt: 'Black leather moto jacket',
        },
        {
          id: 3,
          name: 'Cashmere Sweater',
          brand: 'Luxury Knits',
          price: 149.99,
          image: 'https://images.unsplash.com/photo-1679208176395-8b1c947b8c9e',
          imageAlt: 'Soft cashmere sweater',
        },
      ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockItems.map((item) => (
          <div key={item.id} className="p-4 border border-border rounded-lg bg-card">
            <img src={item.image} alt={item.imageAlt} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="font-medium text-primary">{item.name}</h3>
            <p className="text-sm text-text-secondary mb-1">{item.brand}</p>
            <p className="font-bold text-primary">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
