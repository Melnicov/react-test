import {createStore} from 'redux'

const initialState = {
    email: '',
    name: '',
}

const reducer = (state = initialState, action) => {
    if (action.type === 'save_email') {
        return Object.assign({}, state, {
            email: action.payload.email.email
        })
    }
    if (action.type === 'save_name') {
        return Object.assign({}, state, {
            name: action.payload.name.name
        })
    }
    return state
}

const store = createStore(reducer)

export default store