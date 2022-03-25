import { createAction } from '@reduxjs/toolkit';
import ActionTypes from './ActionTypes';
import { CurrentPageModel } from '../../models';

const StartLoading = createAction<undefined>(ActionTypes.startLoading);
const StopLoading = createAction<undefined>(ActionTypes.stopLoading);
const setCurrentPage = createAction<CurrentPageModel>(
  'ActionSetting/setCurrentPage'
);

export { StartLoading, StopLoading, setCurrentPage };
