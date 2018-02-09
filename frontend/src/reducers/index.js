/**
 * Created by michael on 07/02/2018.
 */

/* Reducers */
import menu_state_reducer from './reducer_menu_state';
import cat_reducer from './test_cat_reducer';

const root_reducer = {
    menu_state: menu_state_reducer,
    cat: cat_reducer
};

export default root_reducer;