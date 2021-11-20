import { combineReducers } from "redux";
import hotelReducer from "./reducers/hotel";
import campGroundReducer from "./reducers/campground";

const rootReducer = combineReducers({
  hotel: hotelReducer,
  campGround:campGroundReducer,
});

export default rootReducer;
