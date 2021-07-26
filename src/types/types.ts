import { AxiosPromise, AxiosRequestConfig } from 'axios';

// axios接口方法返回类型
export type AxiosRequest = AxiosPromise<AxiosRequestConfig>;

// 接口返回值类型
export type ResponseDataType<T = any> = {
  msg?: string;
  message?: string;
  code?: number;
  count?: T;
  data: T;
  cookie?: string;
  token?: string;
  account?: T;
  result?: T;
  total?: number;
  fileUrl?: string;
};

// 不固定接口返回值类型
export type ResponseType = Record<string, any>;

// 循环类型，forEach map...
export type LoopType = Record<string, any>;
