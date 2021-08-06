import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import UserCard from '../UserCard';

describe('src/components/userCard/__test__/UserCard.test.js', () => {
  describe('<UserCard />', () => {
    it('should render tabs properly', () => {
      const wrapper = shallow(<UserCard info={{}}/>);
      expect(wrapper.find('Card')).to.have.length(1);
    });
  });
});