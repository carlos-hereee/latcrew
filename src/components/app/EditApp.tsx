import { useContext, useEffect, useState } from "react";
import { AppContext } from "@context/app/AppContext";
import { Loading, PaginateForm } from "nexious-library";
import { Form } from "nexious-library";
import { Button } from "nexious-library";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@app/utils/context/auth/AuthContext";
import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { AddEntryProps, FormValueProps, InitPaginateFormProps } from "app-forms";

const EditApp = () => {
  const { appNameForm, pagesForm, sectionForm, landingPageForm } = useContext(AdminContext);
  const { editApp, ctaForm, editAppName } = useContext(AdminContext);
  const { appName, landingPage, appId } = useContext(AppContext);
  // const navigate = useNavigate();

  const [isLoadingFormState, setLoadingFormState] = useState<boolean>(true);
  const [appValues, setAppValues] = useState<FormValueProps[]>([]);

  const organizeValues = (values: FormValueProps, desiredOrder: string[]) => {
    const reorderedObject: FormValueProps = {};
    desiredOrder.forEach((key) => {
      if (values.hasOwnProperty(key)) reorderedObject[key] = values[key];
    });
    return reorderedObject;
  };
  useEffect(() => {
    if (appName) {
      // reset values; avoid redundant data
      const landingOrder = ["title", "tagline", "body", "hasCta", "cta", "hasSections", "sections"];
      setAppValues([]);
      includeEditValues([
        { values: { appName }, form: appNameForm, formName: "appName" },
        {
          values: organizeValues(landingPage, landingOrder),
          form: landingPageForm,
          formName: "landingPage",
          addEntries: [
            { name: "hasCta", form: ctaForm, canMultiply: true },
            { name: "hasSections", form: sectionForm, canMultiply: true },
          ],
        },
      ]);
    }
  }, [appName]);

  const includeEntries = (entries: AddEntryProps[]) => {
    let payload: { [key: string]: any } = {};
    entries.forEach((entry) => {
      const { form, name } = entry;
      const { initialValues, labels, placeholders, types, canMultiply } = form;
      const { removalLabel, additionLabel } = form;
      payload[name] = {
        initialValues,
        labels,
        placeholders,
        types,
        canMultiply,
        removalLabel,
        additionLabel,
      };
    });
    return payload;
  };
  const includeEditValues = (data: InitPaginateFormProps[]) => {
    data.forEach((formData) => {
      const { values, formName, addEntries } = formData;
      const { heading, labels, placeholders, types, fieldHeading } = formData.form;
      const addEntry = addEntries ? includeEntries(addEntries) : undefined;
      // const initialValues = reOrderValues(values)
      const payload = {
        initialValues: values,
        placeholders,
        fieldHeading,
        formName,
        heading,
        labels,
        types,
        addEntry,
      };
      setAppValues((prev) => [...prev, payload]);
    });
    setLoadingFormState(false);
  };
  console.log("appValues", appValues);

  if (!appId) return <p>no app found</p>;
  return (
    <div>
      <h2 className="heading">Editing app: {appName}</h2>
      {isLoadingFormState ? (
        <Loading message="Loading app data" />
      ) : (
        <PaginateForm
          paginate={appValues}
          onFormSubmit={(data: FormValueProps) => editApp(data, appId)}
        />
      )}
    </div>
  );
};
export default EditApp;
