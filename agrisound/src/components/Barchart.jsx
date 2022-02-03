import React from "react";
import { useState, useEffect } from "react";
import CustomButton from "../shared/ui-toolkit/button";
import { CustomSelect } from "../shared/components/customSelect";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DurationFilter = ({ filters = [], onFilterChange }) => {
  return filters.map((filter, index) => (
    <CustomButton
      key={index}
      variant={filter.active ? "contained" : "outlined"}
      label={filter.title}
      onClick={() => onFilterChange(filter.title)}
    />
  ));
};
const onFilterChange = () => {};
function Barchart() {
  const [durantionFilters, setDurantionFilters] = useState([
    { title: "days", active: true },
    { title: "weeks", active: false },
    { title: "months", active: false },
  ]);
  const [chartOptions, setChartOptions] = useState({});
  const options = {
    title: {
      text: 'Pollinator Report',
    },
    xAxis: {
      categories: [
        'Apples',
        'Bananas',
        'Oranges',
        'Pineapples',
        'Blueberries',
      ],
    },
    yAxis: {
      title: {
        text: 'Fruit eaten',
      },
    },
    chart: {
      type: 'column',
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4, 0, 3],
      },
      {
        name: 'John',
        data: [5, 7, 3, 2, 4],
      },
      {
        name: 'Doe',
        data: [0, 0, 0, 1, 0],
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <DurationFilter
        filters={durantionFilters}
        onFilterChange={onFilterChange}
      />
      <hr style={{width:'100%'}}/>
      <CustomSelect label="Duration" />
      <hr style={{width:'100%'}}/>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Barchart;
