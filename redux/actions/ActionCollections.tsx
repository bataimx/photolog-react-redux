import { createAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { GetCollections, AddCollections, RemoveCollections } from '../../Apis';
import { CollectionModel, ActionModel } from '../../models';
import { StartLoading, StopLoading } from './';
import { createActionSaga, takeLatestSaga } from './utilAction';

export const addCollections = createAction<CollectionModel[]>(
  'Collections/AddCollections'
);
export const clearCollections = createAction<undefined>(
  'Collections/ClearCollections'
);
export const removeCollections = createAction<CollectionModel[]>(
  'Collections/RemoveCollections'
);

export const getCollectionsAsync = createActionSaga<CollectionModel[]>(
  'Collections/GetCollectionsAsync',
  function* (action: ActionModel<any>) {
    yield put(StartLoading());

    const response = yield call(GetCollections, action.payload);
    yield put(clearCollections());
    yield put(addCollections(response));

    yield put(StopLoading());
  }
);

export const removeCollectionsAsync = createActionSaga<CollectionModel[]>(
  'Collections/RemoveCollectionsAsync',
  function* (action: ActionModel<CollectionModel[]>) {
    yield put(StartLoading());

    const response = yield call(RemoveCollections, action.payload);
    yield put(removeCollections(response));

    yield put(StopLoading());
  }
);

export const addCollectionsAsync = createActionSaga<CollectionModel[]>(
  'Collections/AddCollectionsAsync',
  function* (action: ActionModel<CollectionModel[]>) {
    yield put(StartLoading());

    const response = yield call(AddCollections, action.payload);
    yield put(addCollections(response));

    yield put(StopLoading());
  }
);

export function* CollectionsSaga() {
  yield takeLatestSaga(getCollectionsAsync)();
  yield takeLatestSaga(addCollectionsAsync)();
  yield takeLatestSaga(removeCollectionsAsync)();
}
