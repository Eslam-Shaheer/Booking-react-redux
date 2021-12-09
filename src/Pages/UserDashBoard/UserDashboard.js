import React, { useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Profile from "../../component/UserDashBoard/Profile";
import Bookings from "../../component/UserDashBoard/Bookings";
 import Reviews from "../../component/UserDashBoard/Reviews";
import Community from "../../component/UserDashBoard/Community";
import "./style.css";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";






// function TabPanel(props) {
//   // const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }







export default function UserDashboard() {
  //  const [value, setValue] = React.useState(0);

  //  const handleChange = (event, newValue) => {
  //    setValue(newValue);
  //  };

  useEffect(() => {
 
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: "instant",
     });
  }, []);

  return (
    <>
      <div className="color ">
        <div className="container bg-white py-3  ">
          <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
            <Tab eventKey="Profile" title="Profile">
              <Profile />
            </Tab>
            <Tab eventKey="Bookings" title="Bookings">
              <Bookings />
            </Tab>
            
            <Tab eventKey="Reviews" title="Reviews">
              <Reviews />
            </Tab>
            <Tab eventKey="Community" title="Community">
              <Community />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto"
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Bookings" {...a11yProps(1)} />
          <Tab label="Messages" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
          <Tab label="Community" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Bookings />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Messages />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Reviews />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Community />
        </TabPanel>
      </Box> */}
    </>
  );
}
