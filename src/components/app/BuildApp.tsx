import { useContext, useState } from "react";
import { PaginateForm } from "nexious-library";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { FormValueProps } from "app-forms";

const BuildApp = () => {
  const { landingPageForm, appNameForm, sectionForm, buildApp } = useContext(AdminContext);
  const navigate = useNavigate();

  // const entryValues = sectionValues;
  const [paginate, setPaginate] = useState<FormValueProps[]>([
    {
      formName: "appName",
      heading: "Initialize your app",
      initialValues: appNameForm.initialValues,
      types: appNameForm.types,
      labels: appNameForm.labels,
      placeholders: appNameForm.placeholders,
      submitLabel: "Save and continue",
      schema: { required: ["appName", "logo"] },
      onSubmit: buildApp,
    },
    {
      formName: "landing",
      heading: "Build landing page",
      initialValues: landingPageForm.initialValues,
      submitLabel: "Save and continue",
      labels: landingPageForm.labels,
      types: landingPageForm.types,
    },
  ]);

  return (
    <div className="container">
      <PaginateForm paginate={paginate} onCancel={() => navigate("/")} />
    </div>
  );
};
export default BuildApp;
