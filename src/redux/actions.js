import {REMOVE_ITEM, FETCH_ITEMS, GET_ITEM } from './types'

export const fetchItemsData = (items) => ({
    type: FETCH_ITEMS,
    items
})

export const getItemData = (item) => ({
    type: GET_ITEM,
    item
})

export const removeItemData = (id) => ({
    type: REMOVE_ITEM,
    id
})

export function fetchItems(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(items => dispatch(fetchItemsData(items.data)))
            .catch(() => {})
    }
}

export function getItem(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(item => dispatch(getItemData(item))
            )
            .catch(() => {})
    }
}

export const updateItem = (firstname, lastname, birthday, gender, email, phone, id) => (
    (dispatch) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': "*/*",
                'Connection': 'keep-alive',
            },
            body: JSON.stringify({ firstname, lastname, birthday, gender, email, phone })
        }

        fetch('https://vault.papaweb.name/clilist/public/api/clients/' + id, requestOptions)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(() => dispatch(fetchItems('https://vault.papaweb.name/clilist/public/api/clients'))
            )
            .catch(() => {})
    }
)

export const addItem = (firstname, lastname, birthday, gender, email, phone) => (
    (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': "*/*",
                'Connection': 'keep-alive',
            },
            body: JSON.stringify({ firstname, lastname, birthday, gender, email, phone })
        }

        fetch('https://vault.papaweb.name/clilist/public/api/clients', requestOptions)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(() => dispatch(fetchItems('https://vault.papaweb.name/clilist/public/api/clients'))
            )
            .catch(() => {})
    }
)

export const removeItem = (id) => (
    (dispatch) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': "*/*",
                'Connection': 'keep-alive',
            }
        }

        fetch('https://vault.papaweb.name/clilist/public/api/clients/' + id, requestOptions)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(() => dispatch(fetchItems('https://vault.papaweb.name/clilist/public/api/clients'))
            )
            .catch(() => {})
    }
)