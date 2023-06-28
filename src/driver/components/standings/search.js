import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import DriverStandings from './driver-standings';
import ConstructorStandings from './constructor-standings';

function Search() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle search button click here
  };


  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12} md={9}>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button variant="contained" onClick={handleButtonClick} fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default Search;