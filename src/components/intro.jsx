import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit';
import Title from './UI/Title';


export default function Intro({currentPage}) {
    const [words, setWords] = useState(["반가워요!","어떤가요?"]);

  
    return (
    <div className='h-screen'>
       <Title></Title>
        <div className='absolute bottom-0 flex flex-col place-items-end'>
        <div className='introChat'>{words[currentPage-1]}</div>
        <img src={`${process.env.PUBLIC_URL}/img/mainImg${currentPage}.gif`} alt="" />
        </div>
    </div>
  )
}
