import { useContext } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { PaginateForm } from "nexious-library/@nxs-template";
import { AuthContext } from "../../utils/context/auth/AuthContext";
// import { UploadFile } from "nexious-library/@nxs-molecules";

const BuildApp = ({ heading, cancelBtn, onClick }) => {
  const { landingPageValues, landingPageLabels, sectionValues } = useContext(AppContext);
  const { landingPageTypes } = useContext(AppContext);
  const { buildApp } = useContext(AuthContext);

  const initFormValues = (formName, data) => {};

  const handleFormSubmit = (event) => {
    // search for sub forms
    const hasCTA = event.landingPage.cta;
    const hasSubSection = event.landingPage.sections;
    if (hasCTA || hasSubSection) {
      hasSubSection && console.log("hasCTA", hasCTA, "has sub section", hasSubSection);
      hasCTA && console.log("hasCTA", hasCTA, "has sub section", hasSubSection);
      // console.log("handle paginated form submit event", event);
    } else {
      buildApp(event);
    }
  };
  return (
    <div className="container">
      {heading && <h2 className="heading">{heading}</h2>}
      <PaginateForm
        // order={["landingPage", "appName"]}
        paginate={[
          {
            formName: "appName",
            heading: "Initialize your app",
            // initialValues: { appName: "" },
            initialValues: { appName: "Sharkle and Shine" },
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
