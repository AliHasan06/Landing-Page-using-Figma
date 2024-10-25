import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="bg-[#CFA6A61C] w-full pt-[18vh] pb-[12vh] overflow-hidden text-[#21243D]">
    <div className="h-full flex justify-center flex-col w-[90%] mx-auto">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 items-center gap-10">
        <div className=" md:w-[38vw] w-[60vw] md:ml-32">
          <h1 className="text-4xl md:text-5xl m-auto font-[900] leading-[31px]">
            Hi i am John,
          </h1>
          <h1 className="text-4xl md:text-5xl font-[900] leading-[47px]">
            Creative Technologist
          </h1>
          <p className="mt-7 text-[16px] leading-[23px] font-[400] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            doloribus vitae modi dolore e inventore, cupiditate officia sit
            tempo inventore, cupiditate officia sit tempore exenda inventore,.
          </p>
          <button className="mt-7 px-5 text-[18px] leading-6 py-3 rounded-sm shadow-md shadow-gray-400 text-white font-[500] bg-[#f98585] hover:bg-[#c26e6e] hover:scale-105 duration-150">
            Download Resume
          </button>
        </div>
        <div className="mx-auto mt-6 rounded-[100%]">
          <Image src="/profile.png" alt="moiz" height={200} width={200} className="object-cover"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header