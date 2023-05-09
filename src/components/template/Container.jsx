import ButtonLink from "../atoms/buttons/ButtonLink";
import Buttons from "../molecules/buttons/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import Card from "../organisms/Card";

const Container = ({ filter, filtered, isFiltered, data, cart, link }) => {
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="secondary-container">
      <CardHeader data={data} />
      {data.isNav && (
        <nav className="navbar">
          {data.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} key={g} />
          ))}
        </nav>
      )}
      {cart.length > 0 && <ButtonLink link={link} />}
      <div className="card-container">
        {isFiltered
          ? filtered.map((fg) => <Card data={fg} key={fg.uid} />)
          : data.sections.map((g) => <Card data={g} key={g.uid} />)}
      </div>
    </section>
  );
};

export default Container;
