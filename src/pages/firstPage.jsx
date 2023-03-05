import React, { useEffect, useState } from 'react'
import { SiNetlify } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiJquery, SiMaterialui, SiAdobexd, SiPostcss, SiTailwindcss } from 'react-icons/si';
import useScrollFadeIn from '../components/hooks/useScrollFadeIn';
import DescShow from '../components/UI/DescShow';




export default function FirstPage() {

  const position = useScrollFadeIn('left', 1, 0);
  const positionDetail = useScrollFadeIn('left', 1, 0);
  const skill = useScrollFadeIn('left', 1, 1);
  const skillDetail = useScrollFadeIn('left', 1, 1, 0);



  useEffect(() => {

  }, [])

  return (
    <div id="basicInfo" className='min-h-screen w-full flex flex-col relative
     max-lg:px-10'>
       <div  className='sm:hidden flex justify-center'>
       <img src={`${process.env.PUBLIC_URL}/img/me.png`} className="h-[300px]"></img>
       </div>
      <div className='mt-5 flex justify-between'>
        <div className='self-end'>
          <h2 className='text-4xl my-3' {...position}>직무</h2>
          <h3 {...positionDetail}>프론트엔드 개발자</h3>
          <h2 className='text-4xl my-10 max-sm:my-5 max-sm:mt-10' {...skill}>보유 스킬</h2>
        </div>
        <img src={`${process.env.PUBLIC_URL}/img/me.png`} className='w-[300px] float-right icon:hidden z-30 max-sm:hidden'></img>
      </div>
      <div className='skills z-50'>
        <ul className='flex flex-wrap w-full' {...skillDetail}>
          <li>
            <DescShow title="HTML" desc={<div>원하는 방식대로 문서의 구조를 잡고 텍스트의 구조적 의미를 표시하여 구조화된 문서를 만들 수 있습니다. 또한 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출 할 수 있도록 하는 작업을 할 수 있습니다.</div>}>
              <AiFillHtml5 className='text-[#f0932b] drop-shadow-2xl' />
            </DescShow>
          </li>
          <li>
            <DescShow title="CSS" desc={<div> 완성된 HTML태그들에 CSS를 덧입혀 원하는 모습대로 웹 페이지를 디자인 할 수 있습니다.</div>}>
              <DiCss3 className='text-[#0984e3] drop-shadow-2xl'></DiCss3>
            </DescShow>
          </li>
          <li>
            <DescShow title="자바스크립트" desc={<div> JS를 이용하여 완성된 웹 페이지 화면에 동적인 이펙트들을 자유자재로 구현할 수 있습니다.<br></br>
              또한 데이터베이스를 다루거나 서버와 통신을 할 때 이 언어를 주로 사용합니다.</div>}>
              <DiJavascript className='text-[#f9ca24] drop-shadow-2xl'></DiJavascript>
            </DescShow>
          </li>
          <li>
            <DescShow title="파이어베이스" desc={<div>  Firebase 프로젝트를 만들고, 웹에 등록하여 각종 사용자 인증과 관련된 기능을 구현하거나
              실시간 데이터베이스 기능을 이용하여 데이터를 저장하고 기록할 수 있는 기능을 구현할 수 있습니다.</div>}>
              <SiFirebase className='text-[#f6e58d] drop-shadow-2xl' />
            </DescShow>
          </li>
          <li>
            <DescShow title="리액트" desc={<div> 리액트를 이용해 웹 UI/UX를 구현 할 수 있습니다. 또한 React-Router나 React-Query와 같은 수많은 리액트 기반의 라이브러리를 이용하여
              사용자와 상호작용 하게 하거나 서버와 통신 하는 등의 고차원적인 기능을 수행 할 수 있습니다.</div>}>
              <RiReactjsFill className='text-[#34ace0] drop-shadow-2xl'></RiReactjsFill>
            </DescShow>
          </li>
          <li>
            <DescShow title="리액트 네이티브" desc={<div> 원하는 페이지를 리액트 네이티브로 빌드해 어플리케이션을 만들 수 있습니다.</div>}>
              <TbBrandReactNative />
            </DescShow>
          </li>
          <li>
            <DescShow title="Netlify" desc={<div> 완성한 웹 사이트를 빌드하고 실시간 배포 기능을 사용 할 수 있습니다.</div>}>
              <SiNetlify className='text-[#2bcbba] drop-shadow-2xl'></SiNetlify>
            </DescShow>
          </li>
          <li>
            <DescShow title="MUI" desc={<div> 빠르게 원하는 형태의 UI를 구현할 수 있습니다. </div>}>
              <SiMaterialui className='text-[#3867d6] drop-shadow-2xl'></SiMaterialui>
            </DescShow>
          </li>
          <li>
            <DescShow title="Jquery" desc={<div> JS보다 짧은 코드로 웹 페이지 이펙트를 간단히 구현 할 수 있습니다.</div>}>
              <SiJquery className='text-[#4b7bec] drop-shadow-2xl'></SiJquery>
            </DescShow>
          </li>
          <li>
            <DescShow title="xd(어도비)" desc={<div> 구현 할 웹 페이지를 디자인 하거나 기획 할 때 사용 합니다.</div>}>
              <SiAdobexd className='text-[#c44569] drop-shadow-2xl'></SiAdobexd>
            </DescShow>
          </li>
          <li>
            <DescShow title="TAILWIND" desc={<div> 빠르고 간단하게 CSS를 다룰 수 있습니다. 가장 많이 애용하는 CSS 프레임워크 입니다.</div>}>
              <SiTailwindcss className='text-[#778beb] drop-shadow-2xl'></SiTailwindcss>
            </DescShow>
          </li>
          <li>
            <DescShow title="Post CSS" desc={<div> 만들려는 서비스의 UI가 복잡하거나, UI간의 상호 호환성이 떨어지는 경우에 주로 사용합니다.</div>}>
              <SiPostcss className='text-[#ff5e57] drop-shadow-2xl'></SiPostcss>
            </DescShow>
          </li>
        </ul>
      </div>
    </div>
  )
}
