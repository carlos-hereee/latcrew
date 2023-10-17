import { useContext, useEffect, useState } from "react";
import { AppContext } from "@context/app/AppContext";
import { Loading, PaginateForm } from "nexious-library";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { AddEntryProps, FormValueProps, InitPaginateFormProps } from "app-forms";
import { ReorderFormValueProps } from "app-forms";
import { useNavigate } from "react-router-dom";

const EditApp = () => {
  const { appNameForm, pagesForm, sectionForm, landingPageForm } = useContext(AdminContext);
  const { editApp, ctaForm, editAppName, editLandingPage } = useContext(AdminContext);
  const { landingPageFormOrder, sectionEntryOrganizer } = useContext(AdminContext);
  const { appName, landingPage, appId } = useContext(AppContext);

  const [isLoadingFormState, setLoadingFormState] = useState<boolean>(true);
  const [appValues, setAppValues] = useState<FormValueProps[]>([]);
  const navigate = useNavigate();

  const organizeValues = (props: ReorderFormValueProps): FormValueProps => {
    const { desiredOrder, withEntry, values } = props;
    const reorderedObject: FormValueProps = {};
    let canSkip: string[] = [];
    for (let i = 0; i < desiredOrder.length; i++) {
      const key = desiredOrder[i];
      // continue to next iteration if key is skippable
      if (!canSkip.includes(key)) {
        if (withEntry) {
          // if entry value found; get the index of the appropriate entry
          const entryIdx = withEntry.findIndex((entry) => entry.name === key);
          const target = withEntry[entryIdx]?.skipIfFalse;
          if (entryIdx >= 0 && target) {
            // skip appropriate value
            target && canSkip.push(target);
            if (!values[key]) reorderedObject[key] = values[key];
            else {
              // app proves entries to include
              const { form } = withEntry[entryIdx];
              const entryValues = Object.keys(form.initialValues);
              let payload: FormValueProps = {};
              entryValues.forEach((val) => {
                const valIdx = values[target].findIndex((data: FormValueProps) => data[val]);
                const data = values[target][valIdx][val];
                payload[val] = data;
              });
              if (!reorderedObject[target]) reorderedObject[target] = [payload];
              else reorderedObject[target] = [...reorderedObject[target], payload];
              reorderedObject[key] = values[key];
            }
            //  otherwise theres no match ;
          } else if (values.hasOwnProperty(key)) reorderedObject[key] = values[key];
          // otherwise reorder to desired Order
        } else if (values.hasOwnProperty(key)) reorderedObject[key] = values[key];
      }
    }
    return reorderedObject;
  };
  useEffect(() => {
    if (appName) {
      const landingValues = organizeValues({
        values: landingPage,
        desiredOrder: landingPageFormOrder,
        withEntry: sectionEntryOrganizer,
      });
      // reset values; avoid redundant data
      setAppValues([]);
      includeEditValues([
        {
          values: { appName, logo: "" },
          form: appNameForm,
          formName: "appName",
          onSubmit: (e: FormValueProps) => editAppName(e, appId),
          withFileUpload: true,
        },
        {
          values: landingValues,
          form: landingPageForm,
          formName: "landingPage",
          addEntries: sectionEntryOrganizer,
          onSubmit: (e: FormValueProps) => editLandingPage(e, appId),
        },
      ]);
    }
  }, [appName]);

  const includeEntries = (entries: AddEntryProps[]) => {
    let payload: { [key: string]: any } = {};
    entries.forEach((entry) => {
      const { form, name, canMultiply, skipIfFalse } = entry;
      const { initialValues, labels, placeholders, types } = form;
      const { removalLabel, additionLabel } = form;
      payload[name] = {
        initialValues,
        labels,
        placeholders,
        types,
        canMultiply,
        removalLabel,
        additionLabel,
        skipIfFalse,
      };
    });
    return payload;
  };
  const includeEditValues = (data: InitPaginateFormProps[]) => {
    data.forEach((formData) => {
      const { values, formName, addEntries, onSubmit, withFileUpload } = formData;
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
        onSubmit,
        withFileUpload,
      };
      setAppValues((prev) => [...prev, payload]);
    });
    setLoadingFormState(false);
  };
  if (!appId || isLoadingFormState) return <Loading message="Loading app data" />;
  return (
    <div>
      <h2 className="heading">Editing app: {appName}</h2>
      <PaginateForm
        paginate={appValues}
        // onFormSubmit={(data: FormValueProps) => editApp(data, appId)}
        onCancel={() => navigate("/")}
      />
      {/* <ButtonCancel label="Cancel" theme="mt-1" /> */}
    </div>
  );
};
export default EditApp;
