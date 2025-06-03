import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TheDudes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The Dudes</h1>
            <p className="text-xl md:text-2xl">
              Meet the dedicated individuals who lead Dudes Who Care.
            </p>
          </div>
        </div>
      </section>

      {/* In Memoriam Section - Stanley "Stas" Karwoski */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">In Memoriam</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-4xl mx-auto">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://github.com/ik7263/DWC/blob/main/public/images/the-dudes/stas.jpg?raw=true" 
                  alt="Stanley 'Stas' Karwoski" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Stanley "Stas" Karwoski, a Dude Who Cared</h3>
              <p className="text-lg text-gray-600">
                Stas was a valued member of the Dude Community who unexpectedly passed away in the summer of 2022. Stas exemplified the values of a Dude as every year he assisted in DWC functions and was a good friend to all. We will always remember his contributions to the Dude family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current Officers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Frank - President */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/Frank_P_profile.jpg"
                  alt="Frank - President" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Frank</h3>
              <p className="text-primary font-medium mb-3">President</p>
              <p className="text-lg text-gray-600">
                Frank is a proud father of a son and daughter and a loving husband. He works in the field of clinical research at a major pharmaceutical company.
              </p>
            </div>
            
            {/* Justin - Vice President */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-2.jpg" 
                  alt="Justin - Vice President" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Justin</h3>
              <p className="text-primary font-medium mb-3">Vice President</p>
              <p className="text-lg text-gray-600">
                Justin is a loving and proud father who loves his two sons and is a loving husband. He is a Consulting Solutions leader at a large professional services company.
              </p>
            </div>
            
            {/* Brian - Treasurer */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-1.jpg" 
                  alt="Brian - Treasurer" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Brian</h3>
              <p className="text-primary font-medium mb-3">Treasurer</p>
              <p className="text-lg text-gray-600">
                Brian is a proud father and husband who enjoys cycling and exercise. He works as an account executive at a national Insurance brokerage located in King of Prussia.
              </p>
            </div>
            
            {/* Paul - Secretary */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-8.jpg" 
                  alt="Paul - Secretary" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Paul</h3>
              <p className="text-primary font-medium mb-3">Secretary</p>
              <p className="text-lg text-gray-600">
                Paul is a proud and loving father who enjoys exercise and the outdoors. He works as a Senior Lead Engineer in the electric power industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Directors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Alex - Marketing Director */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-4.jpg" 
                  alt="Alex - Marketing Director" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Alex</h3>
              <p className="text-primary font-medium mb-3">Marketing Director</p>
              <p className="text-lg text-gray-600">
                Alex attends the University of Virginia. He is passionate about volunteering as well as community and self-improvement. He served as Secretary of DWC from 2018-2022.
              </p>
            </div>
            
            {/* Nate - Solicitations Director */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-5.jpg" 
                  alt="Nate - Solicitations Director" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Nate</h3>
              <p className="text-primary font-medium mb-3">Solicitations Director</p>
              <p className="text-lg text-gray-600">
                Nate is a happy husband, and a father of 2 sons and a daughter. He works at Northeastern Apprenticeship and Training. Nate loves to travel with his family and watch his kids' sports.
              </p>
            </div>
            
            {/* Jeff - Logistics Director */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-6.jpg" 
                  alt="Jeff - Logistics Director" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Jeff</h3>
              <p className="text-primary font-medium mb-3">Logistics Director</p>
              <p className="text-lg text-gray-600">
                Jeff officially joined the DWC team this year but has been an active supporter of the group for several years. He is a claims manager for a major insurance company and resides in Pottsgrove Township with his wife and son.
              </p>
            </div>
            
            {/* Nicolas */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/team-7.jpg" 
                  alt="Nicolas" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Nicolas</h3>
              <p className="text-primary font-medium mb-3">Director</p>
              <p className="text-lg text-gray-600">
                Nicolas is a happy husband and proud father of two daughters and a son. He works in clinical research at a major pharmaceutical company. He loves cooking and the outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Dudes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Junior Dudes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JP */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/junior-dudes/jp.jpg" 
                  alt="JP" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">JP</h3>
              <p className="text-primary font-medium mb-3">Junior Dude</p>
              <p className="text-lg text-gray-600">
                JP is an enthusiastic young member of our community who brings energy and fresh perspectives to our events.
              </p>
            </div>
            
            {/* Jason */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/junior-dudes/jason.jpg" 
                  alt="Jason" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Jason</h3>
              <p className="text-primary font-medium mb-3">Junior Dude</p>
              <p className="text-lg text-gray-600">
                Jason actively participates in our community service projects and helps spread our message of caring.
              </p>
            </div>
            
            {/* Nolan */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <Image 
                  src="/images/the-dudes/junior-dudes/nolan.jpg" 
                  alt="Nolan" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Nolan</h3>
              <p className="text-primary font-medium mb-3">Junior Dude</p>
              <p className="text-lg text-gray-600">
                Nolan brings creativity and dedication to our team, helping us make a difference in our community.
              </p>
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
            <Link href="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
              Get Involved
            </Link>
            <Link href="/donate" className="btn bg-primary text-white hover:bg-primary/90">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 