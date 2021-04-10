import React, {useState} from 'react';
import { Fragment } from 'react';
import ModalAddProyect from '../ModalAddProyect'

const OpenNewProyect = (active) => {

   const [open, setOpen] = useState(false);

   const handOpen = () => {
		setOpen(true);
	};

   const handClose = (status) => {
		setOpen(false);
	};
   return (
      <Fragment>
         <div className="btn_new_proyect">
            <button
               onClick={(e)=> { 
                  e.preventDefault();
                  handOpen() }} 
               className="btn btn-success btn-block"
            >New Project <i className="mdi mdi-plus"></i></button>
         </div>
         <ModalAddProyect 
            open={open}
            handClose={handClose}
            active={active}
         />
      </Fragment>
   );
}
 
export default OpenNewProyect;