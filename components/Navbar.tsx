import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false)
  const eventsDropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(event.target as Node)) {
        setIsEventsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Past events for dropdown
  const pastEvents = [
    { name: '2025 Thanksgiving Drive', slug: 'thanksgiving-drive-2025' },
    { name: '2024 Thanksgiving Drive', slug: 'thanksgiving-drive-2024' },
    { name: '2022 Thanksgiving Drive', slug: 'thanksgiving-drive-2022' },
    { name: '2021 Thanksgiving Drive', slug: 'thanksgiving-drive-2021' },
    { name: '2021 Christmas in July', slug: 'christmas-in-july-2021' },
    { name: '2020 Thanksgiving Drive', slug: 'thanksgiving-drive-2020' },
    { name: '2016-2019 Thanksgiving Drives', slug: 'thanksgiving-drives-2016-2019' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image 
                src="https://github.com/ik7263/DWC/blob/main/public/images/DUDES-HEART-LOGO-BLACK.jpg" 
                alt="Dudes Who Care Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl">DUDES WHO CARE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/the-dudes" className="font-medium hover:text-primary transition-colors">
              The Dudes
            </Link>
            
            {/* Events Dropdown */}
            <div className="relative" ref={eventsDropdownRef}>
              <button 
                onClick={toggleEventsDropdown}
                className="flex items-center font-medium hover:text-primary transition-colors focus:outline-none"
              >
                Events
                <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isEventsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link 
                    href="/events" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                    onClick={() => setIsEventsDropdownOpen(false)}
                  >
                    All Events
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {pastEvents.map((event, index) => (
                    <Link 
                      key={index}
                      href={`/events/${event.slug}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                      onClick={() => setIsEventsDropdownOpen(false)}
                    >
                      {event.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/donate" className="btn bg-secondary text-white hover:bg-secondary/90">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/the-dudes" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Dudes
            </Link>
            
            {/* Mobile Events Menu */}
            <div>
              <Link 
                href="/events" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                {pastEvents.map((event, index) => (
                  <Link 
                    key={index}
                    href={`/events/${event.slug}`} 
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/donate" 
              className="bg-secondary text-white px-4 py-2 rounded inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 