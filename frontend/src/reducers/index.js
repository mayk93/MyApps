/**
 * Created by michael on 07/02/2018.
 */

/* Reducers */
import menu_state_reducer from './reducer_menu_state';
import cat_image_reducer from './reducer_cat_image';

const root_reducer = {
    menu_state: menu_state_reducer,
    cat_image: cat_image_reducer
};

export default root_reducer;