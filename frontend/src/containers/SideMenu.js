/**
 * Created by michael on 07/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* External libs / components */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Info from 'material-ui/svg-icons/action/info';
import Public from 'material-ui/svg-icons/social/public';
import Code from 'material-ui/svg-icons/action/code';

/* Actions */
import {set_menu_open} from '../actions';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Drawer open={this.props.menu_state}
                        onRequestChange={(open) => this.props.set_menu_open(!this.props.menu_state)}
                        width={150}
                        docked={false}
                >
                    <MenuItem onClick={() => {
                        this.props.history.push("/")
                    }} rightIcon={<Public />}>Main page</MenuItem>
                    <MenuItem onClick={() => {
                        this.props.history.push("/projects")
                    }} rightIcon={<Code />}>Projects</MenuItem>
                    <MenuItem onClick={() => {
                        this.props.history.push("/about")
                    }} rightIcon={<Info />}>About</MenuItem>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu_state: state.menu_state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        set_menu_open
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);