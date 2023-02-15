import React from 'react'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn'
import Stroies from '../components/UI/Stroies'
import Title from '../components/UI/Title'


export default function MyStroy() {
  
    const effect = useScrollFadeIn('down');

    return (
    <div id="myStory" className='min-h-screen w-full flex flex-col items-center
    justify-center font-mono font-bold py-20'>
        <Title></Title>
        <Stroies></Stroies></div>
  )
}
