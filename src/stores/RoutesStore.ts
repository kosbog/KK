import { observable, action } from "mobx";

type RoutesMap = "home" | "catalog" | "contacts";

export class RoutesStore {
  @observable route: RoutesMap = "home";

  @action.bound
  setRoute(route: RoutesMap) {
    this.route = route;
  }
}
