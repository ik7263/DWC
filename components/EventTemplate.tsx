import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface EventTemplateProps {
  title: string;
  content: React.ReactNode;
  images: string[];
  previousEvent?: string;
  nextEvent?: string;
}

const EventTemplate: React.FC<EventTemplateProps> = ({ 
  title, 
  content, 
  images,
  previousEvent,
  nextEvent
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl">
              Dudes Who Care Thanksgiving Food Drive
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              {content}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          
          {images.length > 0 ? (
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={images[currentImageIndex]} 
                  alt={`${title} image ${currentImageIndex + 1}`} 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft size={24} />
              </button>
              
              <button 
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight size={24} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>No images available for this event yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Navigation between events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between max-w-4xl mx-auto">
            {previousEvent ? (
              <Link href={`/events/${previousEvent}`} className="btn bg-gray-200 hover:bg-gray-300 text-gray-800">
                ← Previous Event
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link href="/events" className="btn bg-primary text-white hover:bg-primary/90">
              All Events
            </Link>
            
            {nextEvent ? (
              <Link href={`/events/${nextEvent}`} className="btn bg-gray-200 hover:bg-gray-300 text-gray-800">
                Next Event →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default EventTemplate 