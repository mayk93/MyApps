/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import './style/css/index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

/* Add redux middle ware here */
const createStoreWithMiddleware = compose(applyMiddleware())(createStore);

/*

 Import order:

 React
 Redux
 External libs / components
 My libs / components
 Actions
 Constants
 Style and CSS

 Other

*/

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
