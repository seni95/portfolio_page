import React from 'react'
import {FaUniversity} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {FaAward} from 'react-icons/fa';
import {GiPositionMarker} from 'react-icons/gi';
import {BsFillPersonFill , BsFlower3} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import useScrollFadeIn from '../components/hooks/useScrollFadeIn';

export default function SecondPage() {

  const left  = useScrollFadeIn('right');
  const right = useScrollFadeIn('left',1,.3);
  return (
    <div className='min-h-screen w-full flex items-center
    justify-center pl-10  bg-color-bg-dark ' id="secondPage">
    <div {...left} className='pr-16'>
    <div>
    <h2><FaUniversity className='inline mr-2'></FaUniversity>Education(학력)</h2>
    <h3>계명대학교</h3>
    <ul className='py-3'>
      <li>영어영문학/컴퓨터 공학 복수전공</li>
      <li>3.13/4.5</li>
    </ul>      
    </div>
    <div>
    <h2 className='inline'> <AiFillGithub className='inline mr-2'></AiFillGithub>깃허브 페이지 → </h2>
    <h3 className='inline text-4xl underline'><a href="https://github.com/seni95" target='_blank'>LINK</a></h3>
    </div>
    <div>
    <h2><FaAward className='inline mr-2'></FaAward>수상경력</h2>
    <h3>계명대학교 캡스톤 디자인 UCC 공모전 장려상</h3>
    <h3>유튜브 링크 → <a href="">LINK</a></h3>
    </div>
    <div>
    <h2><GiPositionMarker className='inline mr-2'></GiPositionMarker>주소</h2>
    <h3>평택시 용이동</h3>
    </div>
    </div>
    <div {...right}>
    <div>
    <h2><BsFillPersonFill className='inline mr-2'></BsFillPersonFill>성별, 출생년도</h2>
    <h3>(여) 1995.07.26</h3>
    <h2><BsFlower3 className='inline mr-2'></BsFlower3>결혼 여부</h2>
    <h3>미혼</h3>
    </div>
    {/* <div>
      <h2>경력</h2>
      <h3>신입</h3>
    </div> */}
    <div>
      <h2><MdWork className='inline mr-2'></MdWork>희망 근무조건</h2>
      <h3>고용형태 : 정규직</h3>
      <h3>희망 근무지 : 서울</h3>
      <h3>근무 시간: 09:00 ~ 18:00 (주 5일)</h3>
    </div>
    <div>
    
    </div>
    </div>
  </div>
  )
}
