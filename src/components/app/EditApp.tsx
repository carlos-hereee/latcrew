import { useContext, useEffect, useState } from "react";
import { AppContext } from "@context/app/AppContext";
import { Loading, PaginateForm } from "nexious-library";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { AddEntryProps, FormValueProps, InitPaginateFormProps } from "app-forms";
import { ReorderFormValueProps } from "app-forms";

const EditApp = () => {
  const { appNameForm, pagesForm, sectionForm, landingPageForm } = useContext(AdminContext);
  const { editApp, ctaForm, editAppName, editLandingPage } = useContext(AdminContext);
  const { appName, landingPage, appId } = useContext(AppContext);

  const [isLoadingFormState, setLoadingFormState] = useState<boolean>(true);
  const [appValues, setAppValues] = useState<FormValueProps[]>([]);

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
      const landingOrder = ["title", "tagline", "body", "hasCta", "cta", "hasSections", "sections"];
      const landingEntry = [
        { name: "hasCta", form: ctaForm, canMultiply: true, skipIfFalse: "cta" },
        { name: "hasSections", form: sectionForm, canMultiply: true, skipIfFalse: "sections" },
      ];
      const landingValues = organizeValues({
        values: landingPage,
        desiredOrder: landingOrder,
        withEntry: landingEntry,
      });
      // reset values; avoid redundant data
      setAppValues([]);
      includeEditValues([
        {
          values: { appName },
          form: appNameForm,
          formName: "appName",
          onSubmit: (e: FormValueProps) => editAppName(e, appId),
        },
        {
          values: landingValues,
          form: landingPageForm,
          formName: "landingPage",
          addEntries: landingEntry,
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
      const { values, formName, addEntries, onSubmit } = formData;
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
      };
      setAppValues((prev) => [...prev, payload]);
    });
    setLoadingFormState(false);
  };

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
