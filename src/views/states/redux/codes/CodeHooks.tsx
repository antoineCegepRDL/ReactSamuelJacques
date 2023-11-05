import CodeHighligther from "components/styling/CodeHighligther";

const CodeHooks: React.FC = () => {
    const codeStore = `
    import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
    import type { RootState, AppDispatch } from './store';
    
    export const useAppDispatch = () => useDispatch<AppDispatch>();
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    `

    return (
        <CodeHighligther code={codeStore} />
    );
}


export default CodeHooks;