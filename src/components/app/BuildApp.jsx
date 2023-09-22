import { useContext, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { PaginateForm } from "nexious-library/@nxs-template";
import { AuthContext } from "../../utils/context/auth/AuthContext";
// import { UploadFile } from "nexious-library/@nxs-molecules";

const BuildApp = ({ heading, cancelBtn, onClick }) => {
  const { landingPageValues, landingPageLabels, sectionValues } = useContext(AppContext);
  const { landingPageTypes } = useContext(AppContext);
  const { buildApp } = useContext(AuthContext);
  const [formPage, setFormPage] = useState(0);
  // const entryValues = sectionValues;
  const [paginate, setPaginate] = useState([
    {
      formName: "appName",
      heading: "Initialize your app",
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
  ]);

  const initSubSection = (hasCTA) => {
    setPaginate((prev) => [
      ...prev,
      {
        formName: "section",
        heading: "Key app features",
        submitLabel: hasCTA ? "Save and continue" : "Publish app",
        initialValues: sectionValues,
        addEntry: { initialValues: sectionValues, label: "Add another" },
      },
    ]);
  };
  const initCta = (hasSubSection) => {
    setPaginate((prev) => [
      ...prev,
      {
        formName: "cta",
        heading: "Call To Action",
        submitLabel: hasSubSection ? "Save and continue" : "Publish app",
        initialValues: { label: "Book now!", link: "services" },
        placeholders: { link: "services" },
      },
    ]);
  };
  const handleFormSubmit = (event) => {
    // search for sub forms
    const hasCTA = event.landingPage.cta;
    const hasSubSection = event.landingPage.sections;
    if (hasCTA || hasSubSection) {
      if (hasCTA) initCta(hasSubSection);
      if (hasSubSection) initSubSection(hasCTA);
      setFormPage((prev) => prev + 1);
    } else buildApp(event);
  };
  return (
    <div className="container">
      {heading && <h2 className="heading">{heading}</h2>}
      <PaginateForm
        // order={["landingPage", "appName"]}
        page={formPage}
        setNewPage={setFormPage}
        paginate={paginate}
        onFormSubmit={handleFormSubmit}
      />
      {/* {cancelBtn && (
        <button type="button" className="btn-cancel" onClick={onClick}>
          Cancel
        </button>
      )} */}
    </div>
  );
};
export default BuildApp;
