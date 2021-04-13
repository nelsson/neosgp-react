import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withFormik, Form, ErrorMessage, Field } from "formik";



function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  wrapButons:{
    textAlign: 'center',
    width: '100%',
    marginTop: '20px',
  },
  createProyect : {
    '& input':{
      width: '100%',
      border: 'none',
      height: '40px',
      padding: '0px 20px',
      boxSizing: 'border-box',
      border: '1px solid black',
      borderRadius: '5px',
    },
    '& .error_message':{
       color: 'red',
       marginTop: '4px'
    }
  },
  boxResult:{
    textAlign: 'center',
    '& h2': {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'black'
    },
    '& .card_btn_created': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      '& button': {
        marginBottom: '10px'
      }
    }
  }
}));

const ModalAddProyect = ({ open, handClose, createProject }) => {
  console.log("🚀 ~ file: index.js ~ line 65 ~ ModalAddProyect ~ createProject", createProject)

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={() => {
        handClose();
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        <div className="form_modal">
          <div className="card">
            <div className="card-body">
              {handClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={handClose}>
                  <CloseIcon />
                </IconButton>
              ) : null}
              <h2 className="card-title">{createProject ? 'Nuevo Proyecto' : 'Agregar Nuevo Proyecto'}</h2>
              <div className={classes.createProyect}>
                 {(createProject )? (
                     <div className={classes.boxResult}>
                        <p>Proyecto</p>
                        <h2>Los Portales</h2>
                        <p>Creado con Exito</p>
                        <div className="card_btn_created">
                        <button type="button" className="btn btn-inverse-light btn-sm">Agregar mas información del proyecto</button>
                        <button type="button" className="btn btn-inverse-light btn-sm">Agregar información después</button>
                        </div>
                     </div>
                 ) : (
                  <Form className="forms-sample">
                     <Field
                     name="name_project"
                     type="text"
                     className="input_add_proyect"
                     placeholder="Nombre del proyecto"
                     autoComplete="off"
                     />
                     <ErrorMessage name="name_project">
                     {(message) => (
                        <p className="error_message">{message}</p>
                     )}
                     </ErrorMessage>
                     <div className={classes.wrapButons}>
                     <button type="submit" className="btn btn-sm btn-primary mr-2">Crear</button>
                     <button type="button" onClick={handClose} className="btn btn-sm btn-light">Cancel</button>
                     </div>
                  </Form>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const formConfig = {
  validateOnBlur: false,
  validateOnChange: true,
  enableReinitialize: true,
  mapPropsToValues: () => {
    const values = {};
      values.name_project = '';
      values.user_id= '1';
    return values;
  },
  // handleSubmit(values, { setSubmitting, props:{listadoUser,getEditInfoPersonal} }) {
  handleSubmit(values, { setSubmitting,resetForm, props:{fetchCreateProject} }) {
    fetchCreateProject(values)
    setSubmitting(false);
    resetForm()
    
  },
  validate(values) {
    const errors = {};
    if (!values.name_project) errors.name_project = "Debería crear un poryecto";
    
    return errors;
  },
};


export default withFormik(formConfig)(ModalAddProyect);
