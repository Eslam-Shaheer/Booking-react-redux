import { axiosInstance } from "../network";

export const getHotels = () => (dispatch) => {
  return axiosInstance.get("hotel").then((result) => {
    dispatch({ type: "GET_HOTELS", payload: result.data });
  });
};

export const getHotelById = (hotelId) => (dispatch) => {
  return axiosInstance.get("hotel/" + hotelId).then((result) => {
    dispatch({ type: "GET_HOTEL_BY_ID", payload: result.data });
  });
};
