import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({onAddExpense}) => {
  const [mustShowForm, setMustShowForm] = useState(false)
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const handleChange = (property) => (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        [property]: event.target.value
    }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({...expense, amount: +expense.amount, date: new Date(expense.date)});
    handleReset();
  }

  const handleReset = () => {
    setExpense({
      title: "",
      amount: 0,
      date: "",
    })

    handleShowForm();
  }

  const handleShowForm = () => {
    setMustShowForm((prevState) => !prevState);
  }

  if(!mustShowForm)
    return <button onClick={handleShowForm}>Add new expense</button>
  
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title..."
            value={expense.title}
            onChange={handleChange('title')}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            placeholder="0"
            value={expense.amount}
            onChange={handleChange('amount')}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            placeholder="dd/mm/aaaa"
            value={expense.date}
            onChange={handleChange('date')}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
