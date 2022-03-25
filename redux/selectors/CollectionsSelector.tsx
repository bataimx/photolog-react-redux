import { StoreModel, CollectionModel } from '../../models';

const collectionsSelector = (state: StoreModel) => state.Collections;
const collectionsByIdsSelector = (collectionIds: string[]) => {
  return (state: StoreModel): CollectionModel[] => {
    if (!collectionIds) {
      return [];
    }
    const collections = state.Collections;
    return collections.filter((item) => collectionIds.includes(item.id));
  };
};

export { collectionsSelector, collectionsByIdsSelector };
