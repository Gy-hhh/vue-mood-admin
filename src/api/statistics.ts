<<<<<<< HEAD
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 归档统计列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type StatisticsList = {
  type: 1;
};

export const statisticsList = ({ type }: StatisticsList): AxiosRequest => {
  const params = { type };
  return axios.request({
    url: '/statistics/statistics-list',
    method: 'get',
    params
  });
};
=======
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 归档统计列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type StatisticsList = {
  type: 1;
};

export const statisticsList = ({ type }: StatisticsList): AxiosRequest => {
  const params = { type };
  return axios.request({
    url: '/statistics/statistics-list',
    method: 'get',
    params
  });
};
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
