import React from "react";
import ELink from "./Link";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ELink>test</ELink>).toJSON();
  expect(tree).toMatchSnapshot();
});
