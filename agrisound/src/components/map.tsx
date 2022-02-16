import React from 'react'
import { CustomSelect } from "../shared/components/customSelect";
import { useState, ChangeEvent } from 'react';
import { mapSampleData, mapFarms, mapGroups } from '../data/sampledata';
import AutocompleteMulti from '../shared/components/multiSelect';
import GoogleMapComp from '../shared/components/googleMap';
import { Button } from '@mui/material';
type mapSampleDataTypes = {
  deviceId: number,
  deviceName: string,
  siteId: number,
  siteName: string,
  farmId: number,
  farmName: string,
  groupId: number,
  groupName: string,
  location: { lat: number, lng: number },
  siteLocation: { lat: number, lng: number },
  rssi: number,
  battery: number,
  lastPublished: Date
}
interface defaultValuesTypes {
  filterByLevel: string,
  filterByPossibleValues: Array<string> ,
  filterBy: string[] ,
  groupBy: string,
  locationData: {} | mapSampleDataTypes,
}
const defaultValues: defaultValuesTypes = {
  filterByLevel: '',
  filterByPossibleValues: [],
  filterBy: [],
  groupBy: 'siteName',
  locationData: mapSampleData,
};
const groupByOptions = [
  { label: 'Device', value: 'deviceName' },
  { label: 'Site', value: 'siteName' },
];
const filterByOptions = [
  { label: 'Farm', value: 'farmName' },
  { label: 'Group', value: 'groupName' },
];
const selectStyle = { m: 1, width: '200px' };
const selectStyleMulti = { m: 1, minWidth: '416px' };
export default function GoogleMap() {
const [groupBy,setGroupBy] = useState(defaultValues.groupBy);
const [filterByLevel,setFilterByLevel] = useState(defaultValues.filterByLevel);
const [filterBy, setFilterBy] = useState(defaultValues.filterBy);
const [filterByPossibleValues, setFilterByPossibleValues] = useState(defaultValues.filterByPossibleValues);
//Group by 
  const onGroupLevelChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    setGroupBy(e.target.value)
  }
//Filter by
  const onFilterLevelChange= (e: ChangeEvent<HTMLInputElement>): void =>{
    const {value} = e.target;
    console.log(value)
    setFilterByLevel(value)
    let multifilterValue: any = valuesSelectionForMuliSelect(value)
    setFilterByPossibleValues(multifilterValue)
    console.log(valuesSelectionForMuliSelect(value))
    setFilterBy([])
  }
//Multi select
  const onFilterByChange = (e: ChangeEvent<HTMLInputElement>, value:any): void =>{
    setFilterBy(value)
  }
// RESET filters
const onReset = () =>{
  setGroupBy(defaultValues.groupBy)
  setFilterByLevel(defaultValues.filterByLevel)
  setFilterBy(defaultValues.filterBy)
}

  return (
    <div>
      <CustomSelect
          options={groupByOptions}
          onChange={onGroupLevelChange}
          label={'Group By'}
          selectedValue={groupBy}
          sx={selectStyle}
        />
        <CustomSelect
          options={filterByOptions}
          onChange={onFilterLevelChange}
          label={'Filter By'}
          selectedValue={filterByLevel}
          sx={selectStyle}
        />
        <AutocompleteMulti
          options={filterByPossibleValues}
          defaultValue={defaultValues.filterBy}
          disabled={filterByLevel === ''}
          onChange={(e,value) => onFilterByChange(e,value)}
          value={filterBy}
          sx={selectStyleMulti}
        />
        {filterBy.length>0 && <Button sx={{mt:'17px'}} onClick={onReset}>Reset</Button>}

        <GoogleMapComp/>
        
    </div>
  )
}
const valuesSelectionForMuliSelect = (option:string) =>{
  switch (option) {
    case 'farmName':
      return mapFarms.map((farm:any) => ({
        label: farm.farmName,
        value: farm.farmId,
      }));
    case 'groupName':
      return mapGroups.map((group:any) => ({
        label: group.groupName,
        value: group.groupId,
      }));
    }
}
