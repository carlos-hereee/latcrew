import { getIn, useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../molecules/icons/Icons";
import { schema } from "../molecules/forms/schema";
import { types } from "../molecules/forms/types";
import { placeholders } from "../molecules/forms/placeholders";

const Forms = ({ data, submit }) => {
  const textarea = ["message"];

  const { handleSubmit, handleBlur, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: data,
      onSubmit: (e) => submit(e),
      validationSchema: schema(data),
    });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-fields">
        {Object.keys(data.values).map((v) => (
          <div key={v} className="input-wrapper">
            <label htmlFor={v} className="label">
              <strong>{v.charAt(0).toUpperCase() + v.slice(1)} </strong>
              {errors[v] && <span className="required">{errors[v]}</span>}
            </label>
            {textarea.includes(v) ? (
              <textarea
                type="text"
                name={v}
                value={getIn(values, v)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <input
                type={types[v]}
                autoComplete="on"
                name={v}
                value={getIn(values, v)}
                placeholder={placeholders[v]}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
            )}
          </div>
        ))}
      </div>

      <div className="form-submit">
        {errors["recaptcha"] && <span className="required">{errors.recaptcha}</span>}
        <ReCAPTCHA
          theme="dark"
          sitekey={import.meta.env.VITE_SITE_KEY}
          onChange={(e) => setFieldValue("recaptcha", e)}
          size={window.screen.width < 481 ? "compact" : "normal"}
        />
      </div>
      <button type="submit" className="btn btn-classic">
        <Icons name="submit" /> Submit
      </button>
    </form>
  );
};

export default Forms;
