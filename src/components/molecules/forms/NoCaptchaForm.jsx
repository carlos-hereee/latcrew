import { getIn, useFormik } from "formik";
import Icons from "../icons/Icons";
import { labels } from "./labels";
import { placeholders } from "./placeholders";

const NoCaptchaForm = ({ data, schema, submit, isHorizontal, type }) => {
  const { handleSubmit, handleBlur, handleChange, values, errors } = useFormik({
    initialValues: data,
    onSubmit: (e) => submit(e, true),
    validationSchema: schema,
  });
  const change = (data) => {
    handleChange(data);
    submit(data.target.value);
  };
  return (
    <form className="form no-capcha-form" onSubmit={handleSubmit}>
      <div className={`form-fields ${isHorizontal && "horizontal-fields"}`}>
        {Object.keys(data).map((v) => (
          <div key={v} className="input-wrapper">
            <label htmlFor={v} className="label">
              <strong>
                {" "}
                {labels[v]}: <br />
              </strong>
              {errors[v] && <span className="required">{errors[v]}</span>}
            </label>
            <input
              type={labels[v]}
              autoComplete="on"
              name={v}
              value={getIn(values, v)}
              placeholder={placeholders[v]}
              onChange={type === "search" ? change : handleChange}
              onBlur={handleBlur}
              className="input"
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn-main">
        {type === "search" ? (
          <span>
            <Icons name="save" />
            Save
          </span>
        ) : (
          <span>
            <Icons name="submit" />
            Confirm
          </span>
        )}
      </button>
    </form>
  );
};
export default NoCaptchaForm;
