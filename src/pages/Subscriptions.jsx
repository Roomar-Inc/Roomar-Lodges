import React, { useState } from 'react';
import { Page, Block, Button } from 'framework7-react'
import BackButton from '../components/App/BackButton'

function Subscriptions() {

    const [showFreeContent, setShowFreeContent] = useState(false);
    const [showPremiumContent, setShowPremiumContent] = useState(true);
  
    const toggleFreeContent = () => {
      setShowFreeContent(true);
      setShowPremiumContent(false);
    };
  
    const togglePremiumContent = () => {
      setShowFreeContent(false);
      setShowPremiumContent(true);
    };

  return (
    <Page className="bg-zinc-50">
        <BackButton />

        <h1 className='ml-10 text-xl font-bold mt-6'>Subscription</h1>

              {/* Content Containers */}
      {showFreeContent && (
        <Block className="mt-4">
          {/* Content for Free Option */}
          <ul className="bg-zinc-500 text-zinc-100 rounded-md p-4 italic mb-24">
            <li>
                <p className='font-semibold text-lg'>Basic Lodge Listings</p>
                <p className='text-xs text-zinc-300'>Access to basic details of available lodgess</p>
            </li>
            <li>
                <p className='font-semibold text-lg'>General Property Information</p>
                <p className='text-xs text-zinc-300'>Overview of property details, including size and general description</p>
            </li>
            <li>
                <p className='font-semibold text-lg'>Community Reviews</p>
                <p className='text-xs text-zinc-300'>Access to community reviews and ratings for furnished lodges</p>
            </li>
            <li>
                <p className='font-semibold text-lg'>Basic Contact Informations</p>
                <p className='text-xs text-zinc-300'>View basic contact details of lodge owners or caretakers for further inquiries</p>
            </li>            <li>
                <p className='font-semibold text-lg'>Save and Track Favorites</p>
                <p className='text-xs text-zinc-300'>Save and track favorite furnished and unfurnished lodges for future reference</p>
            </li>
          </ul>
        </Block>
      )}

      {showPremiumContent && (
        <Block className="mt-4">
          {/* Content for Premium Option */}
          <div>
          <ul className="bg-rose-100 text-zinc-500 rounded-md p-4 relative z-10 shadow-lg italic">
            <li>
                <p className='font-semibold text-lg text-black'>Full Furnished Lodge Details</p>
                <p className='text-xs'>Comprehensive details of furnished lodges</p>
            </li>
            <li>
            <p className='font-semibold text-lg text-black'>Priority Notifications</p>
                <p className='text-xs'>Receive notifications for newly listed lodges before free users</p>
            </li>
            <li>
            <p className='font-semibold text-lg text-black'>Exclusive Deals</p>
            <p className='text-xs'>Early access to special promotions or discounts offered by lodge owners</p>
            </li>
            <li>
            <p className='font-semibold text-lg text-black'>Detailed Reviews</p>
            <p className='text-xs'>Access to more detailed and verified reviews from previous tenants of furnished lodges.</p>
            </li>
            <li>
            <p className='font-semibold text-lg text-black'>Early Bird Access</p>
            <p className='text-xs'>Early access to newly listed lodges before they are widely available</p>
            </li>

          </ul>
          <div className='absolute inset-0 bg-rose-500 rounded-md shadow-lg z-0 bottom-16 w-[90%] ml-4 left-3'>
        </div>
        </div>
        <div className='mb-5'></div>

          <div className='relative mb-6'>
         <div className='w-[50%] mx-auto relative z-10'>
            <Button fill round large cardClose className='bg-rose-500 relative z-10 text-zinc-50 shadow-lg'>
            Get Started
            </Button>
        </div>
</div>
        </Block>
      )}
        <div className="flex justify-center mt-8">
        {/* First Div Card */}
        <div className="cursor-pointer bg-zinc-500 text-zinc-50 rounded-md p-4 mx-2 w-full hover:scale-105" onClick={toggleFreeContent}>
          <div className="text-center text-xl font-bold">$0</div>
          <div className="text-center font-semibold text-lg">Free</div>
        </div>

        {/* Second Div Card */}
        <div           
        className={`cursor-pointer bg-rose-500 text-zinc-50 rounded-md p-4 mx-2 w-full hover:scale-105 ${
            showPremiumContent ? 'with-gold-shadow' : ''
          }`} 
          onClick={togglePremiumContent}>
          <div className="text-center font-bold text-xl">$3/Month</div>
          <div className="text-center font-semibold text-lg">Premium</div>
          <div className="text-center text-zinc-200 text-xs">30 days free trial</div>
        </div>
      </div>


    </Page>
  )
}

export default Subscriptions