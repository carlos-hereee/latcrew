const HomePage = () => {
  return (
    <div className="container">
      <button type="button" className="btn-main" onClick={() => handlePages("account")}>
        Account settings
      </button>
      {page === "account" && pageShow[page] && <AccountSettings onClick={handlePages} />}
    </div>
  );
};
export default HomePage;
