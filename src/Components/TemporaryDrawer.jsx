import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link, Outlet } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "250px", backgroundColor: "grey",height: "100vh", color: "white" }} onClick={toggleDrawer(false)} position={"static"}>
      <List>
        {['profile', 'settings'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={`/${text}`} >
              <ListItemText primary={text} sx={{textTransform: "capitalize"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{backgroundColor: "transparent", display: "flex"}}>
      {/* <Drawer open={true} sx={{backgroundColor: "transparent"}} > */}
        {DrawerList}
      {/* </Drawer> */}
      <Outlet/>
    </div>
  );
}