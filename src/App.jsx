import { useState, useEffect, useRef } from 'react'
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import InputSearch from './components/InputSearch';
import SelectSort from './components/SelectSort';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import AddUserDialog from './components/AddUserDialog';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState (false);
  const [selectedUser, setSelectedUser] = useState (null);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('');
  const [open, setOpen] = useState(false);

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

const handleOpen = () => {
  setOpen(true);
  };

const handleClose = () => {
  setOpen(false);
};



const handleSave = () => {
  const newUser = {
    id: Date.now(),
    name: form.name,
    email: form.email,
  };

  setUsers([...users, newUser]);
  handleClose();
};


  return (
    <div>
      <Stack direction="row" spacing={2} alignItems='center'>
        <InputSearch search={search} setSearch={setSearch}/>
        <SelectSort sortType={sortType} setSortType={setSortType}/>
        <Button variant="outlined" onClick={handleOpen}>Добавить пользователя</Button>
      </Stack>
      <UserList users={filteredUsers} onSelectUser={setSelectedUser} mySelectedUser={selectedUser}/>   
      <AddUserDialog open={open} onClose={handleClose} onClose={handleClose} onSave={handleSave}/>   
    </div>
 )
}

export default App