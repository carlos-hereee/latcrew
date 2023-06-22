const Container = ({ filter, filtered, isFiltered, data }) => {
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="container">
      {/* <SectionHeader data={data} /> */}
      {/* {data.isNav && (
        <nav className="navbar">
          {data.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} key={g} />
          ))}
        </nav>
      )} */}
      <div className="card-container">
        {/* {isFiltered
          ? filtered.map((fg) => <Card data={fg} key={fg.uid} />)
          : data.sections.map((g) => <Card data={g} key={g.uid} />)} */}
      </div>
    </section>
  );
};

export default Container;
