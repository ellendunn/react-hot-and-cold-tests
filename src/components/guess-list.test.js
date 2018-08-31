import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/ >)
  });

  it('Renders the correct guesses', () => {
    const guesses = [1, 2, 3, 4]
    const wrapper = shallow(<GuessList guesses={guesses}/>)
    const list = wrapper.find('li')
    expect(list.length).toEqual(guesses.length)
    guesses.forEach((value, index) => {
      expect(list.at(index).text()).toEqual(value.toString())
    })
  })

})
