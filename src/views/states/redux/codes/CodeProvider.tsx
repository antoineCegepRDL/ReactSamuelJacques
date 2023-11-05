import CodeHighligther from "components/styling/CodeHighligther";

const CodeCounter: React.FC = () => {
    const codeProvider = `
    import React from 'react';

    import { createRoot } from 'react-dom/client';
    import { Provider } from 'react-redux';
    import { store } from './app/store';
        
    import App from './App';
    
    const container = document.getElementById('root')!;
    const root = createRoot(container);
    
    root.render(
      <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
      </React.StrictMode>
    );
    `

    return (
        <CodeHighligther code={codeProvider} />
    );
}


export default CodeCounter;