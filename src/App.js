import React from 'react'
import Navbar from './Navbar'
import {Switch,Route,Redirect} from 'react-router-dom'
import Men from './Men';
import Women from './Women';
import Wookie from './Home';
import Footer from './Footer.js';
import Form from './Form'

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route  exact path='/' component={Wookie}/>
      <Route  exact path='/men' component={Men}/>
      <Route  exact path='/women' component={Women}/>
        <Route  exact path='/form' component={Form}/>
       <Redirect to= "/"/>
      </Switch>
    <Footer/>
      
    </>
  )
}

export default App
