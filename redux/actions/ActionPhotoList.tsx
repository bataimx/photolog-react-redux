import { createAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GetPhotos, AddPhoto, RemovePhotos, PatchPhoto } from '../../Apis';
import { PhotoModel, ActionModel } from '../../models';
import { StartLoading, StopLoading } from './';

export const getPhotosAsync = createAction<PhotoModel[]>(
  'PhotoList/GetPhotosAsync'
);
export const addPhotos = createAction<PhotoModel[]>('PhotoList/AddPhotos');
export const clearPhotos = createAction<PhotoModel[]>('PhotoList/ClearPhotos');
export const addPhotoAsync = createAction<PhotoModel[]>(
  'PhotoList/AddPhotoAsync'
);
export const removePhotosAsync = createAction<PhotoModel[]>(
  'PhotoList/removePhotosAsync'
);
export const removePhotos = createAction<PhotoModel[]>(
  'PhotoList/RemovePhotos'
);
export const updatePhotoAsync = createAction<PhotoModel>(
  'PhotoList/UpdatePhotoAsync'
);
export const updatePhoto = createAction<PhotoModel>('PhotoList/UpdatePhoto');

function* getPhotosSaga(action: ActionModel<any>) {
  yield put(StartLoading());
  const response = yield call(GetPhotos, action.payload);
  yield put(clearPhotos());
  yield put(addPhotos(response));
  yield put(StopLoading());
}

function* addPhotoSaga(action: ActionModel<PhotoModel>) {
  yield put(StartLoading());
  const response = yield call(AddPhoto, action.payload);
  yield put(addPhotos(response));
  yield put(StopLoading());
}

function* removePhotosSaga(action: ActionModel<PhotoModel[]>) {
  yield put(StartLoading());
  const response = yield call(RemovePhotos, action.payload);
  yield put(removePhotos(response));
  yield put(StopLoading());
}

function* updatePhotoSaga(action: ActionModel<PhotoModel>) {
  yield put(StartLoading());
  const response = yield call(PatchPhoto, action.payload);
  yield put(updatePhoto(response));
  yield put(StopLoading());
}

export function* PhotoListSaga() {
  yield takeLatest(getPhotosAsync.type, getPhotosSaga);
  yield takeLatest(addPhotoAsync.type, addPhotoSaga);
  yield takeLatest(removePhotosAsync.type, removePhotosSaga);
  yield takeLatest(updatePhotoAsync.type, updatePhotoSaga);
}
