import React, { Component } from 'react';
import { Card, FeaturedCard } from '../Cards';
import Slider from 'react-slick';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true
};

export default class TourScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'What do you want to see today?',
    };

  }

  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <div>
          <p><span>Featured Tours</span></p>
            <Slider { ...sliderSettings }>
              <div>
                <FeaturedCard
                  link=''
                  text='Mauri'
                  src='featured.png'
                  text='Art, Design, and Bauhaus'
                  tags={ ['Germany', 'Design'] }
                  buttonText='Preview Tour'
                  />
              </div>
              <div>
                <FeaturedCard
                  link=''
                  text='Mauri'
                  src='featured.png'
                  text='Art, Design, and Bauhaus'
                  tags={ ['Germany', 'Design'] }
                  buttonText='Preview Tour'
                  />
              </div>
              <div>
                <FeaturedCard
                  link=''
                  text='Mauri'
                  src='featured.png'
                  text='Art, Design, and Bauhaus'
                  tags={ ['Germany', 'Design'] }
                  buttonText='Preview Tour'
                  />
              </div>
            </Slider>
        </div>

        <div>
          <p><span>Tour By Mood</span></p>
            <Slider { ...sliderSettings }>
              <div><Card text='Mauri' src='mood.png'/></div>
              <div><Card text='Fusce' src='mood.png'/></div>
              <div><Card text='Mauri' src='mood.png'/></div>
            </Slider>
        </div>

        <div>
          <p><span>Tour by theme</span></p>
          <Slider { ...sliderSettings }>
            <div><Card text='Fusce' src='theme.png'/></div>
            <div><Card text='Vesti' src='theme.png'/></div>
            <div><Card text='Fusce' src='theme.png'/></div>
          </Slider>
        </div>

        <div>
          <p><span>Tour by color</span></p>
          <Slider { ...sliderSettings }>
            <div><Card text='Nam' src='color.png'/></div>
            <div><Card text='Donec' src='color.png'/></div>
            <div><Card text='Nam' src='color.png'/></div>
          </Slider>
        </div>

        <div>
          <p><span>Do Your Thing</span></p>
          <Card text='Make my own tour'/>
          <Card text='I just want to wander'/>
        </div>
      </div>
    );
  }
}
