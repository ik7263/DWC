import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHandsHelping, FaUsers, FaHandHoldingHeart } from 'react-icons/fa'

// Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UpcomingEvents from '@/components/UpcomingEvents'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                DUDES WHO <span className="text-secondary">CARE</span>
              </h1>
              <p className="text-xl mb-8">
                A 501(c)(3) non-profit organization dedicated to serving our community through charitable events and fundraising.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/donate" className="btn bg-secondary text-white hover:bg-secondary/90">
                  Donate Now
                </Link>
                <Link href="/about" className="btn bg-white text-primary hover:bg-gray-100">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[344px] h-[200px] bg-white/90 rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src="/DWC/images/DUDES-HEART-LOGO-BLACK.jpg" 
                  alt="Dudes Who Care Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To serve our community through charitable events and fundraising while having fun and building lasting relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Service</h3>
              <p className="text-gray-600">
                We organize and participate in various community service projects throughout the year to help those in need.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-3">Fundraising Events</h3>
              <p className="text-gray-600">
                We host fundraising events to support local charities and causes that make a difference in our community.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-xl font-bold mb-3">Building Relationships</h3>
              <p className="text-gray-600">
                We believe in the power of community and building lasting relationships while making a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through the generosity of our donors and the dedication of our volunteers, we've made a significant impact in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-gray-600">Years of Service</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$100K+</div>
              <p className="text-gray-600">Funds and Donated Goods Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of caring individuals and help us create positive change in the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
              Get Involved
            </Link>
            <Link href="/donate" className="btn bg-primary text-white hover:bg-primary/90">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEvents showViewAll={true} />
      
      <Footer />
    </div>
  )
} 