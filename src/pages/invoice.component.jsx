import { Box, Divider, Typography } from '@mui/material';

const Invoice = ({ message, status, amount, fundFor }) => {
  return (
    <Box
      sx={{
        border: '1px solid black',
        width: '100%',
        marginTop: '3rem ',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'green',
          color: '#fff',
        }}
      >
        <Typography variant='h2'>Invoice:</Typography>
      </Box>
      <Typography variant='h4'>Nationality Status: {status}</Typography>
      <Divider color='black' />
      <Typography variant='h4'>Amount Sent: {amount}$</Typography>
      <Divider color='black' />

      <Typography variant='h4'>Donation for: {fundFor}</Typography>
      <Divider color='black' />

      <Typography variant='h4'>Message for Imran Khan: {message}</Typography>
    </Box>
  );
};

export default Invoice;
