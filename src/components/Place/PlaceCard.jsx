import { Card } from 'flowbite-react'
import { IoLocationSharp } from 'react-icons/io5';
/* eslint-disable jsx-a11y/anchor-is-valid */
const PlaceCard = ({
    img,
    title,
    location,
    description,
    price,
    handleOrderPopup
    }) => {
  return (
   <Card className=' shadow-lg border-none' onClick={handleOrderPopup}  >
   <div className='overflow-hidden'>
   <img src={img} alt='no img' 
   className=' rounded-md h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
    />
   </div>
   <a href="#" >
     <h5 className='text-xl font-semibold -mt-2 text-gray-900 dark:text-white '>{title}</h5>
   </a>    
    <div className='flex -mt-2 items-center gap-2   text-gray-700'>
    <IoLocationSharp/>
   <span>{location}</span>
    </div>
    <div className='text-gray-500 -mt-2'>
        <p>{description}</p>
    </div>
    <div className='flex items-center justify-between'>
   <span className='text-2xl -mt-3 -mb-3 font-bold text-gray-900 dark:text-white'>{price}</span>
      <a href="#" className='rounded-full bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transit  duration-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none'> Add To cart</a>
    </div>
   </Card>
  )
}


export default PlaceCard