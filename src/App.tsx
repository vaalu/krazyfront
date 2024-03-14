import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { VerticalTabs } from './components/VerticalTabs/VerticalTabs'
import { envProps } from './EnvProps'
import { Box } from '@mui/material';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(envProps.urlFetchAll)
      .then(response => response.json())
      .then(json => setData(json))
      .then(() => {
        console.log('Data: ', data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div>
      <VerticalTabs items={data} />
    </div>
  );
}

export default App;
