import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { Loading, PaginateForm } from "nexious-library";
import { Form } from "nexious-library";
import { Button } from "nexious-library";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@app/utils/context/auth/AuthContext";
import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { AdminContext } from "@app/utils/context/admin/AdminContext";
import { FormValueProps } from "app-forms";

const EditApp = () => {
  const { appNameForm, pagesForm, sectionForm, landingPageForm } = useContext(AdminContext);
  const { editApp, ctaForm, editAppName } = useContext(AdminContext);
  const { app } = useContext(AppContext);
  // const navigate = useNavigate();

  // const [app, setApp] = useState<{ [key: string]: any }>({});
  const [isLoadingFormState, setLoadingFormState] = useState<boolean>(true);
  const [appValues, setAppValues] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    if (app) includeEditValues(app);
  }, [app]);
  const includeEditValues = (data: { [key: string]: any }) => {
    let pagesPayload: { [key: string]: any } = {};
    let mediaPayload: { [key: string]: any } = {};
    // include app pages
    const pages =
      data.menu && data.menu.length > 0 && data.menu.filter((item: any) => !item.isPrivate);
    // include social media
    if (!pages || pages.length === 0) pagesPayload = pagesForm.initialValues;
    data.media.socials?.length > 0 &&
      data.media.socials.forEach((social: any) => {
        mediaPayload[social.name] = social;
      });
    pages.forEach((p: any) => (pagesPayload[p.active.name] = p.active));
    const landingPageInitValuesPayload = {
      title: data.landing.title,
      tagline: data.landing.tagline,
      body: data.landing.body,
      hasCta: data.landing.hasCta ? data.landing.hasCta : landingPageForm.initialValues.hasCta,
      hasSections: data.landing.hasSections
        ? data.landing.hasSections
        : landingPageForm.initialValues.hasSections,
    };
    setAppValues([
      {
        formName: "appName",
        heading: "New app name",
        initialValues: { appName: data.appName },
        labels: appNameForm.labels,
        types: appNameForm.types,
        placeholders: appNameForm.placeholders,
        onSubmit: (e: FormValueProps) => editAppName(e, app.appId),
      },
      {
        formName: "landingPage",
        heading: "Update landing page data",
        initialValues: landingPageInitValuesPayload,
        labels: landingPageForm.labels,
        types: landingPageForm.types,
        placeholders: landingPageForm.placeholders,
        fieldHeading: { hasCta: "Call To Action", hasSections: "Subsections" },
        addEntry: {
          hasCta: {
            initialValues: ctaForm.initialValues,
            labels: ctaForm.labels,
            types: ctaForm.types,
            placeholders: ctaForm.placeholders,
            additionLabel: "Add another",
            removalLabel: "Remove",
            canMultiply: true,
          },
          hasSections: {
            initialValues: sectionForm.initialValues,
            labels: sectionForm.labels,
            types: sectionForm.types,
            placeholders: sectionForm.placeholders,
            removalLabel: "Remove",
            additionLabel: "Add another",
            canMultiply: true,
          },
        },
      },
      // {
      //   formName: "initPage",
      //   heading: "Add new page",
      //   initialValues: pagesPayload,
      //   labels: pagesForm.labels,
      //   types: pagesForm.types,
      //   placeholders: pagesForm.placeholders,
      //   addEntry: {
      //     cta: {
      //       initialValues: ctaForm.initialValues,
      //       labels: ctaForm.labels,
      //       types: ctaForm.types,
      //       placeholders: ctaForm.placeholders,
      //       fieldHeading: "Call To Action",
      //       additionLabel: "Add another",
      //       removalLabel: "Remove",
      //       canMultiply: true,
      //     },
      //     sections: {
      //       initialValues: sectionForm.initialValues,
      //       labels: sectionForm.labels,
      //       types: sectionForm.types,
      //       placeholders: sectionForm.placeholders,
      //       fieldHeading: "Subsections",
      //       removalLabel: "Remove",
      //       additionLabel: "Add another",
      //     },
      // },
      // {
      //   formName: "newsletter",
      //   initialValues: data.newsletter,
      //   labels: sectionForm.labels,
      //   types: sectionForm.types,
      //   placeholders: sectionForm.placeholders,
      // },
      // media: {
      //   initalValues: mediaPayload,
      //   labels: landingPageForm.labels,
      //   types: appNameForm.types,
      //   placeholders: appNameForm.placeholders,
      // },
      // themeList: {
      //   initalValues: data.themeList,
      //   labels: landingPageForm.labels,
      //   types: appNameForm.types,
      //   placeholders: appNameForm.placeholders,
      // },
    ]);
    setLoadingFormState(false);
  };

  if (!app) return <p>no app found</p>;
  return (
    <div>
      <h2 className="heading">Editing app: {app.appName}</h2>
      {isLoadingFormState ? (
        <Loading message="Loading app data" />
      ) : (
        <PaginateForm
          paginate={appValues}
          onFormSubmit={(data: FormValueProps) => editApp(data, app?.appId)}
        />
      )}
    </div>
  );
};
export default EditApp;
