import React from 'react'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn'
import MediaCard from '../components/UI/MediaCard'
import portfolioList from '../Contents/portfolioList';

export default function ThirdPage() {
  const contents = portfolioList();
  const firstLine = useScrollFadeIn('left',1,0,0.5);
  const secondLine = useScrollFadeIn('left',1,0,0.5);
  console.log(contents);
  return (
    <div id="portfolio" className='min-h-screen w-full flex-col align-items-center
    justify-center font-mono font-bold py-20'>
        <div {...firstLine}>
        <ul className='flex flex-wrap'>
        {contents.slice(0,3).map((el,index)=> <li key={index}><MediaCard el={el}></MediaCard></li>)}
        </ul>
        </div>
        <div {...secondLine}>
        <ul className='flex flex-wrap'>          
        {contents.slice(3,6).map((el,index)=> <li key={index}><MediaCard el={el}></MediaCard></li>)}
        </ul>

        </div>
    </div>
  )
}
