import { Field } from "nexious-library/@nxs-molecules";

const EditAppName = ({ appName, onChange }) => {
  console.log("appName", appName);

  return <Field name="appName" value={appName} onChange={onChange} label="App name:" />;
};
export default EditAppName;
