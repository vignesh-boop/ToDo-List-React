import { Box, Button, styled, Typography } from "@mui/material";


export const EligibilityContainer = styled(Box)({
    
display:"flex",
gap:"20px",
flexWrap:"wrap",
justifyContent:"center",
padding:"20px",
width:'100%',

});


export const EligibilityCard = styled(Box)({
backgroundColor: "#ffffff",
   boxShadow: 'black 0px 2px 2px 0px',
borderRadius: "8px",
marginTop: "5px",
padding: "10px",
display: "flex",
flexDirection: "column",
gap: "5px",
maxWidth: "450px",
cursor: "pointer",

});


export const EligibilityImage = styled("img")({
height: "100px",
width: "100px",
borderRadius: "50%",
});


export const EligibilityLabel = styled(Typography) ({
fontSize: "16px",
fontWeight: '600px',
"& span": {
fontSize:"18px",
fontWeight:"bold",

},
});


export const CardWrapper =styled(Box)({ 
display: "flex", 
gap: "10px",
alignItems: "center",
fontSize: "18px",
fontweight:'600px',
});

export const EligibilityTitle = styled(Typography)({
textAlign: "center",
marginTop: "10px",
fontsize: "20px",
fontweight:"600px",
});


export const AcceptButton = styled(Button)({
padding: "10px",
borderRadius: "5px",
fontsize: "1rem",
cursor: "pointer",
minwidth: "90px",
color: "#FFF",
backgroundColor: "#14bc7d",
marginTop: "10px",
"&:hover": {
backgroundColor: "0fa869",
},
});

export const Buttonwrap = styled(Box)({
display: "flex",
justifyContent: "center",
});