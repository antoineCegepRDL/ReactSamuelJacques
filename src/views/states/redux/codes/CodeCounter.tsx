import CodeHighligther from "components/styling/CodeHighligther";

const CodeCounter: React.FC = () => {
    const codeCounter = `
    import { useState } from 'react';

    import { useAppSelector, useAppDispatch } from '../../app/hooks';
    import {
      decrement,
      increment,
      incrementByAmount,
    } from './counterSlice';
    
    export function Counter() {
      const count = useAppSelector((state) => state.counter.value);
      const dispatch = useAppDispatch();
      const [incrementAmount, setIncrementAmount] = useState('2');
    
      const incrementValue = Number(incrementAmount) || 0;
    
      return (
        <div>
          <div>
            {/* Décrémente count dans le store */}
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>

            <span className={styles.value}>{count}</span>

            {/* Incrémente count dans le store */}
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          
          <div>
            {/* Set le hook (React useState, pas Redux) pour l'augmentation de count par valeur */}
            <input
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />

            {/* Incrémente par incrementAmount la valeur count dans le store*/}
            <button
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </button>
          </div>
        </div>
      );
    }
    `

    return (
        <CodeHighligther code={codeCounter} />
    );
}


export default CodeCounter;