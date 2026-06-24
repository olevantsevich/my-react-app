import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import UserDetails from './UserDetails';

function UserList (props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
    <List>
      {props.users.map((user) => (
        <>
          <ListItem
          key={user.id}
          onClick={() => props.onSelectUser(user)}
          style={{ cursor: 'pointer' }}
        >
          <Typography>Имя: {user.name}, Email: {user.email}</Typography>
        </ListItem>
        {props.mySelectedUser?.id === user.id ? 
        <UserDetails user={props.mySelectedUser} onClose={() => props.onSelectUser(null)}/>: null}
        </>
      ))}
    </List>
    </Box>
  )
}

export default UserList