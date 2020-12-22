import React from 'react'
import { Link } from 'react-router-dom'

const Blank = () => (
    <div className="page text_center">
        <p className="title_superbig">404</p>
        <p>Oops! Page Not Found</p>
        <Link to="/" className="btn btn_accent">Main Page</Link>
    </div>
)

export default Blank