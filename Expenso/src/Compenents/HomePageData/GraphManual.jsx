import React from "react";
import LightRect from "./../../../Images/LightRect.png";
import DarkReact from "./../../../Images/DarkRect.png";

export const GraphManual = () => {
  return (
    <div>
      <div className="graphManual">
        <div className="graphGroup">
          <img
            src={LightRect}
            alt=""
            className="graphBlock1"
            style={{ width: "8em" }}
          />
          <img
            src={DarkReact}
            alt=""
            className="graphBlock1"
            style={{ width: "11em" }}
          />
        </div>
        <div className="graphGroup">
          <img
            src={LightRect}
            alt=""
            className="graphBlock1"
            style={{ width: "14em" }}
          />
          <img
            src={DarkReact}
            alt=""
            className="graphBlock1"
            style={{ width: "9em" }}
          />
        </div>
        <div className="graphGroup">
          <img
            src={LightRect}
            alt=""
            className="graphBlock1"
            style={{ width: "12em" }}
          />
          <img
            src={DarkReact}
            alt=""
            className="graphBlock1"
            style={{ width: "7em" }}
          />
        </div>

        <div className="graphGroup">
          <img
            src={LightRect}
            alt=""
            className="graphBlock1"
            style={{ width: "10em" }}
          />
          <img
            src={DarkReact}
            alt=""
            className="graphBlock1"
            style={{ width: "12em" }}
          />
        </div>
      </div>
    </div>
  );
};
