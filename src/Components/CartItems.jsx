// CartItems.jsx
import { Box, Button, Card, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CartCountButton from './ReusableComponents/CartCountButton';
import { useNavigate } from 'react-router-dom';

export default function CartItems() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(stored);
  }, []);

  
  const updateQuantity = (index, type) => {
    const updated = [...cartItems];
    if (type === 'increment') {
      updated[index].quantity += 1;
    } else if (type === 'decrement' && updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  return (
    <Box display='flex' flexDirection='column' gap='30px' padding='30px'>
      <Button variant='contained' sx={{ width: '200px' }} onClick={() => navigate('/dashboard/items')}>
        Back to Products
      </Button>

      <Typography variant='h4'>Shopping Cart</Typography>

      <Card elevation={4} sx={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '30px' }}>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6'>You have {cartItems.length} items in your cart</Typography>
          <Button variant='contained' onClick={() => {
            localStorage.removeItem('cartItems');
            setCartItems([]);
          }}>
            Clear Shopping Cart
          </Button>
        </Box>

        <Box display='flex' borderBottom='1px solid black' justifyContent='space-between'>
          <Typography>Image</Typography>
          <Typography>Product</Typography>
          <Typography>Quantity</Typography>
          <Typography>Price</Typography>
        </Box>

        {cartItems.map((item, index) => (
          <Box key={index} display='flex' justifyContent='space-between' alignItems='center' borderBottom='1px solid black'>
            <img src={`/assets/${item.image}`} alt='cartImage' width='60px' height='60px' />
            <Typography fontWeight='bold'>{item.productName}</Typography>

            <CartCountButton
              count={item.quantity}
              onIncrement={() => updateQuantity(index, 'increment')}
              onDecrement={() => updateQuantity(index, 'decrement')}
            />

            <Typography>{item.doller}</Typography>
          </Box>
        ))}
      </Card>

      <Button variant='contained' sx={{ width: '200px' }} onClick={() => navigate('/dashboard/cart/billing')}>
        CheckOut
      </Button>
    </Box>
  );
}
