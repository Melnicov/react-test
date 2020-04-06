import React from "react";
import {render} from "react-dom";
import App from "./component/App";
import {Provider} from 'react-redux'
import store from './redux/ReduxStore'

window.store = store

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))