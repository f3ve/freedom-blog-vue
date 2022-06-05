import { API_URL } from '@/config';
import axios from 'axios';

export function getRoot() {
  return axios.get(API_URL);
}
