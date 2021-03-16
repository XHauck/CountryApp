import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Header from './component/Header'
import Filter from './component/Filter'
import Countries from './component/Countries'
import Country  from './component/Contry'


function App() {
  return (
    <Router>
      <Header/>

      <Route exact path='/'> 
      <Filter/>
        <Countries/>
      </Route>
      <Route path="/countries/:name" children={<Country/>}></Route>

    </Router>
  );
}

export default App;
