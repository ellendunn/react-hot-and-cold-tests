import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  let seedGuesses = [];
  beforeAll(() => {
    for (let i=0; i<10; i++) {
      seedGuesses.push(Math.floor(Math.random() * 100) + 1)
    }
  })

  it('Renders without crashing', () => {
    shallow(<Game guesses={[seedGuesses]}/>);
  });

  it('Starts a new game on restart', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 2, 3],
      feedback: 'Hot or cold',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
    wrapper.instance().restartGame()
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  })

  it('Adds guess on Make Guess', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    })
    wrapper.instance().makeGuess(3);
    expect(wrapper.state('guesses')).toEqual([3])
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')

    wrapper.instance().makeGuess(68);
    expect(wrapper.state('guesses')).toEqual([3, 68])
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...')

    wrapper.instance().makeGuess(89);
    expect(wrapper.state('guesses')).toEqual([3, 68, 89])
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.')

    wrapper.instance().makeGuess(99);
    expect(wrapper.state('guesses')).toEqual([3, 68, 89, 99])
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!')

    wrapper.instance().makeGuess(100);
    expect(wrapper.state('guesses')).toEqual([3, 68, 89, 99, 100])
    expect(wrapper.state('feedback')).toEqual('You got it!')


  })


})
