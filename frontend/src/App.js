/* React */
import React from 'react';

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
import {CircleLoader} from 'react-spinners';

/* My libs / components */
import AppLogic from './AppLogic';
import TopMenu from './containers/presentation/TopMenu';

/* Actions */
import {set_menu_open, get_cat_image, set_cat_image} from './actions';

/* Functions and constants */
import {NARROW_SCREEN_WIDTH, loading, failed, no_action} from './constants';

/* Style */
import './style/css/App.css';
import './style/css/overwrites.css';
import {my_apps_outer_card_style, my_apps_text_style} from './style/js/MyApps';
import {flex_container, flex_90, flex_30, flex_10} from './style/js/Flex';
import {divider_style} from './style/js/Misc';
import fail_cat from '@/assets/fail_cat.jpg';


/* eslint-disable */
class App extends AppLogic {
    constructor(props) {
        super(props);

        this.welcome_message = "Welcome to my website";
        this.welcome_message_class = "App-title";

        this.intro_message = "Hi! My name is Michael and this is a gallery on apps I made.";
        this.intro_message_class = "App-intro";

        this.screen_width = screen.width;
    };

    welcome() {
        if (this.screen_width < NARROW_SCREEN_WIDTH) {
            return <p className={this.welcome_message_class}>{this.welcome_message}</p>
        } else {
            return <h1 className={this.welcome_message_class}>{this.welcome_message}</h1>
        }
    }

    header() {
        return (
            <header className="App-header">
                <div style={flex_container}>
                    <div style={flex_10}>
                        <TopMenu />
                    </div>
                    <div style={flex_90}>
                        {this.welcome()}
                    </div>
                </div>
            </header>
        );
    }

    intro() {
        if (this.screen_width < NARROW_SCREEN_WIDTH) {
            return (
                <p className={this.intro_message_class}>
                    {this.intro_message}
                </p>
            );
        } else {
            return (
                <small className={this.intro_message_class}>
                    {this.intro_message}
                </small>
            );
        }
    }

    divider() {
        return (
            <div>
                <Divider />
                <div style={divider_style}></div>
                <Divider />
            </div>
        );
    }

    body_header() {
        return (
            <CardHeader
                title="Main page"
                subtitle="Welcome to my gallery."
                textStyle={my_apps_text_style}
            />
        );
    }

    body_views() {
        return (
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
        )
    }

    body() {
        return (
            <Card style={my_apps_outer_card_style}>
                {this.body_header()}
                {this.divider()}
                {this.body_views()}
            </Card>
        )
    }

    render_cat_image(cat_image) {
        if (this.screen_width < NARROW_SCREEN_WIDTH) {
            return (
                <div style={flex_container}>
                    <div style={flex_30}></div>
                    <div style={flex_30}>
                        <img className="app_image_narrow" src={cat_image}></img>
                    </div>
                    <div style={flex_30}></div>
                </div>
            );
        } else {
            return (
                <div style={flex_container}>
                    <div style={flex_30}></div>
                    <div style={flex_30}>
                        <img className="app_image" src={cat_image}></img>
                    </div>
                    <div style={flex_30}></div>
                </div>
            );
        }
    }

    cat_failed() {
        return (
            <Card style={my_apps_outer_card_style}>
                <CardHeader
                    title="I tried getting you a cat image, but failed."
                    subtitle="Sorry about that."
                    textStyle={my_apps_text_style}
                />
                {this.render_cat_image(fail_cat)}
            </Card>
        );
    }

    cat_loading() {
        return (
            <Card style={my_apps_outer_card_style}>
                <CardHeader
                    title="Loading a cat for you!"
                    subtitle="It's a big cat."
                    textStyle={my_apps_text_style}
                />
                <div style={flex_container}>
                    <div style={flex_30}></div>
                    <div style={flex_30}>
                        <CircleLoader loading={true}/>
                    </div>
                    <div style={flex_30}></div>
                </div>
            </Card>
        );
    }

    cat_success() {
        return (
            <Card style={my_apps_outer_card_style}>
                <CardHeader
                    title="You are already on the main page"
                    subtitle="Have a cat picture instead."
                    textStyle={my_apps_text_style}
                />
                {this.render_cat_image(this.props.cat_image)}
            </Card>
        );
    }

    post_body() {
        if (this.props.cat_image === no_action) {
            return <div></div>;
        } else if (this.props.cat_image === failed) {
            return this.cat_failed();
        } else if (this.props.cat_image === loading) {
            return this.cat_loading();
        } else if (this.props.cat_image.length > 0) {
            return this.cat_success();
        }
        return <div></div>;
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    {this.header()}
                    {this.intro()}
                    {this.body()}
                    {this.post_body()}
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu_state: state.menu_state,
        cat_image: state.cat_image
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        set_menu_open, get_cat_image, set_cat_image
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);