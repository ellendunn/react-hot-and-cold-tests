import React from 'react'
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  
  it('Renders without crashing', () => {
    shallow(<Feedback feedback='foo'/>);
  });

  it('Renders the feedback', () => {
    const test_feedback = 'foo';
    const wrapper = shallow(<Feedback feedback={test_feedback}  />);
    expect(wrapper.contains(test_feedback)).toEqual(true);
  })

})
