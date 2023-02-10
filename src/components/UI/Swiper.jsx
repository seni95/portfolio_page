import React, { useEffect } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';

export default function Swiper() {

    useEffect(()=>{

        var slideExtraHeight = 80;
        var wrapperPaddingLeft = 50;
        var wrapperPaddingRight = 50;
        var slideMargin = 20;
        var sliderWraper = $('#wrap-sh-slider').width();
        var slideItem = 3;
        var spead = 500;
        var slideCount = $('.sh-slider ul li').length;
        var slideWidth = (sliderWraper -  wrapperPaddingLeft - wrapperPaddingRight);
        var slideUlWidth = (slideWidth / slideItem) * slideCount * slideMargin - slideMargin;
          
        
  $('.sh-slider ul').css(
    {
      width: slideUlWidth,
      marginLeft: - slideWidth / slideItem
    }
  );
  var slideHeight = $('.sh-slider ul li').height();
  $('.sh-slider ul li').css(
    {
      width: slideWidth / slideItem,
      height: slideHeight,
      marginRight: slideMargin
    }
  );
  $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');
  $('.sh-slider').css(
    {
      width: slideWidth + 2 * slideMargin,
      height: slideHeight,
      paddingTop: slideExtraHeight / 2,
      paddingBottom: slideExtraHeight / 2
    }
  );


    function setShadow(elem) {
        var shadowValue = '0px 10px 20px #148F77';
        $(elem).css(
            {
                '-webkit-box-shadow' : shadowValue,
                '-moz-box-shadow' : shadowValue,
                'box-shadow' : shadowValue
              }
        )
    }

    function removeShadow(elem) {
        $(elem).css(
          {
            '-webkit-box-shadow' : 'none',
            '-moz-box-shadow' : 'none',
            'box-shadow' : 'none'
          }
        );
      }

      function moveLeft(){
        setShadow($('.sh-slider ul li'));
        $('.sh-slider ul li:first-child').next().animate(
            {
              height:slideHeight + slideExtraHeight / 2,
              marginTop: -slideExtraHeight / 4,
              marginLeft:-slideMargin,
              marginRight:0, zIndex: 11
            },spead
          );
          $('.sh-slider ul li:first-child').next().next().animate(
            {
              height:slideHeight,
              marginTop:0, marginLeft: 0,
              marginRight: slideMargin,
              zIndex: 1
            },spead
          );
     
        //   $('.sh-slider ul').animate({
        //     left: + slideWidth / slideItem
        //   }, spead, function () {
        //     $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');
        //     $('.sh-slider ul').css('left', '');
        //   });
          
        //   removeShadow($('.sh-slider ul li:last-child'));
        //   removeShadow($('.sh-slider ul li:first-child').next().next().next());  
    
        }
      
      $('a.control_prev').click(function () {
        moveLeft();
      });
    

    console.log( $('.sh-slider ul li:last-child'));
    console.log( $('.sh-slider ul li:first-child'));
    },[])

  return (
    <div>
        <h1>Simple Slider</h1>
<div id="wrap-sh-slider">
  <a href="#" className="control_next">→</a>
  <a href="#" className="control_prev">←</a>
<div className="sh-slider">
  <ul>
    <li><img src={`${process.env.PUBLIC_URL}/img/Sera.jpg`}></img></li>
    <li><img src={`${process.env.PUBLIC_URL}/img/Sera2.jpg`}></img></li>
    <li><img src={`${process.env.PUBLIC_URL}/img/Sera.jpg`}></img></li>
    <li><img src={`${process.env.PUBLIC_URL}/img/Sera2.jpg`}></img></li>
    <li><img src={`${process.env.PUBLIC_URL}/img/Sera2.jpg`}></img></li>
    <li><img src={`${process.env.PUBLIC_URL}/img/me.png`}></img></li>
    
  </ul>  
</div>
  </div>
    </div>
  )
}
