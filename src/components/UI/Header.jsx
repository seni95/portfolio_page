import React from 'react'


export default function Header() {

  return (
    <div className='max-lg:flex-col absolute z-[500] 
    inset-x-0 px-10 py-5 flex items-center justify-between bg-header-color gap-y-5
    rounded-full mx-10 my-2 lg:h-[100px]
    max-md:rounded-none max-md:m-0 max-md:px-0'>
       <h1 className='text-4xl max-sm:text-xl'>황세연 포트폴리오</h1>
       <nav>
        <ul className='flex'>
            <li><a href="#basicInfo">기본정보</a></li>
            <li><a href="#portfolio">포트폴리오</a></li>
            <li><a href="#myStory">나의 이야기</a></li>
            <li><a href="#myGallery">갤러리</a></li>
        </ul>
       </nav>
    </div>
  )
}
