import {Box, styled}from'@mui/material'


export const ProfileIcon = styled(Box)({
height: "45px",
width: "45px",
borderRadius: "50%",
cursor: "pointer",
border:'2px solid yellow',
backgroundColor:'yellow'
});
 
export const NavContainer = styled (Box)({
display: "flex",
justifyContent: "space-between",
alignItems: "center",
backgroundColor: "#112d4e",
color: '#fff',
padding: "8px",
});

export const LogoContainer = styled (Box)({
display: "flex",
gap: "5px",
alignItems: "center",
fontSize: "18px",
color: '#fff',
fontWeight: "bold",
});

export const Logo = styled("img")({
height: "40px",
width: "40px",
cursor: 'pointer'
});

export const PathSpan =  styled("span")({
color: '#f1e970ff'
});

export const NavProfile = styled (Box)({
display: "flex",
gap: "20px",
alignItems: "center",
});
