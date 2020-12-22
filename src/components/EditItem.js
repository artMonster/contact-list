import React, {Component} from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import Moment from 'moment'

import { getItem, updateItem } from '../redux/actions'

const MONTH = [
    {value: '01', title: 'January'},
    {value: '02', title: 'February'},
    {value: '03', title: 'March'},
    {value: '04', title: 'April'},
    {value: '05', title: 'May'},
    {value: '06', title: 'June'},
    {value: '07', title: 'July'},
    {value: '08', title: 'August'},
    {value: '09', title: 'September'},
    {value: '10', title: 'October'},
    {value: '11', title: 'November'},
    {value: '12', title: 'December'}
]

const DAYS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

const NOW_FY = new Date().getUTCFullYear()
const YEARS = Array(NOW_FY - (NOW_FY - 120)).fill('').map((v, idx) => NOW_FY - idx)


class EditItem extends Component {

    handleForm = (e) => {
        e.preventDefault()
        const data = {
            id: e.target.uid.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            gender: e.target.gender.value,
            birthday: e.target.year.value + '-' + e.target.month.value + '-' + e.target.day.value
            
        }
        this.props.updateItem(data)
        this.props.history.push('/');
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getItem('https://vault.papaweb.name/clilist/public/api/clients/' + id)
    }

    render() {
        const {id, firstname, lastname, gender, email, phone, birthday } = this.props.item

        const birthdateMonth = Moment(birthday).format('MM')
        const birthdateYear = Moment(birthday).format('YYYY')
        const birthdateDay = Moment(birthday).format('DD')

        return (
            <form className="form" onSubmit={this.handleForm}>
                <input type="hidden" id="uid" name="uid" defaultValue={id} required />
                <div className="form_wrap">
                    <div className="form_col form_title">
                        <p>Name</p>
                    </div>
                    <div className="form_col">
                        <input type="text" id="firstname" name="firstname" defaultValue={firstname} required />
                        <label htmlFor="firstname">First name</label>
                    </div>
                    <div className="form_col">
                        <input type="text" id="lastname" name="lastname" defaultValue={lastname} required />
                        <label htmlFor="lastname">Last name</label>
                    </div>
                </div>
                <div className="form_wrap">
                    <div className="form_col form_title">
                        <p className="">Contacts</p>
                    </div>
                    <div className="form_col">
                        <input type="email" id="email" name="email" defaultValue={email} required />
                        <label htmlFor="email" className="form-label">Email </label>
                    </div>
                    <div className="form_col">
                        <input type="tel" id="phone" name="phone" defaultValue={phone} required />
                        <label htmlFor="phone" className="form-label">Phone</label>
                    </div>
                </div>
                <div className="form_wrap ">
                    <div className="form_col form_col_two">
                        <div className="form_wrap">
                            <div className="form_col form_title">
                                <p className="form_title">Gender</p>
                            </div>
                            <div className="form_col form_check">
                                <input id="genderFemale" name="gender" value="female" type="radio" defaultChecked={gender === 'female' ? true : false} required />
                                <label htmlFor="genderFemale">Female</label>
                            </div>

                            <div className="form_col form_check">
                                <input id="genderMale" name="gender" value="male" type="radio" defaultChecked={gender === 'male' ? true : false} required />
                                <label htmlFor="genderMale">Male</label>
                            </div>
                        </div>
                    </div>
                    <div className="form_col form_col_two">
                        <div className="form_wrap">
                            <div className="form_col form_title">
                                <p>Birth date</p>
                            </div>
                            <div className="form_col form_col_three">
                                
                                <select id="birthDay" name="day" defaultValue={birthdateDay} required>
                                    <option></option>
                                    {DAYS.map((day, index) => (
                                        <option key={index} value={day}>{day}</option>    
                                    ))}
                                </select>
                                <label htmlFor="birthDay">Day</label>
                            </div>
                            <div className="form_col form_col_three">
                                
                                <select id="birthMonth" name="month" defaultValue={birthdateMonth} required>
                                    <option></option>
                                    {MONTH.map(({ value, title}, index) => (
                                        <option key={index} value={value}>{title}</option>    
                                    ))}
                                </select>
                                <label htmlFor="birthMonth">Month</label>
                            </div>
                            <div className="form_col form_col_three">
                                <select id="birthYear" name="year" defaultValue={birthdateYear} required>
                                    <option></option>
                                    {YEARS.map((year, index) => (
                                        <option key={index} value={year}>{year}</option>    
                                    ))}
                                </select>
                                <label htmlFor="birthYear">Year</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_btn">
                    <Link to="/" className="btn">Cancel</Link>
                    <button type="submit" className="btn btn_accent">Save</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

const mapDispatchToProps = dispatch => ({
    getItem: (url) => dispatch(getItem(url)),
    updateItem: ({ firstname, lastname, birthday, gender, email, phone, id }) => dispatch(updateItem(firstname, lastname, birthday, gender, email, phone, id)),
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditItem))