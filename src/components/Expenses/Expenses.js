import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filter, setFilter] = useState(2023);
  const onFilterChange = (value) => setFilter(parseInt(value));

  const filteredExpenses = props.items.filter(
    (i) => i.date.getFullYear() === filter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onFilterChange={onFilterChange} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
