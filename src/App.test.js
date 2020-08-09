import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App, { Parent } from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders learn react link', () => {
  const wrapper = mount(<Parent />)
  expect(wrapper.render().find("button")).toHaveLength(2);
});
