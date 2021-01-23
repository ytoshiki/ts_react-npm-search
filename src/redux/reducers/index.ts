import { combineReducers } from 'redux';
import repositoriesReducer from './repositories.Reducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
console.log(typeof reducers);
