import React from 'react'
import AlignItemsList from '../components/UI/AlignItemsList'
import MediaControlCard from '../components/UI/MediaControlCard'

export default function FirstPage() {
  return (
    <div className='h-screen w-full'>
      <h2>직무</h2>
      <h3>프론트엔드 개발자</h3>
      <h2>보유 스킬</h2>
      <div className='flex flex-wrap'>
    <MediaControlCard></MediaControlCard>
    <MediaControlCard></MediaControlCard>
    <MediaControlCard></MediaControlCard>
    <MediaControlCard></MediaControlCard>
    <MediaControlCard></MediaControlCard>
    <MediaControlCard></MediaControlCard>
      </div>
    </div>
  )
}
