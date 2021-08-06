import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Users from '../Users';

describe('src/components/users/__test__/Users.test.js', () => {
  describe('<Users />', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = shallow(
        <Provider store={store}>
          <Users />
        </Provider>
      );
    });

    it("should render tabs properly", () => {
      expect(wrapper.find("Users")).to.have.length(1);
    });
  });
});