import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Devices from "../Devices";

describe("src/components/devices/__test__/Devices.test.js", () => {
  describe("<Devices />", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = shallow(
        <Provider store={store}>
          <Devices />
        </Provider>
      );
    });

    it("should render tabs properly", () => {
      expect(wrapper.find("Devices")).to.have.length(1);
    });
  });
});
