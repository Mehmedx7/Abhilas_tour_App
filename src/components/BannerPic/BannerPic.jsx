import React from 'react'

const BannerPic = ({img}) => {
    const bgImage = {
        backgroundImage:`url(${img})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"400px",
    }
  return (
    <div data-aos="zoom-in" className='h-[400px] shadow-sm rounded-lg mt-24 mx-10' style={bgImage}></div>
  )
}

export default BannerPic;