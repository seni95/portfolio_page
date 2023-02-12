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
import DescShow from '../components/UI/DescShow';




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
    <ul className='flex flex-wrap px-10 w-11/12' {...skillDetail}>
    <li>
      <DescShow title="HTML" desc={<div>원하는 방식대로 문서의 구조를 잡고 텍스트의 구조적 의미를 표시하여 구조화된 문서를 만들 수 있습니다. 또한 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출 할 수 있도록 하는 작업을 할 수 있습니다.</div>}>
      <AiFillHtml5 className='text-[#f0932b]'/>
      </DescShow>
      </li>
    <li>
    <DescShow title="CSS" desc={<div> 완성된 HTML태그들에 CSS를 덧입혀 원하는 모습대로 웹 페이지를 디자인 할 수 있습니다.</div>}>
      
      <DiCss3 className='text-[#0984e3]'></DiCss3>
      </DescShow>
      
      </li>
    <li>
    <DescShow title="CSS" desc={<div> 완성된 HTML태그들에 CSS를 덧입혀 원하는 모습대로 웹 페이지를 디자인 할 수 있습니다.</div>}>
      
      <DiJavascript className='text-[#f9ca24]'></DiJavascript>
      </DescShow>
      
      </li>
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
