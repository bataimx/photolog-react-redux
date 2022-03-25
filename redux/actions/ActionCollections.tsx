import { createAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GetCollections, AddCollections, RemoveCollections } from '../../Apis';
import { CollectionModel, ActionModel } from '../../models';
import { StartLoading, StopLoading } from './';

export const getCollectionsAsync = createAction<CollectionModel[]>(
  'Collections/GetCollectionsAsync'
);
export const addCollectionsAsync = createAction<CollectionModel[]>(
  'Collections/AddCollectionsAsync'
);
export const removeCollectionsAsync = createAction<CollectionModel[]>(
  'Collections/RemoveCollectionsAsync'
);

export const addCollections = createAction<CollectionModel[]>(
  'Collections/AddCollections'
);
export const clearCollections = createAction<undefined>(
  'Collections/ClearCollections'
);
export const removeCollections = createAction<CollectionModel[]>(
  'Collections/RemoveCollections'
);

function* getCollectionsSaga(action: ActionModel<any>) {
  yield put(StartLoading());
  const response = yield call(GetCollections, action.payload);
  yield put(clearCollections());
  yield put(addCollections(response));
  yield put(StopLoading());
}

function* addCollectionsSaga(action: ActionModel<CollectionModel[]>) {
  yield put(StartLoading());

  const response = yield call(AddCollections, action.payload);
  yield put(addCollections(response));

  yield put(StopLoading());
}

function* removeCollectionsSaga(action: ActionModel<CollectionModel[]>) {
  yield put(StartLoading());

  const response = yield call(RemoveCollections, action.payload);
  yield put(removeCollections(response));

  yield put(StopLoading());
}

export function* CollectionsSaga() {
  yield takeLatest(getCollectionsAsync.type, getCollectionsSaga);
  yield takeLatest(addCollectionsAsync.type, addCollectionsSaga);
  yield takeLatest(removeCollectionsAsync.type, removeCollectionsSaga);
}
