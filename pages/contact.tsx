import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you may have about our organization, events, or how you can support our mission.
              </p>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:frank.plonski@dudeswhocare.org" className="text-primary hover:underline text-lg">
                    frank.plonski@dudeswhocare.org
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/dudeswhocare/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/dudeswhocare/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 