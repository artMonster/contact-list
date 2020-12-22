import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import List from './List'
import NewItem from './NewItem'
import EditItem from './EditItem'
import Item from './Item'
import Blank from './Blank'

import '../App.css'

class App extends Component {

  render() {

    return ( 
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" children={ <List /> } />
          <Route path="/users/new/" children={ <NewItem /> } />
          <Route path="/users/:id/" children={ <Item /> } />
          <Route path="/users/:id/edit/" children={ <EditItem /> } />
          <Route path="*" children={ <Blank /> } />
        </Switch>
      </Router>
    )
  }
}

export default App