/**
 * Created by michael on 11/02/2018.
 */


/* React */
import React from 'react';

/* External libs / components */
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

/* Functions and Constants */
import {go_to} from '@/utils/functions';
import {project_weather_details_key} from '@/utils/keys';

/* Style and CSS */
import {flex_container, flex_30} from '@/style/js/Flex';
import {my_apps_outer_card_style, my_apps_text_style} from '@/style/js/MyApps';
import '@/style/css/Projects.css';
import weather_image from '@/assets/sun_and_cloud.png';

let weather_details = [
    <ListItem key={project_weather_details_key}>
        <Card>
            <CardHeader
                title="Weather App"
                subtitle="A simple app that interacts with a server in order to retrieve weather data."
                textStyle={my_apps_text_style}
            />
            <CardText>
                This is a app that exemplifies how a SPA made with React can communicate with a server using Ajax and
                display the results. This app uses Redux and handles asynchronous requests using Redux Thunk.
            </CardText>

            <div style={flex_container}>
                <div style={flex_30}></div>
                <div style={flex_30}>
                    <img className="project_image_class" src={weather_image}></img>
                </div>
                <div style={flex_30}></div>
            </div>

            <CardActions>
                <FlatButton label="Demo" onClick={() => {go_to("https://projects.myapps.gallery/weather/")}}/>
                <FlatButton label="Github" onClick={() => {go_to("https://github.com/mayk93/OpenWeatherApp")}}/>
            </CardActions>
        </Card>
    </ListItem>
];

export default weather_details;