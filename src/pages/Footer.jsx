import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between py-10 px-2 gap-y-5'>
        <h1>황세연 포트폴리오</h1>
        <ul className='text-center'>
            <li>경기도 평택시</li>
            <li>ghkdtpdus95@naver.com</li>
        </ul>
        <h3>이 페이지는 반응형으로 만들어져 있습니다.</h3>
    </footer>
  )
}