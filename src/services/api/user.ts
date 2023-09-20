import { IUser } from '../../lib/interfaces/user';
import { apiClient } from '../axios.service';

export function getAllUsers() {
  return apiClient.get<IUser[]>('/users').then((res) => res.data);
}
