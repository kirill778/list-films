import React from 'react'
import { Navbar } from '../components/Nav/nav'
import Search from '../components/search'
import RightNavComponent from '../components/Nav/navRight'
import WindowMain from '../components/windowMain/windowMain'

export default function Home() {
  return (
    <div className=''>
      <div className='flex'>
        <Navbar />
        <Search />
      </div>
      <div className='absolute top-30 right-0 w-80'>
        <WindowMain />
      </div>
    </div>
  )
}