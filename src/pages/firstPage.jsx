import React, { useEffect } from 'react'
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
import ScrollOut from 'scroll-out';

export default function FirstPage() {
  
  useEffect(()=>{
    ScrollOut({
      onShown: function(el) {
        // remove the class
        el.classList.remove("animated");
    
        // force reflow
        void el.offsetWidth;
    
        // re-add the animated cl
        el.classList.add("animated");
      }

    });
  })
  return (
    <div className='min-h-screen w-full flex flex-col 
     pl-10 font-mono font-bold'>
     <div className='mb-10'>
     <h2 className='text-4xl'>직무</h2>
      <h3 className='frontend'>프론트엔드 개발자</h3>
     </div>
      <h2 className='text-4xl'>보유 스킬</h2>
      <div className='skills'>
    <ul className='flex flex-wrap px-10'>
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
