import React from 'react'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn'
import MediaCard from '../components/UI/MediaCard'
import portfolioList from '../Contents/portfolioList';

export default function ThirdPage() {
  const contents = portfolioList();
  const firstLine = useScrollFadeIn('right',1,0.3,0.3);
  const secondLine = useScrollFadeIn('right',1,0.5,0.4);
  return (
    <div id="portfolio" className='min-h-screen w-full flex-col align-items-center
    justify-center font-bold py-20'>
        <div {...firstLine} className="z-50">
        <ul className='flex flex-wrap'>
        {contents.slice(0,3).map((el,index)=> <li className='ml-20 mt-20 max-sm:ml-5' key={index}><MediaCard el={el}></MediaCard></li>)}
        </ul>
        </div>
        <div {...secondLine} className="z-50">
        <ul className='flex flex-wrap'>          
        {contents.slice(3,6).map((el,index)=> <li className='ml-20 mt-20 max-sm:ml-5' key={index}><MediaCard el={el}></MediaCard></li>)}
        </ul>

        </div>
    </div>
  )
}
