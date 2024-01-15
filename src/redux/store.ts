import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import menuReducer from "./features/menu/menuSlice";
import cartReducer from "./features/cart/cartSlice";
import messageReducer from "./features/message/messageSlice";

const menuPersistConfig = {
  key: "menu",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const messagePersistConfig = {
  key: "message",
  storage,
};

const persistedMenuReducer = persistReducer(menuPersistConfig, menuReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedMessageReducer = persistReducer(messagePersistConfig, messageReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: {
    menu: persistedMenuReducer,
    cart: persistedCartReducer,
    message: persistedMessageReducer,
  },
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
