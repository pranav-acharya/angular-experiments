import { createAction, props } from '@ngrx/store';

export const fetchUsers = createAction(
  '[Fetch Users] Fetch users'
);

export const fetchUser = createAction(
  '[Fetch User] Fetch Single user',
	props<{ userId: string;}>()
);