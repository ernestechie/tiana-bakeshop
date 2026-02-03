import { create } from "zustand";

import { ProductItem } from "../types/products";

type State = {
  favourites: ProductItem[];
};

type Actions = {
  addFavourite: (product: ProductItem) => void;
  removeFavourite: (product: ProductItem) => void;
};

export const useFavoritesStore = create<State & Actions>((set) => ({
  favourites: [],
  addFavourite: (product: ProductItem) => {
    return set((state) => ({ favourites: [...state.favourites, product] }));
  },
  removeFavourite: (product: ProductItem) => {
    return set((state) => ({
      favourites: state.favourites.filter((fav) => fav.id !== product.id),
    }));
  },
}));
