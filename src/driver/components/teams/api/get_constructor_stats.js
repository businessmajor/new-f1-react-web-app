import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getConstructorStats = async (teamId) => {
  try {
    const response = await f1Axios.get(`/constructors/${teamId}/constructorStandings.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching constructor stats:', error);
    throw new Error('Failed to fetch constructor stats');
  }
};

export const useConstructorStats = (teamId) => {
  return useQuery(['teamStats', teamId], () => getConstructorStats(teamId));
};
