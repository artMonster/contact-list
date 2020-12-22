import { combineReducers } from 'redux'
import {REMOVE_ITEM, ADD_ITEM, FETCH_ITEMS, GET_ITEM} from './types'

/*
const DATA = [
    {
        "id": 1,
        "firstname": "Owen",
        "lastname": "Corkery",
        "birthday": "1996-12-13",
        "gender": "male",
        "email": "clara.senger@example.org",
        "phone": "+7029467215354",
        "created_at": "2020-12-13 20:35:59",
        "updated_at": "2020-12-13 20:35:59"
    },
    {
        "id": 2,
        "firstname": "Geraldine",
        "lastname": "Wolf",
        "birthday": "1991-11-05",
        "gender": "male",
        "email": "russel.dayne@example.com",
        "phone": "+8136869258889",
        "created_at": "2020-12-13 20:35:59",
        "updated_at": "2020-12-13 20:35:59"
    },
    {
        "id": 3,
        "firstname": "Dane",
        "lastname": "Dickinson",
        "birthday": "1984-12-13",
        "gender": "male",
        "email": "king.murphy@example.com",
        "phone": "+7711098269584",
        "created_at": "2020-12-13 20:35:59",
        "updated_at": "2020-12-13 20:35:59"
    },
]
*/

const item = (state = [], { item, type } ) => {
    switch (type) {
        case GET_ITEM:
            return item
        default:
            return state
    }
}

const items = (state = [], { firstname, lastname, birthday, gender, email, phone, type, items } ) => {
    switch (type) {
        case FETCH_ITEMS:
            return items
        case ADD_ITEM:
            return [
                ...state, {
                    firstname, 
                    lastname, 
                    birthday, 
                    gender, 
                    email, 
                    phone, 
                }
            ]
        case REMOVE_ITEM:
            return [...state].filter(items => items.email !== email)
        default:
            return state
    }
}

export const rootReducer = combineReducers({items, item})