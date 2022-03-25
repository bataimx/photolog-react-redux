import { createReducer } from '@reduxjs/toolkit';
import { ActionModel, PhotoModel } from '../../models';
import { addPhotos, clearPhotos, removePhotos, updatePhoto } from '../actions';

const initPhotoList: PhotoModel[] = [];

const PhotoListReducer = createReducer(initPhotoList, {
  [addPhotos.type]: (
    state: PhotoModel[],
    action: ActionModel<PhotoModel[]>
  ) => {
    const data = action.payload;
    state.push(...data);
  },
  [clearPhotos.type]: (_state: PhotoModel[]) => {
    return [];
  },
  [updatePhoto.type]: (
    state: PhotoModel[],
    action: ActionModel<PhotoModel>
  ) => {
    const photo = action.payload;
    return state.map((item) => {
      return item.id === photo.id ? photo : item;
    });
  },
  [removePhotos.type]: (
    state: PhotoModel[],
    action: ActionModel<PhotoModel[]>
  ) => {
    const Photos = action.payload;
    const idList = Photos.map((photo) => photo.id);
    return state.filter((photo) => !idList.includes(photo.id));
  },
});

export default PhotoListReducer;
