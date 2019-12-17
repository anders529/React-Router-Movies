import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
    </div>
  );
};

export default App;
