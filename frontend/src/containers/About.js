/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

/* My libs / components */
import TopMenu from './TopMenu';

/* Functions and Constants */
import {go_to} from '../utils/functions';

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '../style/js/MyApps';


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <TopMenu/>
                    </header>

                <Card style={my_apps_outer_card_style}>

                    <CardHeader
                        title="About"
                        subtitle="I am a software engineer."
                        textStyle={my_apps_text_style}
                    />

                    <div style={{width: "100%", marginLeft: "5%"}}>
                        I like systems design and my language of choice is <code>python</code>.

                        <br/>

                        I am also good with <code>javascript</code>.

                        <br/>

                        Check out my projects to find out more.
                    </div>

                    <CardHeader
                        title="Contact and CV"
                        subtitle="How to get in touch and other information."
                        textStyle={my_apps_text_style}
                    />

                    <div style={{width: "100%", marginLeft: "5%"}}>
                        My email is <code><a style={{color: "black"}} href="mailto:mihai@mandrescu.co">
                        mihai@mandrescu.co</a></code>

                        <br/>
                        <br/>

                        Some people confuse it with <code>.com</code>

                        <br/>

                        Please do not send any mail addressed
                        to me to <code>.com</code>

                        <br/>

                        That domain is not mine.

                        <br/>
                        <br/>

                        I've been in the industry for two years now.

                        <br/>

                        In this time, I did everything from <code>backend</code> to <code>frontend</code>,
                        to <code>machine learning</code> and <code>dev ops</code>.

                        <br/>

                        And probably others.

                        <br/>
                        <br/>

                        You can get more details by looking at my <code>
                        <a style={{color: "black"}} href="https://mayk93.github.io/">CV</a></code>.

                        <br/>
                        <br/>
                    </div>

                    <CardHeader
                        title="Other contacts"
                        subtitle="Other places where you can find me."
                        textStyle={my_apps_text_style}
                    />

                    <CardActions>
                        <FontAwesome
                            name="github"
                            size="2x"
                            style={{marginLeft: "5px", cursor: "pointer"}}
                            onClick={() => {go_to("https://github.com/mayk93")}}
                        />

                        <FontAwesome
                            name="stack-overflow"
                            size="2x"
                            style={{marginLeft: "5px", cursor: "pointer"}}
                            onClick={() => {go_to("https://stackoverflow.com/users/6744276/mayk93")}}
                        />

                        <FontAwesome
                            name="linkedin"
                            size="2x"
                            style={{marginLeft: "5px", cursor: "pointer"}}
                            onClick={() => {go_to("https://www.linkedin.com/in/mihai-mandrescu-8a7787a1")}}
                        />
                    </CardActions>
                </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(About);