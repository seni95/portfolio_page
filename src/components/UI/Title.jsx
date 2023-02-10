import React from 'react'
import TypeIt from 'typeit-react'
import useScrollShown from '../hooks/useScrollShown'

export default function Title() {
  const title = useScrollShown();

  return (
    <div {...title} className='mb-5'>
    <TypeIt 
    options={{
      waitUntilVisible:true,
    }}
    className="text-4xl font-[doHyeon] font-bold">자기소개서</TypeIt>
    </div>
  )
}
