import logo from './logo.svg';
import './App.css';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/SecondPage';
import { useEffect, useRef, useState } from 'react';
import ThirdPage from './pages/ThirdPage';
import Header from './components/UI/Header';
import MyStroy from './pages/MyStroy';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';

function App() {
  const contentsList = useRef();
  const [introAction,setIntroAction] = useState(1);
  useEffect(()=>{
    
  })

  return (
    <div className="main" ref={contentsList}>
      <Header></Header>
      <div className='w-[500px] fixed left-10 -bottom-0 max-md:hidden'>
      <img src={`${process.env.PUBLIC_URL}/img/me.png`}></img>
      </div>
      <div className='pl-[450px] max-md:pl-0 grow bg-color-bg max-sm:pl-0 pt-[130px]'>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <MyStroy></MyStroy>
      <Gallery></Gallery>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
