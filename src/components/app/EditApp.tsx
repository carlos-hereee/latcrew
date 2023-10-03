import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { Loading, PaginateForm } from "nexious-library";
import { Form } from "nexious-library";
import { Button } from "nexious-library";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@app/utils/context/auth/AuthContext";
import { axiosAuth } from "@app/utils/axios/axiosAuth";
import { AdminContext } from "@app/utils/context/admin/AdminContext";

type EditAppProps = {
  cancelBtn?: boolean;
};
const EditApp: React.FC<EditAppProps> = ({ cancelBtn }) => {
  const { appNameForm, pagesForm, sectionForm, landingPageForm } = useContext(AdminContext);
  const { editApp, ctaForm } = useContext(AdminContext);
  const navigate = useNavigate();
  const queryParams = useLocation();
  const [app, setApp] = useState<{ [key: string]: any }>({});
  const [isLoadingFormState, setLoadingFormState] = useState<boolean>(true);
  const [appValues, setAppValues] = useState<{ [key: string]: any }[]>([]);
  // const appName = queryParams
  useEffect(() => {
    const getAppWithName = async (appName: string) => {
      const { data } = await axiosAuth.get(`/app/${appName}`);
      setApp(data);
      includeEditValues(data);
    };
    if (queryParams.search) {
      const appName = queryParams.search.split("=")[1];
      getAppWithName(appName);
    }
  }, [queryParams.search]);

  const includeEditValues = (data: { [key: string]: any }) => {
    let pagesPayload: { [key: string]: any } = {};
    let mediaPayload: { [key: string]: any } = {};
    let subSectionPayload: { [key: string]: any } = {};
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

    setAppValues([
      {
        formName: "appName",
        heading: "New app name",
        initialValues: { appName: data.appName },
        labels: appNameForm.labels,
        types: appNameForm.types,
        placeholders: appNameForm.placeholders,
      },
      {
        formName: "landingPage",
        heading: "Update landing page data",
        initialValues: data.landing,
        labels: landingPageForm.labels,
        types: landingPageForm.types,
        placeholders: landingPageForm.placeholders,
        addEntry: {
          cta: {
            initialValues: ctaForm.initialValues,
            labels: ctaForm.labels,
            types: ctaForm.types,
            placeholders: ctaForm.placeholders,
            fieldHeading: "Call To Action",
            additionLabel: "Add another",
          },
          sections: {
            initialValues: sectionForm.initialValues,
            labels: sectionForm.labels,
            types: sectionForm.types,
            placeholders: sectionForm.placeholders,
            fieldHeading: "Subsections",
            additionLabel: "Add another",
          },
        },
      },
      {
        formName: "initPage",
        initialValues: pagesPayload,
        labels: pagesForm.labels,
        types: pagesForm.types,
        placeholders: pagesForm.placeholders,
        addEntry: {
          cta: {
            initialValues: ctaForm.initialValues,
            labels: ctaForm.labels,
            types: ctaForm.types,
            placeholders: ctaForm.placeholders,
            fieldHeading: "Call To Action",
            additionLabel: "Add another",
          },
          sections: {
            initialValues: sectionForm.initialValues,
            labels: sectionForm.labels,
            types: sectionForm.types,
            placeholders: sectionForm.placeholders,
            fieldHeading: "Subsections",
            additionLabel: "Add another",
          },
        },
      },
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

  // console.log("app", appValues);
  if (!app) return <p>no app found</p>;
  return (
    <div>
      {/* {cancelBtn && <Button label="Go-back" onClick={() => navigate("/")} />} */}
      <h2 className="heading">Editing app: {app.appName}</h2>
      {isLoadingFormState ? (
        <Loading message="Loading app data" />
      ) : (
        <PaginateForm
          paginate={appValues}
          onFormSubmit={(e: any) => console.log("e", e)}
          page={1}
        />
      )}
      {/* <EditAppName appName={app.appName} onChange={handleChange} /> */}
      {/* {app.menu &&
        app.menu.map(
          (item) =>
            !item.isPrivate && (
              <div className="pages" key={item.menuId}>
                {item.active.label}
              </div>
            )
        )} */}
    </div>
  );
};
export default EditApp;
