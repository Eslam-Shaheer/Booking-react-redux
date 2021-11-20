import { combineReducers } from "redux";
import apartmentReducer from "./reducers/apartment";
import hotelReducer from "./reducers/hotel";
import campGroundReducer from "./reducers/campground";
import userReducer from "./reducers/user";
import imagesReducer from "./reducers/images";




const rootReducer = combineReducers({
  hotel: hotelReducer,
  apartment: apartmentReducer,
  campGround:campGroundReducer,
  user: userReducer,
  images: imagesReducer,

});

export default rootReducer;
