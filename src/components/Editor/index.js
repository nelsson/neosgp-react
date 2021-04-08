import React, { Fragment, useEffect} from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import {  } from 'react';

const EditorTemplate = () => {
   const { quill, quillRef } = useQuill();
   useEffect(() => {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
      }
    }, [quill]);

   return (
      <Fragment>
         <h2>Probando</h2>
         <div style={{ width: '100%', height: 300 }}>
            <div ref={quillRef} />
         </div>
      </Fragment>
   );
}
 
export default EditorTemplate;