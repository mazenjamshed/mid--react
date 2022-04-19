import { Box, Typography } from '@mui/material';

const Error = () => {
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
          Error
        </Typography>
        <Typography component='h1' variant='h2' fontWeight='bold' color='red'>
          404
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
