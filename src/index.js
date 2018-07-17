import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import combineReducers from './reducers/index'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import {persistReducer, persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

library.add(faStroopwafel)
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, combineReducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)


render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
