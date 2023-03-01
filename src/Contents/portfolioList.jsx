import { Typography } from '@mui/material'
import React from 'react'
import { BsTools, BsGraphUp } from 'react-icons/bs';
import { FcCloseUpMode } from 'react-icons/fc';

export default function portfolioList() {
  return [
    {
      title: "쇼핑몰 프로젝트",
      desc1: "결제 전까지의 모든 기능을 구현한 쇼핑몰 웹",
      desc2: <>
        구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 
        로그인한 사용자가 제품을 카드에 담거나 구매 수량을 조절 하는 등, 결제 시스템 외의 모든 기능을 담고 있습니다.
        관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. 
        Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
      </>,
      detail: {
        date: "2023년 02월 04일",
        tech: ["REACT", "FIREBASE", "NETLIFY", "JAVASCRIPT", "tailwindCSS"],
      },
      tech: ["HTML/Javascript/TailwindCSS", "React", "Restful API", "Firebase"],
      growth: ["RESTful API를 이용한 데이터 관리", "유저와의 상호작용에 대한 고민"],
      mainImg: "https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"
      , URL: "https://main--silver-crostata-7745ac.netlify.app/"
    },
    {
      title: "시크릿 감사일기"
      , desc1: "첫 구글 플레이 스토어 출시 앱"
      , desc2: <>
        React-Native를 이용해 처음으로 만들어본 안드로이드 어플리케이션입니다. Expo를 이용해 빌드 작업을 하였으며, 사용자가 리스트 형식으로 다이어리를 기록하고 삭제, 수정 할 수 있는 기능을 가진 어플리케이션입니다.
      </>,
      detail: {
        date: "2022년 10월 22일",
        tech: ["REACT-NATIVE", "JAVASCRIPT", "EXPO"],
      },
      tech: ["Html/Javascript/CSS", "React-Native", "Expo", "Async-Storage", "ScrollView"],
      growth: ["앱 스토어 등록 및 배포 경험"],
      mainImg: "https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d174328-05ea-45b2-a95b-f94bc184b62e%2F%25EC%2595%2584%25ED%258A%25B8%25EB%25B3%25B4%25EB%2593%259C__1.png?table=block&id=24e5ca58-2a75-47bb-a1ea-64d174df601d&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2",
      URL: "https://play.google.com/store/apps/details?id=com.lovelyseyeon.thanksDiary"
    },
    {
      title: "만세력 프로젝트",
      desc1: "서버와의 통신 없이 로직만으로 구현한 만세력",
      desc2: <>
      데이터 베이스를 비롯한 기타 백엔드 기술 없이 로직만으로 구현한 만세력 어플리케이션입니다. 타로 업무를 하며, 사주 명리와 관련된 기본적인 지식을 배운 상태였기에 무리 없이 로직을 구현할 수 있었습니다.
      </>,
      detail: {
        date: "2022년 11월 01일",
        tech: ["REACT", "JAVASCRIPT","PostCSS"]
      },
      tech:["HTML/Javascript/CSS","React","PostCSS"],
      growth:["리액트로 직접 사용 가능한 웹 어플리케이션을 만들고, 웹에 직접 배포해본 경험"],
      mainImg: "https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd76e0e4-5eef-4d88-8691-e95b8aa94298%2FUntitled.png?table=block&id=1bc8cbd2-f175-4651-898f-530fe7452cab&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"
      ,URL:"https://seni95.github.io/askLuck/"
    },
    {
      title: "스터디 플래너"
      , desc1: "집중 시간을 측정하고 계획하는 플래너",
      desc2: <>
      평소 학습이나 업무를 할 때 열품타를 통해 시간을 재는 것을 자주 하는 편인데, 컴퓨터로 작업을 하는 일이 많은 특성상, 열품타 앱이 핸드폰 어플로만 작동하는 것에 아쉬움을 느껴 비슷한 기능을 가졌으나 웹 브라우저를 통해 컴퓨터에서 이용할 수 있는 앱을 만들어 보게 되었습니다.
      </>,
      detail: {
        date: "2022년 11월 24일",
        tech: ["REACT", "JAVASCRIPT","PostCSS"]
      },
      tech:["HTML/Javascript/CSS","React","Firebase","PostCSS"],
      growth:["Firebase를 이용해 로그인과 사용자 정보 저장이 가능한 웹 어플리케이션을 빌드해본 경험"],
      mainImg:  `${process.env.PUBLIC_URL}/img/Portfolio/StudyPlanner.png`
      ,URL:"https://animated-biscotti-fea3b7.netlify.app/"
    },
    {
      title: "유튜브 프로젝트",
      desc1: "유튜브 클론 코딩 프로젝트",
      desc2: <>
     유튜브에서 제공하는 무료 API를 이용해 유튜브 영상 검색 및 시청이 가능한 간단한 웹 어플리케이션을 만들어 봤습니다.
      </>,
      detail: {
        date: "2022년 12월 06일",
        tech: ["REACT", "JAVASCRIPT","TailwindCSS"]
      },
      tech:["HTML/Javascript/TailwindCSS","React","Youtube API"],
      growth:["클론 코딩을 통한 웹 사이트 제작 경험"],
      mainImg: `${process.env.PUBLIC_URL}/img/Portfolio/Youtube.png`,
      URL: "https://illustrious-licorice-dd8d41.netlify.app"
    }
    ,
  ]
}
