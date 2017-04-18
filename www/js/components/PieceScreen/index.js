import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CameraIcon from '../../icons/Camera';

class PieceScreen extends Component {
  _buttonRow() {
    return (
      <div className='piece-sc-button-row'>
        <button><CameraIcon/></button>
      </div>
    )
  }


  render() {
    const { props: { piece } } = this

    const width = window.innerWidth * 2;
    Tabs.setUseDefaultStyles(false);

    return (
      <div className='piece-screen'>
        <div
          className='piece-sc-header'
          style={ piece.primaryimageurl ?
            { 'backgroundImage': `url(${piece.primaryimageurl}?height=800&width=${width})` } :
            { 'backgroundColor': '#666' } }
        >
          <div className='piece-sc-header-content'>
            <h1>{ piece.title }</h1>
            <h4> { piece.people ? `${piece.people[0].name}, ` : ''} { piece.dated } </h4>
            {this._buttonRow()}
          </div>
        </div>

        <PieceContent piece={ piece } />

      </div>
    )
  }
}

const PieceContent = (props) => {
  const { piece } = props;

  return (
    <Tabs
      selectedIndex={ 0 }
      className='piece-sc-body'
    >
      <TabList>
        <Tab>Details</Tab>
      </TabList>

      <TabPanel>
        <ul className='no-bullet'>
          <li>Classification: { piece.classification }</li>
          <li>Work Type: { piece.worktypes.map(x => x.worktype).join(', ') }</li>
          <li>Culture: { piece.culture }</li>
          <li>Date: { piece.dated }</li>
          <li>Century: { piece.century }</li>
          <li>Medium: { piece.medium }</li>
          <li>Dimensions: { piece.dimensions }</li>
          <li>Credit line: { piece.creditline }</li>
        </ul>
      </TabPanel>
  </Tabs>
  )
}

export default PieceScreen;
