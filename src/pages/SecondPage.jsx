import React from 'react'

export default function SecondPage() {
  return (
    <div className='min-h-screen w-full flex flex-col align-items-center
    justify-center pl-10 font-mono font-bold'>
  
    <div>
    <h2>Education(학력)</h2>
    <h3>계명대학교</h3>
    <ul>
      <li className='list-disc'>영어영문학/컴퓨터 공학 복수전공</li>
      <li>3.13/4.5</li>
    </ul>      
    </div>
    <div>
    <h2 className='inline'>깃허브 페이지 : </h2>
    <h3 className='inline text-4xl underline'><a href="https://github.com/seni95" target='_blank'>GITHUB</a></h3>
    </div>
    <div>
    <h2>수상경력</h2>
    <h3>계명대학교 캡스톤 디자인 UCC 공모전 장려상 유튜브 링크 → LINK</h3>
    </div>
    <div>
    <h2>메일주소</h2>
    <h3>ghkdtpdus95@naver.com</h3>
    </div>
    <div>
    <h2>생년월일</h2>
    <h3>1995.07.26</h3>
    </div>
    <div>
    <h2>MBTI</h2>
    <h3>INTP</h3>
    </div>
  </div>
  )
}
