import React from 'react'
import {shallow} from 'enzyme';

import GuessCount from './guess-count'

describe('<GuessCount />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessCount />)
  });

  it('Renders the guess count', () => {
    const guesses = '3'
    const wrapper=shallow(<GuessCount guessCount={guesses} />);
    expect(wrapper.text()).toEqual(`You have made ${guesses} guesses!`)
  })

})
