import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./slices/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
};
const persistedCart = persistReducer(persistConfig, cartReducers);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
  },
});

export const persistor = persistStore(store);
