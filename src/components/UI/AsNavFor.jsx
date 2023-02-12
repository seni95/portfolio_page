import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img className="h-96" src={`${process.env.PUBLIC_URL}/img/sera.jpg`}/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="flex">
            <div className="inline-block">
            <img className="w-1/2" src={`${process.env.PUBLIC_URL}/img/sera2.jpg`}/>
            </div>
            <div className="inline-block">
            <h3>1</h3>
            </div>
            <div className="inline-block">
            <h3>1</h3>
            </div>
          </div>
          <div>
          <div>
            <h3>2</h3>
            </div>            <div>
            <h3>1</h3>
            </div>            <div>
            <h3>1</h3>
            </div>
          </div>
          <div>
          <div>
            <h3>3</h3>
            </div>            <div>
            <h3>1</h3>
            </div>            <div>
            <h3>1</h3>
            </div>
          </div>
          <div>
          <div>
            <h3>4</h3>
            </div>            <div>
            <h3>1</h3>
            </div>            <div>
            <h3>1</h3>
            </div>
          </div>
          <div>
          <div>
            <h3>5</h3>
            </div>            <div>
            <h3>1</h3>
            </div>            <div>
            <h3>1</h3>
            </div>
          </div>
          <div>
          <div>
            <h3>6</h3>
            </div>            <div>
            <h3>1</h3>
            </div>            <div>
            <h3>1</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}