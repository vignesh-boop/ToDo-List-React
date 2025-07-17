// CartCountButton.jsx
import { Box, Button, Typography } from '@mui/material';

export default function CartCountButton({ count, onIncrement, onDecrement }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="200px"
      margin="20px"
    >
      <Button
        sx={{ width: '5%' }}
        variant="contained"
        disabled={count <= 1}
        onClick={onDecrement}
      >
        -
      </Button>
      <Typography>{count}</Typography>
      <Button
        sx={{ width: '5%' }}
        variant="contained"
        onClick={onIncrement}
      >
        +
      </Button>
    </Box>
  );
}
