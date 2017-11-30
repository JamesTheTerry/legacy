import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import MovieListContainer from '../containers/MovieListContainer';

const App = (props) => {
  return (
    <div>
      <nav>NAVBAR</nav>
      <h1>MarsKliff</h1>
      {props.children}
    </div>
  );
}

export default App; 
