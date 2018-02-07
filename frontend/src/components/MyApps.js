/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Material UI */
import {Card, CardHeader} from 'material-ui/Card';

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '../style/js/MyApps';

class MyApps extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Card onClick={this.props.onClick} style={my_apps_outer_card_style}>
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
