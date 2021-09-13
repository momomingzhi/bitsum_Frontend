/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
// import myLogger from './middleware/myLogger';
import { Router } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

//스토어에 미들웨어 적용할때 applyMiddleware 사용
const store = createStore(
    rootReducer,
    applyMiddleware(
        ReduxThunk.withExtraArgument({ history: customHistory }),
        sagaMiddleware, // 사가 미들웨어를 적용하고
        logger
    )
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Router history={customHistory}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
