import { observable, action, runInAction } from "mobx";
import { db } from "src/utils/firebase";
export class ProductsStore {
  @observable jackets: any[] = [];

  @action
  async fetch() {
    try {
      const response = await db.collection("jackets").get();
      this.jackets = await proccessResponse(response.docs);
      runInAction(() => {
        this.jackets = ['s'];
      })
    } catch (error) {
      throw error;
    }
  }
}

const proccessResponse = async (docs: any[]) => {
  console.log(docs);
  const a = docs.map((element: any) => element.data());
  return a;
};
