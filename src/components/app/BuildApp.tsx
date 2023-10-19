import { useContext, useState } from "react";
import { PaginateForm } from "nexious-library";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { FormValueProps } from "app-forms";

const BuildApp = () => {
  const { landingPageForm, appNameForm, initApp, formErrors } = useContext(AdminContext);
  const navigate = useNavigate();
  const paginate: FormValueProps[] = [
    {
      formName: "appName",
      heading: "Initialize your app",
      initialValues: appNameForm.initialValues,
      types: appNameForm.types,
      labels: appNameForm.labels,
      placeholders: appNameForm.placeholders,
      submitLabel: "Save and continue",
      schema: { required: ["appName", "logo"] },
      onSubmit: initApp,
    },
    {
      formName: "landing",
      heading: "Build landing page",
      initialValues: landingPageForm.initialValues,
      submitLabel: "Save and continue",
      labels: landingPageForm.labels,
      types: landingPageForm.types,
      placeholders: landingPageForm.placeholders,
    },
  ];
  console.log("formErrors", formErrors);
  return (
    <div className="container">
      <PaginateForm
        paginate={paginate}
        onCancel={() => navigate("/")}
        responseError={formErrors.initAppFormError}
      />
    </div>
  );
};
export default BuildApp;
