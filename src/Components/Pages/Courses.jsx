import {
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const StyledContainer = styled(Container)({
  marginTop: "32px",
  textAlign: "center",
});

const StyledTitle = styled(Typography)({
  fontWeight: "bold",
  color: "#1976d2",
});

const StyledDescription = styled(Typography)({
  marginTop: "16px",
  fontSize: "1.2rem",
  color: "#757575",
});

const StyledCard = styled(Card)({
  height: "200px",
  width: "300px",
  margin: "auto",
  boxShadow:'0px 0px 2px 2px #ccc'
});

export default function Courses() {
  const { userName, mobileNumber } = useSelector((state) => state.user);
  const isSigin = userName && mobileNumber;

  const courses = [
    {
      title: "Frontend Development",
      description:
        "Learn how to build stunning user interfaces with HTML, CSS, and JavaScript.",
    },
    {
      title: "Backend Development",
      description:
        "Dive into server-side programming and work with databases and APIs.",
    },
    {
      title: "Full Stack Development",
      description:
        "Become proficient in both frontend and backend development to build complete applications.",
    },
    {
      title: "Mobile App Development",
      description:
        "Learn how to develop mobile applications for Android and iOS using popular frameworks.",
    },
  ];

  return (
    <StyledContainer maxWidth="md">
      {isSigin ? (
        <>
          <StyledTitle variant="h4">Available Courses</StyledTitle>
          <StyledDescription>
            Here are some of the courses we offer <span sx={{fontWeight:"bold"}}>{userName}</span>
          </StyledDescription>

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            {courses.map(({ title, description }) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <StyledTitle variant="h4">Please sign in to view courses</StyledTitle>
      )}
    </StyledContainer>
  );
}
