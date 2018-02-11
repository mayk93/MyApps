/**
 * Created by michael on 07/02/2018.
 */

/* React */
import React from 'react';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import AcUnit from 'material-ui/svg-icons/places/ac-unit';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record';
import PanoramaWideAngle from 'material-ui/svg-icons/image/panorama-wide-angle';
import Divider from 'material-ui/Divider';

/* My libs / components */
import ProjectsLogic from '../logic/ProjectsLogic';
import TopMenu from './TopMenu';
import weather_details from './details/WeatherDetails';
import bounce_details from './details/BounceDetails';
import hosted_on_details from './details/HostedOnDetails';

/* Functions and Constants */
import {project_weather_key, project_bounce_key, project_hosted_on_key} from '@/utils/keys';

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '@/style/js/MyApps';
import {divider_style} from '@/style/js/Misc';


class Projects extends ProjectsLogic {
    constructor(props) {
        super(props);
    }


    header() {
        return (
            <header>
                <TopMenu/>
            </header>
        );
    }

    body() {
        return (
            <Card style={my_apps_outer_card_style}>
                <CardHeader
                    title="Projects"
                    subtitle="This is a outline of some of my projects."
                    textStyle={my_apps_text_style}
                />

                <Divider />
                <div style={divider_style}></div>
                <Divider />

                <List>
                    <ListItem key={project_weather_key}
                              primaryText="The weather app" leftIcon={<AcUnit />}
                              onClick={() => {
                                  this.set_project_state("weather");
                              }}
                              open={this.state.projects.weather}
                              nestedItems={weather_details}
                    />

                    <ListItem key={project_bounce_key}
                              primaryText="The bounce app" leftIcon={<FiberManualRecord />}
                              onClick={() => {
                                  this.set_project_state("bounce");
                              }}
                              open={this.state.projects.bounce}
                              nestedItems={bounce_details}
                    />

                    <ListItem key={project_hosted_on_key}
                              primaryText="Hosted on" leftIcon={<PanoramaWideAngle/>}
                              onClick={() => {
                                  this.set_project_state("hosted_on");
                              }}
                              open={this.state.projects.hosted_on}
                              nestedItems={hosted_on_details}
                    />
                </List>
            </Card>
        );
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.header()}
                    {this.body()}
                </div>
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