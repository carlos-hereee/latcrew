import { useContext, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { Loading } from "nexious-library/@nxs-molecules";
import EditAppName from "./editApp/EditAppNam";
import { Form } from "nexious-library";
import { Button } from "nexious-library/@nxs-atoms";

const EditApp = ({ onClick }) => {
  const { editApp, isLoading, updateEditAppState } = useContext(AppContext);
  // const [values, setValues] = useState(editApp);
  // console.log("values", values);

  if (!editApp || isLoading) return <Loading message="Loading app assets .." />;
  console.log("editApp?", editApp);
  // const values = { appName: editApp.appName };
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.currentTarget.value;
    updateEditAppState({ ...editApp, [key]: value });
  };
  return (
    <div>
      <Button label="Go-back" handleClick={() => onClick("app")} />
      <h2 className="heading">Editing app: </h2>
      <EditAppName appName={editApp.appName} onChange={handleChange} />
      <h2 className="heading">Pages:</h2>
      {editApp.menu.map((item) => (
        <div className="pages" key={item.menuId}>
          {item.active.label}
        </div>
      ))}

      <p>themeList</p>
      <p>language</p>
      <p>newsletter</p>
      <p>calendar</p>
      {/* <Form initialValues={values} /> */}
    </div>
  );
};
export default EditApp;
