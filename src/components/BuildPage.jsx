import { useContext } from "react";
import { AppContext } from "../utils/context/app/AppContext";
import { Form } from "nexious-library/@nxs-organism";

const BuildPage = () => {
  const { app, pageValues, pageLabels, pagePlaceholders } = useContext(AppContext);
  // console.log("pageValues", pageLabels);
  return (
    <div>
      <h1 className="heading">Enter your app details</h1>
      <Form
        initialValues={pageValues}
        labels={pageLabels}
        placeholders={pagePlaceholders}
      />
    </div>
  );
};
export default BuildPage;
