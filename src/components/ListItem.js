import React from "react"
import { Link } from "react-router-dom"

const ListItem = ({item, removeItem}) => (
    <div className="item">
        <div className="item_col item_number"><span>{item.id}</span></div>
        <div className="item_col">
            <div className="item_card">
                <Link to={`users/${item.id}`} className="card_link" />
                <div className="card_col card_gender_icon">
                    <span className={item.gender}></span>
                </div>
                <div className="card_col">
                    <div className="card_body">
                        <p className="card_name">
                            <span>{item.firstname} </span>
                            <span>{item.lastname} </span>
                        </p>
                        <p className="card_email">{item.email}</p>
                    </div>
                </div>
                <div className="card_col card_navigate">
                    <Link to={`users/${item.id}/edit/`} className="btn btn_accent btn_edit" />
                    <button className="btn btn_delete" onClick={() => removeItem(item.id)}></button>
                </div>
            </div>
        </div>
    </div>
)

export default ListItem