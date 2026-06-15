import { useState, useEffect, useRef } from 'react'
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import InputSearch from './components/InputSearch';
import SelectSort from './components/SelectSort';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState (false);
  const [selectedUser, setSelectedUser] = useState (null);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect (() => {
  setLoading (true);

    fetch ("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json ())
    .then (users => {
      setUsers (users);
      setLoading (false);
    })
    
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  if (sortType === 'name') {
    filteredUsers.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  if (sortType === 'company') {
    filteredUsers.sort((a, b) =>
      a.company.name.localeCompare(b.company.name)
    )
  }

if (loading) {
  return <p>Loading...</p>
}

  return (
    <div>
      <InputSearch search={search} setSearch={setSearch}/>
      <UserList users={filteredUsers} onSelectUser={setSelectedUser}/>
      <SelectSort sortType={sortType} setSortType={setSortType}/>
      <UserDetails user={selectedUser}/>
    </div>
 )
}

export default App