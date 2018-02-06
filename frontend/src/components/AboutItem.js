/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Material UI */
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

/* Style and CSS */
import {my_apps_card_style, my_apps_text_style} from '../style/js/MyApps';

let go_to = (url) => {
    window.open(url, '_blank');
    window.focus();
};

class AboutItem extends Component {
    constructor(props) {
        super();
        this.state = {
            title: props.title,
            description: props.description,
            host_link: props.host_link,
            publish_link: props.publish_link
        }
    }

    render() {
        return (
            <Card style={my_apps_card_style}>
                <CardHeader
                  title={this.state.title}
                  textStyle={my_apps_text_style}
                />

                <Divider />

                <div dangerouslySetInnerHTML={{ __html: this.state.description }} />

                <Divider />

                {
                    this.state.host_link && this.state.publish_link
                    ?
                    <CardActions>
                        <FlatButton label="Hosted here" onClick={() => {
                            go_to(this.state.host_link)
                        }}/>
                        <FlatButton label="Published here" onClick={() => {
                            go_to(this.state.publish_link)
                        }}/>
                    </CardActions>
                    :
                    <diiv></diiv>
                }
            </Card>
        )
    }
}

export default AboutItem;