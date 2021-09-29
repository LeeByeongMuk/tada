import '@/bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import rootReducer from '@/modules';
import Routes from '@/routes';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const GlobalStyle = createGlobalStyle` // TODO: 추후 수정
    body {
        width: 100%;
        min-width: 320px;
        background: #fff;
        font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic, Dotum, Arial, Tahoma, serif;
        font-size: 16px;
        line-height: 1;
        color: #333;
    }

    .hidden {
        display: none;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <Reset />
        <GlobalStyle />
        <Routes />
    </Provider>,
    document.getElementById('app'),
);
