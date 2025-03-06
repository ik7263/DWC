import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrive2022() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2022/thanksgiving-1.jpg',
    '/images/events/2022/thanksgiving-2.jpg',
    '/images/events/2022/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2022 Thanksgiving Drive</h2>
      
      <p className="mb-6">
        In 2022, COVID-19's effects still remain unequivocally visible in our Montgomery County community. Individuals suffer today directly and indirectly, through illness, food insecurity, mental health issues, unemployment, in addition to myriad other complications. Martha's Choice Marketplace this year had come to rely on DWC for over half of their food supply. 2022 was our most crucial to date. Inflation and rising prices of Thanksgiving meals meant that Dudes Who Care had to provide a greater portion of food for those in need. The DWC community, comprised of local and national businesses as well as individual donors, share a common value of generosity. Recognized the urgent need to our community, DWC delivered over 350 full Thanksgiving turkey dinners! (about 3 tons worth!), in addition to an excess of canned goods.
      </p>
      
      <p className="mb-6">
        Holy Cross Regional Catholic School generously donated a majority of our canned good collection this 2022 Thanksgiving.
      </p>
    </>
  );

  return (
    <EventTemplate
      title="2022 Thanksgiving Drive"
      content={content}
      images={images}
    />
  )
} 