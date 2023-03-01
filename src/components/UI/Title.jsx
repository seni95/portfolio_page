import React from 'react'
import TypeIt from 'typeit-react'

export default function Title() {

  return (
    <div className='mb-5'>
    <TypeIt 
    options={{
      waitUntilVisible:true,
    }}
    className="text-4xl font-[doHyeon] font-bold">자기소개서</TypeIt>
    </div>
  )
}
