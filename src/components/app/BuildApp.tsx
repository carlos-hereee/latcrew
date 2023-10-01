import { useContext, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { PaginateForm } from "nexious-library";
import { AuthContext } from "../../utils/context/auth/AuthContext";

type BuildAppProps = {
  heading?: string;
  cancelBtn?: boolean;
  onClick: (key: any) => void;
};

const BuildApp: React.FC<BuildAppProps> = ({ heading, cancelBtn, onClick }) => {
  const { landingPageForm, buildAppForm, sectionForm } = useContext(AppContext);
  const { buildApp } = useContext(AuthContext);
  const [formPage, setFormPage] = useState(0);
  // const entryValues = sectionValues;
  const [paginate, setPaginate] = useState<{ [key: string]: any }>([
    {
      formName: "appName",
      heading: "Initialize your app",
      initialValues: buildAppForm.initialValues,
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
  const handleFormSubmit = (event) => {
    setValues({ ...values, ...event });
    if (!values.landingPage) {
      // search for sub forms
      const hasCTA = event.landingPage.cta;
      const hasSubSection = event.landingPage.sections;
      if (hasCTA || hasSubSection) {
        if (hasCTA) initCta(hasSubSection);
        if (hasSubSection) initSubSection(hasCTA);
        setFormPage((prev) => prev + 1);
      } else buildApp(values);
    } else buildApp(values);
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
        <button type="button" className="btn-cancel" onClick={onClick}>
          Cancel
        </button>
      )}
    </div>
  );
};
export default BuildApp;
