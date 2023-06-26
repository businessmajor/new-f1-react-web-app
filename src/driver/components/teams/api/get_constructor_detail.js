import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getConstructorDetails = async (constructorId) => {
  try {
    const response = await f1Axios.get(`/constructors/${constructorId}.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching constructor details:', error);
    throw new Error('Failed to fetch constructor details');
  }
};

export const useConstructorDetails = (constructorId) => {
  return useQuery(['constructorDetails', constructorId], () => getConstructorDetails(constructorId));
};
