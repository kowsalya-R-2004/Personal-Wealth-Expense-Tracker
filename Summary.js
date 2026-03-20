function Summary({ transactions }) {
  let income = 0, expense = 0;

  transactions.forEach(t => {
    if (t.type === "Income") income += t.amount;
    else expense += t.amount;
  });

  return (
    <div className="summary">
      <div>Income ₹{income}</div>
      <div>Expense ₹{expense}</div>
      <div>Balance ₹{income - expense}</div>
    </div>
  );
}

export default Summary;
