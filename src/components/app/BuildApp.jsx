import { useContext } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { PaginateForm } from "nexious-library/@nxs-template";
import { AuthContext } from "../../utils/context/auth/AuthContext";
// import { UploadFile } from "nexious-library/@nxs-molecules";

const BuildApp = ({ heading, cancelBtn, onClick }) => {
  const { appValues, landingPageValues, landingPageLabels, landingPageTypes } =
    useContext(AppContext);
  const { buildApp } = useContext(AuthContext);
  const handleFormSubmit = (event) => {
    console.log("handle paginated form submit event", event);
  };
  return (
    <div className="container">
      <PaginateForm
        order={["landingPage", "appName"]}
        paginate={[
          {
            formName: "appName",
            heading: "Initialize your app",
            initialValues: appValues,
            submitLabel: "Save and continue",
            schema: { required: ["appName"] },
          },
          {
            formName: "landingPage",
            heading: "Build landing page",
            initialValues: landingPageValues,
            submitLabel: "Save and continue",
            labels: landingPageLabels,
            types: landingPageTypes,
          },
        ]}
        onFormSubmit={handleFormSubmit}
      />
      {cancelBtn && (
        <button type="button" className="btn-cancel" onClick={onClick}>
          Cancel
        </button>
      )}
    </div>
  );
};
export default BuildApp;
