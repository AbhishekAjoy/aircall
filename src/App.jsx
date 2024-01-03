import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx'
import CallItem from './CallItem.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
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
