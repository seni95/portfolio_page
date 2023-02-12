import React, { Component } from "react";
import Slider from "react-slick";



export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      autoplay:true,
      autoplaySpeed: 5000,
      pauseOnHover:true,
      slide:'img',
      adaptiveHeight:true,
      arrows:false
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story1.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story5.jpg`}/>
           
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story2.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story3.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story3.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story2.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/story4.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>
            
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>
           
          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>

          
          
          <img className="h-96 w-5/6 text-center p-5 brightness-75" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>

          
        </Slider>
      </div>
    );
  }
}