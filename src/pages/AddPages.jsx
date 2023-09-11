import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";

const AddPage = () => {
  const { pageValues, pageLabels, pagePlaceholders } = useContext(AppContext);
  const { pageValueTypes, addPage } = useContext(AppContext);
  return (
    <div className="flex-d-column">
      <h1>Add page content</h1>
      <Form
        initialValues={pageValues}
        labels={pageLabels}
        placeholders={pagePlaceholders}
        types={pageValueTypes}
        submit={addPage}
        submitLabel="Save and continue"
        useMedia
      />
    </div>
  );
};
export default AddPage;
