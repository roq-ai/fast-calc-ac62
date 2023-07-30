import axios from 'axios';
import queryString from 'query-string';
import { LockerInterface, LockerGetQueryInterface } from 'interfaces/locker';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLockers = async (query?: LockerGetQueryInterface): Promise<PaginatedInterface<LockerInterface>> => {
  const response = await axios.get('/api/lockers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLocker = async (locker: LockerInterface) => {
  const response = await axios.post('/api/lockers', locker);
  return response.data;
};

export const updateLockerById = async (id: string, locker: LockerInterface) => {
  const response = await axios.put(`/api/lockers/${id}`, locker);
  return response.data;
};

export const getLockerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lockers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLockerById = async (id: string) => {
  const response = await axios.delete(`/api/lockers/${id}`);
  return response.data;
};
