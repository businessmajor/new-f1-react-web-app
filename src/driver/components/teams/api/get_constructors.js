import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getConstructors = async (season) => {
  try {
    const response = await f1Axios.get(`${season}/constructors`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching constructors:', error);
    throw new Error('Failed to fetch constructors');
  }
};

export const useConstructors = (season) => {
  return useQuery(['teams', season], () => getConstructors(season));
};
