import React from 'react'
import Filter from './Filter'
import JobLists from './JobLists'

const LandingPage = () => {
  return (
    <div className='block w-full sm:flex gap-10  px-[] pt-[24px] pb-[32px] sm:px-[124px] sm:pt-[72px]'>
        <div className='lg:w-[234px]'>
      <Filter/>
        </div>
        <div className='w-full mx-auto'>
      <JobLists/>
        </div>
    </div>
  )
}

export default LandingPage
