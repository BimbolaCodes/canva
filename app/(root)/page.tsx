import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='flex justify-between'>
        <p>Home</p>
        <UserButton />
      </div>
    </>

    
  )
}

export default Home;