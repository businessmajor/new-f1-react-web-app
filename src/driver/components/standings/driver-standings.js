import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import StandingsTable from '../table';
import ConstructorIcon from '../teams/constructor-icon';
import { useDriverStandings } from './api/get_driver_standings';

const DriverRow = ({ driver }) => {
  const { position, Driver, Constructors, points } = driver;
  const driverFullName = `${Driver.givenName} ${Driver.familyName}`;

  return (
    <TableRow>
      <TableCell>{position}</TableCell>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ConstructorIcon constructorName={Constructors[0].name} />
          <Link to={`../drivers/${Driver.driverId}`} className="text-inherit" style={{ marginLeft: '8px' }}>
            {driverFullName}
          </Link>
        </div>
      </TableCell>
      <TableCell>{points}</TableCell>
    </TableRow>
  );
};

function DriverStandings() {
  const year = 2024;
  const driverRankingsQuery = useDriverStandings(year);

  if (driverRankingsQuery.isSuccess) {
    const driverStandings =
      driverRankingsQuery.data?.data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings || [];

    if (driverStandings.length === 0) {
      return <h1>No data found!</h1>;
    }

    const driverRows = driverStandings.map((driver) => (
      <DriverRow key={`${driver.Driver.driverId}`} driver={driver} />
    ));

    return (
      <StandingsTable
        rows={driverRows}
        columns={['Pos.', 'Driver', 'Points']}
      />
    );
  }

  return null;
}

export default DriverStandings;
