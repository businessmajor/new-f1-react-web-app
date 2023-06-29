import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import  DriversSearch  from './search_results'
import DriverStandings from './driver-standings';
import ConstructorStandings from './constructor-standings';

function Search({ searchValue }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations, setRecommendations] = useState([])
  let searchVal = ""
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleButtonClick = () => {
    // Handle search button click here
    navigate(`${searchQuery}`);
  };

  const fetchRecommendations = async (query) => {
    // Replace the following with your own logic to fetch recommendations
    const response = await fetch(`API_URL?q=${query}`);
    const data = await response.json();
    setRecommendations(["rec1", "rec2", "rec3"]);
  };

  const handleInputChange = (e) => {
    searchVal = e.target.value;
    console.log(e.target.value)
  };
  //https://www.youtube.com/watch?v=QxMBHi_ZiT8 at 3:14 is where the list starts

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12} md={9}>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearch}
          onKeyUp={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button variant="contained" onClick={handleButtonClick} fullWidth>
          Search
        </Button>
      </Grid>
      <Grid>
        <DriversSearch />
      </Grid>
    </Grid>
  );
}

export default Search;