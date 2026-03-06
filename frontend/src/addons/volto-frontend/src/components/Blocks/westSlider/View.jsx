import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import SliderJPEG from './westSlider.jpeg';

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
  </Button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
  </Button>
);

const View = (props) => {
  return (
    <div
      className="block view mainslider full-width slider-container"
      style={{
        background: `url(${SliderJPEG}) center no-repeat`,
        display: 'block', 
        minHeight: '600px',
        marginTop: '-15px'
      }}
    >
      <Slider
        customPaging={(dot) => <div />}
        dots={false}
        fade
        dotsClass="slick-dots slick-thumb"
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        
        autoplay={false}
      >
        <div>
          <div className="slide slide1"
          style={{ textAlign: 'center', color: '#96ffb9'}}
          >
            <h1>Western Slope - ColoradoMesh</h1>
            <h4>
              Colorado's Mesh Network Community For The Western Slope
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default withBlockExtensions(View);
