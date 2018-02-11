/**
 * Created by michael on 10/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Functions and constants */
import {no_action} from '@/constants';

class AppLogic extends Component {
    constructor(props) {
        super(props);
    };

    click_handler() {
        this.props.get_cat_image();
    };

    navigate(target) {
        this.props.set_cat_image(no_action);
        this.props.history.push(target)
    }
}

export default AppLogic;

