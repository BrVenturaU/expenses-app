import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { id: Math.random(), value: 0, label: "Jan" },
    { id: Math.random(), value: 0, label: "Feb" },
    { id: Math.random(), value: 0, label: "Mar" },
    { id: Math.random(), value: 0, label: "Apr" },
    { id: Math.random(), value: 0, label: "May" },
    { id: Math.random(), value: 0, label: "Jun" },
    { id: Math.random(), value: 0, label: "Jul" },
    { id: Math.random(), value: 0, label: "Aug" },
    { id: Math.random(), value: 0, label: "Sep" },
    { id: Math.random(), value: 0, label: "Oct" },
    { id: Math.random(), value: 0, label: "Nov" },
    { id: Math.random(), value: 0, label: "Dec" },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
