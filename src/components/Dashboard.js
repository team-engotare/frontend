import React from "react";
import { styled } from '@mui/system';
import { Typography, Button, Card } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, Label, LineChart, Line } from 'recharts';
import LionIcon from '../components/images/lionn.svg';
import CountUp from "react-countup";



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

const StyledH1 = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '89px',
  marginLeft: '273px',
  fontSize: '30px',
  fontFamily: 'cursive',
});
const StyledH2 = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '29px',
  marginLeft: '273px',
  fontSize: '24px',
  fontFamily: 'cursive',
});

const StyledButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '443px',
  backgroundColor: '#8E5315',
  width: '382px',
  paddingTop: '8px',
  paddingBottom: '6px',
  paddingRight: '1px',
  paddingLeft: '1px',
  marginTop: '35px',
  marginBottom: '25px',
  textAlign: 'center',
  color: 'white',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: 'darkbrown',
  },
});

const StyledArrowCircleUpIcon = styled(ArrowCircleUpIcon)({
  color: 'white',
  boxShadow: '0 0 0 2px darkbrown',
  borderRadius: '50%',
});

const StyledBarChart = styled(BarChart)({
  marginTop: '75px',
});

const StyledCard = styled(Card)({
  backgroundColor: 'white',
  marginTop: '20px',
  marginLeft: '272px',
  padding: '20px',
});

const StyledLionCard = styled(Card)({
  backgroundColor: 'white',
  marginTop: '20px',
  width: '270px',
  marginLeft: '20px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center', // Align items to the center
});

const LionSvgIcon = styled('img')({
  width: '50px', // Adjust the size as needed
  height: '50px', // Adjust the size as needed
  marginRight: '10px', // Add margin to separate the icon from text
  marginTop: '-30px',
  fill: '#DF8530'

});




const LionCount = styled(CountUp)({
  fontSize: "36px",
  color: "#8E5315",
  textAlign: "center",
});





const Dashboard = () => {
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const pieChartData = [
    { name: 'Male', value: 75 },
    { name: 'Female', value: 25 },
  ];

  const StyledPieCard = styled(Card)({
    backgroundColor: 'white',
    marginTop: '20px',
    width: '400px',
    marginLeft: '235px', // Adjusted marginLeft value
    padding: '20px',
  });

  const StyledPieChart = styled(PieChart)({
    marginTop: '20px',
    width: '350px',
    height: '350px',
  });

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <StyledH1 variant="h1">Dashboard</StyledH1>
      <StyledH2 variant="h2">Lions Identified</StyledH2>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft:'202px' }}>
        {lionData.map((lion, index) => (
          <StyledLionCard key={index}>
            <LionSvgIcon src={LionIcon} alt="Lion Icon" />
            <div>
              <Typography variant="h6" align="left" style={{ margin: '0' }}>
                {lion.category}
              </Typography>
              <LionCount start={0} end={lion.count} duration={2} separator="," />
            </div>
          </StyledLionCard>
        ))}
      </div>


      <StyledButton
        variant="contained"
        color="primary"
        startIcon={<StyledArrowCircleUpIcon style={{ fontSize: 60 }} />}
        onClick={handleButtonClick}
      >
        Upload Images for Identification
      </StyledButton>

       <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />


      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <StyledPieCard>
          <Typography variant="h6" align="center" style={{ marginBottom: '10px',color: '#6A3E10' }}>
            Gender Distribution
          </Typography>
          <StyledPieChart width={350} height={250}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={renderCustomizedLabel}
            >
              {
                pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#DF8530' :'#EDDDCC'} />
                ))
              }
              <Label
                position="outside"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
                content={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              />
            </Pie>
            <Tooltip />
          </StyledPieChart>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: '#DF8530', marginRight: '5px' }}></div>
              <Typography variant="subtitle1">Male</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: '#EDDDCC', marginRight: '5px' }}></div>
              <Typography variant="subtitle1">Female</Typography>
            </div>
          </div>
        </StyledPieCard>

        <StyledCard style={{ marginLeft: '50px', width:'450px', }}>
          <Typography variant="h6" align="left" style={{ marginBottom: '10px',color: '#6A3E10'}}>
            Model Performance
          </Typography>

          <LineChart width={450} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" label={{ value: 'Size of Data', position: 'insideBottom', offset: -3 }} />
            <YAxis
              label={{
                value: 'Accuracy',
                angle: -90,
                position: 'insideLeft',
                offset: 10
              }}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </StyledCard>
      </div>

      <StyledCard style={{ marginTop: '50px', width: '940px', height: '500px' }}>
        <Typography variant="h6" align="left" style={{ marginBottom: '-30px',color: '#6A3E10' }}>
          Age Distribution
        </Typography>

        <StyledBarChart width={890} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: 'Age at Onset (Years)', position: 'insideBottom', offset: -3 }} />
          <YAxis
            label={{
              value: 'Number of Lions',
              angle: -90,
              position: 'insideLeft',
              offset: 10
            }}
            ticks={[0, 5, 10, 15, 20, 25, 30]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF7F00" barSize={20} />
        </StyledBarChart>
      </StyledCard>
    </div>
  );
};

export default Dashboard;