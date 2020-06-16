import { db, storage } from "src/utils/firebase";
import { action } from 'mobx';
import * as firebase from "firebase/app";

class AdminStore {

  @action.bound
  async create(data: Partial<Product>) {
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

  @action.bound
  async edit(data: Partial<Product>) {
    try {
      await db.collection("jackets").doc(data.id).update(data);
    } catch (error) {
      throw error;
    }
  }

  @action.bound
  async uploadFiles(files: File[]) {
    try {
      let fileURLs: string[] = [];
      files.forEach(async (file) => {
        const path = `jackets/${file.name}`;
        const metadata = { contentType: file.type };
        const uploadTask = storage.ref(path).put(file, metadata);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => { },
          error => {
            console.warn('File upload failed');
            // switch (error) {
            //   case 'storage/unauthorized':
            //     // User doesn't have permission to access the object
            //     break;

            //   case 'storage/canceled':
            //     // User canceled the upload
            //     break;
            //   case 'storage/unknown':
            //     // Unknown error occurred, inspect error.serverResponse
            //     break;
            // };
          },
          () => {
            console.warn('File upload complete');
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              fileURLs.push(downloadURL);
              console.log('File available at', downloadURL);
            });
          }
        );
      });
      return fileURLs;
    } catch (error) {
      throw error;
    }
  }
}

export const adminStore = new AdminStore();