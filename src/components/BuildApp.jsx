import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";

const BuildApp = () => {
  const { appValues, appLabels, appPlaceholders } = useContext(AppContext);
  const { appValuesTypes, buildApp } = useContext(AppContext);

  // const handleSubmit = (e) => {
  //   console.log("e", e);
  // };

  return (
    <div className="flex-d-column">
      <h1 className="heading">Initialize your app</h1>
      <Form
        initialValues={appValues}
        labels={appLabels}
        placeholders={appPlaceholders}
        types={appValuesTypes}
        submit={buildApp}
        submitLabel="Save and Continue"
        requireAllFields
        useMedia
      />
    </div>
  );
};
export default BuildApp;
