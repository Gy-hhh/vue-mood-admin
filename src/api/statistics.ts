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
