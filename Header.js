function Header() {
  return (
    <div className="header">
      <h1>💰 Smart Wealth Tracker</h1>
      <span>{new Date().toDateString()}</span>
    </div>
  );
}

export default Header;
