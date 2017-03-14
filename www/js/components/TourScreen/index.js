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
        <h1 className="home-title">{ this.state.title }</h1>
        <div className="home-container">
          <div className="featured-tour-container">
            <div className="featured-card">
              <FeaturedCard
                link=''
                text='Mauri'
                src='featured.png'
                text='Art, Design, and Bauhaus'
                tags={ ['Germany', 'Design'] }
                buttonText='Preview Tour'
                />
            </div>
            <div className="featured-card">
              <FeaturedCard
                link=''
                text='Mauri'
                src='featured.png'
                text='Art, Design, and Bauhaus'
                tags={ ['Germany', 'Design'] }
                buttonText='Preview Tour'
                />
            </div>
          </div>

          <div className="tour-container">
            <div className="card-section-labels"> 
              <p className="card-section-label card-section-label--title"><span>Tour by mood</span></p>
              <p className="card-section-label card-section-label--more"><span>See all ></span></p>
            </div>
            <div className="card-section-cards">
              <div className="card"><Card text='Mauri' src='mood.png'/></div>
              <div className="card"><Card text='Fusce' src='mood.png'/></div>
            </div>
          </div>

          <div className="tour-container">
            <div className="card-section-labels"> 
              <p className="card-section-label card-section-label--title"><span>Tour by theme</span></p>
              <p className="card-section-label card-section-label--more"><span>See all ></span></p>
            </div>
            <div className="card-section-cards">  
              <div className="card"><Card text='Fusce' src='theme.png'/></div>
              <div className="card"><Card text='Vesti' src='theme.png'/></div>
            </div>
          </div>

          <div className="tour-container">
            <div className="card-section-labels"> 
              <p className="card-section-label card-section-label--title"><span>Tour by color</span></p>
              <p className="card-section-label card-section-label--more"><span>See all ></span></p>
            </div>
            <div className="card-section-cards">  
              <div className="card"><Card text='Nam' src='color.png'/></div>
              <div className="card"><Card text='Donec' src='color.png'/></div>
            </div>
          </div>

          <div className="tour-custom-container">
            <p><span>Do Your Thing</span></p>
            <Card text='Make my own tour'/>
            <Card text='I just want to wander'/>
          </div>
        </div>
      </div>
    );
  }
}
