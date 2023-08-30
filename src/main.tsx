import React from "react";
import ReactDOM from "react-dom/client";
import AdLine from "@/components/adline/adline";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="play-ground">
      <AdLine />
      <AdLine />
    </div>
  </React.StrictMode>
);
