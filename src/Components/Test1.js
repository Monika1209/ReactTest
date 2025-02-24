import React from 'react'

export const Test1 = () => {
  return (
    <>
        <h1>React Test 1</h1>
        <h2> I) Multiple Choice Questions:</h2>
        <h4>Q1: What is the primary purpose of props in React? </h4>
        <p>B) To pass data from one component to another</p>

        <h4>Q2: How do you pass props to a React component?</h4>
        <p> B) As attributes in the JSX tag </p>

        <h4>Q3: What happens if a prop is not passed to a component that expects it? </h4>
        <p> B) The prop is undefined </p>

        <h4>Q4: What is a common convention for structuring React projects? </h4>
        <p> B) Separating components, styles, and assets into different folders</p>

        <h4>Q5: In a React project, where is the main entry point typically located?</h4>
        <p> A) App.js </p>

        <h4>Q6: What is the recommended naming convention for React component files?</h4>
        <p> B) PascalCase (MyComponent.js) </p>

        <h4>Q7: What is JSX in React? </h4>
        <p> B) A syntax extension for JavaScript </p>

        <h4>Q8: Which of the following is a valid way to write a JSX expression? </h4>
        <p> A) <h1>{2 + 2}</h1> </p>

        <h4>Q9: What is the correct syntax for adding a class to a JSX element? </h4>
        <p> B) <div className="container"> </div> </p>

        <h4>Q10: What is the use of useState in React? </h4>
        <p> B) To manage component state</p>

        <h4>Q11: What is returned by useState? </h4>
        <p> B) A function to update state </p>

        <h4>Q12: How do you update state in useState? </h4>
        <p> B) Use the setter function returned by useState</p>

        <h4>Q13: What is useEffect used for in React? </h4>
        <p> B) Fetching data and performing side effects </p>

        <h4>Q14: What happens if you provide an empty dependency array [] in useEffect? </h4>
        <p> B) The effect runs only once after the initial render </p>

        <h4>Q15: What is the key difference between props and state in React? </h4>
        <p> C) props are passed from parent to child, while state is managed within a
        component  </p>

        <h4>Q16: How do you create a class component in React? </h4>
        <p> A) class MyComponent extends React.Component {} </p>

        <h4>Q17: What method is used to define state in a React class component? </h4>
        <p> C) constructor with this.state </p>

        <h4>Q18: What lifecycle method is used to perform side effects in class components?</h4>
        <p> A) componentDidMount  </p>

        <h4>Q19: What is NOT a valid way to apply CSS in React? </h4>
        <p> C) Using this.styles in a functional component</p>

        <h4>Q20: How do you apply conditional styling in React? </h4>
        <p> C) Both A and B  </p>

        <br/>   
        <hr/>

        <h3>II) Explain the role of props in React. How are they different from state?</h3>
        <p>Answer: Props are used to pass data from a parent component to a child component in React. They help make components reusable and dynamic. Props are read-only and cannot be modified by the child component.

        {/* <h6>Example: 
            const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;
        </h6> */}
        </p>

        <h3>III) What is JSX, and why is it used in React? </h3>
        <p>JSX is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript.
            <ul>
                <li>It is used in react to make the code more readable and maintainable.</li>
                <li>We can use JavaScript expressions inside {} within JSX.</li>
                <li>It provides syntax highlighting and error detection.</li>
            </ul>           
        </p>

        <h3>IV) What is the purpose of the useEffect hook? Provide an example of
        when you would use it. </h3>
        <p>The useEffect hook is used for handling side effects in functional components. It runs code after the component renders and can be used for:
            <ul>
                <li>Fetching data from an API</li>
                <li>Updating the DOM</li>
                <li>Setting up timers or event listeners</li>
            </ul>
        </p>

        <h3>V) Explain the different phases of the React component lifecycle in class
        components. </h3>
        <p>In class components, React's lifecycle has three main phases:
            <ul>
                <li>Mounting: The component is created and inserted into the DOM.</li>
                <li>Updating: The component re-renders when props or state change.</li>
                <li>Unmounting: The component is removed from the DOM.</li>
            </ul>
        </p>




    </>
  )
}
