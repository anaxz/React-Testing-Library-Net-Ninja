import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

// mocks the btn click 
const mockedSetTodo = jest.fn();

// in here, we are only testing user interaction
it('should render input element', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
});

it('should be able to type into input', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // test button here...
    fireEvent.click(inputElement)
    
    // test when you type in input, the value changes
    // param(element, whats the change)
    // changes the value to "Go Grocery Shopping" 
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
    expect(inputElement.value).toBe("Go Grocery Shopping");
});

it('should be able to type into input', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    const buttonElement = screen.getByRole("button", { name: /Add/i});
    fireEvent.click(buttonElement)
    expect(mockedSetTodo).toBeCalled()
});

it('should have empty input when add button is clicked', () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    //after add btn clicked, check if input value resets
    const buttonElement = screen.getByRole("button", { name: /Add/i});
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
});