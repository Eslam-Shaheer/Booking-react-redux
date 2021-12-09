import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import HotelsList from "./Pages/Properties/HotelsList";
import CampsList from "./Pages/Properties/CampgroundList";
import ApartmentsList from "./Pages/Properties/ApartmentsList";
import HotelsSearch from "./Pages/PropertiesSearch/HotelsList";
import CampsSearch from "./Pages/PropertiesSearch/CampgroundList";
import ApartmentsSearch from "./Pages/PropertiesSearch/ApartmentsList";
import Post from "./Pages/Posts/Post";
import HotelPage from "./Pages/HotelPage/HotelPage";
import HotelBooking from "./Pages/Checkout/hotelBooking";
import ApartmentPage from "./Pages/ApartmentComponents/ApartmentPage";
import Campground from "./Pages/CampgroundPage/Campground";
import UserDashboard from "./Pages/UserDashBoard/UserDashboard";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD

=======
import BestCoffee from "./component/articles/article1/BestCoffee";
import LasVegas from "./component/articles/article2/LasVegas";
import Yoga from "./component/articles/article3/Yoga";
import Destination from "./component/articles/article4/Destination";
import Unmissable from "./component/articles/article5/Unmissable";
>>>>>>> 7a85d35313d867b92527f6a9a5120e76abba157f
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/campgrounds/:id" element={<Campground />} />
        <Route path="/apartments/:id" element={<ApartmentPage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/campgrounds" element={<CampsList />} />
        <Route
          path="/search/apartments/:country/:city?"
          element={<ApartmentsSearch />}
        />
        <Route
          path="/search/hotels/:country/:city?"
          element={<HotelsSearch />}
        />
        <Route
          path="/search/campgrounds/:country/:city?"
          element={<CampsSearch />}
        />
        <Route path="/checkout" element={<HotelBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
