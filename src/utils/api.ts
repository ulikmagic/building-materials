import { IProduct } from "@/types/api"
import { child, get, getDatabase, ref } from "firebase/database"

const DB = getDatabase()

const parseData = (data: any) => Object.values(data)

export const getProducts: () => Promise<unknown[] | IProduct[]> = () =>
  get(child(ref(DB), 'products'))
    .then((snapshot) => snapshot.exists() ? parseData(snapshot.val()) : [])