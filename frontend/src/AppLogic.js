/**
 * Created by michael on 10/02/2018.
 */

/* React */
import React, {Component} from 'react';


class AppLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_clicked: false
        }
    };

    click_handler() {
        this.setState({
            main_clicked: true
        });
    };

    navigate(target) {
        this.setState({
            main_clicked: false
        }, () => {
            this.props.history.push(target)
        })
    }
}

export default AppLogic;

