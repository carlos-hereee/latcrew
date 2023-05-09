import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import Container from "../components/template/Container";

const Services = () => {
  const { services } = useContext(AppContext);
  console.log("services", services);
  return <Container />;
};

export default Services;
