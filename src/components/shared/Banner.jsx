import Image from 'next/image'
import React from 'react'
import banner from "@/assets/banner-book.png"

function Banner() {
  return (
   
      <div className="flex justify-center ">

        <Image
        src={banner}
         style={{
          marginLeft: '50%',
          transform: 'translateX(-50%)'
        }} 
        width={1140}
          height={400}
          alt='Banner Image'
        />
      </div>
    
  )
}

export default Banner
