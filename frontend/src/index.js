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

/* Saga */
import createSagaMiddleware from 'redux-saga';

/* External libs / components */
import HostedOn from 'hosted_on';

/* My libs / components */
import SideMenu from './containers/presentation/SideMenu';
import Projects from './containers/presentation/Projects';
import About from './containers/presentation/About';

/* Actual APP */
import App from './App';
import './style/css/index.css';

/* Service worker */
import registerServiceWorker from './registerServiceWorker';

/* Add redux middle ware here */
const history = createHistory();
const router_middleware = routerMiddleware(history);
const saga_middleware = createSagaMiddleware();


const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(router_middleware, saga_middleware)
);

/* ToDo: Sagas go here */
// saga_middleware.run();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route component={SideMenu} />

                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Projects}/>

                <HostedOn link="https://github.com/mayk93/MyApps" new_tab={true}/>
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();