import { createMainInstance } from "../axios";
import { errorHandler } from "../errorHandler";

const instance = createMainInstance();

export async function areasAndCategoriesLoader() {
  try {
    const resA = await instance.get("/area");
    const resC = await instance.get("/category");
    return { area: resA.data, category: resC.data };
  } catch (error) {
    return { error: errorHandler(error) };
  }
}
