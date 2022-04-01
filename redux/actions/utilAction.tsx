import { takeLatest } from 'redux-saga/effects';
import {
  ActionCreatorWithOptionalPayload,
  createAction,
} from '@reduxjs/toolkit';

interface ActionSaga<T> extends ActionCreatorWithOptionalPayload<T, string> {
  saga: Generator | any;
}

export function createActionSaga<T>(
  actionName: string,
  actionSaga: Generator | any
) {
  const newAction = createAction<T>(actionName) as ActionSaga<T>;
  newAction.saga = actionSaga;
  return newAction;
}

export function takeLatestSaga<T>(asyncActionSaga: ActionSaga<T>) {
  return takeLatest.bind(this, asyncActionSaga.type, asyncActionSaga.saga);
}
