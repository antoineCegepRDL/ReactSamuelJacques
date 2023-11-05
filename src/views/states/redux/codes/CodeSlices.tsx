import CodeHighligther from "components/styling/CodeHighligther";

const CodeSlices: React.FC = () => {
    const codeSlices = `
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';

    //Pour TypeScript
    export interface CounterState {
      value: number;
    }

    //Le premier état qu'il aura lors du lancement de l'application
    const initialState: CounterState = {
      value: 0,
    };

    //La Slice contenant le nom du state, on lui passe le state initial 👆 et les reducers
    export const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
        increment: (state) => {
          state.value += 1;
        },
        decrement: (state) => {
          state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        },
      },
    });

    //Crée les actions à partir des reducers dans counterSlice automatiquement 🤖
    export const { increment, decrement, incrementByAmount } = counterSlice.actions;

    //Crée les reducers
    export default counterSlice.reducer;
    `

    return (
        <CodeHighligther code={codeSlices} />
    );
}


export default CodeSlices;