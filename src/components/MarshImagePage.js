import React, { useState } from "react";
import {
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";
import { AddCircleOutlined, Search, ChevronLeftOutlined } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory


import Profile_1 from '../components/images/Engonyanai Pride/Profile/profile_5.png';
import Eyes_1 from '../components/images/Engonyanai Pride/Eyes/eyes_1.png';
import Teeth_1 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_3.png';
import Whiskers_1 from '../components/images/Engonyanai Pride/Whiskers/whis_4.png';
import Ears_1 from '../components/images/Engonyanai Pride/Ears/ear_4.png';
import Body_1 from '../components/images/Engonyanai Pride/Body/body_4.png';

import Profile_2 from '../components/images/Engonyanai Pride/Profile/profile_2.png';
import Profile_3 from '../components/images/Engonyanai Pride/Profile/profile_3.png';
import Profile_4 from '../components/images/Engonyanai Pride/Profile/profile_4.png';
import Profile_5 from '../components/images/Engonyanai Pride/Profile/profile_5.png';
import Profile_6 from '../components/images/Engonyanai Pride/Profile/profile_6.png';

import Eyes_2 from '../components/images/Engonyanai Pride/Eyes/eyes_2.png';
import Eyes_3 from '../components/images/Engonyanai Pride/Eyes/eyes_3.png';
import Eyes_4 from '../components/images/Engonyanai Pride/Eyes/eyes_4.png';
import Eyes_5 from '../components/images/Engonyanai Pride/Eyes/eyes_5.png';
import Eyes_6 from '../components/images/Engonyanai Pride/Eyes/eyes_6.png';

import Teeth_2 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_2.png';
import Teeth_3 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_3.png';
import Teeth_4 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_4.png';
import Teeth_5 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_5.png';
import Teeth_6 from '../components/images/Engonyanai Pride/Teeth and Nose/teeth_6.png';

import Whisker_2 from '../components/images/Engonyanai Pride/Whiskers/whis_2.png';
import Whisker_3 from '../components/images/Engonyanai Pride/Whiskers/whis_3.png';
import Whisker_4 from '../components/images/Engonyanai Pride/Whiskers/whis_4.png';
import Whisker_5 from '../components/images/Engonyanai Pride/Whiskers/whis_5.png';
import Whisker_6 from '../components/images/Engonyanai Pride/Whiskers/whis_6.png';

import Ears_2 from '../components/images/Engonyanai Pride/Ears/ear_2.png';
import Ears_3 from '../components/images/Engonyanai Pride/Ears/ear_3.png';
import Ears_4 from '../components/images/Engonyanai Pride/Ears/ear_4.png';
import Ears_5 from '../components/images/Engonyanai Pride/Ears/ear_5.png';
import Ears_6 from '../components/images/Engonyanai Pride/Ears/ear_6.png'
import Body_2 from '../components/images/Engonyanai Pride/Body/body_2.png';
import Body_3 from '../components/images/Engonyanai Pride/Body/body_3.png';
import Body_4 from '../components/images/Engonyanai Pride/Body/body_4.png';
import Body_5 from '../components/images/Engonyanai Pride/Body/body_5.png';
import Body_6 from '../components/images/Engonyanai Pride/Body/body_6.png';






const StyledSearchBar = styled(TextField)({
  marginLeft: "292px",
  marginTop: "4px",
  width: "438px",
});

const StyledH1 = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "89px",
  marginBottom: "20px",
  marginLeft: "293px",
  fontSize: "30px",
  fontFamily: "cursive",
});

const BackIconButton = styled(IconButton)({
  position: "absolute",
  marginLeft:'-43px',
  color: "black",

});

const StyledH2 = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "23px",
  marginBottom: "20px",
  marginLeft: "293px",
  fontSize: "20px",
  fontFamily: "cursive",
  fontWeight: "bold",
  color: "#8E5315",
});

const StyledCardContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft:'285px',
  marginTop:'50px'
});

