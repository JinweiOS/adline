import { useState } from "react";
import style from "./adline.module.css";

function AdLine() {
  const [editable, setEdit] = useState(false);

  function changeEditState() {
    setEdit(true);
  }

  return (
    <div className={style.layout}>
      <div
        className={style.contentLine}
        suppressContentEditableWarning={true}
        contentEditable={editable}
        onClick={changeEditState}
      >
        test
        {editable.toString()}
      </div>
    </div>
  );
}

export default AdLine;
