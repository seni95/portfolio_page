import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/SecondPage';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useRef, useState } from 'react';
import ThirdPage from './pages/ThirdPage';
import IntroPage from './pages/IntroPage';

function App() {
  const contentsList = useRef();
  const [introAction,setIntroAction] = useState(1);
  useEffect(()=>{
    const wheelHandler = e=>{
      e.preventDefault();
      const {deltaY} = e;
      const {scrollTop} = contentsList.current;
      const pageHeight = window.innerHeight;
      if(deltaY>0){
        //스크롤 내릴때
        console.log(scrollTop);
        console.log(pageHeight);
        if(scrollTop>=0 && scrollTop<pageHeight){
          contentsList.current.scrollTo({
            top:pageHeight,
            left:0,
            behavior:"smooth"
        })
        }
        else if(scrollTop>=pageHeight && scrollTop<pageHeight *2){
          contentsList.current.scrollTo({
            top:pageHeight *2,
            left:0,
            behavior:"smooth"
          })
          setIntroAction(2);
        }



      }else{
        //스크롤 올릴때
        if(scrollTop>=0 && scrollTop<pageHeight){
          contentsList.current.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
        setIntroAction(1);
        }else if(scrollTop>=pageHeight && scrollTop<pageHeight*2){
          contentsList.current.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
          })
        setIntroAction(1);
        }else if(scrollTop>=pageHeight*2 && scrollTop<pageHeight*3){
          contentsList.current.scrollTo({
            top:pageHeight,
            left:0,
            behavior:"smooth"
          })
          setIntroAction(1);
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
    <div className="main" ref={contentsList}>
      <div className='w-[500px] fixed h-full'>
      <Intro currentPage={introAction}></Intro></div>
      <div className='pl-[500px] grow'  >
          <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      </div>
    </div>
  );
}

export default App;
