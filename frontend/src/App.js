/* React */
import React, {Component} from 'react';

/* Other */
import HostedOn from 'hosted_on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/* Mine */
import MyApps from './components/MyApps';


/* Style */
import './style/css/App.css';


class App extends Component {
    /* Might need redux */
    render () {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to my website</h1>
                    </header>

                    <p className="App-intro">
                        This is a gallery on <code>apps</code> I made.
                    </p>

                    <hr/>

                    <MyApps />

                    <HostedOn link="https://github.com/mayk93/MyApps" new_tab={false} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
