import React from 'react'
import Image from 'next/image'
import { FaUsers, FaHandshake, FaGlobe, FaAward } from 'react-icons/fa'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Dudes Who Care</h1>
            <p className="text-xl md:text-2xl">
              A 501(c)(3) non-profit organization dedicated to serving our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/about/our-story.jpg" 
                  alt="Dudes Who Care founders" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Dudes Who Care started in 2016 when a few friends came up with an idea to give back to the
                community. United by their sense of service, they decided to coordinate their first food drive just
                before Thanksgiving. That year we were able to collect complete Thanksgiving dinners for just
                over 20 families. We have experienced such phenomenal growth over the past 6 years, as this year we focused our efforts on becoming a fully registered 501(c)3 non-profit organization.
              </p>
              <p className="text-lg text-gray-600 mb-4">
              Our group began with 3 guys with the idea of helping members in our local community.  Since our inception we have been fortunate enough to find that there are many “Dudes” within our community that share this idea and have since joined our team.    Consistent with our values we have also promoted the involvement of junior Dudes and Dudettes in which we find great joy when we see them experience the humility and gratitude to be able to give back.  We have been fortunate to experience growth every year since our formation and partnering with the local community and its members. We look forward to being able to continue to expand our reach and help more in need every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - renamed to "A Culture of Charity" */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Culture of Charity</h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 2016, DWC has embraced a set of values which help us lead and voluntarily give to those around us. Service, Leadership, Respect, Community, Faith, and Family are what makes a Dude Who Cares. We refer to this set of values as The Dude Code.
            </p>
            <p className="text-lg text-gray-600">
              Our Charity began with the idea of helping our members of our local community with three dudes and a son. As we expanded our community, all of our younger Dudes had grown enough to help us in our efforts. Our first year of Thanksgiving collections raised 50 whole turkey dinners. Our second year had a result of 100 turkey dinners. Our third year we raised over 220 complete turkey dinners and over $4,000 worth of food and donations to Martha's Pantry. If this rate holds steady and with our community's support, we hope to exceed our previous record turkey dinners for Thanksgiving every year. It is through our members and fellow dudes that we are able to help the ones who cannot help themselves. It is through our generous actions and donations that hundreds of families are fed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-lg text-gray-600">
                We believe in the power of community and prioritize the needs of the people we serve. Our events and fundraisers are developed based on direct feedback from community members.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-lg text-gray-600">
                We operate with complete transparency and accountability, ensuring that funds raised are used effectively and as promised to our supporters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Impact</h3>
              <p className="text-lg text-gray-600">
                We focus on making a difference in our local community, supporting causes and organizations that directly benefit the people around us.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold mb-3">Fun and Fellowship</h3>
              <p className="text-lg text-gray-600">
                We believe that doing good should be enjoyable. Our events are designed to be fun and engaging, fostering a sense of fellowship among participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Section - new section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Community</h2>
            <p className="text-lg text-gray-600 mb-6">
              The Dude Community consists of kind hearted people who embrace generosity and charitable traits to help others. Our local community currently is focused in Montgomery County, PA, however, our donor community reaches far and wide as our influence has grown. Our online community is ever growing and we hope you have a chance to share in the Dude experience or donate to our cause. We have had many generous donations from those connected to our community online.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We have many kind volunteers and donators from all walks of life. At DWC, we accept everyone who shares the same values of generosity and the Dude Code. You have the opportunity to contribute to the Dude community and those in need.
            </p>
            <div className="text-center mt-8">
              <Link href="/the-dudes" className="btn bg-secondary text-white hover:bg-secondary/90">
                Meet The Dudes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or attend our events, there are many ways to get involved with Dudes Who Care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
              Get Involved
            </a>
            <a href="/donate" className="btn bg-primary text-white hover:bg-primary/90">
              Make a Donation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 