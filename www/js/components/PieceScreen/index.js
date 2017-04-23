import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem } from 'react-sanfona';

import RelatedPieces from '../../containers/RelatedPieces';

import Arrow from '../../icons/Arrow';
import CameraIcon from '../../icons/Camera';
import CommentIcon from '../../icons/Comment';
import HeartIcon from '../../icons/Heart';

class PieceScreen extends Component {
  _buttonRow() {
    return (
      <div className='piece-sc-button-row'>
        <button><CameraIcon/></button>
        <button><HeartIcon/></button>
        <button><CommentIcon/></button>
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

/**
 * Helper component that contains all the Body Content for a Piece Solo Page.
 * @param props should contain a single PIECE object, as pulled from the Harvard Art Musemum API.
 */
const PieceContent = (props) => {

  /**
   * Custom component for wrapping around rc-collapse header.
   * This gives each expanding section the nice animated arrow.
   * @param props -- Should at minimum be a string, but it isn't too picky
   */
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
      selectedIndex={ 2 }
      className='piece-sc-body'
    >
      <TabList>
        <Tab>Did You Know?</Tab>
        <Tab>Questions</Tab>
        <Tab>Related Pieces</Tab>
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
        <RelatedPieces piece={ piece }/>
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
