import React from 'react';
import Icon from '../../../components/AppIcon';

/**
 * Simple placeholder TrendingSection component.
 * In a real app this would display a carousel or list of trending products.
 */
export default function TrendingSection({ title = 'Trending', items = [] }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">{title}</h2>
      {items.length === 0 ? (
        <p className="text-text-secondary">No trending items available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 border border-border rounded-lg bg-card">
              {item.image && (
                <img src={item.image} alt={item.imageAlt || item.name} className="w-full h-48 object-cover mb-2 rounded" />
              )}
              <h3 className="font-medium text-primary">{item.name}</h3>
              <p className="text-sm text-text-secondary">{item.brand}</p>
              <p className="mt-2 font-bold text-primary">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
