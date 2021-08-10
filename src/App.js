import React, { useReducer } from 'react';
import './App.css';
import Memo from './components/Memo';
// import ApiFetch from './components/ApiFetch';
// import B from './components/B';
// import BasicReducer from './components/BasicReducer';
// import CompB from './components/CompB';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import AppContext from './contexts/AppContext';

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case 'add_1':
      return currentState + 1;
    case 'multiple_3':
      return currentState * 3;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className='App'>
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        {/* <TimerContainer /> */}
        {/* <ApiFetch />
        <B /> */}
        {/* <BasicReducer /> */}
        {/* Count {count}
        <CompB /> */}
        <Memo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
