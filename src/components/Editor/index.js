import React, { Fragment, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import {} from "react";
import { Base64 } from "js-base64";

const EditorTemplate = () => {
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
      quill.on("text-change", (e) => {
        console.log("Text change!", e);
        console.log("quillRef", quillRef.current);

        var html = quillRef.current.children[0].innerHTML;
        const dataB = Base64.encode(html);
        const dataDecode = Base64.decode(dataB);
        //   console.log("html", html);
        //   console.log("html2", dataB);
        //   console.log("html3", dataDecode);
      });
    }
  }, [quill, quillRef]);

  return (
    <Fragment>
      <h2>Probando</h2>
      <div style={{ width: "100%", height: 300 }}>
        <div ref={quillRef} />
      </div>
    </Fragment>
  );
};

export default EditorTemplate;
