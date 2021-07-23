import axios from '@utils/axios';
import { AxiosRequest } from '@/types/types';

/**
 * @description 心情随笔列表
 * @param { Number } page - 页数
 * @param { Number } size - 条数
 */

type MoodList = {
  page: number;
  size: number;
};

export const moodList = ({ page, size }: MoodList): AxiosRequest => {
  const params = { page, size };
  return axios.request({
    url: '/mood/mood-list',
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
export const addMood = ({
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
    url: '/mood/add-mood',
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
export const updateMood = ({
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
    url: '/mood/update-mood',
    method: 'post',
    data
  });
};

/**
 * @description 心情随笔 - 删除
 * @param { String } ids - 列表id
 */
export const deleteMood = ({ ids }: { ids: string }): AxiosRequest => {
  const data = { ids };
  return axios.request({
    url: '/mood/delete-mood',
    method: 'post',
    data
  });
};
