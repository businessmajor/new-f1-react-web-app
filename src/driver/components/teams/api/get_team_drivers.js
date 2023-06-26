import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getTeamDrivers = async (constructorId, season) => {
  try {
    const response = await f1Axios.get(`${season}/constructors/${constructorId}/drivers.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching team drivers:', error);
    throw new Error('Failed to fetch team drivers');
  }
};

export const useTeamDrivers = (constructorId, season) => {
  return useQuery(['teamDrivers', constructorId, season], () => getTeamDrivers(constructorId, season));
};
