import { Heading, NavButton } from "nexious-library";

const Container = ({ filter, filtered, isFiltered, data }) => {
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="container">
      {/* <SectionHeader data={data} /> */}
      <Heading data={data.title} />
      {data.isNav && (
        <nav className="navbar">
          {data.nav.map((g) => (
            <NavButton data={g} click={handleClick} key={g.uid} />
          ))}
        </nav>
      )}
      <div className="card-container">
        {isFiltered
          ? filtered.map((fg) => <Card data={fg} key={fg.uid} />)
          : data.sections.map((g) => <Card data={g} key={g.uid} />)}
      </div>
    </section>
  );
};

export default Container;
const Card = () => {
  return <div className="card"></div>;
};
