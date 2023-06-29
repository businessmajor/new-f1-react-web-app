import React, { useState } from 'react';
import { Grid, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import DriversSearch from './search_results';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Grid item xs={12} md={9}>
        <TextField
          label="Search..."
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
          size="small"
        />
      </Grid>
      <DriversSearch searchValue={searchQuery} />
    </Box>
  );
}

export default Search;
