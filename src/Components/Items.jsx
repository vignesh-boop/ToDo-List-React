import { Box, Button, Checkbox, FormControlLabel, styled, Typography } from '@mui/material';
import { items } from './DataShared/datas';
import { sideBarData } from './DataShared/datas';
import CartCountButton from './ReusableComponents/CartCountButton';
import { useEffect, useState } from 'react';


const OverAllStyledBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '25px',
  padding: '22px',
});

const ItemContainer = styled(Box)({
  width: '300px',
  height: '320px',
  border: '1px solid #ccc',
  boxShadow: '0px 0px 3px 3px #ccc',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
});

const SideBar = styled(Box)({
  width: '320px',
  backgroundColor: 'gray',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  position: 'static',
  minHeight: '100vh',
  minWidth: '320px',
  maxWidth: '320px',
});

export default function Items() {
  const [clicked, setClicked] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCheckboxChange = (category) => {
    if (category.toLowerCase() === 'all categories') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) => {
        const newSelected = prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category];
        return newSelected.filter((c) => c !== 'all categories');
      });
    }
  };

  const filteredItems = items.filter((item) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.includes(item.trending.toLowerCase())
  );

  const getQuantityFromCart = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.quantity : 1;
  };

  const handleAddToCart = (item) => {
    const foundIndex = cartItems.findIndex((i) => i.id === item.id);
    let updatedCart = [...cartItems];

    if (foundIndex !== -1) {
      updatedCart[foundIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
    setClicked({ ...clicked, [item.id]: true }); // show count button
  };

  const handleDecrement = (item) => {
    const foundIndex = cartItems.findIndex((i) => i.id === item.id);
    if (foundIndex !== -1 && cartItems[foundIndex].quantity > 1) {
      const updatedCart = [...cartItems];
      updatedCart[foundIndex].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  return (
    <Box display="flex" gap="20px">
      <SideBar>
        {sideBarData.map((value, index) => (
          <FormControlLabel
            key={index}
            sx={{
              width: '100%',
              paddingRight: '20px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            control={
              <Checkbox
                checked={
                  selectedCategories.length === 0 &&
                  value.toLowerCase() === 'all categories'
                    ? true
                    : selectedCategories.includes(value.toLowerCase())
                }
                onChange={() => handleCheckboxChange(value.toLowerCase())}
              />
            }
            label={value}
            labelPlacement="start"
          />
        ))}
      </SideBar>

      <OverAllStyledBox>
        {filteredItems.map((item, index) => (
          <ItemContainer key={index}>
            <Typography fontSize="20px">{item.productName}</Typography>
            <img
              src={`/assets/${item.image}`}
              alt="itemImage"
              width="100%"
              height="50%"
            />
            <Typography variant="h6">{item.trending}</Typography>
            <Typography>{item.doller}</Typography>

            {clicked[item.id] ? (
              <CartCountButton
                count={getQuantityFromCart(item.id)}
                onIncrement={() => handleAddToCart(item)}
                onDecrement={() => handleDecrement(item)}
              />
            ) : (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  sx={{ width: '70%', marginTop: '10px' }}
                  variant="contained"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Box>
            )}
          </ItemContainer>
        ))}
      </OverAllStyledBox>
    </Box>
  );
}
