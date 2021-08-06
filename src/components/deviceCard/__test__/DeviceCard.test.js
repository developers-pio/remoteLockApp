import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DeviceCard from '../DeviceCard';

describe('src/components/deviceCard/__test__/DeviceCard.test.js', () => {
  describe('<DeviceCard />', () => {
    it('should render tabs properly', () => {
      const wrapper = shallow(<DeviceCard info={{}}/>);
      expect(wrapper.find('Card')).to.have.length(1);
    });
  });
});