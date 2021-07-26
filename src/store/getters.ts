import { State } from '@store/state';

export type Getters<T> = {
  [key: string]: (state: T) => void;
};

const getters: Getters<State> = {
  tagsList: state => state.tagsList,
  collapse: state => state.collapse,
  userInfo: state => state.userInfo
};

export default getters;
