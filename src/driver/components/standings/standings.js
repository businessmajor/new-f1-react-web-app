import React, { useState } from 'react';
import { Box, Tab, Tabs} from '@mui/material';
import DriverStandings from './driver-standings';
import ConstructorStandings from './constructor-standings';
import Search from './search';

function Standings({ searchValue }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Drivers" />
        <Tab label="Constructors" />
        <Tab label="Search" />
      </Tabs>
      {value === 0 ? <DriverStandings /> : value === 1 ? <ConstructorStandings /> : <Search searchValue={searchValue} />}
    </Box>
  );
}

export default Standings;