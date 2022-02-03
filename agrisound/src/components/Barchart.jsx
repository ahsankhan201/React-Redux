import React from "react";
import { useState, useEffect } from "react";
import CustomButton from "../shared/ui-toolkit/button";
import { CustomSelect } from "../shared/components/customSelect";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DenseTable from "../shared/components/denseTableMui";
import { datePickerDropDownConfig as selectDurationData } from "../data/sampledata";
import {pollinatorReportSampleData} from "../data/sampledata";

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
function Barchart() {
  const [selectDurations, setSelectDurations] = useState("days");
  const [chartOptions, setChartOptions] = useState({});
  
  const getChartData = (filter, selectedDuration) => {
    return pollinatorReportSampleData[filter].slice(0, selectedDuration);
  }
  const [chartData, setChartData] = useState(getChartData("days", selectDurationData[selectDurations]));

  const [durantionFilters, setDurantionFilters] = useState([
    { title: "days", active: true },
    { title: "weeks", active: false },
    { title: "months", active: false },
  ]);
  const onFilterChange = (filter) => {
    let updatedButtonsData = durantionFilters.map((item) => {
      
      return {
        ...item,
        active: filter === item.title ? !item.active : false,
      };
    });
    setDurantionFilters(updatedButtonsData);
    setSelectDurations(filter)
  };
  const handleSelectChange = (e) =>{
    console.log(e.target.value)
  }
  useEffect(() => {
      let xAxisLabel = [];
      let seriesData = [];
      chartData?.forEach((item) => {
        xAxisLabel.push(item.label);
        seriesData.push(item.tempAverage);
      });
      const options = {
        title: {
          text: 'Pollinator Report',
        },
        xAxis: {
          categories: xAxisLabel,
        },
        yAxis: {
          title: {
            text: 'Values',
          },
        },
        chart: {
          type: 'column',
        },
        series: [
          {
            name: 'Dates',
            data: seriesData,
          },
        ],
      };
      setChartOptions(options);
    },
    [chartData]
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-arround",
        flexWrap: "wrap",
        margin: "5px",
      }}
    >
      <DurationFilter
        filters={durantionFilters}
        onFilterChange={onFilterChange}
      />
      <hr style={{ width: "100%" }} />
      <CustomSelect options={selectDurationData[selectDurations]}  label="Duration" onChange={handleSelectChange} />
      <hr style={{ width: "100%" }} />
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
      <div>
        <DenseTable />
      </div>
    </div>
  );
}

export default Barchart;
