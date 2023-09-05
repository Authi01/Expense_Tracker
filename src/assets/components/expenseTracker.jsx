import React, { useState } from "react";

function ExpenseTracker() {
  let [expenses, setExpenses] = useState([]); //expenses
  let [description, setDescription] = useState(""); // form i/p - description
  let [amount, setAmount] = useState(""); // form i/p - amount
  // let [date, setDate] = useState(""); // form i/p - date

  const addExpense = () => {
    if (description && amount) {
      let newExpense = { description, amount: parseFloat(amount) }; //string to number
      setExpenses([...expenses, newExpense]); //spread operator // creates a copy of the array and updates the expense array
      setDescription("");
      setAmount("");
    }
  };

  function deleteExpense(index) {
    const updatedExpenses = expenses.filter((_, i) => i !== index); // Use a callback function with index parameter
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // for events - gets input for user
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.description}</span>
            <span>Rupees {expense.amount}</span>
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
