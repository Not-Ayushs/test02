import React from 'react'

const Header = () => {
  return (
    <nav className='bg-emerald-950 flex px-10 py-5 items-center  justify-between text-white'>
      <h2 className='text-2xl font-semibold'>Youtube</h2>
      <div className='flex gap-8 items-center'>
        <h4 className='text-xl'>Home</h4>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'>Explore</h4>
      </div>
    </nav>
  )
}

export default Header