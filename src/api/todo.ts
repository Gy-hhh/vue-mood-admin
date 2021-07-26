<<<<<<< HEAD
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 代办事项列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type TodoList = {
  page: number;
  size: number;
};

export const todoList = ({ page, size }: TodoList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/todo/todo-list',
    method: 'get',
    params
  });
};

/**
 * @description 代办事项 - 添加
 * @param { String } title - 标题
 * @param { Number } status - 是否完成
 * @param { String } createTime - 创建时间
 */

type EditTodo = {
  id?: number;
  title: string;
  status: number;
  createTime: string;
};
export const addTodo = ({
  title,
  status,
  createTime
}: EditTodo): AxiosRequest => {
  const data = {
    title,
    status,
    createTime
  };
  return axios.request({
    url: '/todo/add-todo',
    method: 'post',
    data
  });
};

/**
 * @description 代办事项 - 更新
 * @param { Number } id - 列表id
 * @param { String } title - 标题
 * @param { Number } status - 是否完成
 * @param { String } createTime - 创建时间
 */
export const updateTodo = ({
  id,
  title,
  status,
  createTime
}: EditTodo): AxiosRequest => {
  const data = {
    id,
    title,
    status,
    createTime
  };
  return axios.request({
    url: '/todo/update-todo',
    method: 'post',
    data
  });
};

/**
 * @description 代办事项 - 删除
 * @param { String } ids - 列表id
 */
export const deleteTodo = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/todo/delete-todo',
    method: 'post',
    data
  });
};
=======
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 代办事项列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type TodoList = {
  page: number;
  size: number;
};

export const todoList = ({ page, size }: TodoList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/todo/todo-list',
    method: 'get',
    params
  });
};

/**
 * @description 代办事项 - 添加
 * @param { String } title - 标题
 * @param { Number } status - 是否完成
 * @param { String } createTime - 创建时间
 */

type EditTodo = {
  id?: number;
  title: string;
  status: number;
  createTime: string;
};
export const addTodo = ({
  title,
  status,
  createTime
}: EditTodo): AxiosRequest => {
  const data = {
    title,
    status,
    createTime
  };
  return axios.request({
    url: '/todo/add-todo',
    method: 'post',
    data
  });
};

/**
 * @description 代办事项 - 更新
 * @param { Number } id - 列表id
 * @param { String } title - 标题
 * @param { Number } status - 是否完成
 * @param { String } createTime - 创建时间
 */
export const updateTodo = ({
  id,
  title,
  status,
  createTime
}: EditTodo): AxiosRequest => {
  const data = {
    id,
    title,
    status,
    createTime
  };
  return axios.request({
    url: '/todo/update-todo',
    method: 'post',
    data
  });
};

/**
 * @description 代办事项 - 删除
 * @param { String } ids - 列表id
 */
export const deleteTodo = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/todo/delete-todo',
    method: 'post',
    data
  });
};
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
