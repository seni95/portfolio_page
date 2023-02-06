import React from 'react'
import AlignItemsList from '../components/UI/AlignItemsList'
import MediaControlCard from '../components/UI/MediaControlCard'
import DBSkill from '../components/UI/SkillUI/DBSkill'
import ReactSkill from '../components/UI/SkillUI/ReactSkill'
import WebSkill from '../components/UI/SkillUI/WebSkill'
import SCMSkill from '../components/UI/SkillUI/SCMSkill'
import ETCSkill from '../components/UI/SkillUI/ETCSkill'

export default function FirstPage() {
  return (
    <div className='min-h-screen w-full flex flex-col align-items-center
    justify-center pl-10'>
      <h2 className='text-4xl'>직무</h2>
      <h3>프론트엔드 개발자</h3>
      <h2 className='text-4xl'>보유 스킬</h2>
      <div >
    <ul className='flex flex-wrap'>
    <li><WebSkill></WebSkill></li>
    <li><DBSkill></DBSkill></li>
    <li><ReactSkill></ReactSkill></li>
    <li><SCMSkill></SCMSkill></li>
    </ul>
      </div>
    </div>
  )
}
