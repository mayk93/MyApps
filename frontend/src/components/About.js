/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* External libs / components */
import {Card, CardHeader} from 'material-ui/Card';

/* My libs / components */
import AboutItem from './AboutItem';

/* Constants */
import {ABOUT} from '../constants'

/* Style and CSS */
import {my_apps_outer_card_style, my_apps_text_style} from '../style/js/MyApps';

/* Content */
import mongo_router_description from '../content/mongo_router.html';
import hosted_on_description from '../content/hosted_on.html';
import contact_description from '../content/contact.html';


class About extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Card onClick={this.props.onClick} style={my_apps_outer_card_style}>
                <CardHeader
                  title="About"
                  subtitle="How to get in touch and other information."
                  textStyle={my_apps_text_style}
                />

                {
                    this.props.selected === ABOUT
                    ?
                    <div>
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
                    </div>
                    :
                    <div></div>
                }
            </Card>
        );
    }
}

export default About;
