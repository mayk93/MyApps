/*
 Import order:

 React
 Redux
 External libs / components
 My libs / components
 Actions
 Functions and Constants
 Style and CSS

 Other
 */

/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from './reducers';

/* Router */
import {Route} from 'react-router';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

/* External libs / components */
import HostedOn from 'hosted_on';

/* My libs / components */
import TopMenu from './containers/TopMenu';
import SideMenu from './containers/SideMenu';

/* Actual APP */
import App from './App';
import './style/css/index.css';

/* Routes */
import About from './components/About';

/* Service worker */
import registerServiceWorker from './registerServiceWorker';

/* Add redux middle ware here */
const history = createHistory();
const router_middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(router_middleware)
);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route component={TopMenu} />
                <Route component={SideMenu} />

                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>

                <HostedOn link="https://github.com/mayk93/MyApps" new_tab={true}/>
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();