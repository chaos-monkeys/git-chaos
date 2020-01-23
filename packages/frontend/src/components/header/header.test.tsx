import React from "react";
import { render } from "@testing-library/react";
// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;
test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />);
  // Assertion
  // expect(getByTestId("hero-tasdsadsaitle")).toHaveTextContent("Gatsby is awesome!")
  expect(getByTestId("hero-title")).toMatchInlineSnapshot(`
    <h1
      data-testid="hero-title"
    >
      Gatsby is awesome!
    </h1>
  `);
  // --> Test will pass
});

// TODO: flip team layout + make less gross (componentise)
// TODO: add tests
// TODO: create vis diff tests
// TODO: review packages
// TODO: create blog page
// TODO: tidy up mess with TS files + paths
// TODO: create basic layout for chaos view
// TODO: add background text to header thing
// TODO: add a husky precommit that checks styleint. tsc, code coverage, and whagtevere;se
// TODO: lint-staged?
// TODO" versioning?
