import { combineReducers } from "redux";
import apartmentReducer from "./reducers/apartment";
import hotelReducer from "./reducers/hotel";
import campGroundReducer from "./reducers/campground";


const rootReducer = combineReducers({
  hotel: hotelReducer,
  apartment: apartmentReducer,
  campGround:campGroundReducer,
  user: userReducer,
});

export default rootReducer;
