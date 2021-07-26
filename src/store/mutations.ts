import { State } from '@store/state';

type Mutations<T, U = any> = {
  [key: string]: (state: T, payload: U) => void;
};

const mutations: Mutations<State> = {
  setTagsItem(state, data) {
    state.tagsList.push(data);
  },
  clearTags(state) {
    state.tagsList = [];
  },
  // 侧边栏折叠
  handleCollapse(state, collapse) {
    state.collapse = collapse;
  },
  // 用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo as unknown;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
};

export default mutations;
