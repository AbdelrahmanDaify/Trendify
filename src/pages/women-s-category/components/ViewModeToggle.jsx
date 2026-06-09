import React from 'react';
import Icon from '../../../components/AppIcon';

/**
 * Toggle between grid‑large and list view modes.
 * Expected `currentView` values: "grid-large" | "list".
 * Calls `onViewChange` with the new mode when clicked.
 */
export default function ViewModeToggle({ currentView = 'grid-large', onViewChange }) {
  const toggle = () => {
    const newMode = currentView === 'grid-large' ? 'list' : 'grid-large';
    onViewChange && onViewChange(newMode);
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:bg-muted transition-colors"
      onClick={toggle}
    >
      <Icon name={currentView === 'grid-large' ? 'LayoutGrid' : 'List'} size={16} />
      <span className="text-sm capitalize">{currentView === 'grid-large' ? 'Grid' : 'List'}</span>
    </button>
  );
}
