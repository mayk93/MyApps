/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Material UI */
import {Card, CardHeader} from 'material-ui/Card';

/* Style and CSS */
import {my_apps_card_style, my_apps_text_style} from '../style/js/MyApps';

/* Mine */
import AboutItem from './AboutItem';

import mongo_router_description from '../content/mongo_router.html';

let hosted_on_description = `
A simple <code>React</code> component that acts as a footer. 

<br/>
<br/>

It is a easy way to link to the repository where the source is hosted.

<br/>
<br/>

You can get the package with <code>npm install hosted_on</code>
`;


let contact_description = `
My email is <code>mihai@mandrescu.co</code>. This is my prefered method of contact.

<br/>
<br/>

My <code>CV</code> can be found here:

<br/>
<br/>

<code><a href="https://mayk93.github.io/">https://mayk93.github.io/</a></code>
`;

class About extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <Card style={my_apps_card_style}>
                <CardHeader
                  title="About"
                  subtitle="How to get in touch and other information."
                  textStyle={my_apps_text_style}
                />

                <AboutItem
                    title="Contact"
                    description={contact_description}
                />

                <AboutItem
                    title="MongoRouter"
                    description={mongo_router_description}
                    host_link="https://github.com/mayk93/MongoRouter"
                    publish_link="https://pypi.python.org/pypi/MongoRouter/0.0.15"
                />

                <AboutItem
                    title="HostedOn"
                    description={hosted_on_description}
                    host_link="https://github.com/mayk93/MongoRouter"
                    publish_link="https://www.npmjs.com/package/hosted_on"
                />
            </Card>
        );
    }
}

export default About;
