import { observable, action } from "mobx";

export class AuthStore {
  @observable user: any;

  @action.bound
  login() {
  }
}
