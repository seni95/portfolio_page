import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/SecondPage';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useRef, useState } from 'react';
import ThirdPage from './pages/ThirdPage';
import IntroPage from './pages/IntroPage';
import Header from './components/UI/Header';

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
      <Header></Header>
      <div className='w-[800px] fixed -bottom-10 -left-40 max-sm:hidden'>
      <img src="https://cdn.pixabay.com/photo/2018/05/02/07/31/the-little-girl-3367884_960_720.png"></img>
      {/* <img src="https://cdn.pixabay.com/photo/2015/02/17/23/07/drawing-640180_960_720.png"></img> */}
      </div>
      <div className='pl-[500px] grow bg-color-bg max-sm:pl-0'  >

        <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      </div>
    </div>
  );
}

export default App;
