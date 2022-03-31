const rootReducer: StoreModel = {
  Photos: PhotoListReducer,
  Collections: CollectionsReducer,
};

export function addReducer(keyName: string, Reducer: any) {
  rootReducer[keyName] = Reducer;
}