import React from 'react';
import { useConstructorStandings } from '../standings/api/get_constructor_standings';
import TeamCard from './TeamCard';
import { TableCell, TableRow } from '@mui/material';

function Teams() {
  const year = 2023;
  const teamsQuery = useConstructorStandings(year);

  if (teamsQuery.isSuccess) {
    const teams =
      teamsQuery.data.data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;

    if (!teams) {
      return (
        <>
          <h2 className="text-center mb-8">{`${year} Formula 1 Constructors`}</h2>
          <p className="text-center mt-8">
            No Constructor Championship found in this year.
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-center mb-8">{`${year} Formula 1 Constructors`}</h2>
          {teams.reduce((result, team, index) => {
            if (index % 2 === 0) result.push([]);
            result[result.length - 1].push(team);
            return result;
          }, []).map((teamPair, pairIndex) => (
            <TableRow key={pairIndex}>
              {teamPair.map((team) => (
                <TableCell key={team.Constructor.constructorId}>
                  <TeamCard team={team} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </>
      );

    }
  }
}

export default Teams;
