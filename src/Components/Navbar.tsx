import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = () => {
  return (
    <nav className="flex w-full justify-end bg-[#CFA6A61C] h-20 items-center px-10">
      <ul className="md:flex gap-9 font-[500] text-xl hidden">
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
        <li className="block md:hidden text-4xl"><HiBars3BottomRight/></li>
    </nav>
  )
}

export default Navbar