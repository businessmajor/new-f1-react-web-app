import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage from './constructor-img';
import { Typography, Divider, Card, CardContent, Box } from '@mui/material';

function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.Constructor.constructorId}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, position: 'relative' }}>
        <TeamImage constructorName={team.Constructor.name} />
        <Box sx={{ position: 'absolute', top: 0, right: 0, p: 1 }} bgcolor="white">
          <Typography variant="h6">
            {team.points} pts.
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="h5" component="div">
            {team.position}. {team.Constructor.name}
          </Typography>
          {/* <Divider variant="middle" /> */}
        </CardContent>
      </Card>
    </Link>
  );
}

export default TeamCard;
