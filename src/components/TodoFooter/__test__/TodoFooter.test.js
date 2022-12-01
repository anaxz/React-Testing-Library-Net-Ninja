import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

// we need to wrap MockTodoFooter in a router or first test won't work
// numberOfIncompleteTasks => we need this to pass into test
// don't forget to return!
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}

it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={5} />
    );
    // should see 5 tasks displayed
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', () => {
  render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
  );
  const pElement = screen.getByText(/1 task left/i);
  expect(pElement).toBeInTheDocument();
});

it('p element should be truthy when the number of incomplete tasks is one', () => {
  render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
  );
  const pElement = screen.getByText(/1 task left/i);
  // as long as it doesn't return false/0 etc 
  expect(pElement).toBeTruthy();
});

it('"task" should be visible when the number of incomplete tasks is one', () => {
  render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
  );
  const pElement = screen.getByText(/1 task left/i);
  // this checks if it's visible to user
  // compared to toBeInTheDocument that only check if its in the doc
  expect(pElement).toBeVisible();
});

it('should contain p tag with correct text', () => {
  render(
      <MockTodoFooter 
        numberOfIncompleteTasks={1}
      />
  );
  const pElement = screen.getByText(/1 task left/i);
  //conatins the html tag p
  expect(pElement).toContainHTML('p');
});

it('should render correct text content', () => {
  render(
      <MockTodoFooter 
        numberOfIncompleteTasks={1}
      />
  );
  // p tag is not paragraph. would need to use testId instead
  // const pElement = screen.getByRole('paragraph');
  const pElement = screen.getByText(/1 task left/i);
  expect(pElement).toHaveTextContent("1 task left");
});

it('should render correct text content', () => {
  render(
      <MockTodoFooter 
        numberOfIncompleteTasks={1}
      />
  );
  const pElement = screen.getByText(/1 task left/i);
  expect(pElement).not.toBeFalsy();
});

it('should render correct text content', () => {
  render(
      <MockTodoFooter 
        numberOfIncompleteTasks={1}
      />
  );
  const pElement = screen.getByText(/1 task left/i);
  expect(pElement.textContent).toBe("1 task left");
});