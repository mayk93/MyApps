/* React */
import React, {Component} from 'react';

/* External libs / components */
import HostedOn from 'hosted_on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/* My libs / components */
import MyApps from './components/MyApps';
import About from './components/About';

/* Constants */
import {PROJECTS, ABOUT} from './constants';

/* Style */
import './style/css/App.css';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: ABOUT
        };

        // this.set_selected.bind(this);
    };

    set_selected (selected) {
        console.log('Selected: ', selected);
        this.setState({
            selected: selected
        });
    };

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

                    <MyApps selected={this.state.selected} onClick={() => {this.set_selected(PROJECTS)}} />
                    <About selected={this.state.selected} onClick={() => {this.set_selected(ABOUT)}} />

                    <HostedOn link="https://github.com/mayk93/MyApps" new_tab={false} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
