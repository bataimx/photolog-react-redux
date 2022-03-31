import SettingReducer from './SettingReducer';
import PhotoListReducer from './PhotoListReducer';
import CollectionsReducer from './CollectionsReducer';
import { StoreModel } from '../../models';
import { reducerList } from './util';

const rootReducer: StoreModel = {
  Setting: SettingReducer,
  Photos: PhotoListReducer,
  Collections: CollectionsReducer,
};

export { rootReducer };
