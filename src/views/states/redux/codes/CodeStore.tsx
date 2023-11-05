import CodeHighligther from "components/styling/CodeHighligther";

const CodeStore: React.FC = () => {
    const codeStore = `
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from '../features/counter/counterSlice';

    //Le store reçoit les reducers de l'application
    export const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    //On retourne le type de dispatch pour le réutiliser ailleurs avec TypeScript
    export type AppDispatch = typeof store.dispatch;

    //On retourne le type du state pour le réutiliser ailleurs avec TypeScript
    export type RootState = ReturnType<typeof store.getState>;    
    `

    return (
        <CodeHighligther code={codeStore} />
    );
}


export default CodeStore;