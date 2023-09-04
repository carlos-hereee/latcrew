import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";
import UploadFile from "./UploadFile";

const BuildPage = () => {
  const { app, pageValues, pageLabels, pagePlaceholders, pageValuesTypes } =
    useContext(AppContext);
  // console.log("pageValues", pageLabels);
  // console.log("pageValuesTypes", pageValuesTypes);
  return (
    <div>
      <h1 className="heading">Enter your app details</h1>
      <Form
        initialValues={pageValues}
        labels={pageLabels}
        placeholders={pagePlaceholders}
        types={pageValuesTypes}
      />
      <UploadFile />
    </div>
  );
};
export default BuildPage;
