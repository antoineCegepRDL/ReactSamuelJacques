interface HelloProps {
    name?: string
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