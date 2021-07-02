import { Firestore } from "./firebase.config";

export const storeFormFirestore = (id, data) => {
  return Firestore.collection(`invitations`)
    .doc(id)
    .set({ ...data, createdAt: new Date().toLocaleString() });
};

export const isEntryExistsFirestore = async (id) => {
  const response = await Firestore.collection("invitations").doc(id).get();
  return response.exists ? response.data() : false;
};
