import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage from './constructor-img';

function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.Constructor.constructorId}`} className="text-black w-full md:w-1/2 lg:w-1/2 flex justify-center">
      <div className="border-solid rounded-xl shadow-2xl">
        <div className="flex w-full relative">
          <div className="ml-4 text-xl font-bold">
            {team.position} - {team.points} pts.
          </div>
        </div>
        <hr />
        <div className="w-28 h-500 mx-auto justify-center">
          <TeamImage constructorName={team.Constructor.name} />
        </div>
        <div className="text-center mt-8 text-lg font-medium">{`${team.Constructor.name}`}</div>
      </div>
    </Link>
  );
}

export default TeamCard;
