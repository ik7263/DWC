import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Gallery() {
  // Sample gallery images - these would be replaced with actual images
  const galleryImages = [
    { id: 1, src: '/images/gallery-1.jpg', alt: 'Golf Tournament', category: 'Events' },
    { id: 2, src: '/images/gallery-2.jpg', alt: 'Community Cleanup', category: 'Service' },
    { id: 3, src: '/images/gallery-3.jpg', alt: 'Charity Gala', category: 'Events' },
    { id: 4, src: '/images/gallery-4.jpg', alt: 'Food Drive', category: 'Service' },
    { id: 5, src: '/images/gallery-5.jpg', alt: 'Board Meeting', category: 'Team' },
    { id: 6, src: '/images/gallery-6.jpg', alt: 'Volunteer Day', category: 'Service' },
    { id: 7, src: '/images/gallery-7.jpg', alt: 'Fundraising Event', category: 'Events' },
    { id: 8, src: '/images/gallery-8.jpg', alt: 'Team Building', category: 'Team' },
    { id: 9, src: '/images/gallery-9.jpg', alt: 'Award Ceremony', category: 'Events' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl">
              Check out photos from our events and activities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-bold">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us at Our Next Event</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Want to be part of our next photo gallery? Join us at our upcoming events!
          </p>
          <a href="/events" className="btn bg-white text-secondary hover:bg-gray-100">
            View Upcoming Events
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 