import "./Chart.css";

import ChartBar from "./ChartBar";
const Char = (props) => {
  const maxValue = Math.max(...props.dataPoints.map((dp) => dp.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dp) => {
        return (
          <ChartBar
            key={dp.id}
            value={dp.value}
            maxValue={maxValue}
            label={dp.label}
          />
        );
      })}
    </div>
  );
};

export default Char;
