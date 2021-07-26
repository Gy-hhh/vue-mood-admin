<<<<<<< HEAD
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

type Register = {
  username: string;
  password: string;
};

/**
 * @description 注册
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const register = ({ username, password }: Register): AxiosRequest => {
  const data = { username, password };
  return axios.request({
    url: '/user/register',
    method: 'post',
    data
  });
};

/**
 * @description 登录
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const login = ({ username, password }: Register): AxiosRequest => {
  const data = { username, password };
  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  });
};

/**
 * @description 更新资料
 * @param { Number } userId - 用户id
 * @param { String } oldPassword - 旧密码
 * @param { String } newPassword - 新密码
 * @param { String } desc - 描述
 */

type UpdateUser = {
  userId: number;
  oldPassword: string;
  newPassword: string;
  desc: string;
};

export const updateUser = ({
  userId,
  oldPassword,
  newPassword,
  desc
}: UpdateUser): AxiosRequest => {
  const data = { userId, oldPassword, newPassword, desc };
  return axios.request({
    url: '/user/update-user',
    method: 'post',
    data
  });
};

/**
 * @description 退出登录
 */
export const logout = (): AxiosRequest => {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  });
};
/**
 * @description 用户ip信息
 */
export const ipInfo = ({ ip }: { ip: number }): AxiosRequest => {
  const params = { ip };
  return axios.request({
    url: '/user/ipinfo',
    method: 'get',
    params
  });
};
=======
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

type Register = {
  username: string;
  password: string;
};

/**
 * @description 注册
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const register = ({ username, password }: Register): AxiosRequest => {
  const data = { username, password };
  return axios.request({
    url: '/user/register',
    method: 'post',
    data
  });
};

/**
 * @description 登录
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const login = ({ username, password }: Register): AxiosRequest => {
  const data = { username, password };
  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  });
};

/**
 * @description 更新资料
 * @param { Number } userId - 用户id
 * @param { String } oldPassword - 旧密码
 * @param { String } newPassword - 新密码
 * @param { String } desc - 描述
 */

type UpdateUser = {
  userId: number;
  oldPassword: string;
  newPassword: string;
  desc: string;
};

export const updateUser = ({
  userId,
  oldPassword,
  newPassword,
  desc
}: UpdateUser): AxiosRequest => {
  const data = { userId, oldPassword, newPassword, desc };
  return axios.request({
    url: '/user/update-user',
    method: 'post',
    data
  });
};

/**
 * @description 退出登录
 */
export const logout = (): AxiosRequest => {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  });
};
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
