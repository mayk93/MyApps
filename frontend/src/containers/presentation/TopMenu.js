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
import Menu from 'material-ui/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/FloatingActionButton';

/* Actions */
import {set_menu_open} from '@/actions';

class TopMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <FloatingActionButton mini={true}
                                      onClick={() => {this.props.set_menu_open(!this.props.menu_state)}}
                                      backgroundColor="gray"
                >
                    <Menu />
                </FloatingActionButton>
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


export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);