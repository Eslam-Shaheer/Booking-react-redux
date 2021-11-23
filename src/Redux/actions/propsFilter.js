import { axiosInstance } from "../network";

export const getTopRev = (property) => (dispatch) => {
    console.log(property,"rrrr")
  return axiosInstance.get('filter/'+property+'/'+'avgReviews/dec').then((result) => {
    dispatch({ type: "GET_TOP_REVIEWS", payload: result.data });
  });
};


export const getTopStars = (property) => (dispatch) => {
    console.log(property,"rrrr")
  return axiosInstance.get('filter/'+property+'/'+'starRating/dec').then((result) => {
    dispatch({ type: "GET_TOP_STARS", payload: result.data });
  });
};

export const getLowStars = (property) => (dispatch) => {
    console.log(property,"rrrr")
  return axiosInstance.get('filter/'+property+'/'+'starRating/asc').then((result) => {
    dispatch({ type: "GET_LOW_STARS", payload: result.data });
  });
};