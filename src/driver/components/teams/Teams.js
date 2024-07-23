import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useConstructorStandings } from '../standings/api/get_constructor_standings';
import TeamCard from './TeamCard';

function Teams() {
  const year = 2023; //lol
  const teamsQuery = useConstructorStandings(year);

  if (teamsQuery.isSuccess) {
    const teams =
      teamsQuery.data.data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;

    if (!teams) {
      return (
        <>
          <Typography variant="h5" className="text-center mb-8">{`${year} Formula 1 Constructors`}</Typography>
          <Typography className="text-center mt-8">No Constructor Championship found in this year.</Typography>
        </>
      );
    } else {
      return (
        <Container>
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
            >
              {`${year} Formula 1 Constructors`}
            </Typography>
          </Box>
          <Container sx={{ py: 4 }} maxWidth="md">
            <Grid container spacing={4}>
              {teams.map((team) => (
                <Grid item key={team.Constructor.constructorId} xs={12} sm={6} md={6}>
                  <TeamCard team={team} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      );
    }
  } else {
    // handle the loading state or error state
    return null;
  }
}

export default Teams;
