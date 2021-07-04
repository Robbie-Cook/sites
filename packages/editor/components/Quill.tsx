import React from "react";
import ReactQuill from "react-quill";

import showdown from "showdown";

const converter = new showdown.Converter();

const Quill: React.FC<{ onChange: Function; defaultValue: string }> = ({
  onChange,
  defaultValue,
}) => {
  return (
    <div>
      <ReactQuill
        defaultValue={converter.makeHtml(defaultValue)}
        onChange={(content) => {
          onChange(converter.makeMarkdown(content));
        }}
      />
    </div>
  );
};

export default React.memo(Quill);
