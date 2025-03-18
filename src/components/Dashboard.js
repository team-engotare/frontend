import React from "react";
import  { useRef, useState }  from 'react';
import { styled } from '@mui/system';
import { Typography, Button, Card, useMediaQuery } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import LionIcon from '../components/images/lionn.svg';
import CountUp from "react-countup";
import axios from 'axios';
import FeatureGrid from "./FeatureGrid"; 


// Sample Data
const data = [
  { age: 5, count: 10 },
  { age: 10, count: 15 },
  { age: 15, count: 22 },
  { age: 20, count: 17 },
  { age: 25, count: 12 },
  { age: 30, count: 8 },
];

const lionData = [
  { category: 'Male Lions', count: 1245 },
  { category: 'Female Lions', count: 930 },
  { category: 'Unidentified Lions', count: 295 },
];

const pieChartData = [
  { name: 'Male', value: 75 },
  { name: 'Female', value: 25 },
];

// **Styled Components**
const StyledContainer = styled('div')(({ isSmallScreen, isLargeScreen }) => ({
  padding: isSmallScreen ? '20px' : '40px',
  marginLeft: isLargeScreen ? '260px' : '0px', // Space for expanded sidebar on large screens
  transition: 'margin-left 0.3s ease',
}));

const StyledH1 = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
});

const StyledH2 = styled(Typography)({
  fontSize: '1.5rem',
  textAlign: 'center',
  color: '#6A3E10',
});

const StyledButton = styled(Button)({
  backgroundColor: '#8E5315',
  color: 'white',
  padding: '10px 20px',
  margin: '20px auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  maxWidth: '400px',
  '&:hover': {
    backgroundColor: '#703e10',
  },
});

const StyledCard = styled(Card)({
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
});

const LionSvgIcon = styled('img')({
  width: '50px',
  height: '50px',
  marginRight: '10px',
});

const LionCount = styled(CountUp)({
  fontSize: "1.8rem",
  color: "#8E5315",
});

const mockResponse = [
  { label: "Left Eye", path: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Left+Eye" },
  { label: "Right Eye", path: "https://images.unsplash.com/photo-1550699566-83f93df24072?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpb24lMjBleWVzfGVufDB8fDB8fHww?text=Right+Eye" },
  { label: "Nose", path: "https://plus.unsplash.com/premium_photo-1664303401706-675400190f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlvbiUyMHdoaXNrZXJzfGVufDB8fDB8fHww?text=Nose" },
  { label: "Teeth", path: "https://plus.unsplash.com/premium_photo-1664302706067-947bee391a58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpb24lMjB3aGlza2Vyc3xlbnwwfHwwfHx8MA%3D%3D?text=Teeth" },
];

// **Dashboard Component**
const Dashboard = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1200px)'); // Detects large screens
  const [ features, setFeatures ] =  useState([])
  const inputRef = useRef(null);

  const  handleFileUpload = async (e) =>  {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];
    const formData = new FormData();
    formData.append("image", file); 

    try {
      // const response = await axios.post(process.env.ML_API, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });



      // console.log("Upload successful:", response.data);
      setTimeout(() => { //using dummy data as an example of how results can look like
        console.log("Mock upload successful:", mockResponse);
        setFeatures(mockResponse);
      }, 1000); 
      // setFeatures(response.data.features);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  
    console.log(file);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    console.log('clicked');
    if (!inputRef || !inputRef.current) return;
    console.log("indine")
    inputRef.current.click();
  }

  return (
    <StyledContainer isSmallScreen={isSmallScreen} isLargeScreen={isLargeScreen}>
      <StyledH1 variant="h1">Dashboard</StyledH1>
      <StyledH2 variant="h2">Lions Identified</StyledH2>

      {/* Lion Data Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
      }}>
        {lionData.map((lion, index) => (
          <StyledCard key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '250px',
            textAlign: 'center',
          }}>
            <LionSvgIcon src={LionIcon} alt="Lion Icon" />
            <div>
              <Typography variant="h6">{lion.category}</Typography>
              <LionCount start={0} end={lion.count} duration={2} separator="," />
            </div>
          </StyledCard>
        ))}
      </div>

      {/* Upload Button */}
      <StyledButton
        variant="contained"
        startIcon={<ArrowCircleUpIcon style={{ fontSize: 40 }}   />}
        onClick={handleButtonClick}>
        Upload Images for Identification
      </StyledButton>
      <input ref={inputRef} type='file' hidden onChange={handleFileUpload} />
     
     {/* {display the results} */}
     {features.length > 0 && <FeatureGrid features={features} />}
      {/* Graphs Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
        gap: '20px',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        {/* Pie Chart Card */}
        <StyledCard>
          <Typography variant="h6" align="center" style={{ color: '#6A3E10' }}>
            Gender Distribution
          </Typography>
          <PieChart width={isSmallScreen ? 300 : 350} height={isSmallScreen ? 250 : 300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={isSmallScreen ? 80 : 100}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#DF8530' : '#EDDDCC'} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </StyledCard>

        {/* Line Chart Card */}
        <StyledCard>
          <Typography variant="h6" align="center" style={{ color: '#6A3E10' }}>
            Model Performance
          </Typography>
          <LineChart width={isSmallScreen ? 300 : 450} height={isSmallScreen ? 250 : 300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </StyledCard>
      </div>

      {/* Bar Chart */}
      <StyledCard style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
        <Typography variant="h6" align="center" style={{ color: '#6A3E10' }}>
          Age Distribution
        </Typography>
        <BarChart width={isSmallScreen ? 350 : 800} height={isSmallScreen ? 250 : 400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF7F00" barSize={isSmallScreen ? 15 : 20} />
        </BarChart>
      </StyledCard>
    </StyledContainer>
  );
};

export default Dashboard;
