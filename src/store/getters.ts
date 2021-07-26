<<<<<<< HEAD
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
=======
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
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
