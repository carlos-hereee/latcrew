import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { Loading } from "nexious-library";
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
  const { editApp } = useContext(AdminContext);
  const navigate = useNavigate();
  const queryParams = useLocation();
  const [app, setApp] = useState<{ [key: string]: any }>({});
  const [appValues, setAppValues] = useState<{ [key: string]: any }>({});
  console.log("pagesForm", pagesForm);
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
    const pagesPayload: { [key: string]: any } = {};
    const mediaPayload: { [key: string]: any } = {};
    const subSectionPayload: { [key: string]: any } = {};
    // console.log("data", data);
    // include app pages
    const pages =
      data.menu && data.menu.length > 0 && data.menu.filter((item: any) => !item.isPrivate);
    // include social media

    data.media.socials?.length > 0 &&
      data.media.socials.forEach((social: any) => {
        mediaPayload[social.name] = social;
      });
    pages.forEach((p: any) => (pagesPayload[p.active.name] = p.active));

    setAppValues({
      appName: {
        initialValues: { appName: data.appName },
        labels: appNameForm.labels,
        types: appNameForm.types,
        placeholders: appNameForm.placeholders,
      },
      landing: {
        initalValues: data.landing,
        labels: landingPageForm.labels,
        types: landingPageForm.types,
        placeholders: landingPageForm.placeholders,
      },
      pages: {
        initalValues: pagesPayload,
        labels: pagesForm.labels,
        types: pagesForm.types,
        placeholders: pagesForm.placeholders,
      },
      // media: {
      //   initalValues: mediaPayload,
      //   labels: landingPageForm.labels,
      //   types: appNameForm.types,
      //   placeholders: appNameForm.placeholders,
      // },
      newsletter: {
        initalValues: data.newsletter,
        labels: sectionForm.labels,
        types: sectionForm.types,
        placeholders: sectionForm.placeholders,
      },
      // themeList: {
      //   initalValues: data.themeList,
      //   labels: landingPageForm.labels,
      //   types: appNameForm.types,
      //   placeholders: appNameForm.placeholders,
      // },
    });
  };

  console.log("app", appValues);
  if (!app) return <p>no app found</p>;
  return (
    <div>
      {/* {cancelBtn && <Button label="Go-back" onClick={() => navigate("/")} />} */}
      <h2 className="heading">Editing app: {app.appName}</h2>
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

      {/* <p>themeList</p>
      <p>language</p>
      <p>newsletter</p>
      <p>calendar</p> */}
      {/* <Form initialValues={values} /> */}
    </div>
  );
};
export default EditApp;
