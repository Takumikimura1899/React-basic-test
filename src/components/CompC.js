import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const CompC = () => {
  const { dispatchProvided } = useContext(AppContext);
  return <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>;
};

export default CompC;
