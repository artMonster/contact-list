import React, {Component} from "react"
import { Link, withRouter } from "react-router-dom"


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

const YEARS = [
    '1901', 
    '1902', 
    '1903', 
    '1904', 
    '1905', 
    '1906', 
    '1907', 
    '1908', 
    '1909', 
    '1910', 
    '1911', 
    '1912', 
    '1913', 
    '1914', 
    '1915', 
    '1916', 
    '1917', 
    '1918', 
    '1919', 
    '1920'
]



class NewItem extends Component {

    handleForm = (e) => {
        e.preventDefault()
        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            gender: e.target.gender.value,
            birthday: e.target.year.value + '-' + e.target.month.value + '-' + e.target.day.value
            
        }
        this.props.addItem(data)
        this.props.history.push('/');
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleForm}>
                <div className="form_wrap">
                    <div className="form_col form_title">
                        <p>Name</p>
                    </div>
                    <div className="form_col">
                        <input type="text" id="firstname" name="firstname" required />
                        <label htmlFor="firstname">First name</label>
                    </div>
                    <div className="form_col">
                        <input type="text" id="lastname" name="lastname" required />
                        <label htmlFor="lastname">Last name</label>
                    </div>
                </div>
                <div className="form_wrap">
                    <div className="form_col form_title">
                        <p className="">Contacts</p>
                    </div>
                    <div className="form_col">
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="email" className="form-label">Email </label>
                    </div>
                    <div className="form_col">
                        <input type="tel" id="phone" required />
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
                                <input id="genderFemale" name="gender" value="female" type="radio" required />
                                <label htmlFor="genderFemale">Female</label>
                            </div>

                            <div className="form_col form_check">
                                <input id="genderMale" name="gender" value="male" type="radio" required />
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
                                
                                <select id="birthDay" name="day" required>
                                    <option></option>
                                    {DAYS.map((day, index) => (
                                        <option key={index} value={day}>{day}</option>    
                                    ))}
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                </select>
                                <label htmlFor="birthDay">Day</label>
                            </div>
                            <div className="form_col form_col_three">
                                
                                <select id="birthMonth" name="month" required>
                                    <option></option>
                                    {MONTH.map(({ value, title}, index) => (
                                        <option key={index} value={value}>{title}</option>    
                                    ))}
                                </select>
                                <label htmlFor="birthMonth">Month</label>
                            </div>
                            <div className="form_col form_col_three">
                                <select id="birthYear" name="year" required>
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
                    <button type="submit" className="btn btn_accent">Submit</button>
                </div>
            </form>
        )
    }
}

export default withRouter(NewItem)