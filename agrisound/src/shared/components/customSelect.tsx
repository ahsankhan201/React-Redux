import * as React from 'react';
import { OutlinedInput, InputLabel, MenuItem, FormControl, Select } from '@mui/material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// interface CustomSelectProps {
//   options: 
// }
export const CustomSelect = ({
  options = [],
  onChange,
  isMulti,
  label = '',
  disabled = false,
  selectedValue = 'Choose',
  sx = { m: 1, width: '100%', margin: 0}
}: any) => {
  return (
    <FormControl sx={sx}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple={isMulti}
        value={selectedValue}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
        disabled={disabled}
      >
        <MenuItem value={'Choose'} disabled>
          Choose
        </MenuItem>
        {options?.map(({ label, value }:any) => (
          <MenuItem style={{ display: 'block' }} key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

