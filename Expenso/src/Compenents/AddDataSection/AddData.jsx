import React, { useState } from "react";
import "./AddData.css";
import axios from "axios";

export const AddData = ({ setAddDataVisible, addDataVisible, userEmail }) => {
  const [transactionType, setTransactionType] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to current date
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (transactionType == "expense") {
      const expenseObj = {
        userEmail: userEmail,
        name: expenseName,
        date: date,
        value: cost,
        summary: summary,
      };

      axios
        .post(import.meta.env.VITE_REACT_APP_API_URL + "/AddExpense", expenseObj)
        .then((result) => {})
        .catch((err) => console.log(err));
    }

    if (transactionType == "saving") {
      const expenseObj = {
        userEmail: userEmail,
        name: expenseName,
        date: date,
        value: cost,
      };

      axios
        .post(import.meta.env.VITE_REACT_APP_API_URL + "/AddSaving", expenseObj)
        .then((result) => {})
        .catch((err) => console.log(err));
    }
    console.log("Form submitted:", {
      transactionType,
      expenseName,
      cost,
      date,
      summary,
    });
    // Reset form fields after submission if needed
    setTransactionType("");
    setExpenseName("");
    setCost("");
    setDate(new Date().toISOString().slice(0, 10)); // Reset to current date
    setSummary("");
  };

  return (
    <>
      <div className={`blurrAreaAdd ${addDataVisible ? "visible" : ""}`}>
        <form
          className={`add-data-form ${addDataVisible ? "visible" : ""}`}
          onSubmit={handleSubmit}
        >
          <div
            className="close-button"
            onClick={() => {
              setAddDataVisible(false);
            }}
          >
            &times;
          </div>
          <div className="form-group">
            <label htmlFor="transactionType">Transaction Type:</label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="saving">Saving</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expenseName">Name/Tag:</label>
            <input
              type="text"
              id="expenseName"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              placeholder="Enter name/tag"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Enter cost"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Enter summary"
              rows="4"
              className="textarea-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
