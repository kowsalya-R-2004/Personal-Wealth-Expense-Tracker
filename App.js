import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Form from "./components/Form";
import History from "./components/History";
import ChartComponent from "./components/ChartComponent";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Summary transactions={transactions} />
      <Form addTransaction={addTransaction} />
      <ChartComponent transactions={transactions} />
      <History transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
