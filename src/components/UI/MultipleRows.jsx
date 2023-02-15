import { Button } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import { ImNext, ImPrevious, ImPause, ImPlay2 } from 'react-icons/im';
import DescShow from "./DescShow";



export default class MultipleRows extends Component {




  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

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
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      slide: 'div',
      adaptiveHeight: true,
      arrows: false,

    };
    return (
      <div className="w-full">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className="w-5/6">
            <DescShow desc={`가족 여행으로 겨울바다가 보이는 팬션에 놀러갔어요!`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/story1.jpg`} />
          </DescShow>
          </div>

          <div className="w-5/6">
            <DescShow desc={`카페 갔다가 친구가 찍어준 사진이예요!!`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/story5.jpg`} />
          </DescShow>
          </div>

          <div className="w-5/6">
            <DescShow desc={`제 방 모습이예요. 벙커침대로 공간을 1층, 2층으로 분리해서 1층에서는 컴퓨터 및 여러 작업을, 
            2층은 침실로 사용하고 있답니다.`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/story2.jpg`} />
          </DescShow>
          </div>

          <div className="w-5/6">
            <DescShow desc={`아늑한 제 방 침대의 모습`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/story3.jpg`} />
          </DescShow>
          </div>

          <div className="w-5/6">
            <DescShow desc={`제가 키우는 고양이 세라예요! 올해 3살 되었습니다.`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`} />
          </DescShow>
          </div>


          <div className="w-5/6">
            <DescShow desc={`얼마전에 갔던 카페에서 케이크가 너무 맛있어서 한 컷★`} hoverType={"regular"}>
            <img className="w-full h-60 lg:h-96 p-5 brightness-75 max-md:h-48 max-sm:h-32 max-md:p-0" src={`${process.env.PUBLIC_URL}/img/story4.jpg`} />
          </DescShow>
          </div>

        </Slider>
        <div className="text-center pt-6 pb-10">
          <div className="px-10 inline">
            <Button onClick={this.previous}>
              <ImPrevious className="text-point text-5xl"></ImPrevious>
            </Button>
          </div>

          <div className="px-10 inline">
            <Button onClick={this.next}>
              <ImNext className="text-point text-5xl"></ImNext>
            </Button>
          </div>

        </div>
      </div>
    );
  }
}