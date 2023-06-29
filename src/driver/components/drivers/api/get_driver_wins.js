import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getDriverWins = async (driver_id) => {
    try {
        const response = await f1Axios.get(`/drivers/${driver_id}.json`)
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching driver details:', error);
        throw new Error('Failed to fetch driver details');
    }
};

export const useDriverWins = (driver_id) => {
    return useQuery(['driverWins', driver_id], () => getDriverWins());
};