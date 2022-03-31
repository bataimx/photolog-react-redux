import ActionTypes from './ActionTypes';
import { StopLoading, StartLoading, setCurrentPage } from './ActionSetting';
import {
  PhotoListSaga,
  getPhotosAsync,
  addPhotos,
  clearPhotos,
  addPhotoAsync,
  removePhotosAsync,
  removePhotos,
  updatePhotoAsync,
  updatePhoto,
} from './ActionPhotoList';
import {
  getCollectionsAsync,
  addCollections,
  clearCollections,
  CollectionsSaga,
  addCollectionsAsync,
  removeCollections,
  removeCollectionsAsync,
} from './ActionCollections';
import { getAppDataAsync, CommonActionsSaga } from './ActionsCommon';

export {
  ActionTypes,
  StopLoading,
  StartLoading,
  setCurrentPage,
  getPhotosAsync,
  addPhotos,
  clearPhotos,
  addPhotoAsync,
  removePhotosAsync,
  removePhotos,
  getCollectionsAsync,
  addCollections,
  clearCollections,
  getAppDataAsync,
  updatePhotoAsync,
  updatePhoto,
  addCollectionsAsync,
  removeCollections,
  removeCollectionsAsync,
};
export const sagaRoot = [
  PhotoListSaga(),
  CollectionsSaga(),
  CommonActionsSaga(),
];
