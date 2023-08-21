import { Card } from "nexious-library/@nxs-organism";
import { Heading } from "nexious-library/@nxs-atoms";
import { NavButton } from "nexious-library/@nxs-molecules";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";

const Container = ({ filter, filtered, isFiltered, data }) => {
  const { setActive } = useContext(ServicesContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.services, content);
  };
  const onCardClick = (e) => {
    setActive(e);
    navigate("/booking");
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
      {data.body && <p className="p-stretch">{data.body}</p>}
      <div className="card-container">
        {isFiltered
          ? filtered.map((fg) => (
              <Card
                header={fg}
                body={fg}
                footer={{ cta: fg.cta }}
                click={onCardClick}
                key={fg.uid}
              />
            ))
          : data.services.map((g) => (
              <Card
                header={g}
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
