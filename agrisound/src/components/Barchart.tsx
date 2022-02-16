import React from "react";
import { useState, useEffect } from "react";
import CustomButton from "../shared/ui-toolkit/button";
import { CustomSelect } from "../shared/components/customSelect";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DenseTable from "../shared/components/denseTableMui";
import { datePickerDropDownConfig as selectDurationData } from "../data/sampledata";
import { pollinatorReportSampleData } from "../data/sampledata";


type DurationFilterProps = {
  filters:any[],
  onFilterChange:any
}
const DurationFilter = (props:DurationFilterProps): JSX.Element => {
  return<> 
    {props.filters.map((filter, index) => (
    <CustomButton
      key={index}
      variant={filter.active ? "contained" : "outlined"}
      label={filter.title}
      onClick={() => props.onFilterChange(filter.title)}
    />
  ))}
</>
};
let defaultActiveFilter = "days";

export default function Barchart() {
  const [selectDurations, setSelectDurations] = useState(defaultActiveFilter);
  const [chartOptions, setChartOptions] = useState({});
  const getDefaultDurationValue = (filter: any) => {
    return pollinatorReportSampleData[filter][0].value;
  };
  const [durationRange, setDurationRange] = useState(
    getDefaultDurationValue(defaultActiveFilter)
  );
  const getChartData = (filter: any, selectedDuration: any) => {
    return pollinatorReportSampleData[filter].slice(0, selectedDuration);
  };

  const [chartData, setChartData] = useState(
    getChartData(selectDurations, selectDurationData[selectDurations])
  );

  const [durantionFilters, setDurantionFilters] = useState([
    { title: "days", active: true },
    { title: "weeks", active: false },
    { title: "months", active: false },
  ]);

  useEffect(() => {
    setChartData(getChartData(selectDurations, durationRange));
  }, [selectDurations, durationRange]);

  const onFilterChange = (filter: any) => {
    setSelectDurations(filter);
    let updatedButtonsData = durantionFilters.map((item) => {
      return {
        ...item,
        active: filter === item.title ? !item.active : false,
      };
    });
    setDurantionFilters(updatedButtonsData);
  };
  const handleSelectChange = (e: any) => {
    setDurationRange(e.target.value);
  };
  useEffect(() => {
    let xAxisLabel: any = [];
    let seriesData: any = [];
    chartData?.forEach((item: any) => {
      xAxisLabel.push(item.label);
      seriesData.push(item.tempAverage);
    });
    const options = {
      title: {
        text: "Pollinator-Report",
      },
      xAxis: {
        categories: xAxisLabel,
      },
      yAxis: {
        title: {
          text: "Values",
        },
      },
      chart: {
        type: "column",
      },
      series: [
        {
          name: "Dates",
          data: seriesData,
        },
      ],
    };
    setChartOptions(options);
  }, [chartData]);

  const dayLightHours = chartData.map((item: any) => item.daylightHours);
  const averageWeatherRecords = chartData.map((item: any) => item.tempAverage);
  const windSpeeds = chartData.map((item: any) => item.wind);
  const temperatureRanges = chartData.map(({
    tempHigh,
    tempLow
  }: any) => ({
    tempLow,
    tempHigh,
  }));

  const tableData = [
    dayLightHours,
    averageWeatherRecords,
    windSpeeds,
    temperatureRanges,
  ];

  let names = ["Day Light Hours", "Weather", "Wind Speeds", "Day Temp"];
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
      <CustomSelect
        options={selectDurationData[selectDurations]}
        label="Duration"
        onChange={handleSelectChange}
      />
      <hr style={{ width: "100%" }} />
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
      <div>
        <DenseTable width={700} size={"medium"} names={names} relatedArray={tableData} />
      </div>
    </div>
  );
}
