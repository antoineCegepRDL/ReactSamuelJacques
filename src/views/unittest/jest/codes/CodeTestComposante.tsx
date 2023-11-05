import CodeHighligther from "components/styling/CodeHighligther";

const CodeHelloTest: React.FC = () => {
    const codeHelloTest = `
    import { render, screen } from '@testing-library/react';
    import Hello from "views/unittest/jest/composantes/Hello";
    
    //Tests
    it("Element présent", () => {
    
        render(<Hello />);
        const element = screen.getByText(/Hey/i);
        //Assert
        expect(element).toBeInTheDocument()
    });
    
    //Tests
    it("Avec sans nom", () => {
    
      //Act
      render(<Hello />);
      const elementStranger = screen.getByText(/Hey/i);
      //Assert
      expect(elementStranger.textContent).toBe("Hey, stranger");
    });
    
    it("Avec nom Alain", () => {
    
      //Act
      render(<Hello name="Alain" />);
      const elementAlain = screen.getByText(/Hello/i);
      //Assert
      expect(elementAlain.textContent).toBe("Hello, Alain!");
    });
    `

    return (
        <CodeHighligther code={codeHelloTest} />
    );
}


export default CodeHelloTest;