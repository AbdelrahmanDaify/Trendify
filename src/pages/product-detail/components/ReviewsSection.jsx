import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ReviewsSection = ({ reviews, averageRating, totalReviews }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');
  const [showPhotosOnly, setShowPhotosOnly] = useState(false);

  const ratingDistribution = [
  { stars: 5, count: 156, percentage: 78 },
  { stars: 4, count: 32, percentage: 16 },
  { stars: 3, count: 8, percentage: 4 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 0 }];


  const mockReviews = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
      avatarAlt: "Professional headshot of woman with brown hair in white blazer smiling at camera",
      verified: true
    },
    rating: 5,
    date: "2025-10-10",
    title: "Perfect fit and amazing quality!",
    content: `I absolutely love this dress! The fabric is high quality and the fit is perfect. I'm 5'6" and ordered a medium - it fits exactly as expected. The color is even more beautiful in person. I've received so many compliments when wearing it. Definitely recommend!`,
    helpful: 23,
    size: "Medium", color: "Navy Blue",
    verified: true,
    photos: [
    {
      url: "https://images.unsplash.com/photo-1693655131295-4b6bef7e1d68", alt: "Woman wearing navy blue dress in natural lighting showing fit and style"
    },
    {
      url: "https://images.unsplash.com/photo-1545150207-443b3622213f", alt: "Close-up detail shot of dress fabric texture and stitching quality"
    }]

  },
  {
    id: 2,
    user: {
      name: "Emily Chen", avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10", avatarAlt: "Asian woman with long black hair smiling in casual setting",
      verified: true
    },
    rating: 4,
    date: "2025-10-08", title: "Great dress, runs slightly large",
    content: `Beautiful dress with excellent quality fabric. The only reason I'm giving 4 stars instead of 5 is that it runs a bit large. I usually wear a small but should have ordered XS. The style is very flattering and the material feels premium.`,
    helpful: 15,
    size: "Small", color: "Black",
    verified: true,
    photos: []
  },
  {
    id: 3,
    user: {
      name: "Jessica Martinez", avatar: "https://images.unsplash.com/photo-1590487866267-07e7334bae54", avatarAlt: "Hispanic woman with curly hair wearing casual outfit outdoors",
      verified: true
    },
    rating: 5,
    date: "2025-10-05", title: "Exceeded expectations!",
    content: `This dress is absolutely stunning! The quality is exceptional and it photographs beautifully. I wore it to a wedding and received countless compliments. The fit is true to size and very flattering. Will definitely be ordering in other colors!`,
    helpful: 31,
    size: "Large", color: "Emerald Green",
    verified: true,
    photos: [
    {
      url: "https://images.unsplash.com/photo-1654945959345-0cd5cb513be3", alt: "Full-length photo of woman in emerald green dress at formal event"
    }]

  }];


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-2xl font-medium text-primary mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)]?.map((_, i) =>
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(averageRating) ? 'text-accent fill-current' : 'text-border'} />

                )}
              </div>
              <span className="font-medium">{averageRating}</span>
              <span className="text-text-secondary">({totalReviews} reviews)</span>
            </div>
          </div>
        </div>

        <Button variant="outline" iconName="Edit3" iconPosition="left">
          Write a Review
        </Button>
      </div>
      {/* Rating Distribution */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-medium mb-4">Rating Breakdown</h3>
        <div className="space-y-2">
          {ratingDistribution?.map((rating) =>
          <div key={rating?.stars} className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 w-12">
                <span className="text-sm">{rating?.stars}</span>
                <Icon name="Star" size={12} className="text-accent fill-current" />
              </div>
              <div className="flex-1 bg-border rounded-full h-2">
                <div
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${rating?.percentage}%` }} />

              </div>
              <span className="text-sm text-text-secondary w-8">
                {rating?.count}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pb-4 border-b border-border">
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent">

            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>

          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent">

            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showPhotosOnly}
            onChange={(e) => setShowPhotosOnly(e?.target?.checked)}
            className="rounded border-border" />

          <span className="text-sm">Photos only</span>
        </label>
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews?.map((review) =>
        <div key={review?.id} className="border-b border-border pb-6 last:border-b-0">
            {/* Review Header */}
            <div className="flex items-start space-x-4 mb-3">
              <Image
              src={review?.user?.avatar}
              alt={review?.user?.avatarAlt}
              className="w-12 h-12 rounded-full object-cover" />

              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{review?.user?.name}</span>
                  {review?.user?.verified &&
                <div className="flex items-center space-x-1 text-success">
                      <Icon name="CheckCircle" size={14} />
                      <span className="text-xs">Verified Buyer</span>
                    </div>
                }
                </div>
                <div className="flex items-center space-x-3 text-sm text-text-secondary">
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) =>
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < review?.rating ? 'text-accent fill-current' : 'text-border'} />

                  )}
                  </div>
                  <span>{formatDate(review?.date)}</span>
                  <span>Size: {review?.size}</span>
                  <span>Color: {review?.color}</span>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-3">
              <h4 className="font-medium">{review?.title}</h4>
              <p className="text-text-secondary leading-relaxed">
                {review?.content}
              </p>

              {/* Review Photos */}
              {review?.photos?.length > 0 &&
            <div className="flex space-x-2 overflow-x-auto">
                  {review?.photos?.map((photo, index) =>
              <div key={index} className="flex-shrink-0">
                      <Image
                  src={photo?.url}
                  alt={photo?.alt}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />

                    </div>
              )}
                </div>
            }

              {/* Review Actions */}
              <div className="flex items-center space-x-4 pt-2">
                <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-colors">
                  <Icon name="ThumbsUp" size={14} />
                  <span>Helpful ({review?.helpful})</span>
                </button>
                <button className="text-sm text-text-secondary hover:text-primary transition-colors">
                  Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Load More */}
      <div className="text-center pt-4">
        <Button variant="outline">
          Load More Reviews
        </Button>
      </div>
    </div>);

};

export default ReviewsSection;