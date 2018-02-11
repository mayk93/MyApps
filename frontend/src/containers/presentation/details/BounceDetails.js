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
import {my_apps_text_style} from '@/style/js/MyApps';

let bounce_details = [
    <Card>
        <CardHeader
            title="Bounce App"
            subtitle="A simple app using canvas."
            textStyle={my_apps_text_style}
        />
        <CardActions>
            <FlatButton label="Demo" onClick={() => {go_to("https://projects.myapps.gallery/bounce/")}}/>
            <FlatButton label="Github" onClick={() => {go_to("https://github.com/mayk93/Bounce")}}/>
        </CardActions>
        <CardText>
            In this app, the user can use the canvas to create balls. These balls will have a behaviour that will make
            them bounce and collide with each other.

            The purpose of the app is not the behaviour of the balls, rather, it is a example of a project setup.
            The project uses unit tests, continour integration via Travis CI and has a production build that is deployed.
        </CardText>
    </Card>
];

export default bounce_details;