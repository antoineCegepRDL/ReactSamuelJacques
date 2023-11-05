import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/MenuSlice';

//Le store reçoit les reducers de l'application
export const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
});

//On retourne le type de dispatch pour le réutiliser ailleurs avec TypeScript
export type AppDispatch = typeof store.dispatch;

//On retourne le type du state pour le réutiliser ailleurs avec TypeScript
export type RootState = ReturnType<typeof store.getState>;