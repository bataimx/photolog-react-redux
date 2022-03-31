import SettingReducer from './SettingReducer';
import PhotoListReducer from './PhotoListReducer';
import CollectionsReducer from './CollectionsReducer';
import { StoreModel } from '../../models';

export const rootReducer: StoreModel = {
  Setting: SettingReducer,
  Photos: PhotoListReducer,
  Collections: CollectionsReducer,
};
