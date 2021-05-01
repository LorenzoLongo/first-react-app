import React from 'react';
import ReactDOM from 'react-dom';
import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';
import createHistory from 'history/createBrowserHistory';
import {Route, Switch} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk"
import {tokenMiddleware} from "./middleware";

const store = createStore(reducer, applyMiddleware(thunkMiddleware, tokenMiddleware));

const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
