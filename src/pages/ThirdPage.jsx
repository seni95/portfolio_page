import React from 'react'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn'
import MediaCard from '../components/UI/MediaCard'

export default function ThirdPage() {

  const firstLine = useScrollFadeIn('right');
  const secondLine = useScrollFadeIn('right');

  return (
    <div className='min-h-screen w-full flex-col align-items-center
    justify-center pl-10 font-mono font-bold '>
        <div className='flex flex-warp w-full' {...firstLine}>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>
        </div>
        <div className='flex flex-warp w-full' {...secondLine}>
        <MediaCard></MediaCard>
        <MediaCard></MediaCard>

        </div>
    </div>
  )
}
