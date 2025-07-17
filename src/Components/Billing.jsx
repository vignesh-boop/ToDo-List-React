import { Box, Button, Card, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Billing() {

    const navigate = useNavigate();

    const [open,setOpen] = useState(false);

    const handleOpen =()=>{
        setOpen(true);
    }
    
    const handleClose =()=>{
        setOpen(false);
    }

  return (
    <>
      <Box padding="30px" display="flex" flexDirection="column" gap="30px">
        <Button
          variant="outlined"
          sx={{ width: "200px", color: "black", border: "1px solid black" }}
          onClick={()=>navigate(-1)}
        >
          Back to cart
        </Button>
        <Card
          elevation={5}
          sx={{
            backgroundColor: "lightgray",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            padding: "30px",
            width: "800px",
          }}
        >
          <Box>
            <Typography variant="h5">Order Summary</Typography>
            <Typography variant="p">
              You Have 3 Items In Your Shopping Cart
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid black",
              padding: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="p" fontSize="20px">
              Quantity
            </Typography>
            <Typography variant="p" fontSize="20px">
              Product
            </Typography>
            <Typography variant="p" fontSize="20px">
              Price
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid black",
              padding: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="p">1</Typography>
            <Typography variant="p">Bread 100% whole wheat</Typography>
            <Typography variant="p">$ 70</Typography>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid black",
              padding: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="p">Total Price</Typography>
            <Typography variant="p" sx={{ margin: "0px 40px 0px 40px" }}>
              --------
            </Typography>
            <Typography variant="p">$ 70</Typography>
          </Box>
        </Card>
        <Button variant="contained" sx={{ width: "200px" }} onClick={handleOpen}>
          Place Order
        </Button>
      </Box>

      
      <Modal
        open={open}
      >
        <Box sx={{ position:'absolute',top:'40%',left:'40%', backgroundColor:'white', width:'350px',borderRadius:'5px', padding:'20px'}}>
          <Typography variant="h6" component="h2">
            Your Order Placed Sucessfully
          </Typography>
        <Button sx={{marginTop:'5%', marginLeft:'80%'}} onClick={handleClose}>Okay</Button>
        </Box>
      </Modal>
    </>
  );
}
