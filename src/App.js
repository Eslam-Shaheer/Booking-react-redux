import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import HotelsList from "./Pages/Properties/HotelsList";
import CampsList from "./Pages/Properties/CampgroundList";
import ApartmentsList from "./Pages/Properties/ApartmentsList";
import Post from "./Pages/Posts/Post";
import Example from "./component/Posts/PostStructure/PostStructure";
  


function App() {
   
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <HotelsList/> */}
    {/*   <CampsList/> */}
    {/* <ApartmentsList/> */}
      <Post/>
       <Footer />
     </div>
  );
}
export default App;
