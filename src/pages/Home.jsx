import Craousal from '../components/Carousel/Craousal';
import Place from '../components/Place/Place';
import Adventure from '../components/Adventure/Adventure';
import Banner from '../components/Banner/Banner';
import Testimonial from '../components/Testimonial/Testimonial';


//  const slides = [
//   img1,
//   img4,
//   img4,
//   img1
//   ]


const Home = () => {
  return (
    <>      
      <Craousal/>
      <Place/>
      <Banner/>
      <Adventure/>
       <Testimonial/>
    </>
  )
}

export default Home