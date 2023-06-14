// import React ,{useState}from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Gallery from './components/Gallery';
// import Records from './components/Records';
// import Statistics from './components/Statistics';
// function App() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };
//   return (
//     <Router>
//     <div className="App">
//       <Header />
//       <Sidebar onOptionClick={handleOptionClick} />
//       <div style={{ marginTop: '20px' }}>
//         <Routes>
//           <Route path="/" exact component={Dashboard} />
//           <Route path="/gallery" component={Gallery} />
//           <Route path="/records" component={Records} />
//           <Route path="/statistics" component={Statistics} />
//         </Routes>
//       </div>
//     </div>
//   </Router>
//   );
// }
// export default App;
"use strict";