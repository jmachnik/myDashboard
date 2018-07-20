import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import combineReducers from './reducers/index'
import {persistReducer, persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { saveToken } from 'api';
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
);

store.subscribe(saveToken)

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
