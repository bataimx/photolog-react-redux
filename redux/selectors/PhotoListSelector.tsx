import { StoreModel, PhotoModel } from '../../models';

const photoListSelector = (state: StoreModel) => state.Photos;
const photoByIdSelector = (photoId: string) => {
  return (state: StoreModel) => {
    if (!photoId) return {};
    return state.Photos.find((item) => {
      return item.id === photoId;
    });
  };
};

const photosByCollectionIdSelector = (collectionId: string) => {
  return (state: StoreModel): PhotoModel[] => {
    if (!collectionId) return [];
    return state.Photos.filter((item) => {
      return item.collections && item.collections.includes(collectionId);
    });
  };
};

export { photoListSelector, photoByIdSelector, photosByCollectionIdSelector };
