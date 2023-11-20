import { Product } from "../types";

function sortByName(a: Product, b: Product) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export { sortByName };
