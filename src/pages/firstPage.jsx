import React from 'react'
import AlignItemsList from '../components/UI/AlignItemsList'
import MediaControlCard from '../components/UI/MediaControlCard'
import DBSkill from '../components/UI/SkillUI/DBSkill'
import ReactSkill from '../components/UI/SkillUI/ReactSkill'
import WebSkill from '../components/UI/SkillUI/WebSkill'
import SCMSkill from '../components/UI/SkillUI/SCMSkill'
import ETCSkill from '../components/UI/SkillUI/ETCSkill'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3,DiJavascript} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si';
import {RiReactjsFill} from 'react-icons/ri'
import {TbBrandReactNative} from 'react-icons/tb'
export default function FirstPage() {
  return (
    <div className='min-h-screen w-full flex flex-col align-items-center
    justify-center pl-10 font-mono font-bold'>
      <h2 className='text-4xl'>직무</h2>
      <h3>프론트엔드 개발자</h3>
      <h2 className='text-4xl'>보유 스킬</h2>
      <div className='skills'>
    <ul className='flex flex-wrap'>
    <li><AiFillHtml5 className='text-[#f0932b]'/></li>
    <li><DiCss3 className='text-[#0984e3]'></DiCss3></li>
    <li><DiJavascript className='text-[#f9ca24]'></DiJavascript></li>
    <li><SiFirebase className='text-[#f6e58d]'/></li>
    <li><RiReactjsFill className='text-[#34ace0]'></RiReactjsFill></li>
    <li><TbBrandReactNative/></li>
    </ul>
      </div>
    </div>
  )
}
