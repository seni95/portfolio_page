import React, { useEffect, useState } from 'react'
import {SiNetlify} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3,DiJavascript} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si';
import {RiReactjsFill} from 'react-icons/ri'
import {TbBrandReactNative} from 'react-icons/tb'
import {SiMaterialui} from 'react-icons/si';
import {SiJquery} from 'react-icons/si';
import {FaYarn} from 'react-icons/fa';
import {SiAdobexd, SiPostcss,SiTailwindcss } from 'react-icons/si'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn';

export default function FirstPage() {

  const position = useScrollFadeIn('left',1,0);
  const positionDetail = useScrollFadeIn('left',1,0);
  const skill = useScrollFadeIn('left',1,1);
  const skillDetail = useScrollFadeIn('left',1,1);

  useEffect(()=>{

  },[])

  return (
    <div id="container" className='min-h-screen w-full flex flex-col 
     pl-10 '>
     <div className='my-10'>
     <h2 className='text-4xl my-3' {...position}>직무</h2>
      <h3 {...positionDetail}>프론트엔드 개발자</h3>
     </div>
      <h2 className='text-4xl my-2' {...skill}>보유 스킬</h2>
      <div className='skills'>
    <ul className='flex flex-wrap px-10' {...skillDetail}>
    <li><AiFillHtml5 className='text-[#f0932b]'/></li>
    <li><DiCss3 className='text-[#0984e3]'></DiCss3></li>
    <li><DiJavascript className='text-[#f9ca24]'></DiJavascript></li>
    <li><SiFirebase className='text-[#f6e58d]'/></li>
    <li><RiReactjsFill className='text-[#34ace0]'></RiReactjsFill></li>
    <li><TbBrandReactNative/></li>
    <li><SiNetlify className='text-[#2bcbba]'></SiNetlify></li>
    <li><SiMaterialui className='text-[#3867d6]'></SiMaterialui></li>
    <li><SiJquery className='text-[#4b7bec]'></SiJquery></li>
    <li><FaYarn className='text-[#4b6584]'></FaYarn></li>
    <li><SiAdobexd className='text-[#c44569]'></SiAdobexd></li>
    <li><SiTailwindcss className='text-[#778beb]'></SiTailwindcss></li>
    <li><SiPostcss className='text-[#ff5e57]'></SiPostcss></li>
    </ul>
      </div>
    </div>
  )
}
