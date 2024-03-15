import React from 'react';
import { useState, useEffect } from 'react';
import { VerticalTabs } from './components/VerticalTabs/VerticalTabs'
import { UserOperations } from './components/Services'
import { UserBox } from './components/UserBox/UserBox';

function App() {
  const [data, setData] = useState([])
  const getAllUsers = () => {
    const operations = new UserOperations()
    operations.fetchAllUsers()
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  const updateGrid = () => {
    getAllUsers()
  }
  return (
    <div>
      <div>User Management</div>
      <hr />
      <UserBox createHandler={updateGrid} />
      <hr />
      <VerticalTabs items={data} />
    </div>
  );
}

export default App;
