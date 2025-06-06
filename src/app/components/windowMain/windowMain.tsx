import React from 'react'
import RightNavComponent from '../Nav/navRight'
import ContentFrameComponent from './general'

const windowMain = () => {
  return (
    <div className='bg-red-500 w-full h-full overflow-hidden'>
        <RightNavComponent />
        <div className='w-450 h-10 absolute top-10 right-90'>
            <ContentFrameComponent />
        </div>
    </div>
  )

}

export default windowMain