"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import "./navbar.module.css"
import { FaBell, FaRepublican, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import Search from '../search/search'

function  Navbar() {

  const pathname = usePathname()
  return (
   
      <div className="menu container flex w-full   items-center justify-between m-2 bg-[#182237] p-2">
       
        <div>
          {
              pathname.split("/").pop()
          }
        </div>
        <div className="containers search flex  items-center justify-between gap-2 m-2">
        <div className="search flex  items-center justify-center gap-2 ">
          
          
          <Search placeholder="search here"/>
         
        </div>
        <div className="icons flex gap-5 m-2 ">
            <FaBell  size={20}/>
            <FaRepublican size={20}/>
            <FaSignOutAlt size={20}/>
          </div>  
        </div>
       
      </div>
  
  )
}

export default  Navbar
