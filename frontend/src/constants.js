/**
 * Created by michael on 07/02/2018.
 */

export const NARROW_SCREEN_WIDTH = 800;
export const loading = "loading";
export const failed = "failed";
export const no_action = "no_action";

export const server_url = (
    process.env.NODE_ENV === 'production' ?
      'https://myapps.gallery:8000/api/myapps'
      :
      'http://localhost:8000/api/myapps'
);
export const cat_route = "cat_api";
