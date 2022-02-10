import {applyMiddleware, combineReducers, createStore} from 'redux';
import signUpReducer from './signUp/reducer';
import {all} from 'redux-saga/effects';
import createMiddleware from 'redux-saga';

function* allSagas() {
  yield all([null]);
}

const sagaMiddleware = createMiddleware();
const middlewares = [sagaMiddleware];

const reducers = combineReducers({
  signIn: signUpReducer,
  signUp: signUpReducer,
});

export const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);
