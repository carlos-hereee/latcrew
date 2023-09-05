import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";

const BuildPage = () => {
  const { app, pageValues, pageLabels, pagePlaceholders, pageValuesTypes } =
    useContext(AppContext);

  const handleSubmit = (e) => {
    console.log("e", e);
  };

  return (
    <div className="flex-d-column">
      <h1 className="heading">Initialize your app</h1>
      <Form
        initialValues={pageValues}
        labels={pageLabels}
        placeholders={pagePlaceholders}
        types={pageValuesTypes}
        submit={handleSubmit}
        submitLabel="Save and Continue"
      />
    </div>
  );
};
export default BuildPage;
