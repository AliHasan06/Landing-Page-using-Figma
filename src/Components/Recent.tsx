import React from 'react'

const Recent = () => {
  return (
    <div className="pt-8 pb-14 bg-[#f4e2e2]">
    <div className="w-[68%] flex justify-between m-auto">
        <p className="text-[22px] font-[500] leading-[32px]">Recent Post</p>
        <p className="text-xl font-semibold text-[#f98585]">View all</p>
    </div>
  <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-9 items-center w-[68%] mx-auto">
    <div className="bg-white px-8 pr-10 py-9 ">
        <h2 className="text-[26px] font-[700] leading-[38px]">Making a design system from scratch</h2>
        <p className="text-[#545454] flex flex-wrap text-[17px] mt-4">12 Feb 2020  |  Design , Pattern</p>
        <p className="mt-6 mb-4 leading-[23.5px] text-[#21243D] font-[400]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis laboriosam debitis maiores consequuntur commodi magni id harum, ipsa obcaecati deserunt fuga dignissimos nte?</p>
    </div>
    <div className="bg-white px-8 pr-10 py-9 ">
        <h2 className="text-[26px] font-[700] leading-[38px]">Making a design system from scratch</h2>
        <p className="text-[#545454] text-[17px] mt-4">12 Feb 2020  |  Design , Pattern</p>
        <p className="mt-6 leading-[23.5px] mb-4 text-[#21243D] font-[400]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis laboriosam debitis maiores consequuntur commodi magni id harum, ipsa obcaecati deserunt fuga dignissimos nte?</p>
    </div>
  </div>
</div>
  )
}

export default Recent