/**
 * Created by michael on 07/02/2018.
 */

/* ToDo: Delete when no longer useful */
// <img src="http://thecatapi.com/api/images/get?format=src&type=gif">
// http://thecatapi.com/api/images/get?format=src&type=gif
// "http://thecatapi.com/api/images/get.php";
// export const cat_url = "http://thecatapi.com/api/images/get?format=src&type=gif";

export const NARROW_SCREEN_WIDTH = 800;
export const loading = "loading";
export const failed = "failed";
export const no_action = "no_action";

export const server_url = (
    process.env.NODE_ENV === 'production' ? 'https://myapps.gallery:8080' : 'http://localhost:8080'
);
export const cat_route = "cat_api";