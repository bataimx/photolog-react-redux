import { SettingModel } from '..';
import PhotoModel from './reducers/PhotoModel';

class StoreModel {
  Setting: SettingModel;
  Photos: PhotoModel[] = [];
  Collections: CollectionModel[] = [];
}
export default StoreModel;
