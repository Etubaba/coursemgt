import { EditorType } from "@/types";
import dynamic from "next/dynamic";
//dynamically import Component
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
import React, { useRef, useMemo } from "react";

const Editor = ({ onChange, value }: EditorType) => {
  const editor = useRef(null);
  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: "Post content here...",
    };
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      //   onBlur={onChange}
      onChange={onChange}
    />
  );
};

export default Editor;
