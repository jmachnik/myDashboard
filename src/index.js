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
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);
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
