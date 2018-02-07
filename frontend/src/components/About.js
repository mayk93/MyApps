/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';

/* My libs / components */
import AboutItem from './AboutItem';

/* Constants */
import {ABOUT} from '../constants'

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_inner_card_style, my_apps_text_style} from '../style/js/MyApps';

/* Content */
import about from '../content/about.html';


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card style={my_apps_outer_card_style}>
                    <CardHeader
                        title="About"
                        subtitle="How to get in touch and other information."
                        textStyle={my_apps_text_style}
                    />

                    <div dangerouslySetInnerHTML={{ __html: about }} />
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default About;
