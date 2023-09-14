import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";

const BuildApp = ({ heading }) => {
  const { appValues, appLabels, appPlaceholders } = useContext(AppContext);
  const { appValuesTypes, buildApp } = useContext(AppContext);

  return (
    <div className="flex-d-column">
      <h1 className="heading">{heading ? heading : "Initialize your app"}</h1>
      <Form
        initialValues={appValues}
        labels={appLabels}
        placeholders={appPlaceholders}
        types={appValuesTypes}
        onSubmit={buildApp}
        submitLabel="Save and Continue"
      />
    </div>
  );
};
export default BuildApp;
