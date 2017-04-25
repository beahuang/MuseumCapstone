import React, { Component } from 'react';
import { Card, FeaturedCard } from '../Cards';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true
};

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'What do you want to see today?',
    };

  }

  render() {
    return (
      <div>
        <h1 className='home-title'>{ this.state.title }</h1>
        <div className='home-container'>
          <div className='tour-container'>
            <div className='featured-card'>
              <FeaturedCard
                src='western-fashion.png'
                title='Western Fashion'
                tags={ ['Design', 'Clothing', 'International'] }
                buttonText='Preview Tour'
              />
            </div>
          </div>
          <div className='tour-container'>
            <div className='featured-card'>
              <FeaturedCard
                src='featured.png'
                title='Art, Design, and Bauhaus'
                tags={ ['Germany', 'Design'] }
                buttonText='Preview Tour'
              />
            </div>
          </div>

          <div className='tour-container'>
            <div className='card-section-labels'>
              <p className='card-section-label card-section-label--title'><span>Tour by mood</span></p>
              <p className='card-section-label card-section-label--more'><span>See all ></span></p>
            </div>
            <div className='card-section-cards'>
              <div className='card'><Card title='Mauri' src='mood.png'/></div>
              <div className='card'><Card title='Fusce' src='mood.png'/></div>
            </div>
          </div>

          <div className='tour-container'>
            <div className='card-section-labels'>
              <p className='card-section-label card-section-label--title'><span>Tour by theme</span></p>
              <p className='card-section-label card-section-label--more'><span>See all ></span></p>
            </div>
            <div className='card-section-cards'>
              <div className='card'><Card title='Fusce' src='theme.png'/></div>
              <div className='card'><Card title='Vesti' src='theme.png'/></div>
            </div>
          </div>

          <div className='tour-container'>
            <div className='card-section-labels'>
              <p className='card-section-label card-section-label--title'><span>Tour by color</span></p>
              <p className='card-section-label card-section-label--more'><span>See all ></span></p>
            </div>
            <div className='card-section-cards'>
              <div className='card'><Card title='Nam' src='color.png'/></div>
              <div className='card'><Card title='Donec' src='color.png'/></div>
            </div>
          </div>

          <div className='tour-container tour-container--custom'>
            <p className='card-section-label card-section-label--title'><span>Do your thing</span></p>
            <div className='card-section-cards'>
              <div className='card card-no-img'><Card title='Make my own tour'/></div>
              <div className='card card-no-img'><Card link='/wander' title='I just want to wander'/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
