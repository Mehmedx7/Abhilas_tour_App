import React from 'react'
import PlaceCard from './PlaceCard';
import Img1 from '../../assets/places/boat.jpg';
import Img2 from '../../assets/places/tajmahal.jpg';
import Img3 from '../../assets/places/water.jpg';
import Img4 from '../../assets/places/place4.jpg';
import Img5 from '../../assets/places/place5.jpg';
import Img6 from '../../assets/places/place6.jpg';


const PlacesData = [
    {
      img: Img1,
      title: "Boat",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      
    },
    {
      img: Img2,
      title: "Taj Mahal",
      location: "India",
      description:
        "The Taj Mahal is an  Yamuna in the Indian city of Agra.",
      price: 6700,
      
    },
    {
      img: Img3,
      title: "Underwater",
      location: "US",
      description:
        "The Taj Mahal is an ivory-white marble  Yamuna in the Indian city of Agra.",
      price: 6200,
      
    },
    {
      img: Img4,
      title: "Sydney",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      
    },
    {
      img: Img5,
      title: "Los Angeles",
      location: "United states",
      description:
        "The Taj Mahal is an ivory-white Yamuna in the Indian city of Agra.",
      price: 6700,
      
    },
    {
      img: Img6,
      title: "Los Vegas",
      location: "California",
      description:
        "The Taj Mahal is an ivory-white in the Indian city of Agra.",
      price: 6200,
     
    },
   
  ];

const Place = ({handleOrderPopup}) => {
  return (
    <>
        <div className='dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
        <section data-aos="fade-up" className='container'>
  <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl text-gray-800 font-bold'>Best Place to Visit</h1>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 '>
 {
    PlacesData.map((item, index) => (
    <PlaceCard
        handleOrderPopup={handleOrderPopup}
        key={index}
        {...item}
    />
))
 }

   </div>       
        </section>
        </div>
    </>
  )
}

export default Place