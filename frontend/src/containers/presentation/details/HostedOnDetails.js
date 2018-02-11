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
import {project_hosted_on_details_key} from '@/utils/keys';

/* Style and CSS */
import {flex_container, flex_30} from '@/style/js/Flex';
import {my_apps_outer_card_style, my_apps_text_style} from '@/style/js/MyApps';
import '@/style/css/Projects.css';
import hosted_on_image from '@/assets/hosted_on.png';

let weather_details = [
    <ListItem key={project_hosted_on_details_key}>
        <Card>
            <CardHeader
                title="Hosted on"
                subtitle="A simple React component that acts a footer, easily pointing to the project's repository."
                textStyle={my_apps_text_style}
            />
            <CardText>
                Importing this component will allow the user to link to the repository hosting the project.
                The component will attempt to deduce the image appropriate for the repository ( Github logo for Github
                hosting, for example ) - It allows customisation however.
            </CardText>

            <div style={flex_container}>
                <img className="project_image_class_wide" src={hosted_on_image}></img>
            </div>

            <CardActions>
                <FlatButton label="Github" onClick={() => {go_to("https://github.com/mayk93/HostedOn")}}/>
                <FlatButton label="NPM" onClick={() => {go_to("https://www.npmjs.com/package/hosted_on")}}/>
            </CardActions>
        </Card>
    </ListItem>
];

export default weather_details;