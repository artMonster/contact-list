import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { addItem } from '../redux/actions'

import Header from './Header'
import List from './List'
import NewItem from './NewItem'
import EditItem from './EditItem'
import Item from './Item'
import Blank from './Blank'

import '../App.css'

class App extends Component {

  render() {

    const { addItem } = this.props

    return ( 
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" children={ <List /> } />
          <Route exact path="/users/new/" children={ <NewItem addItem={ addItem } /> } />
          <Route exact path="/users/:id/" children={ <Item /> } />
          <Route exact path="/users/:id/edit/" children={ <EditItem /> } />
          <Route path="*" children={ <Blank /> } />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
})

const mapDispatchToProps = dispatch => ({
    addItem: ({ firstname, lastname, birthday, gender, email, phone }) => dispatch(addItem(firstname, lastname, birthday, gender, email, phone)),
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(App)