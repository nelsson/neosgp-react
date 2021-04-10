import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
    width: '100%'
  }
}));

const ModalAddProyect = ({ open, handClose, active }) => {

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
              <h2 className="card-title">Agregar Nuevo Proyecto</h2>
              <div className="card_new_proyect">
              <form className="forms-sample">
                  <Form.Group>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Nombre del proyecto" size="lg" />
                  </Form.Group>
                  <div className={classes.wrapButons}>
                    <button type="button" className="btn btn-sm btn-primary mr-2">Crear</button>
                    <button type="button" onClick={handClose} className="btn btn-sm btn-light">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddProyect;
