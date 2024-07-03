import Img1 from "../../assets/carousel1.jpg";
import Img2 from "../../assets/carousel2.jpg";
import Img3 from "../../assets/carousel3.jpg";
import { Carousel } from "flowbite-react";
 /* eslint-disable jsx-a11y/img-redundant-alt */
const Craousal = () => {
  return (
    <>
      
      <div className="h-72 sm:h-72 xl:h-96 2xl:h-112 mt-8 relative">
      <Carousel>
        <div className="relative h-full">
         
          <img src={Img1} alt="Carousel Image 1" className="object-cover h-full w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold">
            <p className="font-bold mt-5 md:text-5xl">Plan Your Trip With Us</p> 
            <br/>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-2 px-6  pt-3 pb-4 align-middle bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary text-white text-xl font-semibold rounded-full  transition duration-300"
            >
              Explore Packages
            </button>
          </div>
        </div>
        <div className="relative h-full">
         
          <img src={Img2} alt="Carousel Image 3" className="object-cover h-full w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold">
          <p className="font-bold mt-5 md:text-5xl">Plan Your Trip With Us</p> 
            <br/>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-2 px-6  pt-3 pb-4 align-middle bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary text-white text-xl font-semibold rounded-full  transition duration-300"
            >
              Explore Packages
            </button>
          </div>
        </div>
        <div className="relative h-full">
         
          <img src={Img3} alt="Carousel Image 2" className="object-cover h-full w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold">
          <p className="font-bold mt-5 md:text-5xl">Plan Your Trip With Us</p> 
            <br/>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-2 px-6  pt-3 pb-4 align-middle bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary text-white text-xl font-semibold rounded-full  transition duration-300"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </Carousel>
    </div>
    </>
  )
}

export default Craousal