import React from 'react'
import  "./sidebar.module.css"
import {FaUser,FaShoppingBag, FaCalendar,  FaRedRiver, FaTeamspeak, FaRegHandPointRight, FaPage4, FaSignOutAlt} from 'react-icons/fa'
import Menulink from './menulink'
import Image from 'next/image'
function  Sidebar() {

  const menuItems = [
    {
      "title":"Pages",
      list :[
        {
          "title":"Dashboard",
          'path' : '/dashboard',
          "icons": <FaCalendar/>
        },
        {
          "title":"User",
          'path' : '/dashboard/users/',
          "icons": <FaUser/>
        },
        {
          'title': 'Products',
          'path' : '/dashboard/products/',
          'icons' : <FaShoppingBag/>
        },
      
       
      ]
    },
    {
      "title": "Analytics",
      list :[
        {
          "title":"Reports",
          'path' : 'dashboard/analytics',
          "icons": <FaPage4/>
        },
        {
          "title":"Revenue",
          'path' : '/dashboard/revenue',
          "icons": <FaRedRiver/>
        },
        {
          'title': 'Team',
          'path' : '/dashboard/team/',
          'icons' : <FaTeamspeak/>
        },
      
       
      ]
    }
  ]
  return (
    <div className= "container h-screen">
        <div className="user flex gap-4">
          <div className="userProfile ">
            <Image className='images rounded-3xl	' src="/img.png" height={40} width={50}/>
          </div>
          <div className="userDetails flex  flex-col ">
            <span className='font-semibold text-xl'>
              Inverse
            </span>
            <span className=''>
            Administrator
            </span>
          </div>
        </div>

       <ul className='m-3'>
        {
          menuItems.map(category =>(
            
            <li key={category.title} >
              
              <span className='m-1'>
                {category.title }
              </span>
              {
                category.list?.map(item =>(
                  <Menulink item={item} key={item.title}/>
                ))
              }
              
             
            </li>
          ))
        }
        <li>
        <span className='flex items-center gap-2'>
              <FaSignOutAlt/> Signout

              </span>
        </li>
        </ul>
    </div>
  )
}

export default  Sidebar
