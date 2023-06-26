import React from 'react';
import { useParams } from 'react-router-dom';
import { useTeamDetails } from '../api/getTeamDetail';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTeamDrivers } from './api/get_team_drivers';
import { useConstructorStats } from './api/get_constructor_stats';
import { Link } from 'react-router-dom';
import { calculateTeamStats } from '../../../util/calculateTeamStats';
import TeamImage from './constructor-img';


function TeamDetail() {
  const params = useParams();
  const teamDetailsQuery = useTeamDetails(params.teamId);
  const teamDriversQuery = useTeamDrivers(params.teamId, 2023);
  const teamStatsQuery = useConstructorStats(params.teamId);

  if (teamDetailsQuery.isSuccess) {
    const teamDetails = teamDetailsQuery.data.data.MRData.ConstructorTable.Constructors[0];

    if (teamDriversQuery.isSuccess && teamStatsQuery.isSuccess) {
      const drivers = teamDriversQuery.data.data?.MRData?.DriverTable?.Drivers;

      // const championships = calculateTeamStats(
      //   teamStatsQuery.data.data.MRData.StandingsTable.StandingsLists
      // );

      return (
        <Card className="lg:w-2/3 mx-auto mt-24">
          <div className=" w-1/3 mx-auto my-auto">
            <TeamImage teamName={teamDetails.name} />
          </div>
          <CardContent className="mx-auto w-2/3">
            <div className="grid grid-cols-2 mt-16 w-2/3 mx-auto">
              <Typography className="font-bold md:text-2xl mt-4">Name</Typography>
              <Typography className="font-medium text-md mt-4">{teamDetails.name}</Typography>
              <Typography className="font-bold md:text-2xl mt-4">Champs</Typography>
              {/* <Typography className="font-medium md:text-md mt-4">{championships}</Typography> */}
              <Typography className="font-bold md:text-2xl mt-4">Drivers</Typography>
              <div className="mt-4">
                {drivers.length === 0
                  ? '-'
                  : drivers.map((driver) => (
                    <Link to={`/drivers/${driver.driverId}`} key={driver.driverId}>
                      <Typography className="font-medium text-md">{`${driver.givenName} ${driver.familyName}`}</Typography>
                    </Link>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
  }
}

export default TeamDetail;
