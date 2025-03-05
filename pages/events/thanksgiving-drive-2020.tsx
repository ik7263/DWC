import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrive2020() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2020/thanksgiving-1.jpg',
    '/images/events/2020/thanksgiving-2.jpg',
    '/images/events/2020/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2020 Thanksgiving Drive</h2>
      
      <p className="mb-6">
        In 2020, as the COVID pandemic endured and individuals of our community suffered both direct (illness, mental health, limited supplies, etc…) and indirect (job insecurity, education and family strain, disruption of nutrition services, etc…) effects of the pandemic, there was greater need for support. Martha's Choice Marketplace relied on DWC as their largest donators. Once again, we were humbled and amazed by the outpouring of support we received. As a result of the generosity of this years donors, Dudes Who Care, Incorporated was able to deliver 275 Turkey dinners (over 2 tons worth!) and an excess of canned goods, fresh produce, pies, rolls and other miscellaneous goods to provide for a complete holiday meal. We were only able to do this because of the support we received! Thank you and we wish everyone a Happy and Healthy Holiday Season!
      </p>
    </>
  );

  return (
    <EventTemplate
      title="2020 Thanksgiving Drive"
      content={content}
      images={images}
      previousEvent="christmas-in-july-2021"
      nextEvent="thanksgiving-drives-2016-2019"
    />
  )
} 