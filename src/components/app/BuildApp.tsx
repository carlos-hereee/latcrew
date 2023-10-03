import { useContext, useEffect, useState } from "react";
import { PaginateForm } from "nexious-library";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "@app/utils/context/admin/AdminContext";

type BuildAppProps = {
  heading?: string;
  cancelBtn?: boolean;
};

const BuildApp: React.FC<BuildAppProps> = ({ heading, cancelBtn }) => {
  const { landingPageForm, appNameForm, sectionForm, buildApp } = useContext(AdminContext);
  const [formPage, setFormPage] = useState(0);
  const [isBuild, setBuild] = useState(false);
  const navigate = useNavigate();

  // const entryValues = sectionValues;
  const [paginate, setPaginate] = useState<{ [key: string]: any }>([
    {
      formName: "appName",
      heading: "Initialize your app",
      initialValues: appNameForm.initialValues,
      submitLabel: "Save and continue",
      schema: { required: ["appName"] },
    },
    {
      formName: "landingPage",
      heading: "Build landing page",
      initialValues: landingPageForm.initialValues,
      submitLabel: "Save and continue",
      labels: landingPageForm.labels,
      types: landingPageForm.types,
    },
  ]);
  const [values, setValues] = useState<{ [key: string]: any }>({});

  const initSubSection = (hasCTA: boolean) => {
    setPaginate((prev) => [
      ...prev,
      {
        formName: "section",
        heading: "Key app features",
        submitLabel: hasCTA ? "Save and continue" : "Publish app",
        initialValues: sectionForm.initialValues,
        types: sectionForm.types,
        addEntry: { initialValues: sectionForm.initialValues, label: "Add another" },
      },
    ]);
  };
  const initCta = (hasSubSection: boolean) => {
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

  useEffect(() => {
    if (isBuild) {
      buildApp(values);
    }
  }, [isBuild]);
  const handleFormSubmit = (event: { [key: string]: any }) => {
    setValues({ ...values, ...event });
    if (!values.landingPage) {
      // search for sub forms
      const hasCTA = event.landingPage.cta;
      const hasSubSection = event.landingPage.sections;
      if (hasCTA || hasSubSection) {
        if (hasCTA) initCta(hasSubSection);
        if (hasSubSection) initSubSection(hasCTA);
        setFormPage((prev) => prev + 1);
      } else setBuild(true);
    } else setBuild(true);
  };
  return (
    <div className="container">
      {heading && <h2 className="heading">{heading}</h2>}
      <PaginateForm
        page={formPage}
        setNewPage={setFormPage}
        paginate={paginate}
        onFormSubmit={handleFormSubmit}
      />
      {cancelBtn && (
        <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
          Cancel
        </button>
      )}
    </div>
  );
};
export default BuildApp;
