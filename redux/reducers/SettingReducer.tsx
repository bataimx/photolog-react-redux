import { createReducer } from '@reduxjs/toolkit';
import { ActionModel, SettingModel, CurrentPageModel } from '../../models';
import { StopLoading, StartLoading, setCurrentPage } from '../actions';

const initSetting: SettingModel = {
  isLoading: false,
  currentPage: {},
};

const reducerActions = {
  [StartLoading.type]: (state: SettingModel) => {
    state.isLoading = true;
  },
  [StopLoading.type]: (state: SettingModel) => {
    state.isLoading = false;
  },
  [setCurrentPage.type]: (
    state: SettingModel,
    action: ActionModel<CurrentPageModel>
  ) => {
    state.currentPage = { ...state.currentPage, ...action.payload };
  },
};

const SettingReducer = createReducer(initSetting, reducerActions);
export default SettingReducer;
