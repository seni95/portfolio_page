import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/SecondPage';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useRef, useState } from 'react';

function App() {
  const contentsList = useRef();
  const [currentPage , setCurrentPage] = useState(1);
  useEffect(()=>{
    const wheelHandler = e=>{
      e.preventDefault();
      const {deltaY} = e;
      const {scrollTop} = contentsList.current;
      const pageHeight = window.innerHeight;

      if(deltaY>0){
        //스크롤 내릴때
        if(scrollTop>=0 && scrollTop<pageHeight){
          window.scrollTo({
            top:pageHeight,
            left:0,
            behavior:"smooth"
        })
        setCurrentPage(2);
        }
      }else{
        //스크롤 올릴때
        if(scrollTop>=0 && scrollTop<pageHeight){
          window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
        setCurrentPage(1);
        }

      }

    }

    const currentContent = contentsList.current;
    currentContent.addEventListener("wheel",wheelHandler);

    return()=>{
      currentContent.removeEventListener("wheel",wheelHandler);
    }

  })

  return (
    <div className="flex w-screen ">
      <div className='w-[500px] fixed'>
      <Intro currentPage={currentPage}></Intro></div>
      <div ref={contentsList} className='pl-[500px] grow '>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      </div>
    </div>
  );
}

export default App;
