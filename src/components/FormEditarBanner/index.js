import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { LinearProgress } from "@material-ui/core";
import { routesApi } from "../../routesApi";

const FormEditarBanner = ({ data, onClose }) => {
  const idBanner = data ? data._id : "";

  const defaultValues = {
    title: data ? data.title : "",
    subtitle: data ? data.subtitle : "",
    textButton: data ? data.textButton : "",
    urlButton: data ? data.urlButton : "",
    image: "",
  };

  return (
    <Formik
      initialValues={defaultValues}
      validate={(values) => {
        const errors = {};
        if (values.title.trim() === "") {
          errors.title = "Campo Obligatorio";
        }

        if (values.subtitle.trim() === "") {
          errors.subtitle = "Campo Obligatorio";
        }

        if (values.textButton.trim() === "") {
          errors.textButton = "Campo Obligatorio";
        }

        if (values.urlButton.trim() === "") {
          errors.urlButton = "Campo Obligatorio";
        }
        if (Object.keys(errors).length > 0) return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let formData = new FormData();
        formData.append("title", values.title);
        formData.append("subtitle", values.subtitle);
        formData.append("textButton", values.textButton);
        formData.append("urlButton", values.urlButton);
        formData.append("image", values.image);

        fetch(`${routesApi.banner}/${idBanner}`, {
          method: "PUT",
          body: formData,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            onClose(true);
          });

        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      render={({ submitForm, isSubmitting, values, setFieldValue }) => (
        <Form className="formularyFormik" encType="multipart/form-data">
          <div>
            <Field
              fullWidth
              name="title"
              type="text"
              className="form-control"
              placeholder="Titulo"
              component={TextField}
            />
            <Field
              fullWidth
              name="subtitle"
              className="form-control"
              type="text"
              placeholder="Sub titulo"
              component={TextField}
            />
            <Field
              fullWidth
              name="textButton"
              className="form-control"
              type="text"
              placeholder="Texto de Boton"
              component={TextField}
            />
            <Field
              fullWidth
              name="urlButton"
              className="form-control"
              type="text"
              placeholder="Url boton"
              component={TextField}
            />
            <div>
              <input
                id="file"
                name="image"
                className="form-control"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
            </div>
          </div>

          {isSubmitting && <LinearProgress />}

          <button
            className="btn btn-sm btn-block btn-primary"
            type="submit"
            disabled={isSubmitting}
            onClick={() => submitForm}
          >
            Enviar
          </button>
        </Form>
      )}
    />
  );
};

export default FormEditarBanner;
