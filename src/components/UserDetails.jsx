import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function UserDetails(props) {

  if (!props.user) {
    return <p>Пользователь не выбран</p>
  }

const { user: { name, email, phone, website, company } } = props;

  return (
    <Card sx={{ width: '100%', maxWidth: 340, mx: 'auto'}}>
      <Typography variant="h6">Данные пользователя:</Typography>
      <p>Имя: {name}</p>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
      <p>Сайт: {website}</p>
      <p>Компания: {company.name}</p>
    </Card>
  )
}

export default UserDetails