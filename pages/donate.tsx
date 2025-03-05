import React, { useState } from 'react'
import { FaHandHoldingHeart, FaRegCreditCard, FaRegCalendarAlt, FaLock } from 'react-icons/fa'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleDonationAmountChange = (amount: string) => {
    setDonationAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount('custom')
  }

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form
      setDonationAmount('')
      setCustomAmount('')
      setDonorInfo({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
      })
      setPaymentInfo({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Donate</h1>
            <p className="text-xl md:text-2xl">
              Your donation helps us make a difference in our community
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Thank You for Your Donation!</h2>
                <p className="text-lg mb-6">
                  Your generous contribution will help us continue our mission to serve the community.
                </p>
                <p>
                  A receipt has been sent to your email address.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
                
                {/* Donation Amount */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Select Donation Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {['25', '50', '100', '250'].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-3 px-4 rounded-md border ${
                          donationAmount === amount 
                            ? 'bg-secondary text-white border-secondary' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => handleDonationAmountChange(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="customAmount"
                      name="donationAmount"
                      checked={donationAmount === 'custom'}
                      onChange={() => setDonationAmount('custom')}
                      className="mr-2"
                    />
                    <label htmlFor="customAmount" className="mr-4">Custom Amount:</label>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Donor Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Donor Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={donorInfo.firstName}
                        onChange={handleDonorInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={donorInfo.lastName}
                        onChange={handleDonorInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={donorInfo.email}
                        onChange={handleDonorInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={donorInfo.address}
                        onChange={handleDonorInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={donorInfo.city}
                        onChange={handleDonorInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={donorInfo.state}
                          onChange={handleDonorInfoChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={donorInfo.zipCode}
                          onChange={handleDonorInfoChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Payment Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="nameOnCard" className="block text-gray-700 font-medium mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="nameOnCard"
                        name="nameOnCard"
                        value={paymentInfo.nameOnCard}
                        onChange={handlePaymentInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentInfoChange}
                          placeholder="XXXX XXXX XXXX XXXX"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <FaRegCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                          Expiry Date
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={handlePaymentInfoChange}
                            placeholder="MM/YY"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                          CVV
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentInfoChange}
                            placeholder="XXX"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="makeRecurring"
                    className="mr-2"
                  />
                  <label htmlFor="makeRecurring">
                    Make this a monthly recurring donation
                  </label>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || (!donationAmount && !customAmount)}
                    className={`btn bg-secondary text-white px-8 py-3 ${
                      isSubmitting || (!donationAmount && !customAmount) 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-secondary/90'
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Donation'}
                  </button>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <FaLock className="inline-block mr-1" />
                  Your payment information is secure and encrypted
                </div>
              </form>
            )}
            
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <FaHandHoldingHeart />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Other Ways to Donate</h3>
                  <p className="text-gray-600 mb-4">
                    If you prefer to donate by check, please make it payable to "Dudes Who Care" and mail it to:
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dudes Who Care<br />
                    P.O. Box 1234<br />
                    Anytown, USA 12345
                  </p>
                  <p className="text-gray-600">
                    For questions about donations or to discuss other ways to support our mission, please contact us at <a href="mailto:info@dudeswhocare.com" className="text-primary hover:underline">info@dudeswhocare.com</a>.
                  </p>
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