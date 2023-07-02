import { Card } from "nexious-library/@nxs-organism";
import { Heading } from "nexious-library/@nxs-atoms";
import { NavButton } from "nexious-library/@nxs-molecules";

const Container = ({ filter, filtered, isFiltered, data }) => {
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="container">
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
          ? filtered.map((fg) => (
              <Card header={fg} body={fg} footer={fg} key={fg.uid} />
            ))
          : data.sections.map((g) => (
              <Card header={g} body={g} footer={g} key={g.uid} />
            ))}
      </div>
    </section>
  );
};

export default Container;
