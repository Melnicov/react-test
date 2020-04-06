import {createStore} from 'redux'


const initialState = {
    openedArticle: null,
}

const stateReducer = (state = initialState, action) => {
    if (action.type === 'open_article' && state.openedArticle !== action.openedArticle) {
        return Object.assign({}, state, {
            openedArticle: action.openedArticle
        })
    } else if (action.type === 'open_article' && state.openedArticle === action.openedArticle) {
        return Object.assign({}, state, {
            openedArticle: null
        })
    }

    return state;
}
const store = createStore(stateReducer)

export default store