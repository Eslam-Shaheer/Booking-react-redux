import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import HotelsList from "./Pages/Properties/HotelsList";
import CampsList from "./Pages/Properties/CampgroundList";
import ApartmentsList from "./Pages/Properties/ApartmentsList";
import Post from "./Pages/Posts/Post";

import HotelPage from "./Pages/HotelPage/HotelPage";
import ApartmentPage from "./Pages/ApartmentComponents/ApartmentPage";
import Campground from "./Pages/CampgroundPage/Campground";
import UserDashboard from "./Pages/UserDashBoard/UserDashboard";
<<<<<<< HEAD
 
 

=======
import { Route, Routes } from "react-router-dom";
>>>>>>> a4a18c0439d2deb35400e4cf6ea90a4832494c03
function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      {/* <Home /> */}
      {/* <HotelsList/>   */}
      {/* <CampsList/> */}
      {/* <ApartmentsList/>  */}
      {/* <Post />  
      <UserDashboard/> */}
      {/* <HotelPage />   */}
 <ApartmentPage />  
      {/* <Campground /> */}
      
=======
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
      </Routes>
>>>>>>> a4a18c0439d2deb35400e4cf6ea90a4832494c03
      <Footer />
    </div>
  );
}
export default App;
