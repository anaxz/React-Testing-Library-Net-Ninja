import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed into title prop', () => {
  render(<Header title={"My header"} />);
  // /my header/i => this is irregular expression so you can leave it lower case
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// test('should be able to see heading', () => {
//     render(<Header title={"My header"} />);
//     // role = the html tag
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// });

test('should be able to see h1 heading', () => {
    render(<Header title={"My header"} />);
    // role = the html tag. name = text inside header
    const headingElement = screen.getByRole("heading", { name: "My header" });
    expect(headingElement).toBeInTheDocument();
});

test('should render same text passed into title prop', () => {
    render(<Header title={"My header"} />);
    // when html tag has title, can test using that
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

test('should be able to see h1 by testId', () => {
    render(<Header title={"My header"} />);
    // would need this data-testid='header-1' in html tag
    const headingElement = screen.getByTestId('header-1')
    expect(headingElement).toBeInTheDocument();
});

// FIND BY

test('should render same text passed into title prop', async () => {
    render(<Header title={"My header"} />);
    // findby only works with async
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

//  QUERY BY

test('should render same text passed into title prop', async () => {
    render(<Header title={"My header"} />);
    // not works best with query
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument(); 
});

// gets all heading types and return as array
test('should render same text passed into title prop', async () => {
    render(<Header title={"My header"} />);
    const headingElements = screen.getAllByRole('heading');
    expect(headingElements.length).toBe(2);
});