import { observable, action, runInAction } from "mobx";
import { db } from "src/utils/firebase";
import * as firebase from "firebase/app";

interface FetchParams {
  collection: string;
  fieldPath: string;
  opStr: firebase.firestore.WhereFilterOp;
  value: string;
}
type Seasson = 'AUTUMN' | 'WINTER' | 'SPRING' | 'SUMMER';
type Label = 'NEW' | 'SALE' | 'DISCOUNT';
interface Product {
  id: string;
  name: string;
  description: string;
  discount: string;
  label: Label;
  images: File[];
  price: string;
  collection: Seasson[];
}

export class ProductsStore {
  @observable data: Partial<Product>[] = [];
  @observable category: string = 'all';

  @action.bound
  async fetch(params?: FetchParams) {
    try {
      let response: firebase.firestore.QuerySnapshot;
      if (params) {
        const { fieldPath, opStr, value } = params;
        response = await db.collection(this.category).where(fieldPath, opStr, value).get();
      } else {
        response = await db.collection(this.category).get();
      }
      runInAction(() => {
        this.data = proccessResponse(response.docs);
      })
    } catch (error) {
      throw error;
    }
  }
}

const proccessResponse = (docs: firebase.firestore.DocumentSnapshot[]) => (
  docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
);

export const productsStore = new ProductsStore();
