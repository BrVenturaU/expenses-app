import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) 
    return <h2 className="expenses-list__fallback">No expenses found...</h2>;

  return <ul className="expenses-list">
    {expenses.map((i) => (
      <ExpenseItem key={i.id} title={i.title} amount={i.amount} date={i.date} />
    ))}
  </ul>;
};

export default ExpensesList;
