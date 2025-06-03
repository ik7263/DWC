import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa'

// Define the event type
export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  slug: string;
}

// Export the upcoming events data so it can be imported by both pages
export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: '2025 Thanksgiving Drive',
    date: 'November 2025',
    time: 'Donations accepted now',
    location: 'Montgomery County, PA',
    description: 'Help us provide Thanksgiving meals to families in need. Our goal is to provide at least 550 Turkey dinners this year, surpassing our previous record.',
    image: '/images/events/2024/thanksgiving-1.jpg', // Reusing 2024 image until 2025 images are available
    slug: 'thanksgiving-drive-2025'
  }
]

interface UpcomingEventsProps {
  showViewAll?: boolean;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ showViewAll = true }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          {showViewAll && (
            <Link href="/events" className="flex items-center text-primary font-medium hover:text-primary/80">
              View All Events <FaArrowRight className="ml-2" />
            </Link>
          )}
        </div>
        
        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    {event.date}
                  </div>
                  {event.time && (
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      {event.time}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">
                  {event.description}
                </p>
                
                <Link href={`/events/${event.slug}`} className="btn bg-secondary text-white hover:bg-secondary/90">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents 