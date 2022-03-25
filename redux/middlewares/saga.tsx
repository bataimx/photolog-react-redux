import { all } from 'redux-saga/effects';
import { sagaRoot } from '../actions';

export default function* rootSaga() {
  yield all(sagaRoot);
}
