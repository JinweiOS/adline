import style from "./helper.module.css";
import { FadArpchord, AkarIconsEdit } from "@/components/icon/icon";

function Helper() {
  return (
    <div className={style.layout}>
      <AkarIconsEdit></AkarIconsEdit>
      <FadArpchord></FadArpchord>
    </div>
  );
}

export default Helper;
