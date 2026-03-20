import { useState } from "react";

function Form({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = () => {
    if (!title || !amount) return alert("Enter data");

    addTransaction({
      id: Date.now(),
      title,
      amount: +amount,
      category,
      type
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div className="card">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"/>
      
      <select onChange={e => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Rent</option>
      </select>

      <select onChange={e => setType(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Form;
