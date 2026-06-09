import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range?.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots?.push(1, '...');
    } else {
      rangeWithDots?.push(1);
    }

    rangeWithDots?.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots?.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots?.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center space-x-2"
      >
        <Icon name="ChevronLeft" size={16} />
        <span className="hidden sm:inline">Previous</span>
      </Button>
      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {visiblePages?.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-text-secondary">...</span>
            ) : (
              <Button
                variant={currentPage === page ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange(page)}
                className="min-w-[40px]"
              >
                {page}
              </Button>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center space-x-2"
      >
        <span className="hidden sm:inline">Next</span>
        <Icon name="ChevronRight" size={16} />
      </Button>
    </div>
  );
};

export default Pagination;