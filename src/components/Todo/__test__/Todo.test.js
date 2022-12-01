import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"

// todolist has todofooter that uses Link so must need mock router
const MockTodo = () => {
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    //get input by placeholder...
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // get add btn...
    const buttonElement = screen.getByRole("button", { name: /Add/i} );

    // check multiple tasks
    tasks.forEach((task) => {
        // expect the input value should change to task var
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render( <MockTodo /> );
    addTask(["Go Grocery Shopping"])

    //in todolist, there's todo.map inside is div which will be the task
    // check the div of the task is in doc
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render( <MockTodo /> );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

// check if styles changed after adding
it('task should not have complete class when initally rendered', () => {
    render(  <MockTodo /> );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    // make sure className is not active hence not completed
    expect(divElement).not.toHaveClass("todo-item-active")
});

// oppsite of above: when completed should be active
it('task should have complete class when clicked', () => {
    render( <MockTodo /> );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});

/** Other things you can test late:
 * clearing input, delete
 */