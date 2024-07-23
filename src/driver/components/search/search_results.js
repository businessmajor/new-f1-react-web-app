import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import StandingsTable from '../table';
// import { useDriverStandings } from '../standings/api/get_driver_standings';
import { Link } from 'react-router-dom';
// import ConstructorIcon from '../teams/constructor-icon';
import { useAllDrivers } from '../standings/api/get_all_drivers';

// import { useParams } from "react-router";

const DriverRow = ({ driver }) => {
  const driverFullName = `${driver.givenName} ${driver.familyName}`;

  return (
    <TableRow>
      <TableCell>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`../drivers/${driver.driverId}`} className="text-inherit" style={{ marginLeft: '5px' }}>
            {driverFullName}
          </Link>
        </div>
      </TableCell>
      <TableCell>{driver.nationality}</TableCell>
      <TableCell>
        <a href={driver.url} target="_blank" rel="noopener noreferrer">
          Wiki
        </a>
      </TableCell>
    </TableRow>
  );
};

function DriversSearch({ searchValue }) {
  // const { search } = useParams();
  const allDriversQuery = useAllDrivers();

  if (allDriversQuery.isSuccess) {
    const drivers = allDriversQuery.data?.data?.MRData?.DriverTable?.Drivers || [];

    if (drivers.length === 0) {
      return <h1>No data found!</h1>;
    }

    const narrowedValue = searchValue || ''; // Set default value to empty string if searchValue is undefined
    const narrowedList = drivers.filter((driver) => {
      const fullName = `${driver.givenName} ${driver.familyName}`;
      const lowerCasedFullName = fullName.toLowerCase();
      const lowerCasedSearchValue = narrowedValue.toLowerCase();
      return (
        lowerCasedFullName.includes(lowerCasedSearchValue) ||
        driver.familyName.toLowerCase().startsWith(lowerCasedSearchValue)
      );
    });

    const driverRows = narrowedList.map((driver) => (
      <DriverRow
        key={`${driver.driverId}`}
        driver={driver}
        name={driver.name}
        nationality={driver.nationality}
        biography={driver.url}
      />
    ));

    return (
      <StandingsTable
        rows={driverRows}
        columns={['Driver', 'Nationality', 'Biography']}
      />
    );
  }

  return null;
}



export default DriversSearch;
