import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import StandingsTable from '../table';
import ConstructorIcon from '../teams/constructor-icon';
import { useConstructorStandings } from './api/get_constructor_standings';

const ConstructorRow = ({ constructor }) => {
  const { position, Constructor, points } = constructor;

  return (
    <TableRow>
      <TableCell>{position}</TableCell>
      <TableCell>
        {/* <Link
          to={`/teams/${Constructor.constructorId}`}
          className="text-inherit"
          style={{ display: 'flex', alignItems: 'center' }}
        > */}

          <ConstructorIcon constructorName={Constructor.name} />
          <span style={{ marginLeft: '8px' }}>{Constructor.name}</span>
        {/* </Link> */}
      </TableCell>
      <TableCell>{points}</TableCell>
    </TableRow>
  );
};

function ConstructorStandings() {
  // god awful omg
  const year = 2024;
  const teamRankingsQuery = useConstructorStandings(year);

  if (teamRankingsQuery.isSuccess) {
    const constructorStandings =
      teamRankingsQuery.data?.data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings || [];

    if (constructorStandings.length === 0) {
      return <h1>No data found!</h1>;
    }

    const constructorRows = constructorStandings.map((constructor) => {
      return (
        <ConstructorRow
          constructor={constructor}
          key={constructor.constructorId}
        />
      );
    });

    return (
      <StandingsTable
        rows={constructorRows}
        columns={['Pos.', 'Constructor', 'Points']}
      />
    );
  }

  return null;
}

export default ConstructorStandings;
