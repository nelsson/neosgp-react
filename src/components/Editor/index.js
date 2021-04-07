import React, { Fragment } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );



const Editor = () => {

   const [datos, setDatos] = [];
   console.log("🚀 ~ file: index.js ~ line 10 ~ Editor ~ datos", datos)


   //esta es mi funcion para recibir mis datos del editor
   const getInfoEditor = (datosEditor)=>{
      console.log('datos-->', datosEditor)
      setDatos(datosEditor)
   }

   return (
      <Fragment>
         <h2>Probando</h2>
         <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
               // You can store the "editor" and use when it is needed.
               console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
               const data = editor.getData();
               console.log( { event, editor, data } );
               getInfoEditor(data)
            } }
            onBlur={ ( event, editor ) => {
               console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
               console.log( 'Focus.', editor );
            } }
         />
      </Fragment>
   );
}
 
export default Editor;