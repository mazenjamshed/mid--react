import styled from '@emotion/styled';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item1 = styled(Button)((props) => ({
  backgroundColor: 'green',
  minWidth: '33rem',
  //   ...theme.typography.body2,
  padding: '1.2rem 3.2rem',
  textAlign: 'center',
  color: 'white',
  fontWeight: 700,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'red',
  },
}));
const Item2 = styled(Button)((props) => ({
  backgroundColor: 'red',
  minWidth: '33rem',
  //   ...theme.typography.body2,
  padding: '1.2rem 3.2rem',
  textAlign: 'center',
  color: 'white',
  fontWeight: 700,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'green',
  },
}));
const HomeGrid = () => {
  const navigation = useNavigate();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
      <Grid item xs={12} md={6} lg={6}>
        <Item1 onClick={() => navigation('/donation')}>
          Donate for Naya Pakistan
        </Item1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Item2 onClick={() => navigation('/contact')}>Contact Us</Item2>
      </Grid>
    </Grid>
  );
};

export default HomeGrid;
