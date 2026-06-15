import TextField from '@mui/material/TextField';

function InputSearch (props) {
  return (
    <TextField
      type="text"
      placeholder="Поиск по имени..."
      value={props.search}
      onChange={(e) => props.setSearch(e.target.value)}
      size='small'    
    />
  )
}

export default InputSearch