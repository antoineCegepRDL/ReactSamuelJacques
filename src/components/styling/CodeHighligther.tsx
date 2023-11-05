import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeHighligtherProps {
    code: string,
    language?: string,
}

const CodeHighligther = ({code, language='typescript'}: CodeHighligtherProps) => {

    return (
        <SyntaxHighlighter language={language} style={atelierCaveDark}>
            {code}
        </SyntaxHighlighter>
    );
}


export default CodeHighligther;