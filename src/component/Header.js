import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VscClose, VscListFlat } from "react-icons/vsc";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navs = [
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ];

  const toggle = () => {
    setOpen(!isOpen);
  }


  return (
    <div className='flex justify-between px-9   bg-black text-white py-3 items-start sticky top-0 z-50'>

      <div><NavLink to='/' replace className='text-xl'>Sample Logo</NavLink>


        {isOpen && <div className=' flex flex-col space-y-2 mt-2'>
          {navs.map((n, i) => {
            return <NavLink onClick={() => toggle()} className='hover:bg-white
          hover:p-1 hover:text-black' to={n.path} key={i} >{n.label}</NavLink>
          })}</div>}
      </div>

      <div className=' hidden sm:flex'>
        <button onClick={() => toggle()}>{isOpen ? <VscClose size={30} /> : <VscListFlat size={30} />}</button>
      </div>




      <div className='space-x-5 sm:hidden mt-3'>
        {navs.map((n, i) => {
          return <NavLink className='hover:bg-white
          hover:p-1 hover:text-black sm:flex' to={n.path} key={i} >{n.label}</NavLink>
        })}

      </div>


    </div>
  )
}

export default Header