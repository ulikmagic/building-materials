import { DATABASE } from "@/config/firebase"
import { IProduct } from "@/types/api"
import { child, get, push, ref, update } from "firebase/database"

const parseData = (data: any) => Object.values(data)

export const getProducts: () => Promise<unknown[] | IProduct[]> = () =>
  get(child(ref(DATABASE), 'products'))
    .then((snapshot) => snapshot.exists() ? parseData(snapshot.val()) : [])

export const addProduct = (data: IProduct) => {
  const newKey = push(child(ref(DATABASE), 'products')).key;

  const updates: { [key: string]: any } = {};
  updates['products/' + newKey] = data;

  return update(ref(DATABASE), updates);
}