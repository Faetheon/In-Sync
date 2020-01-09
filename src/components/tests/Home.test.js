// Configure adapter
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Test
import React from "react";
import { shallow, mount, render } from "enzyme";

import Home from "../App/Menu/Home.tsx";

test("Returns html string", () => {
  expect(shallow(<Home />).type("string")).toBe(true);
});

// // test file
// import { shallow, mount, render } from "enzyme";

// const wrapper = shallow(<Foo />);
