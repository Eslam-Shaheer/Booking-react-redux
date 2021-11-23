import { combineReducers } from "redux";
import apartmentReducer from "./reducers/apartment";
import hotelReducer from "./reducers/hotel";
import campGroundReducer from "./reducers/campground";
import userReducer from "./reducers/user";
import imagesReducer from "./reducers/images";
<<<<<<< HEAD
=======
import propertysFilter from "./reducers/PopsFilter";




>>>>>>> 6a8ef6a4953b2696296adc1e714c7608088062b0
const rootReducer = combineReducers({
  hotel: hotelReducer,
  apartment: apartmentReducer,
  campGround:campGroundReducer,
  user: userReducer,
  images: imagesReducer,
  reviewSorting:propertysFilter,

});

export default rootReducer;