const StyledCard = styled(Card)(({ selected }) => ({
  maxWidth: 195,
  margin: "0 10px",
  borderRadius: "10px",
  position: 'relative',
  transition: "box-shadow 0.3s",
  cursor: 'pointer',
  boxShadow: selected ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  outline: selected ? "6px solid #FF7F00" : "none",
  "&:hover": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    outline: selected ? "6px solid #FF7F00" : "none",
  },
}));



const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
});

const StyledCardContent = styled(CardContent)({
  position: "absolute",
  top: 105,
  left: 0,
  right: 0,
  color: "white",
  fontFamily: "cursive",
});

const Title = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily: "cursive",
});

const EditIconButton = styled(IconButton)({
  position: "absolute",
  top: "4px",
  right: "3px",
  color: "#fff",
});

const myData = [
  { image: Profile_1, title: "Profile" },
  { image: Eyes_1, title: "Eyes" },
  { image: Teeth_1, title: "Teeth &Nose" },
  { image: Whiskers_1, title: "Whiskerspots" },
  { image: Ears_1, title: "Ears" },
  { image: Body_1, title: "Body" },
];

const ImageContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginLeft: '285px', // Adjust the value as needed
  marginRight: '50px', // Adjust the value as needed
  marginTop: '50px', // Adjust the value as needed
});

const ImageItem = styled('div')({
  marginBottom: '40px', // Adjust the value as needed
  textAlign: 'center',
  flex: '0 0 33.33%', // Adjust the width of each image item
  maxWidth: '33.33%', // Adjust the width of each image item
});
const TitleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  marginTop:'20px',
  
});

const Line = styled('hr')({
  backgroundColor: "#FF7F00",
  height: "4px",
  border: "none",
  // flex: '1',
  marginLeft: '40px',
  width:'868px',
});

const MarshImagePage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };
  const renderImages = () => {
    if (selectedCard !== null) {
      const images = [
        [Profile_1, Profile_2, Profile_3, Profile_4, Profile_5, Profile_6], 
        [Teeth_1, Teeth_2, Teeth_3, Teeth_4, Teeth_5, Teeth_6], 

        [Eyes_1, Eyes_2, Eyes_3, Eyes_4, Eyes_5, Eyes_6], 
        [Whiskers_1, Whisker_2, Whisker_3, Whisker_4, Whisker_5, Whisker_6], 
        [Ears_1, Ears_2, Ears_3, Ears_4, Ears_5, Ears_6], 
        [Body_1, Body_2, Body_3, Body_4, Body_5, Body_6], 




        // Profile images
        // Add more image arrays for other categories if needed
      ];
      const cardTitle = myData[selectedCard].title;

      return (
        <div>
          <TitleContainer>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              marginLeft={36}
              fontSize={23}
              marginTop={1}
              color={'#FF7F00'}
              fontFamily={'cursive'}
            >
              {cardTitle}
            </Typography>
            <Line />
          </TitleContainer>

          <ImageContainer>
            {images[selectedCard].map((image, index) => {
              const altText = `Photo ${index + 1}`;
              return (
                <ImageItem key={index}>
                  <img
                    src={image}
                    alt={altText}
                    style={{ height: 'auto', maxWidth: '100%' }}
                  />
                </ImageItem>
              );
            })}
          </ImageContainer>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
    <StyledH1 variant="h1">
        <BackIconButton onClick={handleBackClick}>
          <ChevronLeftOutlined />
        </BackIconButton>
        Existing Lions Gallery
      </StyledH1>

      <StyledSearchBar
        id="search"
        label="Search "
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <StyledH2 variant="h2">Liona Images</StyledH2>

      <StyledCardContainer>
        {myData.map((card, index) => (
          <StyledCard
            key={index}
            onClick={() => handleCardClick(index)}
            selected={selectedCard === index}
          >
            <StyledCardMedia component="img" image={card.image} alt="Image" />
            <StyledCardContent>
              <Title variant="h1">{card.title}</Title>
              <EditIconButton>
                <AddCircleOutlined />
              </EditIconButton>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledCardContainer>

      {renderImages()}
    </div>
  );
};

export default MarshImagePage;
