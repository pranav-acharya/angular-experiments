import { Action, createReducer, on } from '@ngrx/store';
import * as MyCompActions from './mycomp.actions';
import { User } from '../services/user';

export interface State {
  users: User[];
  fetchingUser: boolean;
  fetchingUsers: boolean;
}

export const initialState: State = {
  users: [],
  fetchingUser: false,
  fetchingUsers: false
};

const mycompReducer = createReducer(
  initialState,
  on(MyCompActions.fetchUser, state => ({ ...state, fetchingUser: true })),
  on(MyCompActions.fetchUsers, state => {
    console.log('triggered', state);
    return ({ ...state, fetchingUsers: true })
  }),
);


export function reducer(state: State | undefined, action: Action) {
  return mycompReducer(state, action);
}

