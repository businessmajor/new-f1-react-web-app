import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import ConstructorStandings from './constructor-standings';
import DriverStandings from './driver-standings';

function Standings({ searchValue }) {
  const [value, setValue] = useState(0);
  const year = 2024;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* default to 2024, ask for year */}

      <p>{year} Standings</p>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Drivers" />
        <Tab label="Constructors" />
      </Tabs>
      {value === 0 && <DriverStandings searchValue={searchValue} />}
      {value === 1 && <ConstructorStandings searchValue={searchValue} />}
    </Box>
  );
}

export default Standings;
