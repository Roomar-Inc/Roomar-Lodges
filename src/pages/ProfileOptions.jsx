import { Page, Navbar, List, ListItem, Link, Tabs } from 'framework7-react'
import React from 'react'
import { Cog8ToothIcon, ArrowLeftStartOnRectangleIcon, ChatBubbleOvalLeftEllipsisIcon, UserIcon, ChevronRightIcon, } from '@heroicons/react/20/solid'
import BackButton from '../components/App/BackButton'

function ProfileOptions() {
  return (
    <Page className="bg-zinc-50">
      <Tabs>
        {/* <Navbar title="More User Options" backLink="Back" /> */}

        <BackButton />

        <div className='mt-16'>
        <UserIcon className="h-20 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
		<div className='text-center text-md font-semibold'>John Doe</div>
        </div>

        <List dividersIos simpleList className="top-1/6 mt-12">

        <Link className='flex items-center justify-between mx-6' href="/profile">
        <div className='flex items-center mb-3'> 		
		    <UserIcon className='h-5'/>     
        <ListItem title="My Profile"/>
        </div>
        <ChevronRightIcon className='h-6'/>
        </Link>

        <Link className='flex items-center justify-between mx-6' href="/support">
        <div className='flex items-center mb-3'>
        <ChatBubbleOvalLeftEllipsisIcon className='h-5'/>
        <ListItem title="Support" />
        </div>
        <ChevronRightIcon className='h-6'/>
        </Link>

        <Link className='flex items-center justify-between mx-6' href="/settings">
        <div className='flex items-center mb-3'>
        <Cog8ToothIcon className='h-5'/>
        <ListItem title="Settings" />
        </div>
        <ChevronRightIcon className='h-6'/>
        </Link>


        <Link className='flex items-center justify-between mx-6'>
        <div className='flex items-center'>
        <ArrowLeftStartOnRectangleIcon className='h-5'/> 
        <ListItem title="Log Out" />
        </div>
        <ChevronRightIcon className='h-6'/>
        </Link>

    </List>
    </Tabs>
    </Page>
  )
}

export default ProfileOptions