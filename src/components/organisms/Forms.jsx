import { getIn, useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import Icons from "../molecules/icons/Icons";
import { schema } from "../molecules/forms/schema";

const Forms = ({ data, submit }) => {
  const textarea = ["message"];
  const types = {
    password: "password",
    confirmPassword: "password",
    email: "text",
    name: "text",
    phone: "number",
  };

  const { handleSubmit, handleBlur, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: data.values,
      onSubmit: (e) => submit(e),
      validationSchema: schema(data.values),
    });

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data.values).map((v) => (
        <div key={v}>
          <div>
            <label htmlFor={v}>
              {v.charAt(0).toUpperCase() + v.slice(1)}{" "}
              {errors[v] && <span className="required">{errors[v]}</span>}
            </label>
          </div>
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
              placeholder={v}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
      ))}
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
