import { Link } from 'framework7-react';
import Carousel from './Carousel';
import image1 from '../../../resources/books.jpg';
import image2 from '../../../resources/food.jpg';
import image3 from '../../../resources/furnitures.jpg';
import { StarIcon } from '@heroicons/react/20/solid';

const images = [image3, image3, image3];

const Cards = ({ location, rating, lodgeName, furnished, amount }) => {
  return (
    <Link className='cardss bg-zinc-50'>
    <div className='px-4 pb-4 flex flex-col justify-center mx-auto'>
    <Carousel images={images} />
      <div className="py-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
          <p className="text-lg font-semibold">{lodgeName}Beta Willis Lodge</p>
          <div className='flex items-center'>
            <StarIcon className='h-4 pr-1'/>
            <p className='font-semibold'>{rating}4.5</p>
          </div>
            
          </div>
          <p className='font-semibold'>{amount}	&#8358; 120,000</p>

          <p className="mr-2">Sekani Mall Road, Eziobodo</p>

        </div>
        <p>{furnished}Unfurnished</p>
      </div>
      </div>
      </Link>
  );
};

export default Cards;
