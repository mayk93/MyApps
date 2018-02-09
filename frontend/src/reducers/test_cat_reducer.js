/**
 * Created by michael on 09/02/2018.
 */


// CAT_FETCH_SUCCEEDED
// CAT_FETCH_FAILED

export default function (state=false, action) {
    switch (action.type) {
        case "CAT_FETCH_SUCCEEDED":
            console.log('The cat has been retrieved');
            return "The cat has been retrieved";
        case "CAT_FETCH_FAILED":
            console.log('No cat for you mister');
            return "No cat for you mister";
        case "CAT_FETCH_REQUESTED":
            console.log('In the process of obtaining a cat');
            return "In the process of obtaining a cat";
        default:
            return state;
    }
}