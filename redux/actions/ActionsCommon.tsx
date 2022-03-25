import { createAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import { CollectionModel, PhotoModel, ActionModel } from '../../models';
import {
  StartLoading,
  StopLoading,
  clearPhotos,
  addPhotos,
  clearCollections,
  addCollections,
} from './';
import { GetPhotos, GetCollections } from '../../Apis';

export const getAppDataAsync = createAction<undefined>(
  'ActionsCommon/GetAppDataAsync'
);

function* getAppDataSaga(action: ActionModel<any>) {
  yield put(StartLoading());

  // PhotoJson
  const jsonPhoto: PhotoModel = yield call(GetPhotos, action.payload);
  yield put(clearPhotos());
  yield put(addPhotos(jsonPhoto));

  // CollectionJson
  const jsonCollection: CollectionModel = yield call(
    GetCollections,
    action.payload
  );
  yield put(clearCollections());
  yield put(addCollections(jsonCollection));

  yield put(StopLoading());
}

export function* CommonActionsSaga() {
  yield takeLatest(getAppDataAsync.type, getAppDataSaga);
}
