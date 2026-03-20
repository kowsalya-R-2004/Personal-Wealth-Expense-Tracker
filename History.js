function History({ transactions, deleteTransaction }) {
  return (
    <div className="card">
      <h3>History</h3>
      {transactions.length === 0 && <p>Start adding transactions 🚀</p>}

      {transactions.map(t => (
        <div key={t.id}>
          {t.title} ₹{t.amount}
          <button onClick={() => deleteTransaction(t.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default History;
