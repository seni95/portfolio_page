import React from 'react'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn'
import MediaCard from '../components/UI/MediaCard'
import portfolioList from '../Contents/portfolioList';

export default function ThirdPage() {
  const contents = portfolioList();
  const firstLine = useScrollFadeIn('right');
  const secondLine = useScrollFadeIn('right');
  console.log(contents);
  return (
    <div id="portfolio" className='min-h-screen w-full flex-col align-items-center
    justify-center font-mono font-bold py-20'>
        <div className='flex ' {...firstLine}>
        {contents.slice(0,3).map((el,index)=> <MediaCard el={el} key={index}></MediaCard>)}
        </div>
        <div className='flex ' {...secondLine}>
        {contents.slice(3,6).map((el,index)=> <MediaCard el={el} key={index}></MediaCard>)}

        </div>
    </div>
  )
}
