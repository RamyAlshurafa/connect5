import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router-dom";

import SessionDetails from "./index";

test("Session matches snapshot", () => {
  const context = {};
  const object = {
    date: 123,
    type: 1,
    attendees: 10,
    surveyURL1: "123",
    surveyURL2: "123",
  };
  const component = renderer.create(
    <StaticRouter context={context}>
      <SessionDetails sessionDetails={object} />
    </StaticRouter>,
  );
  expect(component).toMatchSnapshot();
});
