import { Box, Typography } from '@mui/material';
import CustomForm from '../components/form.component';

const Donation = () => {
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
          Donate against
        </Typography>
        <Typography component='h1' variant='h2' fontWeight='bold' color='red'>
          Imported Government
        </Typography>
      </Box>
      <Box>
        <CustomForm />
      </Box>
    </Box>
  );
};

export default Donation;
