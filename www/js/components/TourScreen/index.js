import React, { Component } from 'react';
import { Card, FeaturedCard } from '../Cards';

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
          <p><span>Tour By Mood</span></p>
            <Card text='Mauri' src='mood.png'/>
            <Card text='Fusce' src='mood.png'/>
        </div>

        <div>
          <p><span>Tour by theme</span></p>
            <Card text='Vesti' src='theme.png'/>
            <Card text='Fusce' src='theme.png'/>
        </div>

        <div>
          <p><span>Tour by color</span></p>
            <Card text='Nam' src='color.png'/>
            <Card text='Donec' src='color.png'/>
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
