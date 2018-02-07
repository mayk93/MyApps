/**
 * Created by michael on 07/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import AcUnit from 'material-ui/svg-icons/places/ac-unit';
import Divider from 'material-ui/Divider';

/* Functions and Constants */
import {go_to} from '../utils/functions';

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '../style/js/MyApps';


class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card style={my_apps_outer_card_style}>
                    <CardHeader
                        title="Projects"
                        subtitle="This is a outline of some of my projects."
                        textStyle={my_apps_text_style}
                    />

                    <Divider />
                    <div style={{paddingBottom: "10px", backgroundColor: "black"}}></div>
                    <Divider />

                    <List>
                        <ListItem primaryText="The weather app" leftIcon={<AcUnit />}
                                  onClick={() => {
                                      go_to("http://projects.myapps.gallery/projects")
                                  }}
                        />
                    </List>
                </Card>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);