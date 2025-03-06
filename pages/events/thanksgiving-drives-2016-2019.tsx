import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrives20162019() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2016-2019/thanksgiving-1.jpg',
    '/images/events/2016-2019/thanksgiving-2.jpg',
    '/images/events/2016-2019/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2016-2019 Thanksgiving Drives</h2>
      
      <p className="mb-6">
        From 2016 to 2019, Dudes Who Care established itself as a reliable partner for Martha's Choice Marketplace, providing hundreds of Thanksgiving meals to families in need each year. What started as a small effort among friends grew into a community-wide initiative that made a significant impact on food insecurity in Montgomery County.
      </p>
      
      <p className="mb-6">
        By 2019, we were providing over 200 complete Thanksgiving dinners annually, setting the foundation for our expanded efforts in the years to come. These early years were crucial in establishing our organization's mission and building the community partnerships that continue to sustain our work today.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Our Growth</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>2016:</strong> First year - collected complete Thanksgiving dinners for just over 20 families</li>
        <li><strong>2017:</strong> Expanded our reach and provided 50 whole turkey dinners</li>
        <li><strong>2018:</strong> Continued growth with 100 turkey dinners</li>
        <li><strong>2019:</strong> Reached a milestone of over 220 complete turkey dinners and over $4,000 worth of food and donations to Martha's Pantry</li>
      </ul>
    </>
  );

  return (
    <EventTemplate
      title="Thanksgiving Drives 2016-2019"
      content={content}
      images={images}
    />
  )
} 