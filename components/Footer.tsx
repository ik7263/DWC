import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaFlag } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <FaFlag className="text-white text-2xl mr-2" />
              <span className="font-heading font-bold text-xl">DUDES WHO CARE</span>
            </Link>
            <p className="text-gray-300 mb-4">
              A 501(c)(3) non-profit organization dedicated to serving our community through charitable events and fundraising.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100086608502271" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.instagram.com/dudeswhocare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>P.O. Box 1234</li>
              <li>Anytown, USA 12345</li>
              <li>Email: info@dudeswhocare.com</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events and ways to get involved.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>© 2016-{currentYear} Dudes Who Care, Incorporated, 501(c)3</p>
          <div className="mt-2">
            <span>EIN: 88-1438378</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 