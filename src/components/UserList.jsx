import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function UserList (props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
    <List>
      {props.users.map((user) => (
        <ListItem
          key={user.id}
          onClick={() => props.onSelectUser(user)}
          style={{ cursor: 'pointer' }}
        >
          Имя: {user.name}, Email: {user.email}
        </ListItem>
      ))}
    </List>
    </Box>
  )
}

export default UserList