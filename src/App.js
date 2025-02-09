// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Gallery from "./components/Gallery";
// import Records from "./components/Records";
// import EngonyanaImagePage from "./components/EngonyanaImagePage";
// import MarshImagePage from "./components/MarshImagePage";
// import Statistics from "./components/Statistics"; 

// function App() {
//   const [navToDashboard, setNavToDashboard] = useState(true);
//   const [navToGallery, setNavToGallery] = useState(false);
//   const [navToRecords, setNavToRecords] = useState(false);
//   const [navToStatistics, setNavToStatistics] = useState(false); 
//   const handleNavToDashboard = () => {
//     console.log("Navigating to Dashboard");
//     setNavToDashboard((prevState) => !prevState);
//     setNavToGallery(false);
//     setNavToRecords(false);
//     setNavToStatistics(false); 
//   };

//   const handleNavToGallery = () => {
//     console.log("Navigating to Gallery");
//     setNavToDashboard(false);
//     setNavToGallery((prevState) => !prevState);
//     setNavToRecords(false);
//     setNavToStatistics(false);
//   };

//   const handleNavToRecords = () => {
//     console.log("Navigating to Records");
//     setNavToDashboard(false);
//     setNavToGallery(false);
//     setNavToRecords((prevState) => !prevState);
//     setNavToStatistics(false);
//   };

//   const handleNavToStatistics = () => { 
//     console.log("Navigating to Statistics");
//     setNavToDashboard(false);
//     setNavToGallery(false);
//     setNavToRecords(false);
//     setNavToStatistics((prevState) => !prevState);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Sidebar
//           setNavToDashboard={handleNavToDashboard}
//           setNavToGallery={handleNavToGallery}
//           setNavToRecords={handleNavToRecords}
//           setNavToStatistics={handleNavToStatistics} // ✅ Pass Statistics handler to Sidebar
//         />

//         <div style={{ marginTop: "20px" }}>
//           <Routes>
//             <Route path="/" exact element={<Dashboard />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/records" element={<Records />} />
//             <Route path="/imagepage" element={<EngonyanaImagePage />} />
//             <Route path="/imagepage2" element={<MarshImagePage />} />
//             <Route path="/statistics" element={<Statistics />} /> 
//           </Routes>

//           {navToDashboard && <Dashboard />}
//           {navToGallery && <Gallery />}
//           {navToRecords && <Records />}
//           {navToStatistics && <Statistics />} 
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import Records from "./components/Records";
import EngonyanaImagePage from "./components/EngonyanaImagePage";
import MarshImagePage from "./components/MarshImagePage";
import Statistics from "./components/Statistics"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/records" element={<Records />} />
            <Route path="/imagepage" element={<EngonyanaImagePage />} />
            <Route path="/imagepage2" element={<MarshImagePage />} />
            <Route path="/statistics" element={<Statistics />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
