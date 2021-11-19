import { combineReducers } from "redux";
import apartmentReducer from "./reducers/apartment";
import hotelReducer from "./reducers/hotel";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  hotel: hotelReducer,
  apartment: apartmentReducer,
  user: userReducer,
});

export default rootReducer;
