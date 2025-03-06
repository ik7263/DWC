import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrive2025() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2024/thanksgiving-1.jpg', // Reusing 2024 images until 2025 images are available
    '/images/events/2024/thanksgiving-2.jpg',
    '/images/events/2024/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2025 Thanksgiving Drive</h2>
      
      <p className="mb-6">
        Every year we are continuously amazed by the generosity of friends, colleagues, families, businesses and members of the community.
      </p>
      
      <p className="mb-6">
        For 2025, we're setting our most ambitious goal yet: to provide at least 550 Turkey dinners to families in need, surpassing our previous record of 500 dinners in 2024. As the need in our community continues to grow, we're committed to expanding our impact.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">DONATION INFORMATION</h3>
      <p className="font-bold mb-6">
        A donation of $55 will allow us to provide 1 meal for an average family of 5!
      </p>
      <p className="mb-6">
        It is only through the generous donations received and the volunteering of our members and fellow Dudes that we are able to help those who may not be as fortunate as many of us this season. Please consider contributing to our 2025 Thanksgiving Drive.
      </p>
      
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h4 className="text-xl font-bold mb-2">Ways to Donate</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Online through our donation portal</li>
          <li>By check made payable to "Dudes Who Care"</li>
          <li>Through corporate matching programs</li>
          <li>By volunteering your time</li>
        </ul>
      </div>
    </>
  );

  return (
    <EventTemplate
      title="2025 Thanksgiving Drive"
      content={content}
      images={images}
    />
  )
} 