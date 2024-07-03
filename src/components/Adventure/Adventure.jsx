import Img1 from '../../assets/places/boat.jpg';
import Img2 from '../../assets/places/tajmahal.jpg';
import Img3 from '../../assets/places/water.jpg';
import Img4 from '../../assets/img3.jpg';
import Img5 from '../../assets/img1.jpg';
import Img6 from '../../assets/img4.jpg';
import Img7 from '../../assets/img2.jpg';
import Img8 from '../../assets/img5.jpg';

import 'react-image-lightbox/style.css'; 
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const Adventure = () => {
  const images = [Img1,Img2, Img3,  Img4, Img5, Img6, Img7, Img8];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <div className='dark:bg-gray-900 -mt-10 dark:text-white bg-gray-50 py-10'>
         <section className='container' data-aos="fade-up">
             <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl text-gray-800 font-bold'>Adventures For Everyone</h1>
                          
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3   overflow-hidden'>
             {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className='object-cover h-[230px] w-full cursor-pointer'
                alt=""
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
            {isOpen && (
                        <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
        
          )}
                    </div>
         </section>
       </div> 
    </>
  )
}

export default Adventure