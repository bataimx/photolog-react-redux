import { createReducer } from '@reduxjs/toolkit';
import { ActionModel, CollectionModel } from '../../models';
import {
  addCollections,
  clearCollections,
  removeCollections,
} from '../actions';

const initCollections: CollectionModel[] = [];

const CollectionsReducer = createReducer(initCollections, {
  [addCollections.type]: (
    state: CollectionModel[],
    action: ActionModel<CollectionModel[]>
  ) => {
    const data = action.payload;
    state.push(...data);
  },
  [clearCollections.type]: (_state: CollectionModel[]) => {
    return [];
  },
  [removeCollections.type]: (
    state: CollectionModel[],
    action: ActionModel<CollectionModel[]>
  ) => {
    const items = action.payload;
    const idList = items.map((item) => item.id);
    return state.filter((item) => !idList.includes(item.id));
  },
});

export default CollectionsReducer;
