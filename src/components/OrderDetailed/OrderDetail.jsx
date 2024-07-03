import React from 'react'
import TabView from "../../components/Tab/TabView"
import OrderTour from '../OrderTour/OrderTour';

 
const OrderDetail = ({handleOrderPopup}) => {
  return (
<>
<div className='mt-10 py-3'>
<section data-aos="fade-up" className='container'>
<h1 className='my-8 border-l-8  border-primary/50 py-2 pl-2 text-3xl text-gray-800 font-bold'>Order Detail</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-20'> 
  <TabView/>
  <OrderTour/>
</div>

</section>
</div>

</>
  )
}

export default OrderDetail