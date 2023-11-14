import React,{ useState } from "react";
import { TextField, InputAdornment, IconButton,Button } from "@mui/material";
import { Search, EditNote,ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";


import Eselenkei from "../components/images/Engonyanai Pride/card_image_one.png";
import Eselenkei_2 from "../components/images/Engonyanai Pride/card_image_two.png";
import Eselenkei_3 from "../components/images/Engonyanai Pride/card_image_three.png";
import Eselenkei_4 from "../components/images/Engonyanai Pride/card_image_four.png";
import Eselenkei_5 from '../components/images/Engonyanai Pride/card_image_five.png';
import Eselenkei_6 from '../components/images/Engonyanai Pride/card_image_six.png';
import Eselenkei_7 from '../components/images/Engonyanai Pride/card_image_seven.png';
import Eselenkei_8 from '../components/images/Engonyanai Pride/card_image_eight.png';

import Liona from '../components/images/Marsh Pride/liona_1.png';
import Liona_2 from '../components/images/Marsh Pride/liona_2.png';
import Liona_3 from '../components/images/Marsh Pride/liona_3.png';
import Liona_4 from '../components/images/Marsh Pride/liona_4.png';
import Liona_5 from '../components/images/Marsh Pride/liona_5.png';
import Liona_6 from '../components/images/Marsh Pride/liona_6.png';
import Liona_7 from '../components/images/Marsh Pride/liona_7.png';
import Liona_8 from '../components/images/Marsh Pride/liona_8.png';




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

const StyledH2 = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop:'23px',
  marginBottom: "20px",
  marginLeft: "293px",
  fontSize: "20px",
  fontFamily: "cursive",
  color: "#8E5315",
});

const StyledCard = styled(Card)({
  maxWidth: 217,
  height: 231,
  borderRadius: 11,
  border: "none",
  margin: 0,
  marginTop: "20px",
  boxShadow: "none",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  outline: "none", // Remove outline here
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "150%",
  borderRadius: "10px",
});

const StyledCardContent = styled(CardContent)({
  position: "relative",
  overflow: "hidden",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 15,
  right: 15,
  width: "86%",
  height: "29.5%",
  backgroundColor: "rgba(223, 133, 48, 0.6)",
  borderRadius: "7px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "128.5px",
});

const Title = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  paddingLeft: "30px",
  paddingTop: "12px",
  color: "white",
  fontFamily: "cursive",
});

const Description = styled(Typography)({
  fontSize: "14px",
  paddingLeft: "30px",
  color: "white",
  fontFamily: "cursive",
});

const EditIconButton = styled(IconButton)({
  position: "absolute",
  top: "15px",
  right: "5px",
  color: "#fff",
});


const SeeAllButton = styled(Button)({
  position: "absolute",
  top: "215px",
  right: "91px",
  color: "#8E5315",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
  backgroundColor: "transparent",
});

const ArrowIcon = styled(ChevronRight)(({ $color,$marginLeft }) => ({
  margin:0,
  marginLeft: $marginLeft ,
  color: $color,
}));


