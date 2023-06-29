import React from 'react';
import StandingsTable from '../table';
import { TableCell, TableRow } from '@mui/material';
import { useDriverStandings } from './api/get_driver_standings';
import { Link } from 'react-router-dom';
import ConstructorIcon from '../teams/constructor-icon';
import { useAllDrivers } from './api/get_all_drivers';

import { useParams } from "react-router";

const DriverRow = ({ driver }) => {
  const driverFullName = `${driver.givenName} ${driver.familyName}`;

  return (
    <TableRow>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`../drivers/${driver.driverId}`} className="text-inherit" style={{ marginLeft: '8px' }}>
            {driverFullName}
          </Link>
        </div>
      </TableCell>
      <TableCell>{driver.nationality}</TableCell>
    </TableRow>
  );
};

function DriversSearch({ searchValue }) {
  const { search } = useParams();
  const allDriversQuery = useAllDrivers();

  if (allDriversQuery.isSuccess) {

    const drivers = allDriversQuery.data?.data?.MRData?.DriverTable?.Drivers || [];
  
    if (drivers.length === 0) {
      return <h1>No data found!</h1>;
    }

    const narowedList = drivers.filter((driver) => (
      //change to familyName if you want last name
      driver.givenName.startsWith(searchValue)
    ));

    const driverRows = drivers.map((driver) => (
      <DriverRow key={`${driver.driverId}`} driver={driver} />
    ));

    return (
      <StandingsTable
        rows={driverRows}
        columns={['Driver', 'Nationality']}
      />
    );
  };

  return null;
}

export default DriversSearch;
