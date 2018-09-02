import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react'
import Testable from './Testable'


describe('Testable component', () => {
  it('should be defined', () => {
    expect(Testable).toBeDefined();
  });

  it('Click should toggle state', () => {
    const component = shallow(<Testable />);
    component.find('.toggleState').simulate('click');
    expect(component.state().status).toEqual(true);
  });

});

