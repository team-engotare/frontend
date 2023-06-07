import React,{useState} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import Records from './components/Records';
import Statistics from './components/Statistics';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
      <div className="App">
        <Header/>
        <Sidebar onOptionClick={handleOptionClick}/>
      
        <div style={{ marginTop: '20px' }}>
        {selectedOption === 'Dashboard' && <Dashboard />}
        {selectedOption === 'Gallery' && <Gallery/>}
        {selectedOption === 'Records' && <Records />}
        {selectedOption === 'Statistics' && <Statistics/>}

      </div>
        
      </div>
  );
}

export default App;
