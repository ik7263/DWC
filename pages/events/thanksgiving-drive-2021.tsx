import React from 'react'
import EventTemplate from '@/components/EventTemplate'

export default function ThanksgivingDrive2021() {
  // Placeholder for images - replace with actual image paths when available
  const images = [
    '/images/events/2021/thanksgiving-1.jpg',
    '/images/events/2021/thanksgiving-2.jpg',
    '/images/events/2021/thanksgiving-3.jpg',
  ];

  const content = (
    <>
      <h2 className="mb-6">2021 Thanksgiving Drive</h2>
      
      <p className="mb-6">
        In 2021, COVID-19's effects still remain unequivocally visible in our Montgomery County community. Individuals suffer today directly and indirectly, through illness, food insecurity, mental health issues, unemployment, in addition to myriad other complications. Martha's Choice Marketplace this year had come to rely on DWC for over half of their food supply. 2021 was our most crucial to date. Inflation and rising prices of Thanksgiving meals meant that Dudes Who Care had to provide a greater portion of food for those in need. The DWC community, comprised of local and national businesses as well as individual donors, share a common value of generosity. Recognized the urgent need to our community, DWC delivered over 300 full Thanksgiving turkey dinners! (about 2.5 tons worth!), in addition to an excess of canned goods.
      </p>
      
      <p>
        In November 2021, Dudes Who Care was featured in Upper Providence Living Magazine, edition November 2021. Read our article for more information to the creation of DWC and our impact on our local community!
      </p>
    </>
  );

  return (
    <EventTemplate
      title="2021 Thanksgiving Drive"
      content={content}
      images={images}
    />
  )
} 