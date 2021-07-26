import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 用户列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type UserList = {
  page: number;
  size: number;
};

export const userList = ({ page, size }: UserList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/user-manage/user-list',
    method: 'get',
    params
  });
};

/**
 * @description 用户管理 - 添加
 * @param { String } username - 用户名
 * @param { Number } userType - 用户类型
 * @param { String } descText - 描述
 */

type EditMood = {
  id?: number;
  userId?: number;
  username: string;
  userType: number;
  descText: string;
};

export const addUser = ({
  username,
  userType,
  descText
}: EditMood): AxiosRequest => {
  const data = {
    username,
    userType,
    descText
  };
  return axios.request({
    url: '/user-manage/add-user',
    method: 'post',
    data
  });
};

/**
 * @description 用户管理 - 添加
 * @param { Number } id - 列表id
 * @param { String } username - 用户名
 * @param { Number } userType - 用户类型
 * @param { String } descText - 描述
 */
export const updateUser = ({
  id,
  username,
  userType,
  descText
}: EditMood): AxiosRequest => {
  const data = {
    id,
    username,
    userType,
    descText
  };
  return axios.request({
    url: '/user-manage/update-user',
    method: 'post',
    data
  });
};

/**
 * @description 用户管理 - 删除
 * @param { String } ids - 列表id
 */
export const deleteUser = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/user-manage/delete-user',
    method: 'post',
    data
  });
};
