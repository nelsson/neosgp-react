import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import FormEditarBanner from "../FormEditarBanner";

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
}));

const ModalEditar = ({ open, handClose, getModalInfo }) => {

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
              <h2 className="card-title">Datos del Banner</h2>
              <FormEditarBanner
                onClose={handClose}
                data={getModalInfo}
              ></FormEditarBanner>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEditar;
