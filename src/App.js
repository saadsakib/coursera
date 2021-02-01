import React from 'react';
import HomePage from './HomePage';

const App = () => {
  let subjects = [
    {
      name: 'Math',
      enrolled: true
    },
    {
      name: 'Computer Science',
      enrolled: false
    },
    {
      name: 'English',
      enrolled: false
    },
    {
      name: 'Physics',
      enrolled: true
    }
  ]

  return <HomePage subjects={subjects} />
}

export default App;