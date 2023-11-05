import CodeHighligther from "components/styling/CodeHighligther";

const CodeHello: React.FC = () => {
    const codeHello = `
    interface HelloProps {
        name: string
    }
    
    const Hello = ({name}: HelloProps) =>
    <>
        {name ?
            <h1>Hello, {name}!</h1>
            :
            <span>Hey, stranger</span>
        }
    </>
    
    export default Hello;
    `

    return (
        <CodeHighligther code={codeHello} />
    );
}


export default CodeHello;