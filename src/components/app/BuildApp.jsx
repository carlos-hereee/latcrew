import { useContext } from "react";
import { AppContext } from "../../utils/context/app/AppContext";
import { PaginateForm } from "nexious-library/@nxs-organism";
import { AuthContext } from "../../utils/context/auth/AuthContext";
// import { UploadFile } from "nexious-library/@nxs-molecules";

const BuildApp = ({ heading, cancelBtn, onClick }) => {
  const { appValues, appLabels, appPlaceholders } = useContext(AppContext);
  const { appValuesTypes } = useContext(AppContext);
  const { buildApp } = useContext(AuthContext);
  return (
    <div className="container">
      <h1 className="heading">{heading ? heading : "Initialize your app"}</h1>
      <PaginateForm
        // initialValues={appValues}
        // labels={appLabels}
        // placeholders={appPlaceholders}
        // types={appValuesTypes}
        // onSubmit={(payload) => buildApp(payload)}
        // submitLabel="Save and continue"
        // schema={{ required: ["appName"] }}
        start={1}
        totalPages={3}
        paginate={[
          {
            pageNumber: 1,
            initialValues: appValues,
          },
        ]}
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
