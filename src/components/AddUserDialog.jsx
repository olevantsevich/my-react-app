import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";




function AddUserDialog (props) {

const [form, setForm] = useState({
    name: "",
    email: "",
  });

const handleChange = (e) => {
  setForm ({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleClose = () => {
    setForm({
    name: "",
    email: "",
  });
  props.onClose ()
}

   return (

    <Dialog open={props.open} onClose={props.onClose}>
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
          <Button variant="contained" onClick={props.onSave}>Сохранить</Button>
        </DialogActions>
      </Dialog>
)

}

export default AddUserDialog