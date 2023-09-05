import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import expenseLogo from "./assets/components/expenseTracker.gif";
import "./App.css";
import ExpenseTracker from "./assets/components/expenseTracker";

function App() {
  return (
    <>
      <div>
        <img src={expenseLogo} className="logo" alt="Expense Tracker Logo" />
      </div>
      <ExpenseTracker />
    </>
  );
}

export default App;
