import React, {Component} from 'react';

import './style/css/App.css';
import HostedOn from 'hosted_on';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to my website</h1>
                </header>

                <p className="App-intro">
                    This is a gallery on <code>apps</code> I made.
                </p>

                <HostedOn link="https://github.com/mayk93/MyApps" new_tab={false} />
            </div>
        );
    }
}

export default App;
