import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let eventValue = event.target.value;
    if (eventValue.includes("<script>")) {
      setWarningText("No script tag allowed!");
      eventValue = eventValue.replace("<script>", "");
    } else if (eventValue.includes("@")) {
      setWarningText("No @ symbol allowed!");
      eventValue = eventValue.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(eventValue);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
