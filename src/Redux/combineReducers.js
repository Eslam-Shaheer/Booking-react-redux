import { combineReducers } from "redux";
import hotelReducer from "./reducers/hotel";
import imagesReducer from "./reducers/images";
const rootReducer = combineReducers({
  hotel: hotelReducer,
  images: imagesReducer,
});

export default rootReducer;
