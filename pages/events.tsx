import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UpcomingEvents from '@/components/UpcomingEvents'

export default function Events() {
  // Past events
  const pastEvents = [
    {
      id: 2,
      title: '2024 Thanksgiving Drive',
      date: 'November 2024',
      location: 'Montgomery County, PA',
      description: 'We provided 500 Turkey dinners to families in need, our largest donation to date.',
      image: '/images/events/2024/thanksgiving-1.jpg',
      slug: 'thanksgiving-drive-2024'
    },
    {
      id: 3,
      title: '2022 Thanksgiving Drive',
      date: 'November 2022',
      location: 'Montgomery County, PA',
      description: 'We delivered over 350 full Thanksgiving turkey dinners (about 3 tons worth!) to families in need.',
      image: '/images/events/2022/thanksgiving-1.jpg',
      slug: 'thanksgiving-drive-2022'
    },
    {
      id: 4,
      title: '2021 Thanksgiving Drive',
      date: 'November 2021',
      location: 'Montgomery County, PA',
      description: 'We delivered 325 Turkey dinners and an excess of canned goods, fresh produce, pies, and rolls.',
      image: '/images/events/2021/thanksgiving-1.jpg',
      slug: 'thanksgiving-drive-2021'
    },
    {
      id: 5,
      title: '2021 Christmas in July',
      date: 'July 2021',
      location: "Martha's Choice Pantry",
      description: 'We donated over $2,500 of goods including toiletries and Walmart gift cards for children.',
      image: '/images/events/2021/christmas-july-1.jpg',
      slug: 'christmas-in-july-2021'
    },
    {
      id: 6,
      title: '2020 Thanksgiving Drive',
      date: 'November 2020',
      location: 'Montgomery County, PA',
      description: 'We provided over 250 full turkey meals and raised $10,000 for families in need.',
      image: '/images/events/2020/thanksgiving-1.jpg',
      slug: 'thanksgiving-drive-2020'
    },
    {
      id: 7,
      title: '2016-2019 Thanksgiving Drives',
      date: '2016-2019',
      location: 'Montgomery County, PA',
      description: 'Our growth from providing 20 meals in 2016 to over 220 full turkey dinners in 2019.',
      image: '/images/events/2016-2019/thanksgiving-1.jpg',
      slug: 'thanksgiving-drives-2016-2019'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl">
              Join us at our upcoming events and fundraisers
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEvents showViewAll={false} />

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      {event.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  
                  <Link href={`/events/${event.slug}`} className="text-primary hover:underline font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for volunteers and sponsors for our events. Contact us to learn more!
          </p>
          <Link href="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 