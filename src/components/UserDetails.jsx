import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function UserDetails(props) {

  if (!props.user) {
    return <p>Пользователь не выбран</p>
  }

const { user: { name, email, phone, website, company } } = props;

  return (
    <Card sx={{width: '100%', maxWidth: 340, marginLeft: "15px"}}>
      <CardContent>
      <Typography variant="h6">Данные пользователя:</Typography>
      <Typography>Имя: {name}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Телефон: {phone}</Typography>
      <Typography>Сайт: {website}</Typography>
      <Typography>Компания: {company.name}</Typography>
      </CardContent>
      <CardActions>
         <Button variant="contained" onClick={props.onClose}>Скрыть детали</Button>
      </CardActions>
    </Card>
  )
}

export default UserDetails