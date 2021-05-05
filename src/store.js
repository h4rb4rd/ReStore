import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};
const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedAC = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: 'DELAYED_ACTION',
      }),
    timeout
  );
};
store.dispatch(delayedAC(3000));
export default store;
