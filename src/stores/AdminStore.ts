import { db } from "src/utils/firebase";
import { action } from 'mobx';

class AdminStore {

  @action.bound
  async create(data: any) {
    try {
      await db.collection("jackets").add(data);
    } catch (error) {
      throw error;
    }
  }

  @action.bound
  async delete(id: string) {
    try {
      await db.collection("jackets").doc(id).delete();
    } catch (error) {
      throw error;
    }
  }
}

export const adminStore = new AdminStore();