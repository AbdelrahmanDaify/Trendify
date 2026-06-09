import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BreadcrumbNavigation = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-6" aria-label="Breadcrumb">
      <Link 
        to="/homepage" 
        className="hover:text-accent transition-colors"
      >
        Home
      </Link>
      {items?.map((item, index) => (
        <React.Fragment key={index}>
          <Icon name="ChevronRight" size={14} className="text-border" />
          {item?.href ? (
            <Link 
              to={item?.href} 
              className="hover:text-accent transition-colors"
            >
              {item?.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item?.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbNavigation;