import React from 'react'
import { StarIcon, UserPlusIcon, BuildingLibraryIcon, DocumentIcon } from '@heroicons/react/20/solid'
import { Page, Link, List, ListItem, Tabs } from 'framework7-react'
import BackButton from '../components/App/BackButton'

function About() {
  return (
    <Page className="flex flex-col">
      <Tabs>
    {/* <Navbar title="More User Options" backLink="Back" /> */}

    <BackButton />

    <h1 className='ml-10 text-xl font-bold mt-6'>About</h1>
    <List dividersIos simpleList strong outline inset className="top-1/6 mt-6 ml-6">

    <Link className='block'>
    <div className='flex items-center'> 		
    <StarIcon className='h-5'/>     
    <ListItem title="Rate the app"/>
    </div>
    </Link>

    <Link className='block'>
    <div className='flex items-center'>
    <UserPlusIcon className='h-5'/>
    <ListItem title="Follow us on social media" />
    </div>
    </Link>

    <Link className='block'>
    <div className='flex items-center mb-3'>
    <BuildingLibraryIcon className='h-5'/>
    <ListItem title="Legal" />
    </div>
    </Link>


    <Link className='block'>
    <div className='flex items-center'>
    <DocumentIcon className='h-5'/> 
    <ListItem title="Acknowledgements" />
    </div>
    </Link>

</List>

</Tabs>
</Page>
  )
}

export default About