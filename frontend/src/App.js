/* React */
import React, {Component} from 'react';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Info from 'material-ui/svg-icons/action/info';
import Public from 'material-ui/svg-icons/social/public';
import Code from 'material-ui/svg-icons/action/code';
import Divider from 'material-ui/Divider';

/* Actions */
import {set_menu_open} from './actions';

/* Style */
import './style/css/App.css';
import {my_apps_outer_card_style, my_apps_text_style} from './style/js/MyApps';

/* Constants */
import {cat_url} from './constants';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_clicked: false
        }
    };

    click_handler() {
        this.setState({
            main_clicked: true
        })
    };

    navigate(target) {
        this.setState({
            main_clicked: false
        }, () => {
            this.props.history.push(target)
        })
    }

    render() {
        // ToDo: Add Redux Sagas and actually get cat picture from cat API
        return (
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to my website</h1>
                    </header>

                    <p className="App-intro">
                        Hi! My name is Michael and this is a gallery on <code>apps</code> I made.
                    </p>

                    <Card style={my_apps_outer_card_style}>
                        <CardHeader
                            title="Main page"
                            subtitle="Welcome to my gallery."
                            textStyle={my_apps_text_style}
                        />

                        <Divider />
                        <div style={{paddingBottom: "10px", backgroundColor: "black"}}></div>
                        <Divider />

                        <List>
                            <ListItem primaryText="Main page" leftIcon={<Public />}
                                      onClick={() => {
                                          this.click_handler()
                                      }}
                            />
                            <ListItem primaryText="Projects" leftIcon={<Code />}
                                      onClick={() => {
                                          this.navigate('/projects')
                                      }}
                            />
                            <ListItem primaryText="About" leftIcon={<Info />}
                                      onClick={() => {
                                          this.navigate('/about')
                                      }}
                            />
                        </List>
                    </Card>

                    {
                        this.state.main_clicked
                            ?
                            <Card style={my_apps_outer_card_style}>
                                <CardHeader
                                    title="You are already on the main page"
                                    subtitle="Have a cat picture instead."
                                    textStyle={my_apps_text_style}
                                />
                            </Card>
                            :
                            <div></div>
                    }
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu_state: state.menu_state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        set_menu_open
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

