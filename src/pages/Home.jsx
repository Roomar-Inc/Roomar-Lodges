import React from 'react';
import { Link, Panel, List, ListItem, Fab, Icon, Button, Tab, Page } from 'framework7-react';
import { UserIcon, Bars3BottomLeftIcon, InformationCircleIcon, XMarkIcon, HeartIcon, CreditCardIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import "swiper/css";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext, useState } from "react";
import Navbottom from '../components/App/Navbottom';
import Cards from '../components/App/Card';

const Home = () => {
	const { setPopupOpened } = useContext(GlobalContext);
	const [selected, setSelected] = useState('home');


	return (
    <Page id="home" className="bg-zinc-50">
		<Tab id="home" className="page-content" tabActive>

 


		{/* Left Panel */}
		<Panel left cover containerEl="#home" id="left-panel" className="fixed">

		<div className='mt-16'>
		<UserIcon className="h-12 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
		<div className='text-center text-md font-semibold'>John Doe</div>
		</div>
		<div className='text-xs text-center text-rose-600'><Link>View profile</Link></div>

		<List menuList outlineIos strongIos className="top-1/6">
        {/* <ListItem
          link
          title="Home"
          selected={selected === 'home'}
		  className={selected === 'home' ? 'active-item' : ''}
          onClick={() => setSelected('home')}
        >
         <HomeIcon className='h-5' slot='media'/>
        </ListItem> */}
        <ListItem
          link="/wishlist"
          title="Wishlist"
          selected={selected === 'wishlist'}
		  className={selected === 'wishlist' ? 'active-item' : ''}

          onClick={() => setSelected('wishlist')}
        >
         <HeartIcon className='h-5' slot='media'/>
        </ListItem>
        <ListItem
          link="/roomie"
          title="Find a roommate"
          selected={selected === 'roomie'}
		  className={selected === 'roomie' ? 'active-item' : ''}

          onClick={() => setSelected('roomie')}
        >
         <UserGroupIcon className='h-5' slot='media'/>

        </ListItem>

		<ListItem
          link="/subscriptions"
          title="Subscription"
          selected={selected === 'subscriptions'}
		  className={selected === 'subscriptions' ? 'active-item' : ''}

          onClick={() => setSelected('subscriptions')}
        >
        <CreditCardIcon className='h-5' slot='media'/>
        </ListItem>

		<ListItem
          link="about"
          title="About"
          selected={selected === 'about'}
		  className={selected === 'about' ? 'active-item' : ''}

          onClick={() => setSelected('about')}
        >
        <InformationCircleIcon className='h-5' slot='media'/>

        </ListItem>
      	</List>

		<Link href="/download-link">
		<div className='mx-4 bg-rose-100 p-3 rounded-md'>
			<div className='flex items-center justify-between pb-2'>
			<div className='font-semibold'> Rent Out Your Property </div> <XMarkIcon className='h-5'/>
			</div>
			<p className='text-xs'>Your potential customers are using our platform</p>
		</div>
		</Link>


    </Panel>
      	<div className="flex justify-between items-center p-4 pt-4 mb-12">
        {/* Open Left Panel Button */}
        
        <Button panelOpen="#left-panel" className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 top-6"               
                onClick={() => {
                console.log('After state update:');
              }}>
          <Bars3BottomLeftIcon className="h-6" />
        </Button>

		<Link href="/profile-options" className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 right-5 top-4">
          <UserIcon className="h-6" />
        </Link>
      	</div>
        <div className='mb-24'>
			<Cards />	
			<Cards />	
			<Cards />	
			<Cards />	
			<Cards />	
			<Cards />	
			<Cards />	
			<Cards />	
      </div>


			<Navbottom />
		</Tab>
    </Page>

	);
};
export default Home;
