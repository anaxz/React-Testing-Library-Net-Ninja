import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

// followersList has link so need to mock it
const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    beforeEach(() => {
        jest.mock("../../../__mocks__/axios")
    })

    it('should fetch and render input element', async () => {
        render( <MockFollowersList /> );
        // `follower-item-0` -> only period of time this exists so need to await it
        // can't use getByTestId for async so use findByTestId instead
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
    
    it('should fetch and render input element', async () => {
        render( <MockFollowersList /> );
    
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        // screen.debug()
        expect(followerDivElement).toBeInTheDocument();
    });
})

/** react by default resets mock everytime so to fix this (not recommended usually):
 * goto node_modules > react-scripts > scripts > utils > createJestConfig.js
 * line 69: resetMocks: false
 * now first test should pass with the mock axios file
 * OR!!!!
 * in package.json put:
 * "jest": {
    "resetMocks": false
  },
 */

  /** screen.debug => console.logs the element */