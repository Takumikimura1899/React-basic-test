import './App.css';
import ApiFetch from './components/ApiFetch';
import B from './components/B';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import AppContext from './contexts/AppContext';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className='App'>
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
        <B />
      </div>
    </AppContext.Provider>
  );
}

export default App;
