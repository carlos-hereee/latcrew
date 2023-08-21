import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import Container from "../components/Container";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services } = useContext(AppContext);
  const { filtered, filter, isFiltered, cart } = useContext(ServicesContext);
  return (
    <Container
      data={services}
      filter={filter}
      filtered={filtered}
      isFiltered={isFiltered}
      cart={cart}
    />
  );
};

export default Services;
