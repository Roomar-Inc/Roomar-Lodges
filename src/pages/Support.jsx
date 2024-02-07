import { Page, Searchbar, Card, CardHeader, CardContent, Link, Button, Tab, List, ListInput } from 'framework7-react'
import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

const Support = ({ f7router }) => {
  return (
    <Page className="bg-zinc-50">
		<nav className="p-4 relative">
				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative"
				/>
                <h1 className="absolute z-10 my-0 w-full text-center left-0 top-4 text-lg font-semibold block p-0"> Support </h1>
		</nav>
    <div className='text-lg ml-10 mt-4 font-semibold'>Have a burning question? 🔥</div>
    <div className="w-[80%] ml-6">
    <Searchbar searchContainer=".search-list" searchIn=".item-title"/>
    </div>
    
   <Tab> 

    <div className='text-lg ml-10 font-semibold mt-6'>Frequently Asked</div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
    <div>
    <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-red" style={{ height: '300px' }}>
            <CardHeader textColor="white" className="display-block">
              <small style={{ opacity: 0.7 }}>Why choose Roomar for <br /> lodge discovery?</small>
            </CardHeader>
            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
            <p className='mb-6 text-lg'>
              Roomar offers an efficient and straightforward way to discover lodges, 
              with cost-effective listing options for lodge owners and a user-centric 
              approach based on feedback and continuous improvement.
            </p>
            <p>
              <Button fill round large cardClose color="red">
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    <div className='w-full'>
      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-yellow" style={{ height: '300px' }}>
            <CardHeader textColor="white" className="display-block">
              <small style={{ opacity: 0.7 }}>How secure are the transactions <br /> on Roomar?</small>
            </CardHeader>
            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
            <p className='mb-6 text-lg'>
            At Roomar, we prioritize the utmost security of your transactions. Our platform implements state-of-the-art encryption techniques, 
            including industry-standard SSL/TLS protocols.
            </p>
            <p className='mb-6 text-lg'>
            Furthermore, we adhere to the Payment Card Industry Data Security Standard (PCI DSS).
            </p>
            <p>
              <Button fill round large cardClose color="yellow">
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card></div>

      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-blue" style={{ height: '300px' }}>
            <CardHeader textColor="white" className="display-block">
              <small style={{ opacity: 0.7 }}>What types of lodges are <br /> available on Roomar?</small>
            </CardHeader>
            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
            <p className='mb-6 text-lg'>
            Roomar offers two types of lodges: furnished lodges for short-term stays with a wide range of options, 
            and unfurnished lodges listed directly by caretakers or landlords.
            </p>
            <p>
              <Button fill round large cardClose color="blue">
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card expandable>
        <CardContent padding={false}>
          <div className="bg-color-green" style={{ height: '300px' }}>
            <CardHeader textColor="white" className="display-block">
              <small style={{ opacity: 0.7 }}>How does Roomar work for <br /> property seekers?</small>
            </CardHeader>
            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
            <p className='mb-6 text-lg'>
            Roomar provides an efficient and hassle-free way for property seekers to discover available lodges. 
            Users can easily search for lodges, view details, 
            and access information about both furnished and unfurnished options.
            </p>
            <p>
              <Button fill round large cardClose color="green" textColor="white">
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
    <div>
    <div className='font-semibold text-lg text-center'>Send us a quick message</div>
    <form action="post" className='mt-0 pt-0'>
    <List strongIos dividersIos insetIos>
      <ListInput label="Name" type="text" placeholder="Your name" clearButton />

      <ListInput label="Password" type="password" placeholder="Your password" clearButton />

      <ListInput label="E-mail" type="email" placeholder="Your e-mail" clearButton />

      <ListInput label="Message" type="textarea" placeholder="Type Message" clearButton />
    </List>
    </form>
    <div className='relative mb-6'>
    <div className='w-[50%] mx-auto relative z-10'>
        <Button fill round large cardClose className='bg-rose-100 relative z-10 text-black shadow-lg'>
            Submit
        </Button>
    </div>
    <div className='absolute inset-0 bg-rose-500 rounded-full shadow-lg z-0 top-1 left-3 mx-auto w-[50%]'>
    </div>
</div>

    </div>
    </Tab>
    </Page>
  )
}

export default Support