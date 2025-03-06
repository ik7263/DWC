import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ChristmasInJuly2021() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2021/christmas-july-1.jpg',
    '/images/events/2021/christmas-july-2.jpg',
    '/images/events/2021/christmas-july-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2021 Christmas in July</h2>
      
      <p className="mb-6">
        The Christmas in July Event was a donation to Martha's Choice Pantry, at Saint Gabriel's Hall. Over 2,500 $ of goods were generously donated. Approximately 1,500$ was spent on Toiletries for the needy. The remaining amount was used to purchase Walmart gift cards to distribute to the children of Martha's Choice Pantry. At DWC, we believe it is vital to care for the physical and mental needs of our community. Many children were affected this past year by the global pandemic. This is the least we could do to help address some of the mental needs of our community.
      </p>
    </>
  );

  return (
    <EventTemplate
      title="Christmas in July 2021"
      content={content}
      images={images}
    />
  )
} 