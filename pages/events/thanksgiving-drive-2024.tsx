import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrive2024() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2024/thanksgiving-1.jpg',
    '/images/events/2024/thanksgiving-2.jpg',
    '/images/events/2024/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2024 Thanksgiving Drive</h2>
      
      <p className="mb-6">
        Every year we are continuously amazed by the generosity of friends, colleagues, families, businesses and members of the community.
      </p>
      
      <p className="mb-6">
        This year, the need in our community is the greatest the food pantry has experienced, surpassing that even seen during the recent pandemic. Rising consumer costs and living expenses have forced many to make the tough choices resulting in the rationing or limiting of food.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">DONATION INFORMATION</h3>
      <p className="font-bold mb-6">
        A donation of $50 will allow us to provide 1 meal for an average family of 5!
      </p>
      <p className="mb-6">
        Consequently, for 2024 we hope to help meet this need once again and surpass last year's achievements by providing at least 500 Turkey dinners. It is only through the generous donations received and the volunteering of our members and fellow Dudes that we are able to help those who may not be as fortunate as many of us this season.
      </p>
    </>
  );

  return (
    <EventTemplate
      title="2024 Thanksgiving Drive"
      content={content}
      images={images}
    />
  )
} 