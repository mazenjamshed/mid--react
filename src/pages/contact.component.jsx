import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Typography component='h1' variant='h2' fontWeight='bold'>
          Contact Us
        </Typography>
        <Typography component='h1' variant='h2' fontWeight='bold' color='red'>
          For Anything
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
