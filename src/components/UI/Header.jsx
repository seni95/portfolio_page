import React from 'react'

export default function Header() {
  return (
    <div className='max-sm:flex-col absolute z-[500] 
    inset-x-0 px-10 py-5 flex items-center justify-between bg-header-color gap-y-5
    rounded-full mx-10 my-2
    max-sm:rounded-md'>
       <h1 className='text-4xl'>황세연 포트폴리오</h1>
       <nav>
        <ul className='flex'>
            <li className='bg-selected rounded-full'>소개</li>
            <li>TMI</li>
            <li>포트폴리오</li>
            <li>자기소개서</li>
            <li>미래계획</li>
            <li>일상</li>
        </ul>
       </nav>
    </div>
  )
}
