  import React,{ useState } from "react";
  import { TextField, InputAdornment, IconButton,Button } from "@mui/material";
  import { Search, EditNote,ChevronRight } from "@mui/icons-material";
  import { styled } from "@mui/system";
  import { Card, CardContent, CardMedia, Typography } from "@mui/material";

  import Eselenkei from "../components/images/Engonyanai Pride/card_image_one.png";
  import Eselenkei_2 from "../components/images/Engonyanai Pride/card_image_two.png";
  import Eselenkei_3 from "../components/images/Engonyanai Pride/card_image_three.png";
  import Eselenkei_4 from "../components/images/Engonyanai Pride/card_image_four.png";
  import Eselenkei_5 from '../components/images/Engonyanai Pride/card_image_five.png';
  import Eselenkei_6 from '../components/images/Engonyanai Pride/card_image_six.png';
  import Eselenkei_7 from '../components/images/Engonyanai Pride/card_image_seven.png';
  import Eselenkei_8 from '../components/images/Engonyanai Pride/card_image_eight.png';


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
    const [showAllCards, setShowAllCards] = useState(false);

    const handleSeeAllClick = () => {
      setShowAllCards(true);
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

          {cardData.slice(0, showAllCards ? cardData.length : 4).map((card, index) => (

            <StyledCard key={index}>
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
          ))}


        {cardData.slice(4, showAllCards ? cardData.length : 8).map((card, index) => (
            <StyledCard key={index}>
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
          ))}

          </div>
          {!showAllCards && (
        <SeeAllButton variant="outlined" onClick={handleSeeAllClick}>
          See All <ArrowIcon $color="#DF8530" $marginLeft="-3px" />{" "}
          <ArrowIcon $color="#8E5315" $marginLeft="-19px" />
        </SeeAllButton>
      )}
      
      </div>
    );
  };

  export default Gallery;
