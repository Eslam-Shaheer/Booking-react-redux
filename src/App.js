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
<<<<<<< HEAD
      {/* <HotelsList/> */}
    {/*   <CampsList/> */}
    {/* <ApartmentsList/> */}
      <Post/>
       <Footer />
=======
      <HotelsList/>
      {/* <CampsList/> */}
     {/* <ApartmentsList/>  */}
      <Footer />
>>>>>>> 9253646f7b31983b9d0189a92b9bfc1af46fc58b
     </div>
  );
}
export default App;
