  import React from "react";
  import { styled } from '@mui/system';
  import { Typography,Button } from '@mui/material';
  import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

  const StyledH1 = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'89px',
    marginLeft:'293px',
    fontSize:'30px',
    fontFamily:'cursive'
  });
  const StyledH2 = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'29px',
    marginLeft:'293px',
    fontSize:'24px',
    fontFamily:'cursive'
  });

    const StyledButton = styled(Button)({
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:'443px',
      backgroundColor: '#8E5315',
      width: '382px',
      paddingTop:'8px',
      paddingBottom:'6px',
      paddingRight:'1px',
      paddingLeft:'1px',
      marginTop:'158px',
      textAlign: 'center',
      color: 'white',
      whiteSpace: 'nowrap', 
      '&:hover': {
          backgroundColor: 'darkbrown'
      }
  });
  const StyledArrowCircleUpIcon = styled(ArrowCircleUpIcon)({
    color: 'white',
    boxShadow: '0 0 0 2px darkbrown', // Adjust the "2px" value to make the outline thicker or thinner
    borderRadius: '50%', // Makes the boxShadow circular
  }); 

  const Dashboard = () => {

    const fileInputRef = React.useRef(null);

    const handleButtonClick = () => {
        // Trigger the file input click event
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file.name);
            // TODO: Handle the file upload logic here
        }
    };

 
    
    return (
      <div>
        <StyledH1 variant="h1">Data</StyledH1>
        <StyledH2 variant="h2">Lions Identified</StyledH2>

        <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
              />

              {/* Material-UI button that triggers the hidden file input */}
              <StyledButton 
                variant="contained" 
                color="primary" 
                startIcon={<StyledArrowCircleUpIcon style={{ fontSize: 60 }} />} 
                onClick={handleButtonClick}
                
                >
                  Upload Images for Identification
              </StyledButton>

      </div>
      
    );
  };

  export default Dashboard;
