import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItem } from '../redux/actions'
import { withRouter } from "react-router-dom"

class Item extends Component {

    componentDidMount() {  
        const { id } = this.props.match.params
        this.props.getItem('https://papaweb.name/clilist/public/api/clients/' + id)
        console.log(this)
    }

    render() {
        const { id, firstname, lastname, gender, email, phone } = this.props.item

        return (
            <div className="list">
                <div className="item">
                    <div className="item_col item_number"><span>{id}</span></div>
                    <div className="item_col">
                        <div className="item_card">
                            <div className="card_col card_gender_icon">
                                <span className={gender}></span>
                            </div>
                            <div className="card_col">
                                <div className="card_body">
                                    <p className="card_name">
                                        <span>{firstname} </span> 
                                        <span>{lastname} </span>
                                    </p>
                                    <p className="card_email">{email} {phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
})

const mapDispatchToProps = dispatch => ({
    getItem: (url) => dispatch(getItem(url)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item))