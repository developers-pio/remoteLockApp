import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';

describe('src/app.test.js', () => {
  describe('<App />', () => {
    it('should render tabs properly', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Tabs')).to.have.length(1);
    });
  });
});