import React from 'react';
import {PresentationPreviw} from "./lw4/Types"
import logo from './logo.svg';

const slidesList = [
  {id: '1', backgroundColor:'red', workSlide: false},
  {id: '2', backgroundColor:'blue', workSlide: true},
  {id: '3', backgroundColor:'green', workSlide: false},
];

function App() {
  return (
    <PresentationPreviw
      name='My Presentation'
      logo={logo}
      slides={slidesList}
    ></PresentationPreviw>
  );
}

export default App;