const Gallery = () => {


  const cardData = [
    { image: Eselenkei, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_2, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_3, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_4, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_5, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_6, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_7, title: "Eselenkei", description: "23 years old" },
    { image: Eselenkei_8, title: "Eselenkei", description: "23 years old" },

    // Add more card data here
  ];

  const marshPrideCardData = [
    { image: Liona, title: "Liona", description: "24 years old" },
    { image: Liona_2, title: "Liona", description: "24 years old" },
    { image: Liona_3, title: "Liona", description: "24 years old" },
    { image: Liona_4, title: "Liona", description: "24 years old" },
    { image: Liona_5, title: "Liona", description: "24 years old" },
    { image: Liona_6, title: "Liona", description: "24 years old" },
    { image: Liona_7, title: "Liona", description: "24 years old" },
    { image: Liona_8, title: "Liona", description: "24 years old" },

    // Add more card data here
  ];

  const [showAllEngonyanaCards, setShowAllEngonyanaCards] = useState(false);
  const [showAllMarshPrideCards, setShowAllMarshPrideCards] = useState(false);

  const handleEngonyanaSeeAllClick = () => {
    setShowAllEngonyanaCards(true);
  };

  const handleMarshPrideSeeAllClick = () => {
    setShowAllMarshPrideCards(true);
  };

  const handleCardClick = (event, path) => {
    event.preventDefault();
    // Handle card click logic, e.g., navigate programmatically
    window.location.href = path;
  };

  return (
    <div>
      <StyledH1 variant="h1">Existing Lions Gallery</StyledH1>

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

      <StyledH2 variant="h2">Engonyana Pride</StyledH2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "320px",
          marginTop: "-20px",
          // flexDirection: "column"
        }}
      >
{cardData.slice(0, showAllEngonyanaCards ? cardData.length : 4).map((card, index) => (
   <Link to="/imagepage" key={index}>
   <StyledCard onClick={() => handleCardClick("/imagepage")}>
            <StyledCardContent>
              <StyledCardMedia component="img" alt="Image" image={card.image} />
              <Overlay>
                <Title variant="h5">{card.title}</Title>
                <Description variant="body1">{card.description}</Description>
                <EditIconButton>
                  <EditNote />
                </EditIconButton>
              </Overlay>
            </StyledCardContent>


          </StyledCard>
          </Link>


        ))}


{cardData.slice(4, showAllEngonyanaCards ? cardData.length : 8).map((card, index) => (
 <Link to="/imagepage" key={index}>
 <StyledCard onClick={() => handleCardClick("/imagepage")}>
          <StyledCardContent>
              <StyledCardMedia component="img" alt="Image" image={card.image} />
              <Overlay>
                <Title variant="h5">{card.title}</Title>
                <Description variant="body1">{card.description}</Description>
                <EditIconButton>
                  <EditNote />
                </EditIconButton>
              </Overlay>
            </StyledCardContent>
          </StyledCard>
          </Link>
        ))}

        </div>
       {!showAllEngonyanaCards && (
      <SeeAllButton variant="outlined" onClick={handleEngonyanaSeeAllClick} style={{ marginTop: "20px" }}>
        See All <ArrowIcon $color="#DF8530" $marginLeft="-3px" />{" "}
        <ArrowIcon $color="#8E5315" $marginLeft="-19px" />
      </SeeAllButton>
    )}


    <StyledH2 variant="h2">Marsh Pride</StyledH2>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "320px",
    marginTop: "-20px",
    // flexDirection: "column"
  }}
>

        {marshPrideCardData.slice(0, showAllMarshPrideCards ? marshPrideCardData.length : 4).map((card, index) => (
           <Link to="/imagepage2" key={index}>

          <StyledCard onClick={() => handleCardClick("/imagepage2")}>

    <StyledCardContent>
      <StyledCardMedia component="img" alt="Image" image={card.image} />
      <Overlay>
        <Title variant="h5">{card.title}</Title>
        <Description variant="body1">{card.description}</Description>
        <EditIconButton>
          <EditNote />
        </EditIconButton>
      </Overlay>
    </StyledCardContent>

  </StyledCard>
  </Link>

))}


{marshPrideCardData.slice(4, showAllMarshPrideCards ? marshPrideCardData.length : 8).map((card, index) => (
    <Link to="/imagepage2" key={index}>

  <StyledCard onClick={() => handleCardClick("/imagepage2")}>
  <StyledCardContent>
      <StyledCardMedia component="img" alt="Image" image={card.image} />
      <Overlay>
        <Title variant="h5">{card.title}</Title>
        <Description variant="body1">{card.description}</Description>
        <EditIconButton>
          <EditNote />
        </EditIconButton>
      </Overlay>
    </StyledCardContent>

  </StyledCard>
  </Link>
))}

</div>

{!showAllMarshPrideCards && (
      <SeeAllButton variant="outlined" onClick={handleMarshPrideSeeAllClick} style={{ marginTop: "560px" }}>
        See All <ArrowIcon $color="#DF8530" $marginLeft="-3px" />{" "}
        <ArrowIcon $color="#8E5315" $marginLeft="-19px" />
      </SeeAllButton>
    )}

    </div>
  );
};

export default Gallery; 