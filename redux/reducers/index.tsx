import SettingReducer from './SettingReducer';
import PhotoListReducer from './PhotoListReducer';
import CollectionsReducer from './CollectionsReducer';
import { StoreModel } from '../../models';

const rootReducer: StoreModel = {
  Setting: SettingReducer,
  Photos: PhotoListReducer,
  Collections: CollectionsReducer,
};

export { rootReducer, SettingReducer, PhotoListReducer, CollectionsReducer };
