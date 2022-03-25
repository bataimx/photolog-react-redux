import { StoreModel } from '../../models';

const isLoadingSelector = (state: StoreModel) => state.Setting.isLoading;

export { isLoadingSelector };
