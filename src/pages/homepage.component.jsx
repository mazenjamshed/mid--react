// import Banner from './../assets/img/banner.jpg';

import { Box, Typography } from '@mui/material';
import HomeGrid from '../components/home-grid.component';

const HomePage = () => {
  return (
    <>
      <Box className='homepage' sx={{ width: '100vw' }}>
        <img
          src={require('./../assets/img/banner.jpg')}
          style={{ width: '100%', maxHeight: '70vh' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography component='h1' variant='h2' fontWeight='bold'>
          Absolutely
        </Typography>
        <Typography component='h1' variant='h2' fontWeight='bold' color='red'>
          Not
        </Typography>
      </Box>

      <Box sx={{ margin: '3rem' }}>
        <HomeGrid />
      </Box>
    </>
  );
};

export default HomePage;
