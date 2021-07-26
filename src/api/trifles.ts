<<<<<<< HEAD
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 鸡毛蒜皮列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type TriflesList = {
  page: number;
  size: number;
};

export const triflesList = ({ page, size }: TriflesList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/trifles/trifles-list',
    method: 'get',
    params
  });
};

/**
 * @description 心情随笔 - 添加
 * @param { String } type - 文章类型
 * @param { String } title - 标题
 * @param { String } content - 内容
 * @param { String } createTime - 创建时间
 * @param { String } tags - 标签
 */

type EditMood = {
  id?: number;
  type: string;
  title: string;
  content: string;
  createTime: string;
  tags: string;
};
export const addTrifles = ({
  type,
  title,
  content,
  createTime,
  tags
}: EditMood): AxiosRequest => {
  const data = {
    type,
    title,
    content,
    createTime,
    tags
  };
  return axios.request({
    url: '/trifles/add-trifles',
    method: 'post',
    data
  });
};

/**
 * @description 心情随笔 - 更新
 * @param { Number } id - 列表id
 * @param { String } type - 文章类型
 * @param { String } title - 标题
 * @param { String } content - 内容
 * @param { String } createTime - 创建时间
 * @param { String } tags - 标签
 */
export const updateTrifles = ({
  id,
  type,
  title,
  content,
  createTime,
  tags
}: EditMood): AxiosRequest => {
  const data = {
    id,
    type,
    title,
    content,
    createTime,
    tags
  };
  return axios.request({
    url: '/trifles/update-trifles',
    method: 'post',
    data
  });
};

/**
 * @description 心情随笔 - 删除
 * @param { String } ids - 列表id
 */
export const deleteTrifles = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/trifles/delete-trifles',
    method: 'post',
    data
  });
};
=======
import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 鸡毛蒜皮列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type TriflesList = {
  page: number;
  size: number;
};

export const triflesList = ({ page, size }: TriflesList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/trifles/trifles-list',
    method: 'get',
    params
  });
};

/**
 * @description 心情随笔 - 添加
 * @param { String } type - 文章类型
 * @param { String } title - 标题
 * @param { String } content - 内容
 * @param { String } createTime - 创建时间
 * @param { String } tags - 标签
 */

type EditMood = {
  id?: number;
  type: string;
  title: string;
  content: string;
  createTime: string;
  tags: string;
};
export const addTrifles = ({
  type,
  title,
  content,
  createTime,
  tags
}: EditMood): AxiosRequest => {
  const data = {
    type,
    title,
    content,
    createTime,
    tags
  };
  return axios.request({
    url: '/trifles/add-trifles',
    method: 'post',
    data
  });
};

/**
 * @description 心情随笔 - 更新
 * @param { Number } id - 列表id
 * @param { String } type - 文章类型
 * @param { String } title - 标题
 * @param { String } content - 内容
 * @param { String } createTime - 创建时间
 * @param { String } tags - 标签
 */
export const updateTrifles = ({
  id,
  type,
  title,
  content,
  createTime,
  tags
}: EditMood): AxiosRequest => {
  const data = {
    id,
    type,
    title,
    content,
    createTime,
    tags
  };
  return axios.request({
    url: '/trifles/update-trifles',
    method: 'post',
    data
  });
};

/**
 * @description 心情随笔 - 删除
 * @param { String } ids - 列表id
 */
export const deleteTrifles = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/trifles/delete-trifles',
    method: 'post',
    data
  });
};
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
