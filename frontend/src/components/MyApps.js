/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Material UI */
import {Card, CardHeader} from 'material-ui/Card';

/* Style and CSS */
import {my_apps_card_style, my_apps_text_style} from '../style/js/MyApps';

class MyApps extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <Card style={my_apps_card_style}>
                <CardHeader
                  title="Projects"
                  subtitle="Some of my personal projects."
                  textStyle={my_apps_text_style}
                />
            </Card>
        );
    }
}

export default MyApps;
