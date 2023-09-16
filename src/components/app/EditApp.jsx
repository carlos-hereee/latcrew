import { useContext } from "react";
import { AppContext } from "../../utils/context/app/AppContext";

const EditApp = ({ onClick }) => {
  const { editApp } = useContext(AppContext);
  console.log("editApp", editApp);
  return <div>EDIT APP</div>;
};
export default EditApp;
