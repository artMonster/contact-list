import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import Moment from 'moment'

import { getItem } from '../redux/actions'

class Item extends Component {

    componentDidMount() {  
        const { id } = this.props.match.params
        this.props.getItem('https://vault.papaweb.name/clilist/public/api/clients/' + id)
    }

    render() {
        const { id, firstname, lastname, gender, email, phone, birthday } = this.props.item

        return (
            <div className="page text_center">
                <div className="page_col item_number"><span>{id}</span></div>
                <div className="page_col">
                    <p className="title_big">
                        {firstname}
                    </p>
                    <p className="title_big">
                        {lastname}
                    </p>
                    <p><small>Age: {Moment(birthday, "YYYY-MM-DD").fromNow()} ( {Moment(birthday).format("DD MMMM YYYY")} ) </small></p>
                    <div className="gender_icon">
                        <span className={gender}></span>
                    </div>
                </div>
                <div className="page_col">
                    <small className="text_accent">Send email to: </small> <a className="btn btn_outline_email" href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="page_col">
                    <small className="text_phone">Call up: </small> <a className="btn btn_outline_phone" href={`tel:${phone}`}>{phone}</a>
                </div>
                <div className="page_col py_big">
                    <Link to="/" className="btn">Back</Link>
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