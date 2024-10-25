import React from 'react'
import Image from "next/image";


type Src = {
  src: string
}
const FeaturedCard = ({src}:Src) => {
  return (
    <div className="w-[55%] sm:w-[70%] mx-auto mb-14">
      <div className=" grid grid-cols-1 sm:grid-cols-2 w-[35vw] gap-8 items-center p-5">
        <div className="w-[42vw] md:w-[15vw] sm:w-[18vw] rounded-s-md">
          <Image src={src} alt="img" width={246} height={184} className="object-cover w-full" />
        </div>
        <div className="w-[45vw]">
          <h2 className="text-2xl font-bold">Designing Dashboards</h2>
          <p className="text-[#5f5d5d] font-[500] mt-2"> <span className="bg-[#f98585] font-bold text-white mr-3 px-3 rounded-2xl">2020</span> Dashboard</p>
          <p className="mt-4 text-[18px] leading-[26px]">Lorem ipsum dolor sit amet consectetur adipisicingo necessitatibus asperiores, officiis quaerat distinctio! Dignissimos doloremque expedita molestiae ad error gdfd distinctio!</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;