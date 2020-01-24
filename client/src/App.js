import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom'
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  
  return (
   <div>
      <Switch>
      <Route exact path='/' component={MovieList} />
      <Route path="/:id" component={Movie}/>
 </Switch>
 
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
    
  );
};

export default App;
