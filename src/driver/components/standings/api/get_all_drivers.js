import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getAllDrivers = async () => {
    try {
        const response = await f1Axios.get(`drivers.json?limit=1000`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching all drivers:', error);
        throw new Error('Failed to fetch all drivers');
    }
};

export const useAllDrivers = () => {
    return useQuery(['drivers'], () => getAllDrivers());
};