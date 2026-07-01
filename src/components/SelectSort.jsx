import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

function SelectSort (props) {
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel id="sort-label">Сортировка</InputLabel>
        <Select
          labelId="sort-label"
          value={props.sortType}
          label="Сортировка"
          onChange={(e) => props.setSortType(e.target.value)}
        >
          <MenuItem value="">Без сортировки</MenuItem>
          <MenuItem value="name">Сортировка по имени (A-Я)</MenuItem>
          <MenuItem value="company">Сортировка по компании (А-Я)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectSort