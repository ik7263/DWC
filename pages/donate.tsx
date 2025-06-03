import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Donate</h1>
            <p className="text-xl md:text-2xl">
              Your donation helps us make a difference in our community. We are a 501(c)3 non-profit organization. EIN: 81-2744656
            </p>
          </div>
        </div>
      </section>

      {/* Donation Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="text-primary text-4xl mr-4">
                  <FaHandHoldingHeart />
                </div>
                <h2 className="text-3xl font-bold">Make a Donation</h2>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                To make a donation or learn more about how you can support our mission, please contact us at:
              </p>
              
              <a 
                href="mailto:frank.plonski@dudeswhocare.org" 
                className="text-primary hover:underline text-xl font-medium"
              >
                frank.plonski@dudeswhocare.org
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 