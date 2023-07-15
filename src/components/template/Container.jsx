import { Card } from "nexious-library/@nxs-organism";
import { Heading } from "nexious-library/@nxs-atoms";
import { NavButton } from "nexious-library/@nxs-molecules";
import { loadAsset } from "../../assets/getUrl";

const Container = ({ filter, filtered, isFiltered, data }) => {
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.services, content);
  };
  const onCardClick = (e) => {
    console.log("e", e);
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
        {data.body && <p className="p-stretch">{data.body}</p>}
        {isFiltered
          ? filtered.map((fg) => (
              <Card
                header={{ ...fg, hero: { ...fg.hero, url: loadAsset(fg.hero.url) } }}
                body={fg}
                footer={{ cta: fg.cta }}
                click={onCardClick}
                key={fg.uid}
              />
            ))
          : data.services.map((g) => (
              <Card
                header={{ ...g, hero: { ...g.hero, url: loadAsset(g.hero.url) } }}
                body={g}
                footer={{ cta: g.cta }}
                click={onCardClick}
                key={g.uid}
              />
            ))}
      </div>
    </section>
  );
};

export default Container;
