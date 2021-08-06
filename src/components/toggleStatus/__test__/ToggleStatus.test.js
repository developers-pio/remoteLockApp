import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ToggleStatus from '../ToggleStatus';

describe('src/components/toggleStatus/__test__/ToggleStatus.test.js', () => {
  describe('<ToggleStatus />', () => {
    it('should render tabs properly', () => {
      const wrapper = shallow(<ToggleStatus/>);
      expect(wrapper.find('input')).to.have.length(1);
    });
  });
});