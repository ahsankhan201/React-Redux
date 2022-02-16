import React from 'react';
import CSS from 'csstype';
import { Autocomplete, TextField, FormControl } from '@mui/material';

type AutocompleteMultiProps = {
  options:Array<string>,
  defaultValue:string[],
  disabled:boolean,
  onChange:(e:any, value:any)=>void,
  value:string[],
  sx:CSS.Properties
}
const AutocompleteMulti = (props:AutocompleteMultiProps)=> {
    return (
      <FormControl sx={props.sx}>
        <Autocomplete
          disabled={props.disabled}
          onChange={props.onChange}
          value={props.value}
          multiple
          id="tags-outlined"
          options={props.options}
          defaultValue={props.defaultValue}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Filters" placeholder="Filters" />
          )}
        />
      </FormControl>
    );
  }
export default AutocompleteMulti