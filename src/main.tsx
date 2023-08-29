import React from "react";
import ReactDOM from "react-dom/client";
import AdLine from "./adline/adline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="play-ground">
      <AdLine />
    </div>
  </React.StrictMode>
);
