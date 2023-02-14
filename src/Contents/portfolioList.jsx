import { Typography } from '@mui/material'
import React from 'react'
import {BsTools, BsGraphUp} from 'react-icons/bs';
import { FcCloseUpMode } from 'react-icons/fc';

export default function portfolioList() {
  return [
    {
        title:"쇼핑몰 프로젝트",
        desc:"개인 프로젝트",
        view: <Typography>
             <div className='mb-3'>
          <ul>
            <li>생성 날짜 : 2023년 02월 24일</li>
            <li>주요 기술 : REACT, FIREBASE, NETLIFY, JAVASCRIPT, tailwindCSS</li>
            <li>바로 가기 링크 : <a href="https://main--silver-crostata-7745ac.netlify.app/" className='underline'>CLICK HERE</a></li>
          </ul>
        </div>
        <img src="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"></img>
          <p className='bg-color-bg-dark py-3 my-3 text-xl'>
          <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
          구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
          </p>
          <div>
            <h3><BsTools className='inline'></BsTools> 주요 사용 기술</h3>
            <ul>
              <li>HTML/Javascript/TailwindCSS</li>
              <li>React</li>
              <li>RESTful API</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <h3><BsGraphUp className='inline'></BsGraphUp> 주요 사용 기술</h3>
            <ul>
              <li>HTML/Javascript/TailwindCSS</li>
              <li>React</li>
              <li>RESTful API</li>
              <li>Firebase</li>
            </ul>
          </div>
        </Typography>,
        mainImg:"https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"
    },
    {title: "시크릿 감사일기"
        ,desc: "첫 구글 플레이 스토어 출시 앱"
        ,view:<Typography>
        <div className='mb-3'>
     <ul>
       <li>생성 날짜 : 2023년 02월 24일</li>
       <li>주요 기술 : REACT, FIREBASE, NETLIFY, JAVASCRIPT, tailwindCSS</li>
       <li>바로 가기 링크 : <a href="https://main--silver-crostata-7745ac.netlify.app/" className='underline'>CLICK HERE</a></li>
     </ul>
   </div>
   <img src="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"></img>
     <p className='bg-color-bg-dark py-3 my-3 text-xl'>
     <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
     구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
     </p>
     <div>
       <h3><BsTools className='inline'></BsTools> 주요 사용 기술</h3>
       <ul>
         <li>HTML/Javascript/TailwindCSS</li>
         <li>React</li>
         <li>RESTful API</li>
         <li>Firebase</li>
       </ul>
     </div>
     <div>
       <h3><BsGraphUp className='inline'></BsGraphUp> 주요 사용 기술</h3>
       <ul>
         <li>HTML/Javascript/TailwindCSS</li>
         <li>React</li>
         <li>RESTful API</li>
         <li>Firebase</li>
       </ul>
     </div>
   </Typography>,
        mainImg:"https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d174328-05ea-45b2-a95b-f94bc184b62e%2F%25EC%2595%2584%25ED%258A%25B8%25EB%25B3%25B4%25EB%2593%259C__1.png?table=block&id=24e5ca58-2a75-47bb-a1ea-64d174df601d&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"},
    {title:"만세력 프로젝트",
    desc:"서버와의 통신 없이 로직만으로 구현한 만세력",
    view:<Typography>
    <div className='mb-3'>
 <ul>
   <li>생성 날짜 : 2023년 02월 24일</li>
   <li>주요 기술 : REACT, FIREBASE, NETLIFY, JAVASCRIPT, tailwindCSS</li>
   <li>바로 가기 링크 : <a href="https://main--silver-crostata-7745ac.netlify.app/" className='underline'>CLICK HERE</a></li>
 </ul>
</div>
<img src="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"></img>
 <p className='bg-color-bg-dark py-3 my-3 text-xl'>
 <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
 구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
 </p>
 <div>
   <h3><BsTools className='inline'></BsTools> 주요 사용 기술</h3>
   <ul>
     <li>HTML/Javascript/TailwindCSS</li>
     <li>React</li>
     <li>RESTful API</li>
     <li>Firebase</li>
   </ul>
 </div>
 <div>
   <h3><BsGraphUp className='inline'></BsGraphUp> 주요 사용 기술</h3>
   <ul>
     <li>HTML/Javascript/TailwindCSS</li>
     <li>React</li>
     <li>RESTful API</li>
     <li>Firebase</li>
   </ul>
 </div>
</Typography>,
mainImg:"https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd76e0e4-5eef-4d88-8691-e95b8aa94298%2FUntitled.png?table=block&id=1bc8cbd2-f175-4651-898f-530fe7452cab&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"},
    {title:"스터디 플래너"
        ,desc:"집중 시간을 측정하고 계획하는 플래너",
        view:<Typography>
        <div className='mb-3'>
     <ul>
       <li>생성 날짜 : 2023년 02월 24일</li>
       <li>주요 기술 : REACT, FIREBASE, NETLIFY, JAVASCRIPT, tailwindCSS</li>
       <li>바로 가기 링크 : <a href="https://main--silver-crostata-7745ac.netlify.app/" className='underline'>CLICK HERE</a></li>
     </ul>
    </div>
    <img src="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"></img>
     <p className='bg-color-bg-dark py-3 my-3 text-xl'>
     <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
     구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
     </p>
     <div>
       <h3><BsTools className='inline'></BsTools> 주요 사용 기술</h3>
       <ul>
         <li>HTML/Javascript/TailwindCSS</li>
         <li>React</li>
         <li>RESTful API</li>
         <li>Firebase</li>
       </ul>
     </div>
     <div>
       <h3><BsGraphUp className='inline'></BsGraphUp> 주요 사용 기술</h3>
       <ul>
         <li>HTML/Javascript/TailwindCSS</li>
         <li>React</li>
         <li>RESTful API</li>
         <li>Firebase</li>
       </ul>
     </div>
    </Typography>,
    mainImg:"https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa39f08a-cd8b-4e04-bebe-cf3b493d1feb%2FUntitled.png?table=block&id=6385c051-95be-490c-843d-c7cecc317686&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"},
    {title:"유튜브 프로젝트",
    desc:"유튜브 클론 코딩 프로젝트",
    view:<Typography></Typography>,
    mainImg:`${process.env.PUBLIC_URL}/img/Portfolio/Youtube.png`,
    URL:"https://illustrious-licorice-dd8d41.netlify.app"}
    ,
  ]
}
