import { Box, Button, TextField } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import { useFormik } from 'formik';
import Invoice from '../pages/invoice.component';

const CustomForm = () => {
  const [isData, setIsData] = React.useState(false);
  const [data, setData] = React.useState();
  const formik = useFormik({
    initialValues: {
      message: '',
      amount: '',
      status: '',
      fundFor: [],
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsData(true);

      setData(values);
    },
  });

  console.log(data);
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '45rem',
        margin: '0 auto',
        flexDirection: 'column',
        margin: '3rem ',
        '&>*': {
          marginBottom: '1rem',
        },
      }}
    >
      {/* Radio Start */}
      <FormControl fullWidth>
        <FormLabel id='demo-controlled-radio-buttons-group'>
          Current Status:
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={formik.values.status}
          onChange={formik.handleChange}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <FormControlLabel
            control={<Radio name='status' value='pakistani' />}
            label='Pakistani'
          />
          <FormControlLabel
            control={<Radio name='status' value='overseas' />}
            label='Overseas'
          />
        </RadioGroup>
      </FormControl>
      {/* Radio End */}

      {/* Checkbox Start  */}
      <FormGroup>
        <FormLabel id='checkbox'>Donation For:</FormLabel>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name='fundFor' value='party' />}
              label='Party Fund'
              value={formik.values.fundFor}
              onChange={formik.handleChange}
            />
            <FormControlLabel
              control={<Checkbox name='fundFor' value='hospital' />}
              label='Shoukat Khanam Fund'
              value={formik.values.fundFor}
              onChange={formik.handleChange}
            />
          </FormGroup>
        </Box>
      </FormGroup>
      {/* Checkbox End  */}
      <FormControl fullWidth>
        {/* Select Start */}
        <InputLabel id='demo-simple-select-label'>Amount</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          // value={amount}
          label='Select Amount'
          name='amount'
          value={formik.values.amount}
          onChange={formik.handleChange}
        >
          <MenuItem value={50}>50$</MenuItem>
          <MenuItem value={100}>100$</MenuItem>
          <MenuItem value={150}>150$</MenuItem>
        </Select>
        {/* Select End  */}

        {/* Text Area */}
        <TextField
          id='message'
          label='Message for Kaptaan'
          name='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{
            marginTop: '1rem ',
          }}
        />
      </FormControl>
      <Button variant='contained' type='submit'>
        Submit
      </Button>

      {isData ? (
        <Invoice
          message={data.message}
          amount={data.amount}
          status={data.status}
          fundFor={data.fundFor}
        />
      ) : (
        ''
      )}
    </form>
  );
};

export default CustomForm;
