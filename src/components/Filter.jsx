import React from 'react'

const Filter = () => {
  return (
    <div>
      <div className="w-[375px] h-[50px] px-4 py-3 bg-white shadow-inner justify-center items-center gap-2 inline-flex sm:hidden">
    <div className="w-6 h-6 relative"></div>
    <p className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed ">More Filters</p>
</div>
<div className=" h-[1228px] hidden sm:flex flex-col ">
    <select name="" id="" className='text-slate-800 text-base font-bold leading-normal mb-36'>
        <option value="" >Type of Employment</option>
        <option value="">Full Time</option>
        <option value="">Part Time</option>
        <option value="">Internship</option>
        <option value="">Contract</option>
    </select>

    <select name="" id="" className='text-slate-800 text-base font-bold leading-normal mb-56'>
        <option value="">Categories</option>
        <option value="">Design</option>
        <option value="">Sales</option>
        <option value="">Marketing</option>
        <option value="">Business</option>
        <option value="">Human Resource</option>
        <option value="">Finance</option>
        <option value="">Engineering</option>
        <option value="">Technology</option>
    </select>

    <select name="" id="" className='text-slate-800 text-base font-bold leading-normal mb-36'>
        <option value="">Job Level</option>
        <option value="">Entry Level</option>
        <option value="">Mid Level</option>
        <option value="">Senior Level</option>
        <option value="">Director</option>
        <option value="">VP or Above</option>
    </select>

    <select name="" id="" className='text-slate-800 text-base font-bold leading-normal mb-14'>
        <option value="">Salary</option>
        <option value="">$700 - $1000</option>
        <option value="">$100 - $1500</option>
        <option value="">$1500 - $2000</option>
        <option value="">$3000 or above</option>
    </select>



</div>
    </div>
  )
}

export default Filter
