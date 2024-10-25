import React from 'react'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <div className='bg-[#CFA6A61C] pt-14 pb-14'>
        <h2 className='sm:w-[67%] w-[49%] m-auto text-lg sm:text-xl font-semibold mb-6'>Featured works</h2>
        <FeaturedCard src={"/Rectangle 30.png"}/>
        <FeaturedCard src={"/Rectangle 32.png"}/>
        <FeaturedCard src={"/Rectangle 34.png"}/>

        </div>
  )
}

export default Featured