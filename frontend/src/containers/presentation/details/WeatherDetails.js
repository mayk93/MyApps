/**
 * Created by michael on 11/02/2018.
 */


/* React */
import React from 'react';

/* External libs / components */
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/* Functions and Constants */
import {go_to} from '@/utils/functions';

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '@/style/js/MyApps';

let weather_details = [
    <Card>
        <CardHeader
            title="Weather App"
            subtitle="A simple app that interacts with a server in order to retrieve weather data."
            textStyle={my_apps_text_style}
        />
        <CardActions>
            <FlatButton label="Demo" onClick={() => {go_to("https://projects.myapps.gallery/weather/")}}/>
            <FlatButton label="Github" onClick={() => {go_to("https://github.com/mayk93/OpenWeatherApp")}}/>
        </CardActions>
        <CardText>

        </CardText>
    </Card>
];

export default weather_details;