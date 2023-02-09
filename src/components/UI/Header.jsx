import React from 'react'

export default function Header() {
  return (
    <div className='max-sm:flex-col absolute z-[500] 
    inset-x-0 px-10 py-5 flex items-center justify-between bg-header-color gap-y-5
    rounded-full mx-10 my-2 h-[100px]
    max-sm:rounded-md max-sm:m-0 max-sm:px-0'>
       <h1 className='text-4xl max-sm:text-xl'>황세연 포트폴리오</h1>
       <nav>
        <ul className='flex'>
            <li className='bg-selected rounded-full'>기본정보</li>
            <li>포트폴리오</li>
            <li>나의 이야기</li>
            <li>갤러리</li>
        </ul>
       </nav>
    </div>
  )
}
