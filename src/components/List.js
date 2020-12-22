import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem, fetchItems } from '../redux/actions'

import ListItem from './ListItem'

class List extends Component {
    

    componentDidMount() {
        this.props.fetchItems('https://vault.papaweb.name/clilist/public/api/clients')
    }
    
    render() {

        const { items, removeItem } = this.props

        return (
            <div className="list"> 
                {items.map((item, index) => {
                   return <ListItem removeItem={removeItem} item={item} key={index} id={items.id}/> })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items,
    item: []
  })
  
  const mapDispatchToProps = dispatch => ({
      fetchItems: url => dispatch(fetchItems(url)),
      removeItem: id => dispatch(removeItem(id)),
    }
  )

export default connect(mapStateToProps, mapDispatchToProps)(List)