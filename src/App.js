    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Header from './components/Header';
    import Sidebar from './components/Sidebar';
    import Dashboard from './components/Dashboard';
    import Gallery from './components/Gallery';
    import Records from './components/Records';
    import Statistics from './components/Statistics';
    import EngonyanaImagePage from './components/EngonyanaImagePage';
    import MarshImagePage from './components/MarshImagePage';

    
    function App() {
      return (
        <Router>
          <div className="App">
            <Header />
            <Sidebar />
      
            <div style={{ marginTop: '20px' }}>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/records" element={<Records />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/imagepage" element={<EngonyanaImagePage />} />
                <Route path="/imagepage2" element={<MarshImagePage />} />


              </Routes>
            </div>
          </div>
        </Router>
      );
    }
    
    export default App;
    