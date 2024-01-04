import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx'
import CallItem from './CallItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxArchive} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <button id = "archive-button"><FontAwesomeIcon icon={faBoxArchive} /> Archive all calls</button>
        <CallItem/>
        <CallItem/>
        <CallItem/>
      </div>
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
