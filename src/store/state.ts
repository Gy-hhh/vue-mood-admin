export type State = {
  tagsList: unknown[];
  collapse: boolean;
  userInfo: unknown;
};

// 本地存储容错处理
function faultTolerant(name: string) {
  if (localStorage.getItem(name) as string) {
    return JSON.parse(localStorage.getItem(name) as string);
  }
}

const state: State = {
  tagsList: [],
  collapse: true,
  userInfo: faultTolerant('userInfo') || {} // 用户信息
};

export default state;
