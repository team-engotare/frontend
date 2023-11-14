import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import Records from "./components/Records";
// import EngonyanaImagePage from "./components/EngonyanaImagePage";
// import MarshImagePage from "./components/MarshImagePage";

function App() {
  const [navToDashboard, setNavToDashboard] = useState(true);
  const [navToGallery, setNavToGallery] = useState(false);
  const [navToRecords, setNavToRecords] = useState(false);

  const handleNavToDashboard = () => {
    console.log("Navigating to Dashboard");
    setNavToDashboard((prevState) => !prevState);
    setNavToGallery(false);
    setNavToRecords(false);
  };

  const handleNavToGallery = () => {
    console.log("Navigating to Gallery");
    setNavToDashboard(false);
    setNavToGallery((prevState) => !prevState);
    setNavToRecords(false);
  };

  const handleNavToRecords = () => {
    console.log("Navigating to Records");
    setNavToDashboard(false);
    setNavToGallery(false);
    setNavToRecords((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar
          setNavToDashboard={handleNavToDashboard}
          setNavToGallery={handleNavToGallery}
          setNavToRecords={handleNavToRecords}
        />

        <div style={{ marginTop: "20px" }}>
          {/* <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/records" element={<Records />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/imagepage" element={<EngonyanaImagePage />} />
            <Route path="/imagepage2" element={<MarshImagePage />} />
          </Routes> */}

          {/* START OF UPDATE */}
          {navToDashboard && <Dashboard />}
          {navToGallery && <Gallery />}
          {navToRecords && <Records />}
          {/* END OF UPDATE */}
        </div>
      </div>
    </Router>
  );
}

export default App;
