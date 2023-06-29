import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getDriverStats = async (driver) => {
    try {
        const response = await f1Axios.get(`drivers/${driver}.json`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching driver stats:', error);
        throw new Error('Failed to fetch driver stats');
    }
};

export const useDriverStats = (driver) => {
    return useQuery(['drivers', driver], () => getDriverStats(driver));
};