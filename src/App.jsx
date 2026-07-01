import { useState, useEffect, useRef } from 'react'
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import InputSearch from './components/InputSearch';
import SelectSort from './components/SelectSort';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState (false);
  const [selectedUser, setSelectedUser] = useState (null);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

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
  setForm({
    name: "",
    email: "",
  });
};

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить пользователя</DialogTitle>
        <DialogContent>
          <TextField
          margin="dense"
          label="Имя"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
          />
          <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={form.email}
          onChange={handleChange}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button variant="contained" onClick={handleSave}>Сохранить</Button>
        </DialogActions>
      </Dialog>   
    </div>
 )
}

export default App