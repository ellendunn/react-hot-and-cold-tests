import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />)
  });

  it('Should fire the onMakeGuess callback when submitted', () => {
    const callback = jest.fn()
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = '5';
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value)
  });

  it('Should not fire onMakeGuess if no input', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    expect(callback).not.toHaveBeenCalled();
  });

})
