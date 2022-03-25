export default class SettingModel {
  isLoading: boolean = false;
  currentPage: CurrentPageModel = new CurrentPageModel();
}
export class CurrentPageModel {
  id: string;
}
