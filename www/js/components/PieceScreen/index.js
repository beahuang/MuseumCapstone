import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem } from 'react-sanfona';

import Arrow from '../../icons/Arrow';
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

  const QuestionTitle = (props) => {
    return (
      <h3 { ...props }>
        { props.children }
        <Arrow
          className='arrow arrow--white'
        />
      </h3>
    )
  }

  const { piece } = props;

  return (
    <Tabs
      selectedIndex={ 1 }
      className='piece-sc-body'
    >
      <TabList>
        <Tab>Did You Know?</Tab>
        <Tab>Questions</Tab>
        <Tab>Details</Tab>
      </TabList>

      <TabPanel>
        <h3>Highlights</h3>
        <ul className='yes-bullet'>
          <li>Renoir painted Gabrielle Renard (1879–1959) more than two hundred times. In several of the
          portraits, she wears the same informal, square-necked gown seen here.
          </li>
          <li>Renoir he adopted the style in response to the ancient murals of Pompeii and Herculaneum, which he
          had seen in Naples.
          </li>
        </ul>
      </TabPanel>
      <TabPanel>
        <Accordion
          allowMultiple={ true }
        >
          <AccordionItem title={ <QuestionTitle>Who Is Renoir</QuestionTitle> }>
            <p>
              Renoir was a leading painter in the development of the impressionist style later in
              the 19th century. He celebrated beauty and feminine sensuality. This painting is
              located in this room also.
            </p>
          </AccordionItem>
          <AccordionItem title={ <QuestionTitle>Who Is Gabriel?</QuestionTitle> }>
            <p>
              Gabriel was a cousin of Aline Victorine Charigot Renoir who ended up marrying the
              painter Renoir. By 1908, she had been employed in Renoir’s household for fourteen
              years, as a nanny, housekeeper, model, and companion to the aging artist.
            </p>
          </AccordionItem>
        </Accordion>
      </TabPanel>
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
